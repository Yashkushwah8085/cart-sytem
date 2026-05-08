import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import Cart from './components/Cart';
import { products } from './data/products';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar onCartClick={() => setIsCartOpen(true)} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-extrabold text-slate-900 sm:text-5xl mb-4">
            Curated Collection
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Discover our handpicked selection of premium products designed for style and performance.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>

      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      
      <footer className="bg-white border-t border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center text-slate-500 text-sm">
          <p>&copy; 2026 LuxeStore. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
