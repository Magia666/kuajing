import React from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';
import { Calendar, ChevronDown } from 'lucide-react';

const data = [
  { name: '05-04', orders: 0 },
  { name: '05-05', orders: 0 },
  { name: '05-06', orders: 0 },
  { name: '05-07', orders: 0 },
  { name: '05-08', orders: 0 },
  { name: '05-09', orders: 0 },
  { name: '05-10', orders: 0 },
  { name: '05-11', orders: 0 },
];

export function DashboardContent() {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="grid grid-cols-12 gap-4 flex-1">
        {/* Left: Chart and Table */}
        <div className="col-span-12 lg:col-span-9 flex flex-col gap-4">
          {/* Order Stats Chart */}
          <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm flex-1 min-h-[300px] flex flex-col">
            <h3 className="text-gray-700 font-bold text-sm mb-4">近30天订单统计</h3>
            <div className="flex-1 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                  <XAxis 
                    dataKey="name" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fontSize: 10, fill: '#999' }} 
                  />
                  <YAxis 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fontSize: 10, fill: '#999' }}
                  />
                  <Tooltip 
                    cursor={{ fill: '#f8fafc' }}
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                  />
                  <Bar dataKey="orders" fill="#3b82f6" radius={[4, 4, 0, 0]} barSize={20} />
                </BarChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
                <span className="text-gray-400 text-sm">暂无数据</span>
              </div>
            </div>
          </div>

          {/* Warehouse status */}
          <div className="bg-white rounded-lg border border-gray-100 shadow-sm flex flex-col overflow-hidden">
            <div className="p-4 border-b border-gray-50 flex items-center justify-between">
              <h3 className="text-gray-700 font-bold text-sm">代发出仓实况</h3>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1 text-[10px] text-gray-500 bg-gray-50 px-2 py-1 rounded border border-gray-100">
                  <Calendar size={12} />
                  <span>2026-05-04 - 2026-05-11</span>
                  <ChevronDown size={10} />
                </div>
                <span className="text-[10px] text-gray-500">缺货中订单: <span className="font-bold text-gray-700">0</span></span>
              </div>
            </div>
            
            <div className="p-8 flex items-center justify-center text-gray-300 text-sm italic min-h-[140px]">
              暂无匹配数据
            </div>

            <div className="bg-blue-50/50 p-3 grid grid-cols-4 border-t border-blue-50">
              <div className="text-center border-r border-blue-100/50">
                <span className="text-xs text-gray-500 mr-2">待确认:</span>
                <span className="text-sm font-bold text-gray-700">0</span>
              </div>
              <div className="text-center border-r border-blue-100/50">
                <span className="text-xs text-gray-500 mr-2">待打包:</span>
                <span className="text-sm font-bold text-gray-700">0</span>
              </div>
              <div className="text-center border-r border-blue-100/50">
                <span className="text-xs text-gray-500 mr-2">待发货:</span>
                <span className="text-sm font-bold text-gray-700">0</span>
              </div>
              <div className="text-center">
                <span className="text-xs text-gray-500 mr-2">待签收:</span>
                <span className="text-sm font-bold text-gray-700">0</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Work Order List */}
        <div className="col-span-12 lg:col-span-3">
          <div className="bg-white rounded-lg border border-gray-100 shadow-sm h-full flex flex-col min-h-[400px]">
            <div className="p-4 border-b border-gray-50">
              <h3 className="text-gray-700 font-bold text-sm">
                工单列表<span className="text-gray-400 font-normal">(待处理+处理中 <span className="text-red-500 font-bold">0</span>条)</span>
              </h3>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
              <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-3">
                <span className="text-gray-300">Empty</span>
              </div>
              <p className="text-gray-400 text-xs">暂无待处理工单</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
