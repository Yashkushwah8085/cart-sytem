import React from 'react';
import { useSelector } from 'react-redux';
import { ShoppingCart, Store } from 'lucide-react';

const Navbar = ({ onCartClick }) => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <nav className="sticky top-0 z-50 glass shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center space-x-2">
            <Store className="w-8 h-8 text-primary-600" />
            <span className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-blue-600 bg-clip-text text-transparent">
              LuxeStore
            </span>
          </div>
          
          <div className="flex items-center">
            <button
              onClick={onCartClick}
              className="relative p-2 text-slate-600 hover:text-primary-600 transition-colors group"
            >
              <ShoppingCart className="w-7 h-7" />
              {totalQuantity > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-primary-500 rounded-full shadow-lg group-hover:scale-110 transition-transform">
                  {totalQuantity}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
