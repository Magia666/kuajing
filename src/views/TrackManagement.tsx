import React, { useState } from 'react';
import { Search, MapPin, Navigation, CheckCircle, AlertTriangle, Clock, BarChart3, Plus, Download, Mail, Filter } from 'lucide-react';
import { cn } from '../lib/utils';

// Rules Mock
const RULES_MOCK = [
  { id: '1', courier: 'Shopee (API:Shopee)', keyword: 'In Transit', status: '运输中', time: '2025-12-04 01:16:40' },
  { id: '2', courier: 'Shopee (API:Shopee)', keyword: 'Delivered', status: '已签收', time: '2025-12-04 01:11:15' },
];

// Orders Mock
const ORDERS_MOCK = [
  {
    id: '1',
    customer: 'qin (12014)',
    refNo: 'FXDF202512011',
    outboundNo: '11111',
    warehouse: '星卓越泰国国仓',
    method: 'Shopee (API:Shopee)',
    status: '待签收',
    trackStatus: '运输中',
    latestLog: '2025-12-11 11:23:45 Arrived at local sort center',
    latestTime: '2025-12-11 11:23:45',
    updateTime: '2025-12-11 15:44:12',
    shipTime: '2025-12-04 01:16:40'
  },
  {
    id: '2',
    customer: 'chenwei (12000)',
    refNo: 'FXDF202504003',
    outboundNo: '794862747283',
    warehouse: '星卓越泰国国仓',
    method: 'Shopee (API:Shopee)',
    status: '已签收',
    trackStatus: '已签收',
    latestLog: '2025-04-15 14:22:11 Delivered to recipient',
    latestTime: '2025-04-15 14:22:11',
    updateTime: '2025-04-16 09:12:33',
    shipTime: '2025-04-02 14:51:16'
  },
  {
    id: '3',
    customer: 'yueyang02 (12016)',
    refNo: 'FXDF202512013',
    outboundNo: '0.0121',
    warehouse: '星卓越泰国国仓',
    method: 'Shopee (API:Shopee)',
    status: '异常',
    trackStatus: '投递异常',
    latestLog: '2025-12-10 09:33:44 Address incorrect',
    latestTime: '2025-12-10 09:33:44',
    updateTime: '2025-12-10 10:22:11',
    shipTime: '2025-12-04 13:41:47'
  }
];

interface TrackManagementProps {
  mode: 'track-rules' | 'track-orders' | 'track-sign' | 'track-delivery-err' | 'track-timeout-err' | 'track-analysis';
}

