import React from 'react';

export function WhUsageRate() {
  const MOCK_DATA = [
    { id: '1', nameCn: '星卓越泰国国仓', nameEn: '星卓越泰国国仓', volume: '1000.00', dsVolume: '7.03', transitVolume: '0', totalStorageVolume: '7.03', usageRate: '0.7%', totalShelves: '1', occupiedShelves: '1', shelfUsage: '100%' },
  ];

  return (
    <div className="bg-[#f0f2f5] min-h-screen font-sans text-gray-700">
      <div className="bg-white p-2 border-b border-gray-200 flex items-center gap-2">
        <div className="flex items-center border border-gray-300 h-8 px-2 bg-white rounded-sm shadow-sm">
           <span className="text-[12px] text-gray-500 whitespace-nowrap">仓库名称</span>
           <input type="text" className="outline-none text-[12px] ml-2 w-32" />
        </div>

        <button className="bg-[#00a2e8] hover:bg-blue-600 text-white px-5 h-8 text-[12px] rounded-sm transition-colors shadow-sm font-medium">查询</button>
        <button className="bg-[#00a2e8] hover:bg-blue-600 text-white px-5 h-8 text-[12px] rounded-sm transition-colors shadow-sm font-medium">仓库使用率</button>
      </div>

      <div className="bg-white m-2 border border-gray-200 rounded-sm overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-[12px] text-left">
            <thead className="bg-[#f5f7fa] text-gray-600 font-medium">
              <tr>
                <th className="px-3 border-r border-gray-200 w-16 py-2">
                  <div className="flex items-center justify-center gap-1">
                    <input type="checkbox" />
                    <span>序号</span>
                  </div>
                </th>
                <th className="px-3 border-r border-gray-200 min-w-[120px] py-2">仓库中文名称</th>
                <th className="px-3 border-r border-gray-200 min-w-[120px] py-2">仓库英文名称</th>
                <th className="px-3 border-r border-gray-200 min-w-[100px] py-2">仓库体积</th>
                <th className="px-3 border-r border-gray-200 min-w-[100px] py-2">代发体积</th>
                <th className="px-3 border-r border-gray-200 min-w-[100px] py-2">中转体积</th>
                <th className="px-3 border-r border-gray-200 min-w-[100px] py-2">总存放体积</th>
                <th className="px-3 border-r border-gray-200 min-w-[100px] py-2">仓库使用率</th>
                <th className="px-3 border-r border-gray-200 min-w-[100px] py-2">总货架数量</th>
                <th className="px-3 border-r border-gray-200 min-w-[100px] py-2">已存放货架</th>
                <th className="px-3 min-w-[100px] py-2 border-r border-gray-200">货架上架率</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {MOCK_DATA.map((item, idx) => (
                <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-3 border-r border-gray-200 py-2">
                    <div className="flex items-center justify-center gap-1 font-normal">
                      <input type="checkbox" />
                      <span>{idx + 1}</span>
                    </div>
                  </td>
                  <td className="px-3 border-r border-gray-200 py-2">{item.nameCn}</td>
                  <td className="px-3 border-r border-gray-200 py-2">{item.nameEn}</td>
                  <td className="px-3 border-r border-gray-200 py-2">{item.volume}</td>
                  <td className="px-3 border-r border-gray-200 py-2">{item.dsVolume}</td>
                  <td className="px-3 border-r border-gray-200 py-2">{item.transitVolume}</td>
                  <td className="px-3 border-r border-gray-200 py-2">{item.totalStorageVolume}</td>
                  <td className="px-3 border-r border-gray-200 font-bold text-red-500 py-2">{item.usageRate}</td>
                  <td className="px-3 border-r border-gray-200 py-2">{item.totalShelves}</td>
                  <td className="px-3 border-r border-gray-200 py-2">{item.occupiedShelves}</td>
                  <td className="px-3 font-bold text-red-500 py-2 border-r border-gray-200">{item.shelfUsage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-2 border-t border-gray-200 bg-white flex items-center justify-end">
          <div className="flex items-center gap-4 text-[11px] text-gray-500">
            <span>总计 1 个记录分为 1 页当前第 1 页，每页</span>
            <select className="border border-gray-300 rounded-sm px-1 h-6 outline-none bg-white">
              <option>10</option>
            </select>
            <div className="flex items-center gap-1 border-l pl-4 border-gray-200 font-normal">
               <button className="px-2 h-6 hover:text-blue-500">第一页</button>
               <button className="px-2 h-6 hover:text-blue-500">上一页</button>
               <button className="px-2 h-6 hover:text-blue-500">下一页</button>
               <button className="px-2 h-6 hover:text-blue-500">最末页</button>
               <select className="border border-gray-300 rounded-sm px-1 h-6 ml-2 outline-none">
                  <option>1</option>
               </select>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-[11px] text-gray-400 pb-10">
         <p>共执行 4 个查询，用时 0.013516 秒，Gzip 已禁用，内存占用 4.385 MB</p>
      </div>
    </div>
  );
}
