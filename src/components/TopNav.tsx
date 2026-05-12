import React from 'react';
import { Globe, User, MapPin, ChevronDown } from 'lucide-react';
import { cn } from '../lib/utils';

const NAV_TABS = [
  { id: 'nebula', label: '星云优选' },
  { id: 'trace', label: '星链追溯' },
  { id: 'orders', label: '订单中心' },
  { id: 'inventory', label: '星仓盘点' },
  { id: 'finance', label: '财务中心' },
  { id: 'customer', label: '客户中心' },
  { id: 'ai', label: 'AI预报' },
  { id: 'web', label: '网站管理' },
  { id: 'system', label: '系统设置' },
];

interface TopNavProps {
  activeModuleId: string;
  setActiveModuleId: (id: string) => void;
}

export function TopNav({ activeModuleId, setActiveModuleId }: TopNavProps) {
  return (
    <header className="h-14 bg-white border-b border-gray-100 flex items-center px-4 shrink-0 shadow-sm z-40 bg-opacity-95 backdrop-blur-sm sticky top-0">
      <div className="flex items-center">
        <div className="flex items-center gap-2 mr-10 origin-bottom-left -skew-x-[15deg]">
          <div className="font-black text-gray-800 text-lg tracking-wider">跨境电商供应链实训系统</div>
        </div>

        <nav className="flex items-center h-full gap-2">
          {NAV_TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveModuleId(tab.id)}
              className={cn(
                "px-3 py-1.5 text-[14px] transition-colors rounded-sm",
                activeModuleId === tab.id 
                  ? "bg-[#1890ff] text-white font-medium" 
                  : "text-gray-600 hover:text-blue-500"
              )}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      <div className="ml-auto flex items-center gap-6 text-[13px]">
        <div className="flex items-center text-[#fa8c16]">
          <span>您所在海外仓:全部仓库</span>
        </div>
        
        <div className="flex items-center gap-1 text-gray-700 cursor-pointer hover:bg-gray-50 px-2 py-1 rounded transition-colors group">
          <Globe size={14} className="text-[#1890ff]" />
          <span>fxadmin</span>
          <ChevronDown size={12} className="text-gray-400 group-hover:text-gray-600 ml-1" />
        </div>
      </div>
    </header>
  );
}
