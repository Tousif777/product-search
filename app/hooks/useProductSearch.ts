import { useState, useEffect, useRef, useCallback } from 'react';
import { Product } from '../types';

/**
 * A custom hook that provides debounced product search functionality
 * with caching to avoid redundant API calls
 * @param initialQuery Initial search query (optional)
 * @param options Configuration options
 * @returns Search state and handlers
 */
export function useProductSearch(
  initialQuery: string = '',
  options = {
    debounceMs: 300,
    minQueryLength: 3
  }
) {
  // State for the current input value and debounced search query
  const [inputValue, setInputValue] = useState(initialQuery);
  const [debouncedQuery, setDebouncedQuery] = useState(initialQuery);
  
  // Search results state
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Cache for previous search results to avoid redundant API calls
  const searchCache = useRef<Record<string, Product[]>>({});
  // Track the last executed search query
  const lastSearchedQuery = useRef<string>('');

  // Handle debouncing the input value
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(inputValue);
    }, options.debounceMs);

    return () => clearTimeout(timer);
  }, [inputValue, options.debounceMs]);

  // Handle the actual API search
  useEffect(() => {
    // Don't search if the query is too short
    if (debouncedQuery.length < options.minQueryLength) {
      setProducts([]);
      return;
    }

    // Don't search if the query is the same as the last executed search
    if (debouncedQuery === lastSearchedQuery.current) {
      return;
    }

    // Check if we have cached results for this query
    if (searchCache.current[debouncedQuery]) {
      setProducts(searchCache.current[debouncedQuery]);
      return;
    }

    // Set loading state
    setIsLoading(true);
    setError(null);

    // Update the last searched query
    lastSearchedQuery.current = debouncedQuery;

    // Fetch products from the API
    const fetchProducts = async () => {
      try {
        const response = await fetch(`/api/products/search?query=${encodeURIComponent(debouncedQuery)}`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }

        const data = await response.json();
        
        // Cache the results
        searchCache.current[debouncedQuery] = data.products;
        
        // Only update state if this is still the latest query
        if (debouncedQuery === lastSearchedQuery.current) {
          setProducts(data.products);
        }
      } catch (err) {
        setError('An error occurred while searching for products');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, [debouncedQuery, options.minQueryLength]);

  // Input change handler
  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  }, []);

  // Reset function
  const reset = useCallback(() => {
    setInputValue('');
    setProducts([]);
    setError(null);
  }, []);

  return {
    // State
    query: inputValue,
    debouncedQuery,
    products,
    isLoading,
    error,
    
    // Handlers
    handleInputChange,
    setQuery: setInputValue,
    reset
  };
} 