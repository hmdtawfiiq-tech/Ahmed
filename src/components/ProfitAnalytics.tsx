import React from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, Label } from 'recharts';
import { Target, TrendingDown, PieChart, Info, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

const profitData = [
  { name: 'Week 1', profit: 4200 },
  { name: 'Week 2', profit: 3800 },
  { name: 'Week 3', profit: 5400 },
  { name: 'Week 4', profit: 5000 },
];

export default function ProfitAnalytics() {
  return (
    <div className="space-y-6 pb-20">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-navy">Profit Analytics</h2>
        <div className="p-2.5 rounded-2xl bg-white border border-gray-100 text-gray-400">
          <Info size={18} />
        </div>
      </div>

      {/* Hero Profit Card */}
      <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex items-center justify-between">
        <div>
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1 block">Net Profit (Apr)</span>
          <div className="text-3xl font-black text-success">$22,540.50</div>
          <p className="text-[10px] font-bold text-success flex items-center gap-1 mt-1">
            <ArrowUpRight size={10} /> 12% margin optimized
          </p>
        </div>
        <div className="w-16 h-16 rounded-2xl bg-success/10 flex items-center justify-center text-success">
          <PieChart size={32} />
        </div>
      </div>

      {/* Breakdown Grid */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white p-5 rounded-3xl border border-gray-100 shadow-sm">
          <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Gross Revenue</h3>
          <div className="text-lg font-black text-primary">$42.9k</div>
          <div className="flex items-center gap-1 mt-1.5">
            <div className="w-full h-1 bg-gray-100 rounded-full overflow-hidden">
               <div className="w-[100%] h-full bg-primary" />
            </div>
          </div>
        </div>
        <div className="bg-white p-5 rounded-3xl border border-gray-100 shadow-sm">
          <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Total Costs</h3>
          <div className="text-lg font-black text-danger">$20.4k</div>
          <div className="flex items-center gap-1 mt-1.5">
            <div className="w-full h-1 bg-gray-100 rounded-full overflow-hidden">
               <div className="w-[47%] h-full bg-danger/60" />
            </div>
          </div>
        </div>
      </div>

      {/* Prediction Chart */}
      <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-bold text-navy">Profit Forecast</h3>
          <div className="flex bg-gray-50 p-0.5 rounded-xl">
             <button className="px-3 py-1 bg-white shadow-sm rounded-lg text-[10px] font-bold text-navy">Month</button>
             <button className="px-3 py-1 rounded-lg text-[10px] font-bold text-gray-400">Quarter</button>
          </div>
        </div>
        
        <div className="h-44 w-full -ml-8">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={profitData}>
              <defs>
                <linearGradient id="colorProfit" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10B981" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <XAxis 
                dataKey="name" 
                axisLine={false} 
                tickLine={false} 
                tick={{fontSize: 10, fill: '#94A3B8', fontWeight: 600}} 
                dy={10}
              />
              <Tooltip 
                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
              />
              <Area 
                type="monotone" 
                dataKey="profit" 
                stroke="#10B981" 
                strokeWidth={3} 
                fillOpacity={1} 
                fill="url(#colorProfit)" 
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Prediction Insight */}
        <div className="mt-6 flex items-start gap-4 p-4 bg-primary/5 rounded-2xl border border-primary/10">
          <Target className="text-primary mt-0.5" size={18} />
          <p className="text-xs font-medium text-navy/80 leading-relaxed">
            AI predicts a <span className="font-bold text-primary">15% increase</span> in next month's profit if beverage cross-selling remains high.
          </p>
        </div>
      </div>
    </div>
  );
}
