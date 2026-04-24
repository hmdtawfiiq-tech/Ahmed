import React from 'react';
import { motion } from 'motion/react';
import { UserPlus, Shield, User, Mail, Phone, ChevronRight } from 'lucide-react';
import { Staff } from '@/src/types';
import { cn } from '@/src/lib/utils';

const staffMembers: Staff[] = [
  { id: '1', name: 'Chef Marco', role: 'Chef', status: 'Active', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Marco' },
  { id: '2', name: 'Waitress Elena', role: 'Waiter', status: 'Active', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Elena' },
  { id: '3', name: 'Chef Julian', role: 'Chef', status: 'Offline', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Julian' },
  { id: '4', name: 'Manager Sarah', role: 'Manager', status: 'Active', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah' },
  { id: '5', name: 'Waiter Tom', role: 'Waiter', status: 'Offline', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Tom' },
];

export default function StaffManagement() {
  return (
    <div className="space-y-6 pb-20">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-navy">Staff Directory</h2>
        <button className="w-10 h-10 rounded-2xl bg-primary text-white flex items-center justify-center shadow-lg shadow-primary/20">
          <UserPlus size={18} />
        </button>
      </div>

      <div className="flex gap-3">
        <div className="flex-1 bg-white p-4 rounded-3xl border border-gray-100 shadow-sm flex flex-col items-center">
           <div className="text-2xl font-black text-primary">12</div>
           <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Total Staff</span>
        </div>
        <div className="flex-1 bg-white p-4 rounded-3xl border border-gray-100 shadow-sm flex flex-col items-center">
           <div className="text-2xl font-black text-success">8</div>
           <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">On Duty</span>
        </div>
      </div>

      <div className="space-y-4">
        {staffMembers.map((member) => (
          <motion.div 
            key={member.id}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-4 rounded-3xl border border-gray-100 shadow-sm flex items-center gap-4 relative overflow-hidden"
          >
            <div className="relative">
              <img 
                src={member.avatar} 
                alt={member.name} 
                className="w-14 h-14 rounded-2xl bg-gray-50 object-cover"
                referrerPolicy="no-referrer"
              />
              <div className={cn(
                "absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-4 border-white",
                member.status === 'Active' ? "bg-success" : "bg-gray-300"
              )} />
            </div>
            
            <div className="flex-1">
              <h3 className="font-bold text-navy">{member.name}</h3>
              <div className="flex items-center gap-2 mt-0.5">
                <span className={cn(
                  "text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded-md",
                  member.role === 'Manager' ? "bg-primary/10 text-primary" : 
                  member.role === 'Chef' ? "bg-accent/10 text-accent" : "bg-gray-100 text-gray-500"
                )}>
                  {member.role}
                </span>
              </div>
            </div>
            
            <div className="flex gap-2">
              <button className="p-2 rounded-xl bg-gray-50 text-gray-400 hover:text-primary transition-colors">
                <Mail size={16} />
              </button>
              <button className="p-2 rounded-xl bg-gray-100 text-navy active:scale-95 transition-all">
                <Phone size={16} />
              </button>
            </div>
            
            {/* Role indicator background */}
            {member.role === 'Manager' && (
              <div className="absolute -top-6 -right-6 p-8 text-primary shadow-inner opacity-5">
                 <Shield size={64} />
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
