import React, { useState } from 'react';
import { Search, FileSpreadsheet, Info, Printer, Calendar } from 'lucide-react';
import { cn } from '../lib/utils';

interface ReturnOrderData {
  id: string;
  customerName: string;
  customerCode: string;
  refNo: string;
  totalBoxes: number;
  weight: number;
  warehouse: string;
  deliveryMethod: string;
  status: string;
  addedTime: string;
  pushStatus: string;
}

const MOCK_DATA: ReturnOrderData[] = [
  {
    id: '1',
    customerName: 'qin',
    customerCode: '12014',
    refNo: 'FXTH202512002',
    totalBoxes: 1,
    weight: 5,
    warehouse: '星卓越泰国国仓',
    deliveryMethod: '自寄海外仓',
    status: '海外仓已入库',
    addedTime: '2025-12-03 20:21:42',
    pushStatus: '已完成'
  },
  {
    id: '2',
    customerName: 'yueyang07',
    customerCode: '12021',
    refNo: 'FXTH202512005',
    totalBoxes: 2,
    weight: 15,
    warehouse: '星卓越泰国国仓',
    deliveryMethod: '自寄海外仓',
    status: '待确认',
    addedTime: '2025-12-04 11:30:12',
    pushStatus: '待处理'
  },
  {
    id: '3',
    customerName: 'jinyi',
    customerCode: '12013',
    refNo: 'FXTH202512009',
    totalBoxes: 1,
    weight: 8.5,
    warehouse: '星卓越泰国国仓',
    deliveryMethod: '自寄海外仓',
    status: '海外仓待入库',
    addedTime: '2025-12-04 14:45:33',
    pushStatus: '已推送'
  }
];

