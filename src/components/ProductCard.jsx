import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../features/cart/cartSlice';
import { Star, ShoppingBag } from 'lucide-react';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItem(product));
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group flex flex-col h-full border border-slate-100">
      <div className="relative overflow-hidden aspect-square">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-slate-700 shadow-sm">
          ${product.price.toFixed(2)}
        </div>
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex items-center space-x-1 mb-2">
          <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
          <span className="text-sm font-medium text-slate-600">
            {product.rating.rate} ({product.rating.count})
          </span>
        </div>
        
        <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-primary-600 transition-colors">
          {product.title}
        </h3>
        
        <p className="text-slate-500 text-sm line-clamp-2 mb-4 flex-grow">
          {product.description}
        </p>
        
        <button
          onClick={handleAddToCart}
          className="w-full bg-slate-900 text-white py-3 rounded-xl font-semibold flex items-center justify-center space-x-2 hover:bg-primary-600 transition-colors active:scale-95 duration-150"
        >
          <ShoppingBag className="w-5 h-5" />
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
