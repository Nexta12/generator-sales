import { createRequire } from 'module';
import fs from 'fs';
import path from 'path';

// Use createRequire to resolve dependencies from the project root
const require = createRequire(import.meta.url);
const { createClient } = require('@supabase/supabase-js');

// Parse .env.local manually to get credentials if available
const envPath = path.resolve('.env.local');
let supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
let supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
let adminEmail = process.env.ADMIN_EMAIL || '';
let adminPassword = process.env.ADMIN_PASSWORD || '';

if (fs.existsSync(envPath)) {
  try {
    const content = fs.readFileSync(envPath, 'utf8');
    const lines = content.split('\n');
    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#')) continue;
      const parts = trimmed.split('=');
      if (parts.length >= 2) {
        const key = parts[0].trim();
        const val = parts.slice(1).join('=').trim().replace(/^['"]|['"]$/g, '');
        if (key === 'NEXT_PUBLIC_SUPABASE_URL') supabaseUrl = val;
        if (key === 'NEXT_PUBLIC_SUPABASE_ANON_KEY') supabaseAnonKey = val;
        if (key === 'ADMIN_EMAIL') adminEmail = val;
        if (key === 'ADMIN_PASSWORD') adminPassword = val;
      }
    }
  } catch (e) {
    console.error('Error reading .env.local:', e.message);
  }
}

if (!supabaseUrl || !supabaseAnonKey || !adminEmail || !adminPassword) {
  console.log('⚠️ Required environment variables (SUPABASE_URL, ANON_KEY, ADMIN_EMAIL, ADMIN_PASSWORD) not configured.');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

const products = [
  {
    name: 'Industrial Heavy Duty Diesel Generator 50KVA',
    price: 3500000,
    description: 'A powerful and reliable 50KVA diesel generator designed for heavy-duty industrial and commercial use. Features a robust engine, advanced noise reduction canopy, and automatic transfer switch (ATS) compatibility. Built for continuous power supply with fuel efficiency.',
    image_url: '/diesel_generator_1.jpg',
    details: {
      "_image2": "/diesel_generator_2.jpg",
      "_image3": "/diesel_generator_3.jpg",
      "Power Output": "50 KVA / 40 KW",
      "Engine Type": "4-Cylinder, Water-cooled Diesel",
      "Fuel Tank Capacity": "150 Liters",
      "Noise Level": "Super Silent (65 dB at 7 meters)"
    }
  }
];

async function seedProducts() {
  try {
    console.log(`🔐 Authenticating as admin (${adminEmail})...`);
    const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
      email: adminEmail,
      password: adminPassword,
    });

    if (authError) {
      console.error('❌ Authentication failed:', authError.message);
      console.error('👉 Make sure the admin user exists in your Supabase auth table.');
      process.exit(1);
    }

    console.log('✅ Authentication successful! Clearing products catalog...');
    const { error: deleteError } = await supabase
      .from('products')
      .delete()
      .neq('id', '00000000-0000-0000-0000-000000000000');

    if (deleteError) {
      console.error('❌ Failed to clear products:', deleteError.message);
      process.exit(1);
    }

    console.log('🌱 Seeding 6 Mitofavour catalog products...');
    const { error: insertError } = await supabase
      .from('products')
      .insert(products);

    if (insertError) {
      console.error('❌ Failed to insert products:', insertError.message);
      process.exit(1);
    }

    console.log('🚀 Successfully seeded 6 products into database!');
  } catch (err) {
    console.error('❌ Unexpected error seeding database:', err.message);
  }
}

seedProducts();
