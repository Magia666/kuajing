import React from 'react';
import { Package, FileText, ShoppingCart, ClipboardCheck, Truck } from 'lucide-react';
import { cn } from '../lib/utils';

interface Stat {
  id: string;
  label: string;
  count: number;
  todayNew: number;
  icon: React.ElementType;
  bg: string;
}

const STATS: Stat[] = [
  { id: '1', label: '产品待审核', count: 20, todayNew: 22, icon: Package, bg: 'bg-[#40a9ff]' },
  { id: '2', label: '头程待审核', count: 6, todayNew: 6, icon: FileText, bg: 'bg-[#ff7875]' },
  { id: '3', label: '代发待审核', count: 4, todayNew: 1, icon: ShoppingCart, bg: 'bg-[#36cfc9]' },
  { id: '4', label: '换标待审核', count: 0, todayNew: 0, icon: ClipboardCheck, bg: 'bg-[#597ef7]' },
  { id: '5', label: '中转待审核', count: 0, todayNew: 0, icon: Truck, bg: 'bg-[#ffc53d]' },
];

export function StatCards() {
  return (
    <div className="grid grid-cols-5 gap-3 shrink-0">
      {STATS.map((stat) => (
        <div key={stat.id} className="bg-white p-5 rounded flex items-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className={cn("w-14 h-14 rounded-full flex items-center justify-center mr-4 shrink-0 shadow-sm", stat.bg)}>
            <stat.icon size={26} className="text-white" />
          </div>
          <div>
            <div className="text-gray-500 text-[13px] mb-1">{stat.label}</div>
            <div className="text-[28px] font-medium text-gray-800 leading-tight">{stat.count}</div>
            <div className="text-gray-400 text-xs mt-1 shrink-0 tracking-wide">今日新增: {stat.todayNew}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
