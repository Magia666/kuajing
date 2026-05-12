import React from 'react';

export function WarehouseListConfig() {
  const MOCK_DATA = [
    { id: '1', nameCn: '星卓越泰国国仓', nameEn: '星卓越泰国国仓', code: '星卓越泰国国仓', country: '泰国', contact: '丫丫', volume: '1000.00', isFirstLeg: '', sort: '0', addTime: '2025-03-25 11:06:57', status: '启用' },
  ];

  return (
    <div className="bg-[#f0f2f5] h-full overflow-hidden font-sans text-gray-700">
      <div className="bg-white p-2 border-b border-gray-200 flex items-center gap-2">
        <div className="flex items-center gap-1 border border-gray-300 h-8 px-2 bg-white rounded-sm">
           <span className="text-[12px] text-gray-500 whitespace-nowrap">仓库名称</span>
           <input type="text" className="outline-none text-[12px] ml-2 w-32" />
        </div>
        
        <select className="border border-gray-300 h-8 text-[12px] outline-none px-2 bg-white rounded-sm shadow-sm cursor-pointer min-w-[100px]">
           <option>全部状态</option>
        </select>

        <button className="bg-[#00a2e8] hover:bg-blue-600 text-white px-5 h-8 text-[12px] rounded-sm transition-colors shadow-sm font-medium">查询</button>
        <button className="bg-[#00a2e8] hover:bg-blue-600 text-white px-5 h-8 text-[12px] rounded-sm transition-colors shadow-sm font-medium">添加仓库</button>
      </div>

      <div className="bg-white m-2 border border-gray-200 rounded-sm overflow-hidden shadow-sm">
        <div className="overflow-auto">
          <table className="w-full border-collapse text-[12px] text-left border-b border-gray-200">
            <thead className="bg-[#f5f7fa] text-gray-600 font-medium">
              <tr>
                <th className="px-3 border-r border-gray-200 w-16 whitespace-nowrap py-2">
                  <div className="flex items-center justify-center gap-1">
                    <input type="checkbox" />
                    <span>序号</span>
                  </div>
                </th>
                <th className="px-3 border-r border-gray-200 min-w-[120px] py-2">仓库中文名称</th>
                <th className="px-3 border-r border-gray-200 min-w-[120px] py-2">仓库英文名称</th>
                <th className="px-3 border-r border-gray-200 min-w-[120px] py-2">仓库编码</th>
                <th className="px-3 border-r border-gray-200 min-w-[80px] py-2">国家</th>
                <th className="px-3 border-r border-gray-200 min-w-[100px] py-2">仓库联系人</th>
                <th className="px-3 border-r border-gray-200 min-w-[100px] py-2">仓库体积(m³)</th>
                <th className="px-3 border-r border-gray-200 min-w-[100px] py-2">是否为头程仓</th>
                <th className="px-3 border-r border-gray-200 min-w-[60px] py-2">排序</th>
                <th className="px-3 border-r border-gray-200 min-w-[150px] py-2">添加时间</th>
                <th className="px-3 border-r border-gray-200 min-w-[60px] py-2">状态</th>
                <th className="px-3 min-w-[100px] py-2 border-r border-gray-200">操作</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 border-b border-gray-200">
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
                  <td className="px-3 border-r border-gray-200 py-2">{item.code}</td>
                  <td className="px-3 border-r border-gray-200 py-2">{item.country}</td>
                  <td className="px-3 border-r border-gray-200 py-2">{item.contact}</td>
                  <td className="px-3 border-r border-gray-200 py-2">{item.volume}</td>
                  <td className="px-3 border-r border-gray-200 py-2">{item.isFirstLeg}</td>
                  <td className="px-3 border-r border-gray-200 py-2">{item.sort}</td>
                  <td className="px-3 border-r border-gray-200 text-gray-500 py-2">{item.addTime}</td>
                  <td className="px-3 border-r border-gray-200 text-red-500 py-2">{item.status}</td>
                  <td className="px-3 text-blue-500 cursor-pointer py-2 border-r border-gray-200">
                    <span className="hover:underline mx-1">[编辑]</span>
                    <span className="hover:underline mx-1">[删除]</span>
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
         <p>共执行 4 个查询，用时 0.013669 秒，Gzip 已禁用，内存占用 4.385 MB</p>
      </div>
    </div>
  );
}