export function TrackManagement({ mode }: TrackManagementProps) {
  if (mode === 'track-analysis') {
    return (
      <div className="bg-[#f0f2f5] p-3 animate-in fade-in duration-500 w-full h-full overflow-hidden font-sans">
        {/* Summary Info Bar (similar to DropshipOrderList) */}
        <div className="px-4 py-2 bg-[#fff7e6] border border-[#ffe58f] flex items-center justify-between text-[12px] mb-3 rounded-sm">
          <div className="flex items-center gap-1 text-gray-700">
            <span>当前轨迹监控总数为:<span className="text-red-500 font-bold">1284</span>个, 已签收:<span className="text-red-500 font-bold">1210</span>个, 投递异常:<span className="text-red-500 font-bold">28</span>个, 超时未更新:<span className="text-red-500 font-bold">46</span>个</span>
          </div>
          <div className="flex items-center gap-2">
            <button className="bg-[#17a2b8] text-white px-3 py-1 rounded-sm hover:bg-[#138496] transition-colors">刷新数据</button>
          </div>
        </div>

        {/* Top Summary Blocks */}
        <div className="grid grid-cols-7 gap-px bg-gray-200 border border-gray-200 mb-4 bg-white overflow-hidden shadow-sm rounded-sm">
          {[
            { label: '未更新', value: '12', color: 'text-blue-600' },
            { label: '未上网', value: '5', color: 'text-blue-600' },
            { label: '已上网', value: '88', color: 'text-blue-600' },
            { label: '派送中', value: '156', color: 'text-blue-600' },
            { label: '已签收', value: '1210', color: 'text-green-600' },
            { label: '投递异常', value: '28', color: 'text-red-500' },
            { label: '超时异常', value: '46', color: 'text-orange-500' },
          ].map((item, i) => (
            <div key={i} className="bg-white p-5 text-center border-r border-gray-200 last:border-r-0">
              <div className="text-[12px] text-gray-600 mb-3">{item.label}</div>
              <div className={cn("text-[18px] font-bold", item.color)}>{item.value}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-3">
             <div className="bg-white border border-gray-200 shadow-sm mb-4 rounded-sm">
                <div className="px-4 py-2 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
                   <h3 className="text-[13px] font-bold text-gray-700">物流商投递数据</h3>
                   <div className="flex items-center gap-2">
                      <div className="flex items-center border border-gray-300 rounded-sm px-2 h-7 bg-white">
                         <input type="text" value="2026-04-11" className="w-20 outline-none text-[12px]" readOnly />
                         <Clock size={12} className="text-gray-400" />
                      </div>
                      <span className="text-gray-400">-</span>
                      <div className="flex items-center border border-gray-300 rounded-sm px-2 h-7 bg-white">
                         <input type="text" value="2026-05-11" className="w-20 outline-none text-[12px]" readOnly />
                         <Clock size={12} className="text-gray-400" />
                      </div>
                      <select className="border border-gray-300 rounded-sm px-2 h-7 text-[12px] outline-none bg-white"><option>全部仓库</option></select>
                      <button className="bg-[#00a2e8] hover:bg-blue-600 text-white px-4 py-1 rounded-sm text-[12px]">查询</button>
                   </div>
                </div>
                <div className="p-3">
                   <table className="w-full border-collapse text-[12px] text-left border-b border-gray-200">
                      <thead className="bg-[#f5f7fa] text-gray-600 font-medium">
                         <tr className="bg-[#f4f7f9] border-b border-gray-200">
                            <th className="px-3 py-2 border-r border-gray-200 font-bold text-gray-700">序号</th>
                            <th className="px-3 py-2 border-r border-gray-200 font-bold text-gray-700 whitespace-nowrap">物流商名称</th>
                            <th className="px-3 py-2 border-r border-gray-200 font-bold text-gray-700">发货量</th>
                            <th className="px-3 py-2 border-r border-gray-200 font-bold text-gray-700">上网量</th>
                            <th className="px-3 py-2 border-r border-gray-200 font-bold text-gray-700">投递量</th>
                            <th className="px-3 py-2 border-r border-gray-200 font-bold text-gray-700">异常量</th>
                            <th className="px-3 py-2 border-r border-gray-200 font-bold text-gray-700">上网率</th>
                            <th className="px-3 py-2 border-r border-gray-200 font-bold text-gray-700">投递率</th>
                            <th className="px-3 py-2 border-r border-gray-200 font-bold text-gray-700">异常率</th>
                            <th className="px-3 py-2 font-bold text-gray-700 border-r border-gray-200">超时率</th>
                         </tr>
                      </thead>
                      <tbody>
                         <tr className="hover:bg-gray-50 transition-colors">
                            <td className="px-3 py-2 border-r border-gray-200">1</td>
                            <td className="px-3 py-2 border-r border-gray-200 text-blue-500">虾皮</td>
                            <td className="px-3 py-2 border-r border-gray-200">1284</td>
                            <td className="px-3 py-2 border-r border-gray-200">1279</td>
                            <td className="px-3 py-2 border-r border-gray-200">1210</td>
                            <td className="px-3 py-2 border-r border-gray-200 text-red-500">28</td>
                            <td className="px-3 py-2 border-r border-gray-200">99.6%</td>
                            <td className="px-3 py-2 border-r border-gray-200">94.2%</td>
                            <td className="px-3 py-2 border-r border-gray-200">2.2%</td>
                            <td className="px-3 py-2 border-r border-gray-200">3.6%</td>
                         </tr>
                      </tbody>
                   </table>
                </div>
             </div>

             <div className="bg-white border border-gray-200 shadow-sm">
                <div className="px-4 py-2 border-b border-gray-100 font-bold text-[14px]">物流状态分布</div>
                <div className="p-4 h-64 flex flex-col">
                   <div className="flex flex-wrap items-center justify-center gap-4 mb-4">
                      {[
                        { label: '未推送', color: 'bg-orange-400' },
                        { label: '未上网', color: 'bg-blue-300' },
                        { label: '运输中', color: 'bg-purple-400' },
                        { label: '投递中', color: 'bg-green-500' },
                        { label: '已投递', color: 'bg-blue-500' },
                        { label: '投递异常', color: 'bg-pink-400' },
                        { label: '超时异常', color: 'bg-purple-600' },
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-1">
                           <div className={cn("w-3 h-2 rounded-sm", item.color)}></div>
                           <span className="text-[11px] text-gray-500">{item.label}</span>
                        </div>
                      ))}
                   </div>
                   <div className="flex-1 border-l-2 border-b-2 border-blue-600 relative overflow-hidden flex items-end">
                      <div className="absolute inset-0 grid grid-rows-5 gap-px">
                         <div className="border-b border-gray-100 h-full w-full"></div>
                         <div className="border-b border-gray-100 h-full w-full"></div>
                         <div className="border-b border-gray-100 h-full w-full"></div>
                         <div className="border-b border-gray-100 h-full w-full"></div>
                         <div className="border-b border-gray-100 h-full w-full"></div>
                      </div>
                      <div className="w-full flex justify-around items-end px-12 h-full z-10">
                         <div className="w-8 bg-orange-400 h-0.5 rounded-t-sm relative group cursor-pointer hover:bg-orange-500 transition-all">
                            <span className="absolute -top-6 left-1/2 -track-x-1/2 text-[10px] text-orange-600 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">0</span>
                         </div>
                         <div className="w-8 bg-blue-300 h-0.5 rounded-t-sm relative group cursor-pointer hover:bg-blue-400 transition-all">
                            <span className="absolute -top-6 left-1/2 -track-x-1/2 text-[10px] text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">0</span>
                         </div>
                         <div className="w-8 bg-purple-400 h-0.5 rounded-t-sm relative group cursor-pointer hover:bg-purple-500 transition-all">
                            <span className="absolute -top-6 left-1/2 -track-x-1/2 text-[10px] text-purple-600 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">0</span>
                         </div>
                         <div className="w-8 bg-green-500 h-0.5 rounded-t-sm relative group cursor-pointer hover:bg-green-600 transition-all">
                            <span className="absolute -top-6 left-1/2 -track-x-1/2 text-[10px] text-green-600 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">0</span>
                         </div>
                         <div className="w-8 bg-blue-500 h-0.5 rounded-t-sm relative group cursor-pointer hover:bg-blue-600 transition-all">
                               <span className="absolute -top-6 left-1/2 -track-x-1/2 text-[10px] text-blue-700 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">0</span>
                         </div>
                      </div>
                      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[11px] text-gray-500 font-medium">快递数量</div>
                   </div>
                </div>
             </div>
          </div>
          <div className="col-span-1">
             <div className="bg-white border border-gray-200 shadow-sm p-6 h-fit">
                <div className="text-[16px] text-gray-700 mb-4 border-b pb-2">尾程可用单量</div>
                <div className="text-[28px] font-bold text-red-500 mb-2">0单</div>
                <div className="text-[12px] text-gray-400 flex flex-wrap items-center gap-1">
                   全部可用单量<span className="text-red-500">0</span>, 已用单量<span className="text-red-500">0</span>
                </div>
             </div>
          </div>
        </div>
      </div>
    );
  }

  if (mode === 'track-rules') {
    return (
      <div className="bg-white rounded-sm border border-gray-200 animate-in fade-in duration-500 w-full h-full flex flex-col font-sans min-h-0">
        <div className="p-2 border-b border-gray-100 flex flex-wrap items-center gap-2 bg-gray-50/50 shrink-0">
          <div className="flex items-center border border-gray-300 rounded-sm px-2 h-7 bg-white">
            <span className="text-[12px] text-gray-500 pr-2 border-r border-gray-200 mr-2">关键词</span>
            <input type="text" className="outline-none text-[12px] w-32 h-5" placeholder="请输入关键词" />
          </div>
          <select className="border border-gray-300 rounded-sm px-2 h-7 text-[12px] outline-none min-w-[120px] bg-white">
            <option>全部快递</option>
          </select>
          <select className="border border-gray-300 rounded-sm px-2 h-7 text-[12px] outline-none min-w-[100px] bg-white">
             <option>轨迹状态</option>
             <option>运输中</option>
             <option>已妥投</option>
             <option>投递异常</option>
             <option>已签收</option>
          </select>
          <button className="bg-[#00a2e8] hover:bg-blue-600 text-white px-4 py-1 h-7 rounded-sm text-[12px]">查询</button>
          <button className="bg-[#f0ad4e] hover:bg-orange-500 text-white px-4 py-1 h-7 rounded-sm text-[12px] flex items-center gap-1">
            添加规则
          </button>
        </div>

        <div className="flex-1 overflow-auto min-h-0">
           <table className="w-full border-collapse text-[12px] text-left border-b border-gray-200">
              <thead className="bg-[#f5f7fa] text-gray-600 font-medium">
                 <tr className="hover:bg-gray-50 transition-colors">
                    <th className="px-3 border-r border-gray-200 w-12 py-2"><input type="checkbox" /> 序号</th>
                    <th className="px-3 border-r border-gray-200 py-2">发货快递</th>
                    <th className="px-3 border-r border-gray-200 py-2">关键词</th>
                    <th className="px-3 border-r border-gray-200 py-2">轨迹状态</th>
                    <th className="px-3 border-r border-gray-200 w-48 text-gray-600 py-2">添加时间</th>
                    <th className="px-3 text-gray-600 py-2 border-r border-gray-200">操作</th>
                 </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 border-b border-gray-200">
                 {RULES_MOCK.map((rule, i) => (
                    <tr key={rule.id} className="hover:bg-gray-50 transition-colors">
                       <td className="px-3 border-r border-gray-200 py-2"><input type="checkbox" /> {i + 1}</td>
                       <td className="px-3 border-r border-gray-200 py-2">{rule.courier}</td>
                       <td className="px-3 border-r border-gray-200 py-2">{rule.keyword}</td>
                       <td className="px-3 border-r border-gray-200 text-blue-500 py-2">{rule.status}</td>
                       <td className="px-3 border-r border-gray-200 text-gray-500 py-2">{rule.time}</td>
                       <td className="px-3 py-2 border-r border-gray-200">
                          <button className="text-blue-500 hover:underline">编辑</button>
                          <span className="mx-2 text-gray-300">|</span>
                          <button className="text-red-500 hover:underline">删除</button>
                       </td>
                    </tr>
                 ))}
              </tbody>
           </table>
        </div>

        {/* Pagination Footer */}
        <div className="p-2 flex items-center justify-between bg-white border-t border-gray-200 text-[11px] sticky bottom-0">
          <div className="flex flex-wrap items-center gap-1">
            <span className="text-gray-500">总计 {RULES_MOCK.length} 个记录分为 1 页当前第 1 页，每页</span>
            <select className="border border-gray-300 rounded-sm px-1 h-6 outline-none bg-white">
              <option>100</option>
            </select>
            <div className="flex items-center gap-1 ml-4 border-l pl-4 font-normal text-gray-600">
               <button className="px-2 h-6 hover:text-blue-500">第一页</button>
               <button className="px-2 h-6 hover:text-blue-500">上一页</button>
               <button className="px-2 h-6 hover:text-blue-500">下一页</button>
               <button className="px-2 h-6 hover:text-blue-500">最末页</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Common Orders Logic (Orders, Sign, Delivery Error, Timeout Error)
  const filteredOrders = ORDERS_MOCK.filter(order => {
    if (mode === 'track-orders') return true;
    if (mode === 'track-sign') return order.trackStatus === '已签收';
    if (mode === 'track-delivery-err') return order.trackStatus === '投递异常';
    if (mode === 'track-timeout-err') return order.trackStatus === '超时未更新';
    return true;
  });

  return (
    <div className="bg-white rounded-sm border border-gray-200 animate-in fade-in duration-500 w-full h-full flex flex-col font-sans min-h-0">
      {/* Search Filter Bar */}
      <div className="p-2 border-b border-gray-100 flex flex-wrap items-center gap-2 bg-gray-50/50 shrink-0">
        <div className="flex items-center gap-1 border border-gray-300 rounded-sm px-2 h-7 bg-white">
           <select className="outline-none text-[12px] bg-transparent border-r pr-2 border-gray-200 h-full">
              <option>参考单号</option>
           </select>
           <textarea className="w-32 h-5 outline-none text-[11px] resize-none overflow-hidden leading-tight mt-1" placeholder="如有多个请用换行隔开" />
        </div>
        <div className="flex items-center gap-1 border border-gray-300 rounded-sm px-2 h-7 bg-white">
          <span className="text-[12px] text-gray-500 border-r pr-2 border-gray-200 mr-1 h-full flex items-center">出库单号</span>
          <textarea className="w-32 h-5 outline-none text-[11px] resize-none overflow-hidden leading-tight mt-1" placeholder="如有多个请用换行隔开" />
        </div>
        <div className="flex items-center gap-1 border border-gray-300 rounded-sm px-2 h-7 bg-white">
          <span className="text-[12px] text-gray-500 border-r pr-2 border-gray-200 mr-2 h-full flex items-center">客户名称</span>
          <input type="text" className="w-24 outline-none text-[12px] h-full" />
        </div>
        <select className="border border-gray-300 rounded-sm px-2 h-7 text-[12px] outline-none bg-white min-w-[100px]">
           <option>轨迹状态</option>
        </select>
        <select className="border border-gray-300 rounded-sm px-2 h-7 text-[12px] outline-none bg-white min-w-[100px]">
           <option>全部仓库</option>
        </select>
        <div className="flex items-center gap-1">
           <div className="flex items-center border border-gray-300 rounded-sm px-2 h-7 bg-white">
              <input type="text" value="2026-04-11" className="w-24 outline-none text-[12px]" readOnly />
              <Clock size={12} className="text-gray-400" />
           </div>
           <span className="text-gray-400">-</span>
           <div className="flex items-center border border-gray-300 rounded-sm px-2 h-7 bg-white">
              <input type="text" value="2026-05-11" className="w-24 outline-none text-[12px]" readOnly />
              <Clock size={12} className="text-gray-400" />
           </div>
        </div>
        <div className="ml-auto flex items-center gap-2">
           <button className="bg-[#00a2e8] hover:bg-blue-600 text-white px-5 py-1 h-7 rounded-sm text-[12px]">查询</button>
           <button className="bg-[#00a2e8] hover:bg-blue-600 text-white px-5 py-1 h-7 rounded-sm text-[12px]">导出Excel</button>
        </div>
      </div>

      {/* Summary Info Bar (similar to DropshipOrderList) */}
      <div className="px-4 py-2 bg-gray-50 border-b border-gray-200 flex items-center justify-between text-[11px] shrink-0">
        <div className="flex items-center gap-1 text-gray-700">
          <span>当前订单总数为:<span className="text-red-500 font-bold">{filteredOrders.length}</span>个, 异常轨迹:<span className="text-red-500 font-bold">1</span>个, 待跟进:<span className="text-red-500 font-bold">2</span>个</span>
        </div>
        <div className="flex items-center gap-2">
          <button className="bg-[#17a2b8] text-white px-3 py-1 rounded-sm">检测</button>
          <button className="bg-[#17a2b8] text-white px-3 py-1 rounded-sm">刷新</button>
        </div>
      </div>

      {/* Table Section */}
      <div className="flex-1 overflow-auto min-h-0">
        <table className="w-full border-collapse text-[12px] text-left border-b border-gray-200">
          <thead className="bg-[#f5f7fa] text-gray-600 font-medium">
            <tr className="hover:bg-gray-50 transition-colors">
              <th className="px-3 border-r border-gray-200 w-12 py-2"><input type="checkbox" /> 序号</th>
              <th className="px-3 border-r border-gray-200 py-2">客户名称</th>
              <th className="px-3 border-r border-gray-200 py-2">参考单号</th>
              <th className="px-3 border-r border-gray-200 py-2">出库单号</th>
              <th className="px-3 border-r border-gray-200 py-2">发货仓库</th>
              <th className="px-3 border-r border-gray-200 py-2">运输方式</th>
              <th className="px-3 border-r border-gray-200 py-2">状态</th>
              <th className="px-3 border-r border-gray-200 font-bold whitespace-nowrap py-2">轨迹状态</th>
              <th className="px-3 border-r border-gray-200 min-w-[200px] py-2">最新路由</th>
              <th className="px-3 border-r border-gray-200 w-32 whitespace-nowrap py-2">最近路由时间</th>
              <th className="px-3 border-r border-gray-200 w-32 whitespace-nowrap py-2">更新时间</th>
              <th className="px-3 border-r border-gray-200 w-32 whitespace-nowrap py-2">发货时间</th>
              <th className="px-3 whitespace-nowrap py-2 border-r border-gray-200">操作</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 border-b border-gray-200">
            {filteredOrders.map((order, i) => (
              <tr key={order.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-3 border-r border-gray-200 py-2"><input type="checkbox" /> {i + 1}</td>
                <td className="px-3 border-r border-gray-200 py-2">{order.customer}</td>
                <td className="px-3 border-r border-gray-200 py-2">{order.refNo}</td>
                <td className="px-3 border-r border-gray-200 text-blue-500 font-bold py-2">{order.outboundNo}</td>
                <td className="px-3 border-r border-gray-200 py-2">{order.warehouse}</td>
                <td className="px-3 border-r border-gray-200 text-gray-600 py-2">{order.method}</td>
                <td className="px-3 border-r border-gray-200 text-gray-500 py-2">{order.status}</td>
                <td className="px-3 border-r border-gray-200 text-gray-700 py-2">{order.trackStatus}</td>
                <td className="px-3 border-r border-gray-200 text-left px-4 leading-tight py-2">
                  <div className="text-[10px] text-gray-500 group-hover:text-gray-900 transition-colors">{order.latestLog}</div>
                </td>
                <td className="px-3 border-r border-gray-200 text-gray-500 py-2">{order.latestTime}</td>
                <td className="px-3 border-r border-gray-200 text-gray-500 py-2">{order.updateTime}</td>
                <td className="px-3 border-r border-gray-200 text-gray-500 py-2">{order.shipTime}</td>
                <td className="px-3 py-2 border-r border-gray-200">
                   <button className="text-blue-500 hover:underline">详情</button>
                </td>
              </tr>
            ))}
            {filteredOrders.length === 0 && (
              <tr>
                <td colSpan={13} className="py-20 text-gray-400 bg-gray-50/20 px-3 border-r border-gray-200">暂无数据</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Footer */}
      <div className="p-2 flex items-center justify-between bg-white border-t border-gray-200 text-[11px] sticky bottom-0">
        <div className="flex flex-wrap items-center gap-1">
          <span className="text-gray-500">总计 {filteredOrders.length} 个记录分为 1 页当前第 1 页，每页</span>
          <select className="border border-gray-300 rounded-sm px-1 h-6 outline-none bg-white">
            <option>100</option>
            <option>200</option>
          </select>
          <div className="flex items-center gap-1 ml-4 border-l pl-4 font-normal text-gray-600">
             <button className="px-2 h-6 hover:text-blue-500 transition-colors">第一页</button>
             <button className="px-2 h-6 hover:text-blue-500">上一页</button>
             <button className="px-2 h-6 hover:text-blue-500">下一页</button>
             <button className="px-2 h-6 hover:text-blue-500 transition-colors">最末页</button>
             <select className="border border-gray-300 rounded-sm px-1 h-6 outline-none text-[11px] ml-2 bg-white">
                <option>1</option>
             </select>
          </div>
        </div>
      </div>
    </div>
  );
}

