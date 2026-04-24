import React from 'react';
import { motion } from 'motion/react';
import { Bell, ShoppingBag, AlertTriangle, MessageSquare, Clock, CheckCircle2 } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const notifications = [
  { id: 1, type: 'order', title: 'New Order Received', desc: 'Table 14 just ordered 3x Wagyu Ribeye.', time: '2m ago', icon: ShoppingBag, color: 'text-primary', bg: 'bg-primary/10' },
  { id: 2, type: 'alert', title: 'Stock Critical', desc: 'Salmon stock is below 5kg. Reordering recommended.', time: '15m ago', icon: AlertTriangle, color: 'text-accent', bg: 'bg-accent/10' },
  { id: 3, type: 'staff', title: 'Staff Check-in', desc: 'Chef Marco has just signed in for the evening shift.', time: '1h ago', icon: Clock, color: 'text-success', bg: 'bg-success/10' },
  { id: 4, type: 'review', title: 'New 5-Star Review', desc: "A guest left a compliment: 'Best service in town!'", time: '2h ago', icon: MessageSquare, color: 'text-indigo-500', bg: 'bg-indigo-100' },
];

export default function Notifications() {
  return (
    <div className="space-y-6 pb-20">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-navy">Notifications</h2>
        <button className="text-[10px] font-bold text-primary uppercase tracking-widest px-3 py-1 bg-primary/5 rounded-full">Mark all read</button>
      </div>

      <div className="space-y-3">
        {notifications.map((note) => (
          <motion.div 
            key={note.id}
            whileHover={{ x: 5 }}
            className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-4 transition-all"
          >
            <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center shrink-0", note.bg, note.color)}>
              <note.icon size={20} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-start mb-0.5">
                <h3 className="text-sm font-bold text-navy truncate">{note.title}</h3>
                <span className="text-[10px] font-medium text-gray-400 whitespace-nowrap ml-2">{note.time}</span>
              </div>
              <p className="text-xs text-gray-400 font-medium leading-relaxed">{note.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="pt-4">
        <h3 className="text-[10px] font-black text-gray-300 uppercase tracking-[0.2em] mb-4 text-center">Earlier This Week</h3>
        <div className="space-y-3 opacity-60 grayscale">
          <div className="bg-white p-4 rounded-2xl border border-gray-100 flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center text-gray-400">
              <CheckCircle2 size={20} />
            </div>
            <div>
              <h3 className="text-sm font-bold text-navy">Payroll Processed</h3>
              <p className="text-[10px] font-medium text-gray-400 uppercase tracking-wider">Yesterday • 5:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
