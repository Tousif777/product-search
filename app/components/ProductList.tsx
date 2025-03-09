"use client";

import { Product } from '../types';
import { ProductCard } from './ProductCard';
import { SearchX } from 'lucide-react';

interface ProductListProps {
  products: Product[];
  isLoading: boolean;
}

export function ProductList({ products, isLoading }: ProductListProps) {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="h-60 rounded-md border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800/50 animate-pulse overflow-hidden"
          >
            <div className="h-40 bg-slate-200 dark:bg-slate-700"></div>
            <div className="p-3 space-y-2">
              <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded w-3/4"></div>
              <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded w-1/2"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="text-center py-8">
        <SearchX className="h-8 w-8 text-slate-400 mx-auto mb-2" />
        <p className="text-sm text-slate-500 dark:text-slate-400">
          No products found
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
} 