export function ReturnOrderList() {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  return (
    <div className="bg-white rounded-sm border border-gray-200 animate-in fade-in duration-500 w-full h-full overflow-hidden">
      {/* Top Filter Bar */}
      <div className="p-3 bg-[#f5f7fa] flex flex-wrap items-center gap-y-3 gap-x-4 border-b border-gray-200 sticky top-0 z-10">
        <div className="flex items-center gap-2">
          <select className="h-7 border border-gray-300 text-[12px] outline-none px-1 bg-white rounded-sm">
            <option>参考单号</option>
          </select>
          <input type="text" placeholder="如有多个请用换行隔开" className="h-7 px-2 border border-gray-300 text-[12px] w-48 outline-none focus:border-blue-400 rounded-sm" />
        </div>

        <div className="flex items-center gap-2">
          <label className="text-[12px] text-gray-600 whitespace-nowrap">客户名称</label>
          <input type="text" className="h-7 px-2 border border-gray-300 text-[12px] w-32 outline-none focus:border-blue-400 rounded-sm" />
        </div>

        <div className="flex items-center gap-2">
          <label className="text-[12px] text-gray-600 whitespace-nowrap">Fnsku</label>
          <input type="text" className="h-7 px-2 border border-gray-300 text-[12px] w-32 outline-none focus:border-blue-400 rounded-sm" />
        </div>

        <div className="flex items-center gap-2">
          <label className="text-[12px] text-gray-600 whitespace-nowrap">装箱号</label>
          <input type="text" className="h-7 px-2 border border-gray-300 text-[12px] w-32 outline-none focus:border-blue-400 rounded-sm" />
        </div>
        
        <div className="flex items-center gap-2">
          <label className="text-[12px] text-gray-600 whitespace-nowrap">时间</label>
          <div className="flex items-center h-7 px-2 border border-gray-300 bg-white rounded-sm text-[12px] text-gray-500 gap-2">
            <span>2024-04-11</span>
            <Calendar size={12} className="text-gray-400" />
          </div>
          <span className="text-gray-400">-</span>
          <div className="flex items-center h-7 px-2 border border-gray-300 bg-white rounded-sm text-[12px] text-gray-500 gap-2">
            <span>2026-05-11</span>
            <Calendar size={12} className="text-gray-400" />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <select className="h-7 border border-gray-300 text-[12px] outline-none px-2 bg-white rounded-sm">
            <option>目的仓库</option>
          </select>
        </div>

        <div className="flex gap-2 ml-auto">
          <button className="bg-[#00a2ff] hover:bg-blue-600 text-white h-7 px-4 text-[12px] rounded-sm flex items-center gap-1">
            <Search size={14} /> 查询
          </button>
          <button className="bg-[#00a2ff] hover:bg-blue-600 text-white h-7 px-4 text-[12px] rounded-sm flex items-center gap-1">
            <FileSpreadsheet size={14} /> 导出Excel
          </button>
        </div>
      </div>

      {/* Main Table */}
      <div className="overflow-auto">
        <table className="w-full text-[12px] text-left border-collapse border-b border-gray-200">
          <thead className="bg-[#f5f7fa] text-gray-600 font-medium">
            <tr className="border-b border-gray-200">
              <th className="px-3 py-2 border-r border-gray-200 w-20">
                <div className="flex items-center gap-2 justify-center">
                  <input type="checkbox" /> 序号
                </div>
              </th>
              <th className="px-3 py-2 border-r border-gray-200">客户名称</th>
              <th className="px-3 py-2 border-r border-gray-200">参考单号</th>
              <th className="px-3 py-2 border-r border-gray-200">总箱数</th>
              <th className="px-3 py-2 border-r border-gray-200">重量(kg)</th>
              <th className="px-3 py-2 border-r border-gray-200">目的仓库</th>
              <th className="px-3 py-2 border-r border-gray-200">交货方式</th>
              <th className="px-3 py-2 border-r border-gray-200">状态</th>
              <th className="px-3 py-2 border-r border-gray-200">添加时间</th>
              <th className="px-3 py-2 border-r border-gray-200">推送状态</th>
              <th className="px-3 py-2 border-r border-gray-200">操作</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 border-b border-gray-200">
            {MOCK_DATA.map((item, index) => (
              <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-3 py-2 border-r border-gray-200">
                  <div className="flex items-center gap-2 justify-center">
                    <input type="checkbox" /> {index + 1}
                  </div>
                </td>
                <td className="px-3 py-2 border-r border-gray-200">
                  <span>{item.customerName}</span>
                  <span className="text-red-500 ml-1 text-[11px]">({item.customerCode})</span>
                </td>
                <td className="px-3 py-2 border-r border-gray-200 text-blue-500 font-medium">{item.refNo}</td>
                <td className="px-3 py-2 border-r border-gray-200">{item.totalBoxes}</td>
                <td className="px-3 py-2 border-r border-gray-200">{item.weight}</td>
                <td className="px-3 py-2 border-r border-gray-200">{item.warehouse}</td>
                <td className="px-3 py-2 border-r border-gray-200">{item.deliveryMethod}</td>
                <td className="px-3 py-2 border-r border-gray-200">{item.status}</td>
                <td className="px-3 py-2 border-r border-gray-200 text-gray-500 whitespace-nowrap">
                  {item.addedTime}
                </td>
                <td className="px-3 py-2 border-r border-gray-200 italic text-gray-400">-</td>
                <td className="px-3 py-2 border-r border-gray-200">
                  <div className="flex items-center justify-center gap-2 text-blue-500">
                    <button className="hover:underline flex items-center gap-0.5"><Info size={12}/>[详情]</button>
                    <button className="hover:underline flex items-center gap-0.5"><Printer size={12}/>[打印]</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Footer */}
      <div className="p-3 bg-white flex flex-wrap items-center justify-between gap-4 border-t border-gray-100">
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 rounded-sm text-[12px] shadow-sm transition-all focus:ring-2 focus:ring-orange-200 outline-none">
          导出所选
        </button>

        <div className="flex items-center gap-4 text-[12px] text-gray-500">
          <span>总计 {MOCK_DATA.length} 个记录分为 1 页当前第 1 页，每页</span>
          <select className="border border-gray-300 rounded-sm px-1 h-6 outline-none focus:border-blue-400 text-[11px]">
            <option>100</option>
            <option>200</option>
          </select>
          <div className="flex items-center gap-1 ml-2">
             <button className="px-1 hover:bg-gray-100 disabled:opacity-30" disabled>第一页</button>
             <button className="px-1 hover:bg-gray-100 disabled:opacity-30" disabled>上一页</button>
             <button className="px-1 hover:bg-gray-100 disabled:opacity-30" disabled>下一页</button>
             <button className="px-1 hover:bg-gray-100 disabled:opacity-30" disabled>最末页</button>
          </div>
          <select className="border border-gray-300 rounded-sm px-1 h-6 outline-none text-[11px]">
            <option>1</option>
          </select>
        </div>
      </div>

      {/* Technical Log Footer */}
      <div className="text-center text-[10px] text-gray-400 py-10">
        共执行 12 个查询，用时 0.027644 秒，Gzip 已禁用，内存占用 5.696 MB
      </div>
    </div>
  );
}
