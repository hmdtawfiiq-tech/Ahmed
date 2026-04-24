import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  ListOrdered, 
  BarChart3, 
  Package, 
  Wallet, 
  PieChart, 
  UtensilsCrossed, 
  Megaphone, 
  Bell, 
  Users 
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/src/lib/utils';
import Dashboard from '@/src/components/Dashboard';
import LiveOrders from '@/src/components/LiveOrders';
import SalesReports from '@/src/components/SalesReports';
import Inventory from '@/src/components/Inventory';
import Expenses from '@/src/components/Expenses';
import ProfitAnalytics from '@/src/components/ProfitAnalytics';
import DigitalMenu from '@/src/components/DigitalMenu';
import AdsBillboard from '@/src/components/AdsBillboard';
import Notifications from '@/src/components/Notifications';
import StaffManagement from '@/src/components/StaffManagement';

type Screen = 
  | 'dashboard' 
  | 'orders' 
  | 'reports' 
  | 'inventory' 
  | 'expenses' 
  | 'profit' 
  | 'menu' 
  | 'ads' 
  | 'notifications' 
  | 'staff';

export default function App() {
  const [activeScreen, setActiveScreen] = useState<Screen>('dashboard');

  const renderScreen = () => {
    switch (activeScreen) {
      case 'dashboard': return <Dashboard />;
      case 'orders': return <LiveOrders />;
      case 'reports': return <SalesReports />;
      case 'inventory': return <Inventory />;
      case 'expenses': return <Expenses />;
      case 'profit': return <ProfitAnalytics />;
      case 'menu': return <DigitalMenu />;
      case 'ads': return <AdsBillboard />;
      case 'notifications': return <Notifications />;
      case 'staff': return <StaffManagement />;
      default: return <Dashboard />;
    }
  };

  const navItems = [
    { id: 'dashboard', icon: LayoutDashboard, label: 'Home' },
    { id: 'orders', icon: ListOrdered, label: 'Orders' },
    { id: 'reports', icon: BarChart3, label: 'Reports' },
    { id: 'inventory', icon: Package, label: 'Stock' },
    { id: 'menu', icon: UtensilsCrossed, label: 'Menu' },
  ];

  const moreItems = [
    { id: 'expenses', icon: Wallet, label: 'Finance' },
    { id: 'profit', icon: PieChart, label: 'Profit' },
    { id: 'ads', icon: Megaphone, label: 'Marketing' },
    { id: 'notifications', icon: Bell, label: 'Alerts' },
    { id: 'staff', icon: Users, label: 'Staff' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-surface">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md px-6 py-4 flex items-center justify-between border-b border-gray-100">
        <div>
          <h1 className="text-xl font-bold text-navy tracking-tight">Smart Manager</h1>
          <p className="text-xs text-gray-500 font-medium uppercase tracking-widest">Resto Horizon</p>
        </div>
        <div className="flex gap-4">
          <button 
            onClick={() => setActiveScreen('notifications')}
            className={cn(
              "p-2 rounded-full transition-colors relative",
              activeScreen === 'notifications' ? "bg-primary/10 text-primary" : "bg-gray-100 text-navy"
            )}
          >
            <Bell size={20} />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-accent rounded-full border-2 border-white" />
          </button>
          <button 
            onClick={() => setActiveScreen('staff')}
            className={cn(
              "w-10 h-10 rounded-full overflow-hidden border-2 transition-transform active:scale-95",
              activeScreen === 'staff' ? "border-primary" : "border-gray-200"
            )}
          >
            <img 
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Manager" 
              alt="Profile"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </button>
        </div>
      </header>

      {/* Content */}
      <main className="flex-1 overflow-x-hidden pt-4 pb-32">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeScreen}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="px-6"
          >
            {renderScreen()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-100 px-4 pt-3 pb-8 flex justify-around items-center shadow-[0_-8px_30px_rgb(0,0,0,0.04)]">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveScreen(item.id as Screen)}
            className={cn(
              "flex flex-col items-center gap-1 min-w-[64px] transition-all",
              activeScreen === item.id ? "text-primary scale-110" : "text-gray-400"
            )}
          >
            <item.icon size={22} strokeWidth={activeScreen === item.id ? 2.5 : 2} />
            <span className={cn("text-[10px] font-semibold uppercase tracking-wider", activeScreen === item.id ? "opacity-100" : "opacity-60")}>
              {item.label}
            </span>
          </button>
        ))}
        
        {/* Toggle for more menu items if needed, or just list primary ones */}
        <button
          onClick={() => {
            // Simplified: cycle through some more items or open a modal
            // For now let's just make everything accessible
          }}
          className="flex flex-col items-center gap-1 min-w-[64px] text-gray-400 opacity-50"
        >
          <div className="w-2 h-2 rounded-full bg-gray-300 mb-1" />
          <div className="w-2 h-2 rounded-full bg-gray-300 mb-1" />
          <div className="w-2 h-2 rounded-full bg-gray-300" />
        </button>
      </nav>
      
      {/* Secondary Quick Nav for more features */}
      <div className="fixed bottom-24 left-1/2 -translate-x-1/2 flex gap-3 px-6 py-3 bg-navy/90 backdrop-blur-md rounded-full text-white shadow-xl z-40 border border-white/10">
        {moreItems.filter(item => !navItems.find(ni => ni.id === item.id)).map(item => (
          <button
            key={item.id}
            onClick={() => setActiveScreen(item.id as Screen)}
            className={cn(
              "p-2 rounded-full transition-all active:scale-95",
              activeScreen === item.id ? "bg-primary text-white" : "hover:bg-white/10"
            )}
          >
            <item.icon size={18} />
          </button>
        ))}
      </div>
    </div>
  );
}
