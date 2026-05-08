import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
  incrementQuantity, 
  decrementQuantity, 
  removeItem, 
  clearCart 
} from '../features/cart/cartSlice';
import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';

const Cart = ({ isOpen, onClose }) => {
  const { items, totalAmount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex justify-end">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />
      
      {/* Drawer */}
      <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col transform transition-transform duration-300">
        <div className="p-6 border-b flex justify-between items-center bg-slate-50">
          <h2 className="text-xl font-bold text-slate-800 flex items-center space-x-2">
            <ShoppingBag className="w-6 h-6 text-primary-600" />
            <span>Your Cart</span>
          </h2>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-slate-200 rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-slate-500" />
          </button>
        </div>

        <div className="flex-grow overflow-y-auto p-6 space-y-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-slate-400 space-y-4">
              <ShoppingBag className="w-20 h-20 opacity-20" />
              <p className="text-lg font-medium">Your cart is empty</p>
              <button 
                onClick={onClose}
                className="text-primary-600 font-semibold hover:underline"
              >
                Start Shopping
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex space-x-4 group">
                <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0 border border-slate-100">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-grow flex flex-col justify-between">
                  <div className="flex justify-between">
                    <h3 className="font-bold text-slate-800 text-sm line-clamp-1">{item.name}</h3>
                    <button 
                      onClick={() => dispatch(removeItem(item.id))}
                      className="text-slate-400 hover:text-red-500 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                  <p className="text-primary-600 font-bold">${item.price.toFixed(2)}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3 bg-slate-100 rounded-lg px-2 py-1">
                      <button 
                        onClick={() => dispatch(decrementQuantity(item.id))}
                        className="p-1 hover:text-primary-600 transition-colors"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="font-bold text-slate-700 min-w-[20px] text-center">{item.quantity}</span>
                      <button 
                        onClick={() => dispatch(incrementQuantity(item.id))}
                        className="p-1 hover:text-primary-600 transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="font-bold text-slate-800">${item.totalPrice.toFixed(2)}</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="p-6 bg-slate-50 border-t space-y-4">
            <div className="flex justify-between items-center text-lg font-bold">
              <span className="text-slate-600">Total</span>
              <span className="text-2xl text-slate-900">${totalAmount.toFixed(2)}</span>
            </div>
            <div className="flex space-x-3">
              <button 
                onClick={() => dispatch(clearCart())}
                className="flex-1 py-3 px-4 rounded-xl border border-slate-200 font-semibold text-slate-600 hover:bg-slate-100 transition-colors"
              >
                Clear
              </button>
              <button className="flex-[2] py-3 px-4 rounded-xl bg-primary-600 text-white font-bold hover:bg-primary-700 transition-colors shadow-lg shadow-primary-200">
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
