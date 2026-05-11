import React from 'react';
import { Package, FileText, ShoppingCart, RefreshCw, Truck } from 'lucide-react';
import { cn } from '../lib/utils';

interface Stat {
  id: string;
  label: string;
  count: number;
  todayNew: number;
  icon: React.ElementType;
  color: string;
  bg: string;
}

const STATS: Stat[] = [
  { id: '1', label: '产品待审核', count: 0, todayNew: 0, icon: Package, color: 'text-blue-500', bg: 'bg-blue-500' },
  { id: '2', label: '头程待审核', count: 0, todayNew: 0, icon: FileText, color: 'text-rose-500', bg: 'bg-rose-500' },
  { id: '3', label: '代发待审核', count: 3, todayNew: 0, icon: ShoppingCart, color: 'text-teal-500', bg: 'bg-teal-500' },
  { id: '4', label: '换标待审核', count: 0, todayNew: 0, icon: RefreshCw, color: 'text-indigo-500', bg: 'bg-indigo-500' },
  { id: '5', label: '中转待审核', count: 0, todayNew: 0, icon: Truck, color: 'text-amber-500', bg: 'bg-amber-500' },
];

export function StatCards() {
  return (
    <div className="grid grid-cols-5 gap-4 mb-6">
      {STATS.map((stat) => (
        <div key={stat.id} className="bg-white p-4 rounded-lg flex items-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className={cn("w-12 h-12 rounded-full flex items-center justify-center mr-4 shrink-0", stat.bg)}>
            <stat.icon size={22} className="text-white" />
          </div>
          <div>
            <div className="text-gray-500 text-xs mb-1">{stat.label}</div>
            <div className="text-2xl font-bold text-gray-800 leading-none">{stat.count}</div>
            <div className="text-gray-400 text-[10px] mt-1 shrink-0">今日新增: {stat.todayNew}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
