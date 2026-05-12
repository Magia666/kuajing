import React, { useState } from 'react';
import { Search, FileSpreadsheet, Calendar, Info, Download, Edit, Printer } from 'lucide-react';
import { cn } from '../lib/utils';

interface AnonOrder {
  id: string;
  customerName: string;
  customerCode: string;
  refNo: string;
  fnsku: string;
  totalBoxes: number;
  weight: number;
  warehouse: string;
  deliveryMethod: string;
  status: string;
  addedTime: string;
  pushStatus: string;
}

const MOCK_DATA: AnonOrder[] = [
  {
    id: '1',
    customerName: '匿名客户A',
    customerCode: '99901',
    refNo: 'ANON20260511001',
    fnsku: 'X001ABCD01',
    totalBoxes: 5,
    weight: 25.5,
    warehouse: '星卓越泰国国仓',
    deliveryMethod: '自寄海外仓',
    status: '待入库',
    addedTime: '2026-05-11 09:12:33',
    pushStatus: '未推送'
  },
  {
    id: '2',
    customerName: '匿名客户B',
    customerCode: '99902',
    refNo: 'ANON20260511002',
    fnsku: 'X001ABCD02',
    totalBoxes: 2,
    weight: 12.0,
    warehouse: '星卓越曼谷仓',
    deliveryMethod: '货主上门',
    status: '已签收',
    addedTime: '2026-05-10 14:22:11',
    pushStatus: '已推送'
  },
  {
    id: '3',
    customerName: '匿名客户C',
    customerCode: '99903',
    refNo: 'ANON20260511003',
    fnsku: 'X001ABCD03',
    totalBoxes: 10,
    weight: 85.2,
    warehouse: '星卓越泰国国仓',
    deliveryMethod: '自寄海外仓',
    status: '已入库',
    addedTime: '2026-05-09 10:45:55',
    pushStatus: '未推送'
  }
];

