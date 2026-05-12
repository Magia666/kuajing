import React from 'react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  ResponsiveContainer,
  Legend,
  LineChart,
  Line
} from 'recharts';

const chart1Data = Array.from({ length: 31 }).map((_, i) => {
  const d = new Date(2026, 3, 12 + i); // Starting from 04-12
  const name = `2026-${(d.getMonth() + 1).toString().padStart(2, '0')}-${d.getDate().toString().padStart(2, '0')}`;
  
  // Make some random realistic data
  let val1 = Math.floor(Math.random() * 200) + 50;
  let val2 = Math.floor(Math.random() * 300) + 100;
  if (i === 30) {
    val1 = 345;
    val2 = 412;
  }
  
  return {
    name,
    头程订单: val1,
    发货订单: val2
  };
});

const chart2Data = [
  { name: '已接单', 代发出仓实况: 450 },
  { name: '已打包', 代发出仓实况: 380 },
  { name: '已发货', 代发出仓实况: 320 },
  { name: '已签收', 代发出仓实况: 210 },
];

export function DashboardContent() {
  return (
    <div className="flex flex-col gap-3 flex-1 h-full min-h-0 shrink-0">
      <div className="grid grid-cols-12 gap-3 flex-1 min-h-0">
        {/* Left: Charts */}
        <div className="col-span-12 lg:col-span-9 flex flex-col gap-3 min-h-0 h-full">
          {/* Order Stats Chart */}
          <div className="bg-white p-4 rounded border border-gray-100 shadow-sm flex-1 flex flex-col min-h-0">
            <h3 className="text-gray-700 font-[400] text-[15px] mb-2">近30天订单统计</h3>
            <div className="flex-1 w-full mt-2">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chart1Data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={true} stroke="#f0f0f0" />
                  <XAxis 
                    dataKey="name" 
                    axisLine={true} stroke="#d9d9d9"
                    tickLine={false} 
                    tick={{ fontSize: 10, fill: '#666' }} 
                    interval={2}
                  />
                  <YAxis 
                    axisLine={true} stroke="#d9d9d9"
                    tickLine={false} 
                    tick={{ fontSize: 10, fill: '#666' }}
                    tickCount={7}
                  />
                  <Legend 
                    verticalAlign="top" 
                    height={36}
                    iconType="rect"
                    wrapperStyle={{ fontSize: '11px', color: '#666' }}
                  />
                  <Area type="monotone" dataKey="头程订单" stroke="#ff7a45" fill="#ff7a45" fillOpacity={0.3} activeDot={{ r: 4 }} />
                  <Area type="monotone" dataKey="发货订单" stroke="#69b1ff" fill="#69b1ff" fillOpacity={0.3} activeDot={{ r: 4 }} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Warehouse status */}
          <div className="bg-white rounded border border-gray-100 shadow-sm flex flex-col flex-1 min-h-0">
            <div className="p-4 pb-0 flex items-center justify-between">
              <h3 className="text-gray-700 font-[400] text-[15px]">代发出仓实况</h3>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-[12px] text-gray-600">
                  <span>时间:</span>
                  <div className="border border-gray-200 px-2 py-0.5 rounded cursor-pointer">
                    2026-05-05 - 2026-05-12
                  </div>
                </div>
              </div>
            </div>
            
            <div className="px-4 text-right mb-2 text-[13px] text-gray-700">
              缺货中订单: 0
            </div>

            <div className="flex-1 w-full pl-2 pr-6">
               <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chart2Data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={true} stroke="#f0f0f0" />
                  <XAxis 
                    dataKey="name" 
                    axisLine={true} stroke="#d9d9d9"
                    tickLine={false} 
                    tick={{ fontSize: 12, fill: '#666' }} 
                  />
                  <YAxis 
                    axisLine={true} stroke="#d9d9d9"
                    tickLine={false} 
                    tick={{ fontSize: 10, fill: '#666' }}
                    tickCount={6}
                  />
                  <Legend 
                    verticalAlign="top" 
                    height={36}
                    iconType="rect"
                    wrapperStyle={{ fontSize: '11px', color: '#666' }}
                  />
                  <Line type="monotone" dataKey="代发出仓实况" stroke="#ff7a45" dot={{ r: 3, fill: '#ff7a45' }} activeDot={{ r: 5 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-[#f0f9ff] py-4 grid grid-cols-4 mt-2 mb-2 mx-4 rounded-sm items-center">
              <div className="text-center text-[13px] text-gray-600 px-2">
                <span>待确认: </span><span className="text-gray-700">1</span>
              </div>
              <div className="text-center text-[13px] text-gray-600 px-2">
                <span>待打包: </span><span className="text-gray-700">0</span>
              </div>
              <div className="text-center text-[13px] text-gray-600 px-2">
                <span>待发货: </span><span className="text-gray-700">0</span>
              </div>
              <div className="text-center text-[13px] text-gray-600 px-2">
                <span>待签收: </span><span className="text-gray-700">0</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Work Order List */}
        <div className="col-span-12 lg:col-span-3">
          <div className="bg-white rounded border border-gray-100 shadow-sm h-full flex flex-col min-h-0">
            <div className="p-4 flex-shrink-0">
              <h3 className="text-gray-600 text-[13px]">
                工单列表(待处理+处理中<span className="text-[#ff4d4f]">5</span>条)
              </h3>
            </div>
            <div className="flex-1 flex flex-col p-2 space-y-2 overflow-y-auto min-h-0">
              {[
                { title: '泰国专线运单号更新延迟', time: '10分钟前', status: '待处理', type: '异常工单' },
                { title: '客户VIP005申请提现', time: '1小时前', status: '处理中', type: '财务工单' },
                { title: '入库数据异常-单号T9982', time: '2小时前', status: '处理中', type: '仓库工单' },
                { title: 'API请求频率超限告警', time: '5小时前', status: '待处理', type: '系统工单' },
                { title: '新代理商入驻资质审核', time: '1天前', status: '待处理', type: '常规工单' },
              ].map((wo, i) => (
                <div key={i} className="flex flex-col p-3 border border-gray-100 rounded bg-[#f8fafc] hover:bg-blue-50/50 cursor-pointer transition-colors flex-shrink-0">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-[12px] font-medium text-gray-700 truncate mr-2">{wo.title}</span>
                    <span className={`text-[10px] px-1.5 py-0.5 rounded ${wo.status === '待处理' ? 'bg-red-50 text-red-500 border border-red-100' : 'bg-orange-50 text-orange-500 border border-orange-100'}`}>
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
