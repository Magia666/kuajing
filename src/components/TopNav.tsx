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
        <div className="flex items-center gap-2 mr-8">
          <Globe className="text-blue-600" size={24} />
          <span className="font-bold text-gray-800 text-lg tracking-tight">跨境电商供应链实训系统</span>
        </div>

        <nav className="flex items-center h-full gap-1">
          {NAV_TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveModuleId(tab.id)}
              className={cn(
                "px-4 h-14 text-sm font-medium transition-all relative flex items-center justify-center",
                activeModuleId === tab.id 
                  ? "text-blue-600 after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-blue-600" 
                  : "text-gray-600 hover:text-blue-500 hover:bg-gray-50"
              )}
            >
              <div className={cn(
                "px-3 py-1 rounded-sm",
                activeModuleId === tab.id && "bg-blue-600 text-white"
              )}>
                {tab.label}
              </div>
            </button>
          ))}
        </nav>
      </div>

      <div className="ml-auto flex items-center gap-6 text-sm">
        <div className="flex items-center gap-2 text-orange-500 font-medium">
          <span className="text-gray-500 text-xs">您所在海外仓:</span>
          <span className="bg-orange-50 px-2 py-0.5 rounded border border-orange-100">全部仓库</span>
        </div>
        
        <div className="flex items-center gap-2 text-gray-700 cursor-pointer hover:bg-gray-50 px-2 py-1 rounded transition-colors group">
          <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
            <User size={14} className="text-blue-600" />
          </div>
          <span className="font-medium">FX管理员</span>
          <ChevronDown size={14} className="text-gray-400 group-hover:text-gray-600 transition-colors" />
        </div>
      </div>
    </header>
  );
}