export function AnonList() {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  return (
    <div className="bg-white rounded-sm border border-gray-200 animate-in fade-in duration-500 w-full h-full overflow-hidden font-sans">
      {/* Top Filter Bar */}
      <div className="p-2 bg-gray-50/50 flex flex-wrap items-center gap-2 border-b border-gray-100">
        <div className="flex items-center gap-1 border border-gray-300 rounded-sm px-2 h-7 bg-white">
           <select className="outline-none text-[12px] bg-transparent border-r pr-2 border-gray-200 h-full">
              <option>参考单号</option>
           </select>
           <textarea className="w-32 h-5 outline-none text-[11px] resize-none overflow-hidden leading-tight mt-1" placeholder="如有多个请用换行隔开" />
        </div>
        <div className="flex items-center gap-1 border border-gray-300 rounded-sm px-2 h-7 bg-white">
          <span className="text-[12px] text-gray-500 border-r pr-2 border-gray-200 mr-2 h-full flex items-center whitespace-nowrap">客户名称</span>
          <input type="text" className="w-24 outline-none text-[12px] h-full" />
        </div>
        <div className="flex items-center gap-1 border border-gray-300 rounded-sm px-2 h-7 bg-white">
          <span className="text-[12px] text-gray-500 border-r pr-2 border-gray-200 mr-2 h-full flex items-center whitespace-nowrap">Fnsku</span>
          <input type="text" className="w-24 outline-none text-[12px] h-full" />
        </div>
        <div className="flex items-center gap-1 border border-gray-300 rounded-sm px-2 h-7 bg-white">
          <span className="text-[12px] text-gray-500 border-r pr-2 border-gray-200 mr-2 h-full flex items-center whitespace-nowrap">装箱号</span>
          <input type="text" className="w-24 outline-none text-[12px] h-full" />
        </div>
        
        <div className="flex items-center gap-1">
           <span className="text-[12px] text-gray-500 mr-1">时间</span>
           <div className="flex items-center border border-gray-300 rounded-sm px-2 h-7 bg-white underline-offset-1">
              <input type="text" value="2026-04-11" className="w-24 outline-none text-[12px]" readOnly />
              <Calendar size={12} className="text-gray-400" />
           </div>
           <span className="text-gray-400">-</span>
           <div className="flex items-center border border-gray-300 rounded-sm px-2 h-7 bg-white">
              <input type="text" value="2026-05-11" className="w-24 outline-none text-[12px]" readOnly />
              <Calendar size={12} className="text-gray-400" />
           </div>
        </div>

        <select className="border border-gray-300 rounded-sm px-2 h-7 text-[12px] outline-none bg-white min-w-[100px]">
           <option>目的仓库</option>
           <option>星卓越泰国国仓</option>
           <option>星卓越曼谷仓</option>
        </select>

        <div className="ml-auto flex items-center gap-2">
           <button className="bg-[#00a2e8] hover:bg-blue-600 text-white px-5 py-1 h-7 rounded-sm text-[12px]">查询</button>
           <button className="bg-[#00a2e8] hover:bg-blue-600 text-white px-5 py-1 h-7 rounded-sm text-[12px] flex items-center gap-1">
             <FileSpreadsheet size={14} /> 导出Excel
           </button>
        </div>
      </div>

      {/* Summary Info Bar */}
      <div className="px-4 py-2 bg-[#fff7e6] border-b border-[#ffe58f] flex items-center justify-between text-[11px]">
        <div className="flex items-center gap-1 text-gray-700">
          <span>当前匿名列表总数为:<span className="text-red-500 font-bold">{MOCK_DATA.length}</span>个, 待关联:<span className="text-red-500 font-bold">2</span>个, 待处理:<span className="text-red-500 font-bold">1</span>个</span>
        </div>
        <div className="flex items-center gap-2">
          <button className="bg-[#17a2b8] text-white px-3 py-1 rounded-sm hover:bg-[#138496] transition-colors">刷新列表</button>
        </div>
      </div>

      {/* Action Row */}
      <div className="px-4 py-2 bg-white border-b border-gray-100 flex items-center justify-between">
         <select className="border border-gray-300 rounded-sm px-2 h-7 text-[12px] outline-none bg-white min-w-[120px]">
            <option>请选择海外仓</option>
         </select>
         <div className="flex items-center gap-4 text-[11px] text-gray-500">
            <span>总计 {MOCK_DATA.length} 个记录分为 1 页当前第 1 页，每页</span>
            <select className="border border-gray-300 rounded-sm px-1 h-6 outline-none bg-white">
              <option>100</option>
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

      {/* Main Table */}
      <div className="overflow-auto">
        <table className="w-full text-[12px] text-left border-collapse border-b border-gray-200">
          <thead className="bg-[#f5f7fa] text-gray-600 font-medium">
            <tr className="hover:bg-gray-50 transition-colors">
              <th className="px-3 py-2 border-r border-gray-200 w-12"><input type="checkbox" /> 序号</th>
              <th className="px-3 py-2 border-r border-gray-200">客户名称</th>
              <th className="px-3 py-2 border-r border-gray-200">参考单号</th>
              <th className="px-3 py-2 border-r border-gray-200">Fnsku</th>
              <th className="px-3 py-2 border-r border-gray-100">总箱数</th>
              <th className="px-3 py-2 border-r border-gray-100">重量(kg)</th>
              <th className="px-3 py-2 border-r border-gray-200">目的仓库</th>
              <th className="px-3 py-2 border-r border-gray-200">交货方式</th>
              <th className="px-3 py-2 border-r border-gray-200">状态</th>
              <th className="px-3 py-2 border-r border-gray-200 min-w-[140px]">添加时间</th>
              <th className="px-3 py-2 border-r border-gray-200">推送状态</th>
              <th className="px-3 py-2 border-r border-gray-200">操作</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 border-b border-gray-200">
            {MOCK_DATA.map((item, index) => (
              <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-3 py-2 border-r border-gray-200"><input type="checkbox" /> {index + 1}</td>
                <td className="px-3 py-2 border-r border-gray-200">
                  <div className="flex flex-col items-center">
                    <span>{item.customerName}</span>
                    <span className="text-[10px] text-gray-400">({item.customerCode})</span>
                  </div>
                </td>
                <td className="px-3 py-2 border-r border-gray-200 text-blue-500">{item.refNo}</td>
                <td className="px-3 py-2 border-r border-gray-200 font-mono">{item.fnsku}</td>
                <td className="px-3 py-2 border-r border-gray-100">{item.totalBoxes}</td>
                <td className="px-3 py-2 border-r border-gray-100">{item.weight}</td>
                <td className="px-3 py-2 border-r border-gray-200">{item.warehouse}</td>
                <td className="px-3 py-2 border-r border-gray-200">{item.deliveryMethod}</td>
                <td className="px-3 py-2 border-r border-gray-200">
                  <span className={cn(
                    "px-1.5 py-0.5 rounded-sm",
                    item.status === '待入库' ? "bg-orange-50 text-orange-600" :
                    item.status === '已妥投' || item.status === '已入库' ? "bg-green-50 text-green-600" : "bg-blue-50 text-blue-600"
                  )}>
                    {item.status}
                  </span>
                </td>
                <td className="px-3 py-2 border-r border-gray-200 text-gray-500">{item.addedTime}</td>
                <td className="px-3 py-2 border-r border-gray-200 text-gray-400">{item.pushStatus}</td>
                <td className="px-3 py-2 border-r border-gray-200">
                   <div className="flex items-center justify-center gap-2 text-blue-500">
                      <button className="hover:underline flex items-center gap-0.5"><Info size={12}/>[详情]</button>
                      <button className="hover:underline flex items-center gap-0.5"><Download size={12}/>[导出]</button>
                      <button className="hover:underline flex items-center gap-0.5"><Edit size={12}/>[修改尺寸]</button>
                   </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Statistics Footer */}
      <div className="mt-8 text-center text-[11px] text-gray-500 space-y-2 pb-10">
         <p>共执行 12 个查询，用时 0.027627 秒，Gzip 已禁用，内存占用 5.690 MB</p>
      </div>
    </div>
  );
}
