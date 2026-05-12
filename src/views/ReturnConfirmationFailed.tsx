import React, { useState } from 'react';
import { Search, FileSpreadsheet, Calendar } from 'lucide-react';
import { cn } from '../lib/utils';

export function ReturnConfirmationFailed() {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const mockData = [
    {
      id: 'RET-FAIL-001',
      customer: '武汉云航海跨境贸易',
      refNo: 'FAIL-991188',
      boxes: 3,
      weight: 35.5,
      warehouse: '待处理异常仓',
      delivery: '专线',
      status: '确认未通过',
      createdAt: '2024-05-07 10:10',
      pushStatus: '推送失败'
    },
    {
      id: 'RET-FAIL-002',
      customer: '成都市锦瑟电子商务',
      refNo: 'FAIL-882277',
      boxes: 6,
      weight: 62.1,
      warehouse: '待处理异常仓',
      delivery: '空派',
      status: '确认未通过',
      createdAt: '2024-05-07 14:50',
      pushStatus: '推送失败'
    }
  ];

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
            <span>2020-04-11</span>
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
        <table className="w-full text-[12px] text-left border-collapse min-w-[1400px] border-b border-gray-200">
          <thead className="bg-[#f5f7fa] text-gray-600 font-medium">
            <tr>
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
          <tbody>
            {mockData.map((item, index) => (
              <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-3 py-3 border-r border-gray-200 py-2">
                  <div className="flex items-center gap-2 justify-center">
                    <input type="checkbox" /> {index + 1}
                  </div>
                </td>
                <td className="px-3 py-3 border-r border-gray-200 text-blue-600 cursor-pointer hover:underline py-2">{item.customer}</td>
                <td className="px-3 py-3 border-r border-gray-200 py-2">{item.refNo}</td>
                <td className="px-3 py-3 border-r border-gray-200 font-medium py-2">{item.boxes}</td>
                <td className="px-3 py-3 border-r border-gray-200 py-2">{item.weight}</td>
                <td className="px-3 py-3 border-r border-gray-200 py-2">{item.warehouse}</td>
                <td className="px-3 py-3 border-r border-gray-200 py-2">{item.delivery}</td>
                <td className="px-3 py-3 border-r border-gray-200 py-2">
                  <span className="px-2 py-0.5 rounded-full bg-red-100 text-red-600 text-[10px] whitespace-nowrap">{item.status}</span>
                </td>
                <td className="px-3 py-3 border-r border-gray-200 text-gray-500 py-2">{item.createdAt}</td>
                <td className="px-3 py-3 border-r border-gray-200 py-2">
                   <span className="text-red-600 underline cursor-pointer">查看原因</span>
                </td>
                <td className="px-3 py-3 py-2 border-r border-gray-200">
                  <div className="flex items-center justify-center gap-2">
                    <button className="text-blue-500 hover:text-blue-700">重新编辑</button>
                    <button className="text-red-500 hover:text-red-700">作废</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Footer */}
      <div className="p-3 bg-white flex flex-wrap items-center justify-end border-t border-gray-200">
        <div className="flex items-center gap-4 text-[12px] text-gray-500">
          <span>总计 {mockData.length} 个记录分为 1 页当前第 1 页，每页</span>
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
        共执行 12 个查询，用时 0.023805 秒，Gzip 已禁用，内存占用 5.695 MB
      </div>
    </div>
  );
}
