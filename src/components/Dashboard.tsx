import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp, ShoppingBag, DollarSign, Zap, AlertCircle } from 'lucide-react';
import { motion } from 'motion/react';

const data = [
  { name: 'Mon', sales: 4000 },
  { name: 'Tue', sales: 3000 },
  { name: 'Wed', sales: 5000 },
  { name: 'Thu', sales: 4500 },
  { name: 'Fri', sales: 6000 },
  { name: 'Sat', sales: 8500 },
  { name: 'Sun', sales: 7000 },
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Top Stats */}
      <div className="grid grid-cols-2 gap-4">
        <motion.div 
          whileHover={{ y: -2 }}
          className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-1"
        >
          <div className="text-gray-500 text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5">
            <DollarSign size={14} className="text-primary" />
            Today's Sales
          </div>
          <div className="text-2xl font-bold text-primary">$2,480.00</div>
          <div className="text-[10px] font-bold text-success flex items-center gap-1">
            <TrendingUp size={10} /> +12% vs yesterday
          </div>
        </motion.div>

        <motion.div 
          whileHover={{ y: -2 }}
          className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-1"
        >
          <div className="text-gray-500 text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5">
            <Zap size={14} className="text-success" />
            Daily Profit
          </div>
          <div className="text-2xl font-bold text-success">$1,120.50</div>
          <div className="text-[10px] font-bold text-success flex items-center gap-1">
             On track for monthly goal
          </div>
        </motion.div>
      </div>

      {/* Live Order Counter Card */}
      <div className="bg-primary rounded-3xl p-6 text-white shadow-xl relative overflow-hidden">
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-1">
            <ShoppingBag size={18} />
            <span className="text-xs font-bold uppercase tracking-widest opacity-80">Live Performance</span>
          </div>
          <div className="flex items-end gap-3">
            <span className="text-4xl font-black">14</span>
            <span className="text-lg font-medium opacity-90 pb-1">Active Orders</span>
          </div>
          <p className="text-xs mt-3 opacity-70 leading-relaxed font-medium">
            Average prep time: <span className="font-bold text-white">12 minutes</span>
          </p>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-48 h-48 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-32 h-32 bg-accent/20 rounded-full blur-2xl" />
      </div>

      {/* Graph Section */}
      <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="font-bold text-navy">Weekly Revenue</h3>
            <p className="text-xs text-gray-400">Apr 18 - Apr 24</p>
          </div>
          <select className="text-xs font-bold text-primary bg-primary/5 px-3 py-1.5 rounded-full border-none focus:ring-0">
            <option>Last 7 Days</option>
            <option>Last Month</option>
          </select>
        </div>
        
        <div className="h-48 w-full -ml-8">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#1E90FF" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#1E90FF" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
              <XAxis 
                dataKey="name" 
                axisLine={false} 
                tickLine={false} 
                tick={{fontSize: 10, fill: '#94A3B8', fontWeight: 600}} 
                dy={10}
              />
              <Tooltip 
                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                itemStyle={{ fontSize: '12px', fontWeight: 'bold' }}
              />
              <Area 
                type="monotone" 
                dataKey="sales" 
                stroke="#1E90FF" 
                strokeWidth={3} 
                fillOpacity={1} 
                fill="url(#colorSales)" 
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Smart Alert Cards */}
      <div className="space-y-3">
        <h3 className="text-sm font-bold text-navy px-1">AI Insights & Alerts</h3>
        
        <motion.div 
          whileTap={{ scale: 0.98 }}
          className="bg-accent/5 p-4 rounded-2xl border border-accent/10 flex items-start gap-4"
        >
          <div className="bg-accent/10 p-2 rounded-xl text-accent">
            <AlertCircle size={20} />
          </div>
          <div className="flex-1">
            <h4 className="text-xs font-bold text-accent uppercase tracking-wider mb-0.5">Inventory Alert</h4>
            <p className="text-sm text-navy/80 font-medium">Salmon stock is low (8kg left). Predictive analysis suggests you will run out by dinner rush.</p>
          </div>
        </motion.div>

        <motion.div 
          whileTap={{ scale: 0.98 }}
          className="bg-primary/5 p-4 rounded-2xl border border-primary/10 flex items-start gap-4"
        >
          <div className="bg-primary/10 p-2 rounded-xl text-primary">
            <TrendingUp size={20} />
          </div>
          <div className="flex-1">
            <h4 className="text-xs font-bold text-primary uppercase tracking-wider mb-0.5">Sales Optimization</h4>
            <p className="text-sm text-navy/80 font-medium">Pasta Carbonara sales are up 40% this week. Consider featuring it in tonight's billboard ad.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
