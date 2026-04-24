import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { Download, Calendar, Filter, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

const topSellers = [
  { name: 'Wagyu Burger', value: 450, color: '#1E90FF' },
  { name: 'Truffle Pasta', value: 380, color: '#1E90FF' },
  { name: 'Salmon Steak', value: 320, color: '#1E90FF' },
  { name: 'Caesar Salad', value: 290, color: '#1E90FF' },
  { name: 'Draft Beer', value: 250, color: '#1E90FF' },
];

export default function SalesReports() {
  return (
    <div className="space-y-6 pb-20">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-navy">Sales Analytics</h2>
        <button className="p-2.5 rounded-2xl bg-white border border-gray-100 text-primary shadow-sm hover:bg-gray-50 transition-colors">
          <Download size={18} />
        </button>
      </div>

      {/* Date Range Selector */}
      <div className="flex gap-2 overflow-x-auto no-scrollbar py-2">
        {['Daily', 'Weekly', 'Monthly', 'Yearly'].map((range, i) => (
          <button 
            key={range}
            className={cn(
              "px-5 py-2 rounded-2xl text-xs font-bold whitespace-nowrap transition-all",
              i === 1 ? "bg-primary text-white shadow-lg shadow-primary/20" : "bg-white text-gray-500 border border-gray-100"
            )}
          >
            {range}
          </button>
        ))}
      </div>

      {/* Primary Metric */}
      <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 relative overflow-hidden">
        <div className="relative z-10">
          <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Total Revenue</div>
          <div className="text-3xl font-black text-navy">$42,940.00</div>
          <p className="text-[10px] font-bold text-success mt-2 flex items-center gap-1">
            +8.4% compared to previous period
          </p>
        </div>
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      </div>

      {/* AI Summary */}
      <div className="bg-navy rounded-3xl p-6 text-white shadow-xl">
        <div className="flex items-center gap-2 mb-3">
          <Sparkles size={16} className="text-accent" />
          <span className="text-[10px] font-bold uppercase tracking-widest text-accent">Smart Summary</span>
        </div>
        <p className="text-sm font-medium leading-relaxed opacity-90">
          Your revenue is peaking during <span className="text-accent font-bold">Fri-Sat dinner service</span>. 
          Average ticket size has increased by <span className="text-success font-bold">12%</span> thanks to the 
          new premium starters. Staff efficiency is optimally aligned with current demand.
        </p>
      </div>

      {/* Top Sellers Chart */}
      <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
        <h3 className="font-bold text-navy mb-6">Top Selling Items</h3>
        <div className="h-64 w-full -ml-8">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={topSellers} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#F1F5F9" />
              <XAxis type="number" hide />
              <YAxis 
                dataKey="name" 
                type="category" 
                axisLine={false} 
                tickLine={false} 
                tick={{fontSize: 10, fill: '#64748B', fontWeight: 600}} 
                width={80}
              />
              <Tooltip 
                cursor={{fill: 'transparent'}}
                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
              />
              <Bar dataKey="value" radius={[0, 10, 10, 0]} barSize={20}>
                {topSellers.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} fillOpacity={0.8 - (index * 0.1)} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ');
}
