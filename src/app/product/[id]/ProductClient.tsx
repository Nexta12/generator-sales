'use client';

import { useState } from 'react';
import { Truck } from 'lucide-react';
import OrderForm from '@/components/OrderForm';
import Footer from '@/components/Footer';
import { Product } from '@/types';

export default function ProductClient({ product }: { product: Product }) {
  // Format price
  const priceDisplay = product.price 
    ? new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN', maximumFractionDigits: 0 }).format(product.price)
    : '₦185,000';

  // Gather all available product images
  const images = [
    product.image_url || '/diesel_generator_1.jpg',
    product.details?._image2 as string,
    product.details?._image3 as string,
  ].filter(Boolean) as string[];

  const [selectedImage, setSelectedImage] = useState(images[0] || '/diesel_generator_1.jpg');

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-amber-200">
      
      {/* Product Presentation Section */}
      <section className="bg-white border-b border-slate-200 py-10 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            
            {/* Product Images Gallery */}
            <div className="space-y-4">
              <div className="relative rounded-2xl overflow-hidden shadow-md border border-slate-200 bg-slate-100 aspect-square sm:aspect-[4/3] flex items-center justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={selectedImage} 
                  alt={product.name}
                  className="object-cover w-full h-full transition-all duration-300"
                  onError={(e) => {
                    e.currentTarget.src = 'https://placehold.co/800x600/e2e8f0/475569?text=Product+Image';
                  }}
                />
              </div>

              {/* Thumbnails if multiple images exist */}
              {images.length > 1 && (
                <div className="flex gap-3 overflow-x-auto pb-2">
                  {images.map((img, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setSelectedImage(img)}
                      className={`relative w-20 h-20 rounded-xl overflow-hidden border-2 shrink-0 transition-all ${
                        selectedImage === img
                          ? 'border-amber-500 ring-2 ring-amber-500/20'
                          : 'border-slate-200 hover:border-slate-300 opacity-70 hover:opacity-100'
                      }`}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img 
                        src={img} 
                        alt={`${product.name} view ${idx + 1}`} 
                        className="object-cover w-full h-full"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Details */}
            <div className="flex flex-col">
              {/* Product Name */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-4 capitalize">
                {product.name}
              </h1>

              {/* Product Price */}
              <div className="text-3xl sm:text-4xl font-black text-amber-600 mb-6">
                {priceDisplay}
              </div>

              {/* Payment Validates Order */}
              <div className="mb-8">
                <div className="inline-flex items-center gap-2.5 bg-emerald-50 border border-emerald-200 text-emerald-800 px-5 py-2.5 rounded-xl text-sm font-black uppercase tracking-wider shadow-sm">
                  <Truck className="w-5 h-5 text-emerald-600 shrink-0" />
                  Payment Validates Order
                </div>
              </div>

              {/* Product Description */}
              <div className="border-t border-slate-100 pt-6">
                <h2 className="text-xs uppercase font-bold text-slate-400 tracking-wider mb-3">Product Description</h2>
                <div className="text-slate-700 font-medium text-base sm:text-lg leading-relaxed whitespace-pre-wrap">
                  {product.description || (
                    <p>The <strong>{product.name}</strong> is a high-efficiency generator engineered to deliver maximum power and reliability for home, factory, and commercial use.</p>
                  )}
                </div>
              </div>

              {/* Order CTA Link */}
              <div className="mt-8 pt-4">
                <a 
                  href="#order-form" 
                  className="inline-flex items-center justify-center w-full sm:w-auto bg-yellow-400 hover:bg-yellow-500 text-slate-950 font-black text-base px-8 py-4 rounded-xl shadow-md transition-all active:scale-95 uppercase tracking-wide cursor-pointer"
                >
                  Place Order Now ↓
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Order Form Section */}
      <section id="order-form" className="py-14 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4">
          <OrderForm price={product.price} />
        </div>
      </section>

      <Footer />
    </div>
  );
}
