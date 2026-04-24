import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Calendar, ArrowRight, MousePointer2 } from 'lucide-react';

export default function AdsBillboard() {
  return (
    <div className="space-y-6 pb-20">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-navy">Marketing Center</h2>
      </div>

      {/* Main Promo Banner */}
      <motion.div 
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="relative bg-gradient-to-br from-primary to-blue-700 rounded-[2.5rem] p-8 text-white overflow-hidden shadow-2xl shadow-primary/30"
      >
        <div className="relative z-10 space-y-6">
          <div className="bg-white/20 w-fit px-3 py-1 rounded-full backdrop-blur-md text-[10px] font-black uppercase tracking-[0.2em]">
            Weekend Flash Event
          </div>
          <h3 className="text-4xl font-black leading-tight tracking-tight">
            20% OFF <br/> <span className="text-accent">ALL STARTERS</span>
          </h3>
          <p className="text-sm font-medium opacity-80 max-w-[200px]">
            Boost your early dinner rush with this automated highlight.
          </p>
          <button className="flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-2xl font-bold text-sm shadow-xl transition-transform active:scale-95">
            Launch Campaign <ArrowRight size={16} />
          </button>
        </div>
        
        {/* Abstract shapes */}
        <div className="absolute -top-12 -right-12 w-64 h-64 bg-accent/20 rounded-full blur-[80px]" />
        <div className="absolute bottom-0 right-0 p-8 opacity-20">
          <Sparkles size={120} strokeWidth={1} />
        </div>
      </motion.div>

      {/* Secondary Banners */}
      <div className="space-y-4">
        <div className="bg-accent rounded-3xl p-6 text-white flex items-center justify-between overflow-hidden relative">
          <div className="relative z-10">
            <h4 className="text-lg font-black leading-tight mb-2">Happy Hour <br/>Highlight</h4>
            <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest bg-black/10 w-fit px-2 py-0.5 rounded-md">
              <Calendar size={12} /> Tue - Wed
            </div>
          </div>
          <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center -rotate-12">
             <MousePointer2 size={32} />
          </div>
        </div>

        <div className="bg-navy rounded-3xl p-6 text-white flex items-center justify-between overflow-hidden relative">
          <div className="relative z-10">
            <h4 className="text-lg font-black leading-tight mb-2">Loyalty <br/>Program</h4>
            <p className="text-[10px] font-bold text-primary uppercase tracking-widest">Active: 1,240 Members</p>
          </div>
          <div className="w-20 h-20 rounded-full bg-primary/20 backdrop-blur-md flex items-center justify-center border border-white/10">
             <div className="text-2xl font-black text-primary italic">L</div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-3xl border border-gray-100 mt-4">
        <h3 className="font-bold text-navy mb-4">Live Ad Performance</h3>
        <div className="space-y-4">
          {[
            { label: 'Views', value: '12.4k', trend: '+12%', color: 'text-primary' },
            { label: 'Conversions', value: '840', trend: '+5%', color: 'text-success' },
          ].map((stat, i) => (
            <div key={i} className="flex items-center justify-between">
              <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">{stat.label}</div>
              <div className="flex items-center gap-3">
                <span className="text-sm font-black text-navy">{stat.value}</span>
                <span className={cn("text-[10px] font-bold", stat.color)}>{stat.trend}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ');
}
