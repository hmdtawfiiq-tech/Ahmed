import React from 'react';
import { motion } from 'motion/react';
import { Search, Plus, Filter, AlertTriangle, ArrowRight } from 'lucide-react';
import { InventoryItem } from '@/src/types';
import { cn } from '@/src/lib/utils';

const inventoryItems: InventoryItem[] = [
  { id: '1', name: 'Premium Wagyu Beef', stock: 12, unit: 'kg', minStock: 15 },
  { id: '2', name: 'Italian Truffle Oil', stock: 5, unit: 'L', minStock: 2 },
  { id: '3', name: 'Organic Roma Tomatoes', stock: 45, unit: 'kg', minStock: 20 },
  { id: '4', name: 'Champagne Laurent', stock: 8, unit: 'pcs', minStock: 10 },
  { id: '5', name: 'Gourmet Sea Salt', stock: 2, unit: 'kg', minStock: 5 },
  { id: '6', name: 'Arborio Rice', stock: 60, unit: 'kg', minStock: 30 },
];

export default function Inventory() {
  return (
    <div className="space-y-6 pb-20">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-navy">Inventory</h2>
        <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white text-xs font-bold rounded-2xl shadow-lg shadow-primary/20 transition-transform active:scale-95">
          <Plus size={16} /> Add Item
        </button>
      </div>

      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
        <input 
          type="text" 
          placeholder="Search ingredients..." 
          className="w-full bg-white border border-gray-100 rounded-2xl py-3.5 pl-12 pr-4 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all shadow-sm"
        />
      </div>

      {/* Stats row */}
      <div className="flex gap-4">
        <div className="flex-1 bg-accent/5 border border-accent/10 rounded-2xl p-4">
          <div className="text-[10px] font-bold text-accent uppercase tracking-widest mb-1">Low Stock</div>
          <div className="text-xl font-black text-navy">3 Items</div>
        </div>
        <div className="flex-1 bg-primary/5 border border-primary/10 rounded-2xl p-4">
          <div className="text-[10px] font-bold text-primary uppercase tracking-widest mb-1">Total Items</div>
          <div className="text-xl font-black text-navy">124</div>
        </div>
      </div>

      {/* Inventory List */}
      <div className="space-y-4">
        {inventoryItems.map((item) => {
          const isLow = item.stock <= item.minStock;
          const percentage = Math.min((item.stock / (item.minStock * 2)) * 100, 100);
          
          return (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-5 rounded-3xl border border-gray-100 shadow-sm flex items-center justify-between gap-4"
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-bold text-navy truncate">{item.name}</h3>
                  {isLow && (
                    <AlertTriangle size={14} className="text-accent" />
                  )}
                </div>
                
                <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden mb-1.5">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${percentage}%` }}
                    className={cn(
                      "h-full rounded-full transition-all duration-1000",
                      isLow ? "bg-accent" : "bg-primary"
                    )}
                  />
                </div>
                
                <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-wider">
                  <span className={isLow ? "text-accent" : "text-gray-400"}>
                    {item.stock} {item.unit} available
                  </span>
                  <span className="text-gray-300">Min: {item.minStock} {item.unit}</span>
                </div>
              </div>
              
              <button className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-300 hover:bg-primary/10 hover:text-primary transition-colors">
                <Plus size={18} />
              </button>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
