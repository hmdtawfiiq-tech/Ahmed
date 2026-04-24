import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Clock, ChevronRight, AlertTriangle, CheckCircle2, CookingPot, Truck } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { Order, OrderStatus } from '@/src/types';

const initialOrders: Order[] = [
  {
    id: 'ORD-552',
    tableNumber: 'Table 12',
    items: [{ name: 'Wagyu Burger', quantity: 2, price: 56 }, { name: 'Truffle Fries', quantity: 1, price: 12 }],
    total: 124,
    status: 'Cooking',
    timestamp: new Date(Date.now() - 1000 * 60 * 15),
    urgent: true
  },
  {
    id: 'ORD-553',
    tableNumber: 'Takeaway',
    items: [{ name: 'Margherita Pizza', quantity: 1, price: 18 }],
    total: 18,
    status: 'Ready',
    timestamp: new Date(Date.now() - 1000 * 60 * 5),
  },
  {
    id: 'ORD-554',
    tableNumber: 'Table 4',
    items: [{ name: 'Grilled Salmon', quantity: 3, price: 84 }, { name: 'White Wine', quantity: 1, price: 45 }],
    total: 129,
    status: 'Cooking',
    timestamp: new Date(Date.now() - 1000 * 60 * 22),
  },
  {
    id: 'ORD-551',
    tableNumber: 'Table 8',
    items: [{ name: 'Caesar Salad', quantity: 1, price: 14 }],
    total: 14,
    status: 'Delivered',
    timestamp: new Date(Date.now() - 1000 * 60 * 45),
  }
];

export default function LiveOrders() {
  const [orders, setOrders] = useState<Order[]>(initialOrders);

  const updateStatus = (id: string, currentStatus: OrderStatus) => {
    setOrders(prev => prev.map(order => {
      if (order.id === id) {
        let nextStatus: OrderStatus = 'Cooking';
        if (currentStatus === 'Cooking') nextStatus = 'Ready';
        if (currentStatus === 'Ready') nextStatus = 'Delivered';
        if (currentStatus === 'Delivered') nextStatus = 'Cooking';
        return { ...order, status: nextStatus };
      }
      return order;
    }));
  };

  const getStatusConfig = (status: OrderStatus) => {
    switch (status) {
      case 'Cooking': return { color: 'bg-accent text-white', icon: CookingPot, label: 'Cooking' };
      case 'Ready': return { color: 'bg-success text-white', icon: CheckCircle2, label: 'Ready' };
      case 'Delivered': return { color: 'bg-gray-200 text-gray-500', icon: Truck, label: 'Delivered' };
    }
  };

  return (
    <div className="space-y-6 pb-20">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-navy">Live Orders</h2>
        <div className="flex gap-2">
          <span className="px-3 py-1 bg-accent/10 text-accent text-[10px] font-bold rounded-full uppercase tracking-wider">
            {orders.filter(o => o.status === 'Cooking').length} Cooking
          </span>
          <span className="px-3 py-1 bg-success/10 text-success text-[10px] font-bold rounded-full uppercase tracking-wider">
            {orders.filter(o => o.status === 'Ready').length} Ready
          </span>
        </div>
      </div>

      <div className="space-y-4">
        <AnimatePresence mode="popLayout">
          {orders.map((order) => {
            const config = getStatusConfig(order.status);
            const timeDiff = Math.floor((Date.now() - order.timestamp.getTime()) / (1000 * 60));
            
            return (
              <motion.div
                key={order.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className={cn(
                  "bg-white rounded-3xl p-5 shadow-sm border transition-all active:scale-[0.98]",
                  order.urgent && order.status === 'Cooking' ? "border-accent/40 shadow-accent/5" : "border-gray-100"
                )}
                onClick={() => updateStatus(order.id, order.status)}
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-black text-navy">{order.id}</span>
                      {order.urgent && order.status === 'Cooking' && (
                        <span className="flex items-center gap-1 text-[10px] font-bold text-accent bg-accent/10 px-2 py-0.5 rounded-full uppercase tracking-tighter">
                          <AlertTriangle size={10} /> Urgent
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-bold text-navy/80">{order.tableNumber}</h3>
                  </div>
                  <div className={cn("px-4 py-2 rounded-2xl flex items-center gap-2 font-bold text-xs", config.color)}>
                    <config.icon size={14} />
                    {config.label}
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  {order.items.map((item, idx) => (
                    <div key={idx} className="flex justify-between text-sm">
                      <span className="text-gray-600 font-medium">
                        <span className="text-primary font-bold">{item.quantity}x</span> {item.name}
                      </span>
                      <span className="text-gray-400 font-mono text-xs">${item.price * item.quantity}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                  <div className="flex items-center gap-1.5 text-gray-400">
                    <Clock size={14} />
                    <span className={cn("text-xs font-bold", timeDiff > 20 ? "text-accent" : "")}>
                      {timeDiff}m ago
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-navy">${order.total}</span>
                    <ChevronRight size={16} className="text-gray-300" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}
