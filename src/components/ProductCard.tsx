'use client';

import { Product } from '@/types';
import { Truck } from 'lucide-react';
import Link from 'next/link';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const currencySymbol = process.env.NEXT_PUBLIC_CURRENCY_SYMBOL || '₦';

  // Format price with commas
  const formattedPrice = new Intl.NumberFormat().format(product.price);

  return (
    <Link
      href={`/product/${product.id}`}
      className="group relative cursor-pointer overflow-hidden rounded-2xl border border-slate-200 bg-white hover:bg-slate-50 p-4 transition-all duration-300 hover:border-amber-300 hover:shadow-lg flex flex-col h-full"
    >
      {/* Product Image */}
      <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-slate-50 border border-slate-100">
        {product.image_url ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={product.image_url}
            alt={product.name}
            className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
            loading="lazy"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center text-slate-400 gap-2">
            <span className="text-[10px] uppercase tracking-widest font-bold">No Image</span>
          </div>
        )}
      </div>

      {/* Info Section */}
      <div className="mt-5 flex flex-col flex-grow">
        {/* Product Name */}
        <h3 className="font-sans text-base font-black text-slate-900 group-hover:text-amber-600 transition-colors duration-300 line-clamp-1">
          {product.name}
        </h3>
        
        {/* Product Description */}
        <p className="mt-1 text-xs text-slate-500 line-clamp-2 flex-grow leading-relaxed">
          {product.description || 'No description available.'}
        </p>

        {/* Payment Validates Order */}
        <div className="mt-3">
          <span className="inline-flex items-center gap-1.5 text-emerald-800 bg-emerald-50 border border-emerald-200 text-[11px] font-bold px-2.5 py-1 rounded-lg">
            <Truck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            Payment Validates Order
          </span>
        </div>

        {/* Bottom Section: Product Price */}
        <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3">
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="text-[9px] uppercase tracking-wider text-slate-400 font-bold">Price</span>
            </div>
            <span className="font-sans text-base font-black text-slate-900">
              {currencySymbol}{formattedPrice}
            </span>
          </div>
          
          <span className="rounded-xl bg-yellow-400 px-4 py-2.5 text-xs font-black text-slate-950 group-hover:bg-yellow-500 transition-all duration-300 shadow-sm">
            View Details
          </span>
        </div>
      </div>
    </Link>
  );
}
