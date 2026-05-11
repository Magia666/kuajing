import React from 'react';

export function SortingFlow() {
  const MOCK_FLOW = [
    { id: '1', port: 'A01', refNo: 'REF20260511001', outNo: 'EXP20260511001', weight: '1.25kg', status: '成功', time: '2026-05-11 09:30:15' },
    { id: '2', port: 'A02', refNo: 'REF20260511002', outNo: 'EXP20260511002', weight: '0.85kg', status: '成功', time: '2026-05-11 09:28:40' },
    { id: '3', port: 'A01', refNo: 'REF20260511003', outNo: 'EXP20260511003', weight: '2.10kg', status: '失败', time: '2026-05-11 09:25:00' },
    { id: '4', port: 'B01', refNo: 'REF20260511004', outNo: 'EXP20260511004', weight: '3.50kg', status: '成功', time: '2026-05-11 09:20:12' },
  ];

  return (
    <div className="bg-[#f0f2f5] min-h-screen font-sans text-gray-700">
      {/* Search Header */}
      <div className="bg-white p-2 border-b border-gray-200 flex flex-wrap items-center gap-2">
        <div className="flex items-center gap-1 border border-gray-300 h-8 px-2 bg-white rounded-sm">
           <span className="text-[12px] text-gray-500 whitespace-nowrap">分拣口</span>
           <input type="text" placeholder="关键词" className="outline-none text-[12px] ml-2 w-24" />
        </div>

        <div className="flex items-center gap-1 border border-gray-300 h-8 px-2 bg-white rounded-sm">
           <span className="text-[12px] text-gray-500 whitespace-nowrap">参考单号</span>
           <input type="text" placeholder="参考单号" className="outline-none text-[12px] ml-2 w-24" />
        </div>

        <div className="flex items-center gap-1 border border-gray-300 h-8 px-2 bg-white rounded-sm">
           <span className="text-[12px] text-gray-500 whitespace-nowrap">出库单号</span>
           <input type="text" placeholder="出库单号" className="outline-none text-[12px] ml-2 w-24" />
        </div>

        <button className="bg-[#00a2e8] hover:bg-blue-600 text-white px-6 h-8 text-[12px] rounded-sm transition-colors shadow-sm font-medium">查询</button>
      </div>

      {/* Table Section */}
      <div className="bg-white m-2 border border-gray-200 rounded-sm overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-[12px] text-left">
            <thead className="bg-[#f5f7fa] text-gray-600 font-medium">
              <tr>
                <th className="px-3 border-r border-gray-200 w-24 py-2">
                  <div className="flex items-center justify-center gap-1">
                    <input type="checkbox" />
                    <span>序号</span>
                  </div>
                </th>
                <th className="px-3 border-r border-gray-200 min-w-[120px] py-2">分拣口</th>
                <th className="px-3 border-r border-gray-200 min-w-[150px] py-2">参考单号</th>
                <th className="px-3 border-r border-gray-200 min-w-[150px] py-2">出库单号</th>
                <th className="px-3 border-r border-gray-200 min-w-[100px] py-2">重量</th>
                <th className="px-3 border-r border-gray-200 min-w-[100px] py-2">状态</th>
                <th className="px-3 border-r border-gray-200 min-w-[180px] py-2">添加时间</th>
                <th className="px-3 min-w-[100px] py-2 border-r border-gray-200">操作</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {MOCK_FLOW.map((item, idx) => (
                <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-3 border-r border-gray-200 py-2">
                    <div className="flex items-center justify-center gap-1 font-normal">
                      <input type="checkbox" />
                      <span>{idx + 1}</span>
                    </div>
                  </td>
                  <td className="px-3 border-r border-gray-200 py-2">{item.port}</td>
                  <td className="px-3 border-r border-gray-200 text-blue-500 cursor-pointer py-2">{item.refNo}</td>
                  <td className="px-3 border-r border-gray-200 py-2">{item.outNo}</td>
                  <td className="px-3 border-r border-gray-200 py-2">{item.weight}</td>
                  <td className="px-3 border-r border-gray-200 font-normal py-2">
                    <span className={item.status === '成功' ? 'text-green-500' : 'text-red-500'}>{item.status}</span>
                  </td>
                  <td className="px-3 border-r border-gray-200 text-gray-500 font-normal py-2">{item.time}</td>
                  <td className="px-3 font-normal text-blue-500 cursor-pointer py-2 border-r border-gray-200">
                    <span className="hover:underline">[详情]</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination Section */}
        <div className="p-2 border-t border-gray-200 bg-white flex items-center justify-end whitespace-nowrap overflow-hidden">
          <div className="flex items-center gap-4 text-[11px] text-gray-500">
            <span>总计 {MOCK_FLOW.length} 个记录分为 1 页当前第 1 页，每页</span>
            <select className="border border-gray-300 rounded-sm px-1 h-6 outline-none bg-white">
              <option>10</option>
            </select>
            <div className="flex items-center gap-1 ml-4 border-l pl-4 border-gray-200 font-normal whitespace-nowrap">
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
      <div className="mt-8 text-center text-[11px] text-gray-400 pb-10 italic-normal select-none">
         <p>共执行 8 个查询，用时 0.036101 秒，Gzip 已禁用，内存占用 7.168 MB</p>
      </div>
    </div>
  );
}
