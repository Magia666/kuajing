import React from 'react';

export function ShelfMgmt() {
  const MOCK_DATA = [
    { id: '1', whName: '星卓越泰国国仓', zone: '1', shelfName: '1', barcodeStart: '1232', shelfQty: '1', shelfStart: '0', layers: '1', layerStart: '1', capacity: '0', type: '小货架', sort: '50', status: '显示' },
  ];

  return (
    <div className="bg-[#f0f2f5] min-h-screen font-sans text-gray-700">
      <div className="bg-white p-2 border-b border-gray-200 flex items-center gap-2">
        <select className="border border-gray-300 h-8 text-[12px] outline-none px-2 bg-white rounded-sm shadow-sm cursor-pointer min-w-[120px]">
           <option>仓库名称</option>
        </select>
        
        <div className="flex items-center border border-gray-300 h-8 bg-white rounded-sm overflow-hidden shadow-sm">
           <span className="text-[12px] text-gray-500 px-2 bg-gray-50 border-r border-gray-300 h-full flex items-center whitespace-nowrap">区域名称</span>
           <input type="text" placeholder="请输入货架区域名称" className="outline-none text-[12px] px-2 w-40" />
        </div>

        <button className="bg-[#00a2e8] hover:bg-blue-600 text-white px-5 h-8 text-[12px] rounded-sm transition-colors shadow-sm font-medium">查询</button>
        <button className="bg-[#00a2e8] hover:bg-blue-600 text-white px-5 h-8 text-[12px] rounded-sm transition-colors shadow-sm font-medium flex items-center gap-1">新增货架</button>
      </div>

      <div className="bg-white m-2 border border-gray-200 rounded-sm overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-[12px] text-left">
            <thead className="bg-[#f5f7fa] text-gray-600 font-medium">
              <tr>
                <th className="px-3 border-r border-gray-200 w-16 py-2">序号</th>
                <th className="px-3 border-r border-gray-200 min-w-[120px] py-2">归属仓库</th>
                <th className="px-3 border-r border-gray-200 min-w-[80px] py-2">区域名称</th>
                <th className="px-3 border-r border-gray-200 min-w-[80px] py-2">货架名称</th>
                <th className="px-3 border-r border-gray-200 min-w-[100px] py-2">条形码起始号</th>
                <th className="px-3 border-r border-gray-200 min-w-[80px] py-2">货架数量</th>
                <th className="px-3 border-r border-gray-200 min-w-[80px] py-2">货架起始号</th>
                <th className="px-3 border-r border-gray-200 min-w-[60px] py-2">层数</th>
                <th className="px-3 border-r border-gray-200 min-w-[80px] py-2">层数起始号</th>
                <th className="px-3 border-r border-gray-200 min-w-[80px] py-2">库存容量</th>
                <th className="px-3 border-r border-gray-200 min-w-[80px] py-2">货架类型</th>
                <th className="px-3 border-r border-gray-200 min-w-[60px] py-2">排序</th>
                <th className="px-3 border-r border-gray-200 min-w-[60px] py-2">状态</th>
                <th className="px-3 min-w-[120px] py-2 border-r border-gray-200">操作</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {MOCK_DATA.map((item, idx) => (
                <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-3 border-r border-gray-200 py-2">{idx + 1}</td>
                  <td className="px-3 border-r border-gray-200 text-blue-500 cursor-pointer py-2">{item.whName}</td>
                  <td className="px-3 border-r border-gray-200 text-blue-500 cursor-pointer py-2">{item.zone}</td>
                  <td className="px-3 border-r border-gray-200 text-blue-500 cursor-pointer py-2">{item.shelfName}</td>
                  <td className="px-3 border-r border-gray-200 py-2">{item.barcodeStart}</td>
                  <td className="px-3 border-r border-gray-200 py-2">{item.shelfQty}</td>
                  <td className="px-3 border-r border-gray-200 py-2">{item.shelfStart}</td>
                  <td className="px-3 border-r border-gray-200 py-2">{item.layers}</td>
                  <td className="px-3 border-r border-gray-200 py-2">{item.layerStart}</td>
                  <td className="px-3 border-r border-gray-200 py-2">{item.capacity}</td>
                  <td className="px-3 border-r border-gray-200 py-2">{item.type}</td>
                  <td className="px-3 border-r border-gray-200 py-2">{item.sort}</td>
                  <td className="px-3 border-r border-gray-200 py-2">{item.status}</td>
                  <td className="px-3 text-blue-500 cursor-pointer py-2 border-r border-gray-200">
                    <span className="hover:underline mx-1">[查看]</span>
                    <span className="hover:underline mx-1">[生成]</span>
                    <span className="hover:underline mx-1">[移除]</span>
                  </td>
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
         <p>共执行 6 个查询，用时 0.014002 秒，Gzip 已禁用，内存占用 4.528 MB</p>
      </div>
    </div>
  );
}
