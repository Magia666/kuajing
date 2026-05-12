import React, { useState } from 'react';
import { 
  Bike,
  UserCheck,
  CircleDollarSign,
  PackageSearch,
  LayoutGrid
} from 'lucide-react';
import { cn } from '../lib/utils';

const AmazonIcon = ({ size, className }: { size: number, className?: string }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M14.9 14.3c-1.3 1.1-3 1.7-4.6 1.7-2.6 0-4.4-1.2-5.4-2.2-.6-.6-.1-1.2.6-.7 1.5 1 3.5 1.5 5.2 1.5 1.5 0 2.9-.4 4.1-1.2.4-.2.9.2.6.5-.1.1-.3.3-.5.4zM20.6 16.5c-1.3 2.5-4 4.1-7.2 4.1-4 0-7.3-2.3-8.8-5.6-.2-.4.4-.7.6-.3 1.3 2.9 4.2 4.8 7.7 4.8 2.8 0 5.1-1.3 6.3-3.3.3-.4 1-.2.8.4-.1.1-.4.5-.6.7l.6.5c.3.3.1.6-.2.6l-2-.1c-.3 0-.4-.3-.2-.5l.8-1-.8-.4z" />
    <path d="M12.9 6.2c-2.4 0-4.6 1.1-5.7 2.8-.2.3.2.7.5.4 1-1.5 2.9-2.2 4.7-2.2 2 0 3.8.9 4.8 2.3.2.3.7.1.5-.4-1.2-1.7-3.2-2.9-4.8-2.9zm.6 7.6c-2 0-3.6-1.1-4.3-2.6-.2-.4.4-.7.6-.4.5 1.2 2 2 3.6 2 2 0 3.8-.9 4.8-2.3.2-.3.7-.1.5.4-1.2 1.7-3.2 2.9-5.2 2.9z"/>
    <text x="50%" y="45%" dominantBaseline="middle" textAnchor="middle" fontSize="16" fontWeight="bold">a</text>
  </svg>
);

export function ActionSection() {
  const [searchType, setSearchType] = useState('logistics');

  const quickActions = [
    { label: '添加头程', icon: AmazonIcon, color: 'text-[#1890ff]' },
    { label: '添加派送订单', icon: Bike, color: 'text-[#ff4d4f]' },
    { label: '头程价格复核', icon: UserCheck, color: 'text-[#fa8c16]' },
    { label: '派送价格复核', icon: CircleDollarSign, color: 'text-[#ff4d4f]' },
    { label: '库存查询', icon: PackageSearch, color: 'text-[#faad14]' },
    { label: '服务订单(未完成0)', icon: LayoutGrid, color: 'text-[#52c41a]' },
  ];

  return (
    <div className="grid grid-cols-12 gap-3 shrink-0">
      {/* Logistics Tracking Card */}
      <div className="col-span-5 bg-white p-5 rounded shadow-sm border border-gray-100 flex flex-col justify-between">
        <div className="flex items-center gap-6 mb-4 mt-1">
          <label className="flex items-center gap-2 cursor-pointer group">
            <input 
              type="radio" 
              name="searchType" 
              checked={searchType === 'logistics'} 
              onChange={() => setSearchType('logistics')}
              className="w-4 h-4 text-[#1890ff] focus:ring-[#1890ff] border-gray-300"
            />
            <span className="text-[13px] text-gray-700">物流轨迹</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer group">
            <input 
              type="radio" 
              name="searchType" 
              checked={searchType === 'operation'} 
              onChange={() => setSearchType('operation')}
              className="w-4 h-4 text-[#1890ff] focus:ring-[#1890ff] border-gray-300"
            />
            <span className="text-[13px] text-gray-700">操作轨迹</span>
          </label>
        </div>
        
        <div className="flex gap-0 h-8">
          <div className="flex-1">
            <input 
              type="text" 
              placeholder="请输入运单号" 
              className="w-full h-full px-3 text-[13px] border border-gray-200 rounded-sm focus:outline-none focus:border-[#1890ff]"
            />
          </div>
          <button className="bg-[#1890ff] hover:bg-[#40a9ff] text-white px-6 h-full rounded-sm text-[13px] transition-colors ml-[-1px] relative z-10">
            查询
          </button>
        </div>
      </div>

      {/* Quick Actions Grid Card */}
      <div className="col-span-7 bg-white p-4 rounded shadow-sm border border-gray-100">
        <div className="flex h-full items-center justify-around">
          {quickActions.map((action, idx) => (
            <button 
              key={idx} 
              className="flex flex-col items-center justify-center p-2 rounded hover:bg-gray-50 transition-colors group cursor-pointer"
            >
              <div className={cn("mb-2.5", action.color)}>
                <action.icon size={28} className="stroke-[1.5]" />
              </div>
              <span className="text-[12px] text-gray-600 text-center">
                {action.label.includes('(') ? (
                  <>
                    {action.label.split('(')[0]}<span className="text-[#ff4d4f]">({action.label.split('(')[1]}</span>
                  </>
                ) : action.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
