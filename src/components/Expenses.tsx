import React from 'react';
import { 
  Wallet, 
  Lightbulb, 
  Users2, 
  Home, 
  Plus, 
  TrendingUp, 
  ArrowUpRight,
  ChevronRight
} from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';

const categories = [
  { name: 'Salaries', amount: 12400, icon: Users2, color: 'text-primary', bg: 'bg-primary/10' },
  { name: 'Rent', amount: 4500, icon: Home, color: 'text-indigo-500', bg: 'bg-indigo-100' },
  { name: 'Electricity', amount: 1200, icon: Lightbulb, color: 'text-amber-500', bg: 'bg-amber-100' },
  { name: 'Others', amount: 2300, icon: Wallet, color: 'text-gray-500', bg: 'bg-gray-200' },
];

export default function Expenses() {
  return (
    <div className="space-y-6 pb-20">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-navy">Expenses</h2>
        <button className="w-10 h-10 rounded-2xl bg-white border border-gray-100 flex items-center justify-center text-primary shadow-sm">
          <Plus size={20} />
        </button>
      </div>

      {/* Main Card */}
      <div className="bg-navy rounded-3xl p-6 text-white shadow-xl relative overflow-hidden">
        <div className="relative z-10 flex flex-col items-center py-4">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-60 mb-2">Total Outflow</span>
          <div className="text-4xl font-black mb-1">$20,400.00</div>
          <div className="flex items-center gap-1.5 px-3 py-1 bg-white/10 rounded-full text-[10px] font-bold uppercase tracking-wider">
            <TrendingUp size={12} strokeWidth={3} className="text-danger" /> +4% this month
          </div>
        </div>
        <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-2 gap-4">
        {categories.map((cat) => (
          <motion.div 
            key={cat.name}
            whileTap={{ scale: 0.98 }}
            className="bg-white p-5 rounded-3xl border border-gray-100 shadow-sm"
          >
            <div className={cn("w-10 h-10 rounded-2xl flex items-center justify-center mb-4 shadow-sm", cat.bg, cat.color)}>
              <cat.icon size={20} />
            </div>
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">{cat.name}</h3>
            <div className="text-lg font-black text-navy">${cat.amount.toLocaleString()}</div>
          </motion.div>
        ))}
      </div>

      {/* Recent Transactions List */}
      <div className="space-y-4">
        <div className="flex items-center justify-between px-1">
          <h3 className="text-sm font-bold text-navy">Recent Billings</h3>
          <button className="text-[10px] font-bold text-primary uppercase tracking-widest">View All</button>
        </div>
        
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
          {[
            { name: 'City Power & Light', date: 'Apr 22, 2024', amount: 840, cat: 'Electricity' },
            { name: 'Payroll Week 16', date: 'Apr 19, 2024', amount: 3100, cat: 'Salaries' },
            { name: 'Horizon Property Mgmt', date: 'Apr 15, 2024', amount: 4500, cat: 'Rent' },
          ].map((bill, i) => (
            <div key={i} className={cn("p-4 flex items-center justify-between", i !== 2 && "border-b border-gray-50")}>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400">
                  <ArrowUpRight size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-navy truncate max-w-[120px]">{bill.name}</h4>
                  <p className="text-[10px] font-medium text-gray-400 uppercase tracking-wider">{bill.date}</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm font-black text-navy">-${bill.amount}</div>
                <div className="text-[10px] font-bold text-primary/60 uppercase tracking-tighter">{bill.cat}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
