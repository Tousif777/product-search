"use client";

import { Product } from '../types';
import Image from 'next/image';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="rounded-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 overflow-hidden shadow-sm hover:shadow transition-all duration-200 h-full flex flex-col">
      {product.imageUrl ? (
        <div className="relative h-40 w-full overflow-hidden bg-slate-100 dark:bg-slate-700">
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>
      ) : (
        <div className="h-40 w-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center">
          <svg className="h-10 w-10 text-slate-300 dark:text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
      )}
      
      <div className="p-3 flex-1 flex flex-col">
        <h3 className="text-base font-medium text-slate-900 dark:text-slate-100 mb-1 line-clamp-1">{product.name}</h3>
        
        {product.description && (
          <p className="text-xs text-slate-500 dark:text-slate-400 mb-2 line-clamp-2 flex-1">
            {product.description}
          </p>
        )}
        
        {product.price && (
          <p className="text-sm text-blue-600 dark:text-blue-400 font-medium mt-auto">
            ${Number(product.price).toFixed(2)}
          </p>
        )}
      </div>
    </div>
  );
} 