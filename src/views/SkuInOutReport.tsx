import React from 'react';
import { Calendar } from 'lucide-react';

export function SkuInOutReport() {
  const MOCK_DATA = [
    { id: '1', customer: 'yueyang07', code: '12021', fnsku: 'D12021T8BFJ', warehouse: '星卓越泰国国仓', dsIn: 21, transitIn: 0, totalIn: 21, dsOut: 0, transitOut: 0, totalOut: 0, time: '2025-12-04' },
    { id: '2', customer: 'yueyang01', code: '12015', fnsku: 'D120154AGF2', warehouse: '星卓越泰国国仓', dsIn: 100, transitIn: 0, totalIn: 100, dsOut: 0, transitOut: 0, totalOut: 0, time: '2025-12-04' },
    { id: '3', customer: 'qin', code: '12014', fnsku: 'D12014GK1AA', warehouse: '星卓越泰国国仓', dsIn: 100, transitIn: 0, totalIn: 100, dsOut: 0, transitOut: 0, totalOut: 0, time: '2025-12-04' },
    { id: '4', customer: 'qin', code: '12014', fnsku: 'D12014U4YX1', warehouse: '星卓越泰国国仓', dsIn: 305, transitIn: 0, totalIn: 305, dsOut: 5, transitOut: 0, totalOut: 5, time: '2025-12-03' },
    { id: '5', customer: 'qin', code: '12014', fnsku: 'D12014TCL0Z', warehouse: '星卓越泰国国仓', dsIn: 300, transitIn: 0, totalIn: 300, dsOut: 1, transitOut: 0, totalOut: 1, time: '2025-12-03' },
    { id: '6', customer: 'jinyi', code: '12013', fnsku: 'D120136O4FH', warehouse: '星卓越泰国国仓', dsIn: 100, transitIn: 0, totalIn: 100, dsOut: 0, transitOut: 0, totalOut: 0, time: '2025-12-01' },
    { id: '7', customer: 'fxchenwei', code: '12000', fnsku: 'D12000DLHGJ', warehouse: '星卓越泰国国仓', dsIn: 200, transitIn: 0, totalIn: 200, dsOut: 0, transitOut: 0, totalOut: 0, time: '2025-04-30' },
    { id: '8', customer: 'fxchenwei', code: '12000', fnsku: 'D120007CH2L', warehouse: '星卓越泰国国仓', dsIn: 100, transitIn: 0, totalIn: 100, dsOut: 0, transitOut: 0, totalOut: 0, time: '2025-04-30' },
    { id: '9', customer: 'fxchenwei', code: '12000', fnsku: 'D12000QJXUV', warehouse: '星卓越泰国国仓', dsIn: 297, transitIn: 0, totalIn: 297, dsOut: 0, transitOut: 0, totalOut: 0, time: '2025-04-30' },
    { id: '10', customer: '丫丫', code: '12012', fnsku: 'D12012NBQWF', warehouse: '星卓越泰国国仓', dsIn: 10, transitIn: 0, totalIn: 10, dsOut: 0, transitOut: 0, totalOut: 0, time: '2025-04-29' },
  ];

  return (
    <div className="bg-[#f0f2f5] h-full overflow-hidden font-sans text-gray-700">
      {/* Search Header */}
      <div className="bg-white p-2 border-b border-gray-200 flex flex-wrap items-center gap-2">
        <div className="flex items-center gap-1 border border-gray-300 h-7 px-2 rounded-sm bg-white shadow-sm">
          <span className="text-[12px] text-gray-500 whitespace-nowrap">客户名称</span>
          <input type="text" placeholder="请输入客户名称" className="outline-none text-[12px] w-28 px-1" />
        </div>

        <div className="flex items-center gap-1 border border-gray-300 h-7 px-2 rounded-sm bg-white shadow-sm">
          <span className="text-[12px] text-gray-500 whitespace-nowrap">Fnsku</span>
          <input type="text" placeholder="请输入产品Fnsku" className="outline-none text-[12px] w-28 px-1" />
        </div>

        <div className="flex items-center gap-1 text-[12px] text-gray-500">
          <span className="mx-1">时间</span>
          <div className="flex items-center gap-1 bg-white border border-gray-300 h-7 px-2 rounded-sm shadow-sm cursor-pointer">
            <span className="text-[11px]">2024-04-01</span>
            <Calendar size={12} className="text-gray-400" />
          </div>
          <span className="text-gray-300">-</span>
          <div className="flex items-center gap-1 bg-white border border-gray-300 h-7 px-2 rounded-sm shadow-sm cursor-pointer">
            <span className="text-[11px]">2026-05-11</span>
            <Calendar size={12} className="text-gray-400" />
          </div>
        </div>

        <select className="border border-gray-300 h-7 text-[12px] outline-none px-2 bg-white rounded-sm shadow-sm cursor-pointer min-w-[120px]">
           <option>星卓越泰国仓</option>
           <option>全部仓库</option>
        </select>

        <button className="bg-[#00a2e8] hover:bg-blue-600 text-white px-5 h-7 text-[12px] rounded-sm transition-colors shadow-sm ml-1 font-medium">查询</button>
      </div>

      {/* Table Section */}
      <div className="bg-white m-2 border border-gray-200 rounded-sm overflow-hidden shadow-sm">
        <div className="overflow-auto">
          <table className="w-full border-collapse text-[12px] text-left table-fixed min-w-[1200px]">
            <thead className="bg-[#f5f7fa] text-gray-600 font-medium">
              <tr>
                <th className="px-1 border-r border-gray-200 w-12 px-3 py-2"><input type="checkbox" className="mr-1" />序号</th>
                <th className="px-3 border-r border-gray-200 w-40 py-2">客户名称</th>
                <th className="px-3 border-r border-gray-200 w-32 py-2">Fnsku</th>
                <th className="px-3 border-r border-gray-200 w-32 py-2">仓库名称</th>
                <th className="px-3 border-r border-gray-200 w-24 py-2">代发入库数量</th>
                <th className="px-3 border-r border-gray-200 w-24 py-2">中转入库数量</th>
                <th className="px-3 border-r border-gray-200 w-24 py-2">总入库数量</th>
                <th className="px-3 border-r border-gray-200 w-24 py-2">代发出库数量</th>
                <th className="px-3 border-r border-gray-200 w-24 py-2">中转出库数量</th>
                <th className="px-3 border-r border-gray-200 w-24 py-2">总出库数量</th>
                <th className="px-3 w-32 py-2 border-r border-gray-200">添加时间</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {MOCK_DATA.map((item, index) => (
                <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-1 border-r border-gray-200 px-3 py-2"><input type="checkbox" className="mr-1" />{index + 1}</td>
                  <td className="px-3 border-r border-gray-200 py-2">
                    <span>{item.customer}</span>
                    <span className="text-red-500 font-bold ml-1">({item.code})</span>
                  </td>
                  <td className="px-3 border-r border-gray-200 py-2">{item.fnsku}</td>
                  <td className="px-3 border-r border-gray-200 py-2">{item.warehouse}</td>
                  <td className="px-3 border-r border-gray-200 py-2">{item.dsIn}</td>
                  <td className="px-3 border-r border-gray-200 py-2">{item.transitIn}</td>
                  <td className="px-3 border-r border-gray-200 py-2">{item.totalIn}</td>
                  <td className="px-3 border-r border-gray-200 py-2">{item.dsOut}</td>
                  <td className="px-3 border-r border-gray-200 py-2">{item.transitOut}</td>
                  <td className="px-3 border-r border-gray-200 py-2">{item.totalOut}</td>
                  <td className="px-3 py-2 border-r border-gray-200">{item.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination Section */}
        <div className="p-2 border-t border-gray-200 bg-white flex items-center justify-end whitespace-nowrap overflow-hidden">
          <div className="flex items-center gap-4 text-[11px] text-gray-500">
            <span>总计 12 个记录分为 2 页当前第 1 页，每页</span>
            <select className="border border-gray-300 rounded-sm px-1 h-6 outline-none bg-white">
              <option>10</option>
              <option>100</option>
            </select>
            <div className="flex items-center gap-1 border-l pl-4 border-gray-200 font-normal">
               <button className="px-2 h-6 hover:text-blue-500">第一页</button>
               <button className="px-2 h-6 hover:text-blue-500">上一页</button>
               <button className="px-2 h-6 hover:text-blue-500">下一页</button>
               <button className="px-2 h-6 hover:text-blue-500 transition-colors">最末页</button>
               <select className="border border-gray-300 rounded-sm px-1 h-6 ml-2 outline-none">
                  <option>1</option>
               </select>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Meta */}
      <div className="mt-8 text-center text-[11px] text-gray-400 pb-10 select-none italic-normal">
         <p>共执行 6 个查询，用时 0.027539 秒，Gzip 已禁用，内存占用 6.524 MB</p>
      </div>
    </div>
  );
}
