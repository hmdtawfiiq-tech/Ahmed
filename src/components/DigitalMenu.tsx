import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Search, Plus, Filter, Star, Edit3, MoreVertical } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const categories = ['All', 'Main Course', 'Starters', 'Drinks', 'Desserts'];

const foodItems = [
  { id: '1', name: 'Wagyu Ribeye', price: 42, category: 'Main Course', rating: 4.8, image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&auto=format&fit=crop&q=60' },
  { id: '2', name: 'Truffle Mac x Cheese', price: 18, category: 'Main Course', rating: 4.5, image: 'https://images.unsplash.com/photo-1543353071-873f17a7a088?w=400&auto=format&fit=crop&q=60' },
  { id: '3', name: 'Gourmet Greek Salad', price: 14, category: 'Starters', rating: 4.2, image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&auto=format&fit=crop&q=60' },
  { id: '4', name: 'Passionfruit Mojito', price: 12, category: 'Drinks', rating: 4.9, image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=400&auto=format&fit=crop&q=60' },
];

export default function DigitalMenu() {
  const [activeTab, setActiveTab] = useState('All');

  return (
    <div className="space-y-6 pb-20">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-navy">Digital Menu</h2>
        <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white text-xs font-bold rounded-2xl shadow-lg shadow-primary/20">
          <Plus size={16} /> New Item
        </button>
      </div>

      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
        <input 
          type="text" 
          placeholder="Search menu..." 
          className="w-full bg-white border border-gray-100 rounded-2xl py-3.5 pl-12 pr-4 text-sm font-medium shadow-sm transition-all focus:ring-2 focus:ring-primary/10"
        />
      </div>

      <div className="flex gap-2 overflow-x-auto no-scrollbar py-2">
        {categories.map((cat) => (
          <button 
            key={cat}
            onClick={() => setActiveTab(cat)}
            className={cn(
              "px-5 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap",
              activeTab === cat ? "bg-primary text-white shadow-lg shadow-primary/20" : "bg-white text-gray-500 border border-gray-100"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4">
        {foodItems.filter(item => activeTab === 'All' || item.category === activeTab).map((item) => (
          <motion.div 
            key={item.id}
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm relative group"
          >
            <div className="h-32 w-full relative overflow-hidden">
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center gap-1 text-[10px] font-black text-navy shadow-sm">
                <Star size={10} className="fill-amber-400 text-amber-400" /> {item.rating}
              </div>
            </div>
            
            <div className="p-4">
              <div className="flex justify-between items-start mb-1">
                <h3 className="text-sm font-bold text-navy truncate flex-1">{item.name}</h3>
                <button className="text-gray-300 p-1">
                  <MoreVertical size={14} />
                </button>
              </div>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-3">{item.category}</p>
              
              <div className="flex items-center justify-between">
                <span className="text-lg font-black text-primary">${item.price}</span>
                <button className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                  <Edit3 size={14} />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
