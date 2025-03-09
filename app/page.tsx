import { ProductSearch } from './components/ProductSearch';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4 py-8 md:py-12 flex flex-col min-h-screen">
        <header className="w-full max-w-3xl mx-auto text-center mb-6 md:mb-8">
          <h1 className="text-2xl md:text-3xl font-bold mb-2 text-slate-900 dark:text-white">
            Product Search
          </h1>
          <p className="text-sm md:text-base text-slate-600 dark:text-slate-300">
            Search for products by typing at least 3 characters
          </p>
        </header>
        
        <main className="w-full flex-1 max-w-3xl mx-auto">
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm p-4 md:p-6 border border-slate-200 dark:border-slate-700">
            <ProductSearch />
          </div>
        </main>
        
        <footer className="mt-8 py-4 text-center text-xs md:text-sm text-slate-500 dark:text-slate-400">
          <p>© 2025 Product Search App</p>
        </footer>
      </div>
    </div>
  );
}
