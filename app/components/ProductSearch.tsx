"use client";

import { ProductList } from './ProductList';
import { useProductSearch } from '../hooks';
import { Search, X } from 'lucide-react';

export function ProductSearch() {
  const {
    query,
    products,
    isLoading,
    error,
    handleInputChange,
    reset
  } = useProductSearch();

  return (
    <div className="w-full">
      <div className="flex flex-col space-y-4 md:space-y-6">
        <div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              value={query}
              onChange={handleInputChange}
              placeholder="Search products..."
              className="w-full pl-9 pr-9 py-2.5 rounded-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:focus:ring-blue-400 shadow-sm text-sm"
              aria-label="Search products"
            />
            {query && (
              <button 
                onClick={reset}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                aria-label="Clear search"
              >
                <X className="h-4 w-4" />
              </button>
            )}
            {isLoading && (
              <div className="absolute right-3 top-1/2 -translate-y-1/2">
                <div className="h-4 w-4 rounded-full border-2 border-blue-500 border-t-transparent animate-spin" />
              </div>
            )}
          </div>
          
          {query.length > 0 && query.length < 3 && (
            <p className="mt-1.5 text-xs text-amber-600 dark:text-amber-400">
              Type at least 3 characters to search
            </p>
          )}
        </div>

        {error && (
          <div className="bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 p-2.5 rounded-md border border-red-100 dark:border-red-800/30 text-sm">
            {error}
          </div>
        )}

        <ProductList products={products} isLoading={isLoading} />
      </div>
    </div>
  );
} 