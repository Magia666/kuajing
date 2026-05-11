import React, { useState } from 'react';
import { 
  PlusSquare, 
  ClipboardList, 
  Search, 
  FileCheck, 
  CircleDollarSign, 
  Archive, 
  Layers
} from 'lucide-react';
import { cn } from '../lib/utils';

export function ActionSection() {
  const [searchType, setSearchType] = useState('logistics');

  const quickActions = [
    { label: '添加头程', icon: PlusSquare, color: 'text-blue-500' },
    { label: '添加派送订单', icon: ClipboardList, color: 'text-orange-500' },
    { label: '头程价格复核', icon: FileCheck, color: 'text-rose-500' },
    { label: '派送价格复核', icon: CircleDollarSign, color: 'text-teal-500' },
    { label: '库存查询', icon: Archive, color: 'text-amber-500' },
    { label: '服务订单(未完成0)', icon: Layers, color: 'text-green-500' },
  ];

  return (
    <div className="grid grid-cols-12 gap-4 mb-6">
      {/* Logistics Tracking Card */}
      <div className="col-span-5 bg-white p-5 rounded-lg shadow-sm border border-gray-100 flex flex-col justify-between">
        <div className="flex items-center gap-6 mb-4">
          <label className="flex items-center gap-2 cursor-pointer group">
            <input 
              type="radio" 
              name="searchType" 
              checked={searchType === 'logistics'} 
              onChange={() => setSearchType('logistics')}
              className="w-4 h-4 text-blue-600 focus:ring-blue-500 border-gray-300"
            />
            <span className="text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors">物流轨迹</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer group">
            <input 
              type="radio" 
              name="searchType" 
              checked={searchType === 'operation'} 
              onChange={() => setSearchType('operation')}
              className="w-4 h-4 text-blue-600 focus:ring-blue-500 border-gray-300"
            />
            <span className="text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors">操作轨迹</span>
          </label>
        </div>
        
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
            <input 
              type="text" 
              placeholder="请输入运单号" 
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition-all text-sm"
            />
          </div>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-2 rounded-sm text-sm font-medium transition-colors">
            查询
          </button>
        </div>
      </div>

      {/* Quick Actions Grid Card */}
      <div className="col-span-12 lg:col-span-7 bg-white p-5 rounded-lg shadow-sm border border-gray-100">
        <div className="grid grid-cols-6 gap-2 h-full items-center">
          {quickActions.map((action, idx) => (
            <button 
              key={idx} 
              className="flex flex-col items-center justify-center p-2 rounded-lg hover:bg-gray-50 transition-all group"
            >
              <div className={cn("mb-2 p-2 rounded-lg bg-gray-50 group-hover:bg-white transition-colors shadow-sm border border-transparent group-hover:border-gray-100", action.color)}>
                <action.icon size={20} />
              </div>
              <span className="text-[10px] sm:text-xs font-medium text-gray-600 text-center leading-tight">
                {action.label.includes('(') ? (
                  <>
                    {action.label.split('(')[0]}
                    <span className="text-red-500 block">({action.label.split('(')[1]}</span>
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
