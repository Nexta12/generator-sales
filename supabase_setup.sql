-- ==========================================
-- SUPABASE DATABASE SETUP SCHEMA
-- Copy and run this in your Supabase SQL Editor
-- ==========================================

-- 1. Create the products table
create table if not exists public.products (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  price numeric not null,
  description text,
  image_url text,
  details jsonb default '{}'::jsonb,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 2. Enable Row Level Security (RLS) on products table
alter table public.products enable row level security;

-- 3. Create policies for public.products table
-- Policy A: Allow anyone (unauthenticated) to view products
create policy "Allow public read access"
  on public.products
  for select
  using (true);

-- Policy B: Allow only authenticated users (admin) to insert, update, and delete
create policy "Allow authenticated admin full access"
  on public.products
  for all
  using (auth.role() = 'authenticated')
  with check (auth.role() = 'authenticated');


-- ==========================================
-- SUPABASE STORAGE BUCKET SETUP
-- ==========================================
-- Follow these steps in the Supabase Dashboard:
-- 1. Navigate to "Storage" in the left sidebar.
-- 2. Click "New bucket".
-- 3. Name the bucket "product-images".
-- 4. Toggle "Public bucket" to ON (this allows public URLs to display the images).
-- 5. Click "Save".
--
-- After creating the bucket, run the SQL policies below to allow uploads:

-- Allow public read access to storage objects
create policy "Allow public read storage"
  on storage.objects for select
  using (bucket_id = 'product-images');

-- Allow authenticated users to upload and manage storage files
create policy "Allow admin to upload storage"
  on storage.objects for insert
  with check (bucket_id = 'product-images' and auth.role() = 'authenticated');

create policy "Allow admin to update storage"
  on storage.objects for update
  using (bucket_id = 'product-images' and auth.role() = 'authenticated')
  with check (bucket_id = 'product-images' and auth.role() = 'authenticated');

create policy "Allow admin to delete storage"
  on storage.objects for delete
  using (bucket_id = 'product-images' and auth.role() = 'authenticated');


-- ==========================================
-- INITIALIZE ADMIN USER (Udeze Ernest)
-- ==========================================
-- Run this block to create the admin user if it does not already exist.
-- It will insert the user into auth.users and auth.identities, bypassing email verification.

CREATE EXTENSION IF NOT EXISTS "pgcrypto";

DO $$ 
DECLARE 
  v_user_id UUID := gen_random_uuid();
  v_encrypted_pw TEXT;
BEGIN 
  -- Generate bcrypt hash for password (replace 'your_password' with your desired password)
  v_encrypted_pw := crypt('your_password', gen_salt('bf'));

  -- 1. Check if user already exists (replace 'admin@example.com' with your email)
  IF NOT EXISTS (SELECT 1 FROM auth.users WHERE email = 'admin@example.com') THEN
    
    -- 2. Insert into auth.users
    INSERT INTO auth.users (
      id, 
      instance_id,
      email, 
      encrypted_password, 
      email_confirmed_at, 
      raw_app_meta_data, 
      raw_user_meta_data, 
      aud, 
      role,
      created_at,
      updated_at
    )
    VALUES (
      v_user_id, 
      '00000000-0000-0000-0000-000000000000',
      'admin@example.com', 
      v_encrypted_pw, 
      NOW(), 
      '{"provider":"email","providers":["email"]}', 
      '{"name":"Super Admin"}', 
      'authenticated', 
      'authenticated',
      NOW(),
      NOW()
    );

    -- 3. Insert into auth.identities
    INSERT INTO auth.identities (
      id, 
      user_id, 
      provider_id, 
      provider, 
      identity_data,
      created_at,
      updated_at
    )
    VALUES (
      gen_random_uuid(), 
      v_user_id, 
      v_user_id::text, 
      'email', 
      format('{"sub":"%s","email":"%s"}', v_user_id, 'admin@example.com')::jsonb,
      NOW(),
      NOW()
    );

    RAISE NOTICE 'Admin user created successfully.';
  ELSE
    RAISE NOTICE 'User with that email already exists.';
  END IF;
END $$;


-- ==========================================
-- SEED INITIAL PRODUCTS (Diesel Generator)
-- ==========================================
-- Seed 1 Diesel Generator Product

INSERT INTO public.products (name, price, description, image_url, details)
SELECT 
  'Industrial Heavy Duty Diesel Generator 50KVA',
  3500000,
  'A powerful and reliable 50KVA diesel generator designed for heavy-duty industrial and commercial use. Features a robust engine, advanced noise reduction canopy, and automatic transfer switch (ATS) compatibility. Built for continuous power supply with fuel efficiency.',
  '/diesel_generator_1.jpg',
  '{"_image2": "/diesel_generator_2.jpg", "_image3": "/diesel_generator_3.jpg", "Power Output": "50 KVA / 40 KW", "Engine Type": "4-Cylinder, Water-cooled Diesel", "Fuel Tank Capacity": "150 Liters", "Noise Level": "Super Silent (65 dB at 7 meters)"}'::jsonb
WHERE NOT EXISTS (
  SELECT 1 FROM public.products WHERE name = 'Industrial Heavy Duty Diesel Generator 50KVA'
);
