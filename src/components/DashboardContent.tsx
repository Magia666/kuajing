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
  { name: '05-04', orders: 124 },
  { name: '05-05', orders: 289 },
  { name: '05-06', orders: 450 },
  { name: '05-07', orders: 390 },
  { name: '05-08', orders: 512 },
  { name: '05-09', orders: 320 },
  { name: '05-10', orders: 601 },
  { name: '05-11', orders: 485 },
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
                <span className="text-[10px] text-gray-500">缺货中订单: <span className="font-bold text-red-500">12</span></span>
              </div>
            </div>
            
            <div className="p-8 flex items-center justify-center text-gray-600 text-sm italic min-h-[140px] bg-gray-50/30">
              <div className="w-full max-w-lg space-y-4">
                <div className="flex justify-between items-center text-xs">
                  <span>义乌分拨中心</span>
                  <span className="text-blue-500 font-medium">正常流转 (482件)</span>
                </div>
                <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                  <div className="bg-blue-500 h-full w-[85%]"></div>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span>深圳核心仓</span>
                  <span className="text-blue-500 font-medium">正常流转 (1,204件)</span>
                </div>
                <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                  <div className="bg-blue-500 h-full w-[92%]"></div>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span>泰国星卓越</span>
                  <span className="text-amber-500 font-medium">爆仓预警 (2,105件)</span>
                </div>
                <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                  <div className="bg-amber-500 h-full w-[98%]"></div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50/50 p-3 grid grid-cols-4 border-t border-blue-50">
              <div className="text-center border-r border-blue-100/50">
                <span className="text-xs text-gray-500 mr-2">待确认:</span>
                <span className="text-sm font-bold text-gray-700">85</span>
              </div>
              <div className="text-center border-r border-blue-100/50">
                <span className="text-xs text-gray-500 mr-2">待打包:</span>
                <span className="text-sm font-bold text-gray-700">412</span>
              </div>
              <div className="text-center border-r border-blue-100/50">
                <span className="text-xs text-gray-500 mr-2">待发货:</span>
                <span className="text-sm font-bold text-gray-700">1,209</span>
              </div>
              <div className="text-center">
                <span className="text-xs text-gray-500 mr-2">待签收:</span>
                <span className="text-sm font-bold text-gray-700">5,841</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Work Order List */}
        <div className="col-span-12 lg:col-span-3">
          <div className="bg-white rounded-lg border border-gray-100 shadow-sm h-full flex flex-col min-h-[400px]">
            <div className="p-4 border-b border-gray-50">
              <h3 className="text-gray-700 font-bold text-sm">
                工单列表<span className="text-gray-400 font-normal">(待处理+处理中 <span className="text-red-500 font-bold">5</span>条)</span>
              </h3>
            </div>
            <div className="flex-1 flex flex-col p-2 space-y-2">
              {[
                { title: '泰国专线运单号更新延迟', time: '10分钟前', status: '待处理', type: '异常工单' },
                { title: '客户VIP005申请提现', time: '1小时前', status: '处理中', type: '财务工单' },
                { title: '入库数据异常-单号T9982', time: '2小时前', status: '处理中', type: '仓库工单' },
                { title: 'API请求频率超限告警', time: '5小时前', status: '待处理', type: '系统工单' },
                { title: '新代理商入驻资质审核', time: '1天前', status: '待处理', type: '常规工单' },
              ].map((wo, i) => (
                <div key={i} className="flex flex-col p-3 border border-gray-50 rounded bg-gray-50/50 hover:bg-blue-50/30 cursor-pointer transition-colors">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs font-semibold text-gray-700 truncate mr-2">{wo.title}</span>
                    <span className={`text-[10px] px-1.5 py-0.5 rounded ${wo.status === '待处理' ? 'bg-red-100 text-red-600' : 'bg-amber-100 text-amber-600'}`}>
                      {wo.status}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-[10px] text-gray-400">
                    <span>{wo.type}</span>
                    <span>{wo.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
