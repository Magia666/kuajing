import React, { useState } from 'react';

export function SortingPortManagement() {
  const [view, setView] = useState<'list' | 'add'>('list');

  if (view === 'add') {
    return (
      <div className="bg-white h-full overflow-hidden font-sans text-gray-700 p-4">
        <div className="flex items-center gap-2 mb-8 border-l-4 border-blue-500 pl-2">
          <span className="text-[14px] font-bold text-blue-500">添加工单</span>
        </div>

        <div className="max-w-2xl mx-auto mt-10">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <label className="w-32 text-right text-[12px] text-gray-600">
                <span className="text-red-500 mr-1">*</span>分拣口
              </label>
              <input 
                type="text" 
                className="flex-1 border border-gray-300 rounded-sm h-9 px-3 outline-none text-[12px] focus:border-blue-400 transition-colors"
              />
            </div>

            <div className="flex items-center gap-4">
              <label className="w-32 text-right text-[12px] text-gray-600">
                <span className="text-red-500 mr-1">*</span>分拣规则
              </label>
              <input 
                type="text" 
                className="flex-1 border border-gray-300 rounded-sm h-9 px-3 outline-none text-[12px] focus:border-blue-400 transition-colors"
              />
            </div>

            <div className="flex items-center gap-4">
              <label className="w-32 text-right text-[12px] text-gray-600">
                <span className="text-red-500 mr-1">*</span>分拣最大重量
              </label>
              <input 
                type="text" 
                className="flex-1 border border-gray-300 rounded-sm h-9 px-3 outline-none text-[12px] focus:border-blue-400 transition-colors"
              />
            </div>

            <div className="flex justify-end pt-4">
              <button 
                onClick={() => setView('list')}
                className="bg-[#00a2e8] hover:bg-blue-600 text-white px-10 h-10 text-[13px] rounded-sm transition-colors shadow-sm font-medium"
              >
                提交
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#f0f2f5] h-full overflow-hidden font-sans text-gray-700">
      {/* Search Header */}
      <div className="bg-white p-2 border-b border-gray-200 flex flex-wrap items-center gap-2">
        <div className="flex items-center gap-1 border border-gray-300 h-8 px-2 bg-white rounded-sm">
           <span className="text-[12px] text-gray-500">分拣口</span>
           <input type="text" placeholder="关键词" className="outline-none text-[12px] ml-2 w-32" />
        </div>

        <button className="bg-[#00a2e8] hover:bg-blue-600 text-white px-5 h-8 text-[12px] rounded-sm transition-colors shadow-sm font-medium">查询</button>
        <button 
          onClick={() => setView('add')}
          className="bg-[#00a2e8] hover:bg-blue-600 text-white px-5 h-8 text-[12px] rounded-sm transition-colors shadow-sm font-medium"
        >
          添加分拣口
        </button>
      </div>

      {/* Table Section */}
      <div className="bg-white m-2 border border-gray-200 rounded-sm overflow-hidden shadow-sm">
        <div className="overflow-auto">
          <table className="w-full border-collapse text-[12px] text-left">
            <thead className="bg-[#f5f7fa] text-gray-600 font-medium">
              <tr>
                <th className="px-3 border-r border-gray-200 w-24 py-2">
                  <div className="flex items-center justify-center gap-1">
                    <input type="checkbox" />
                    <span>序号</span>
                  </div>
                </th>
                <th className="px-3 border-r border-gray-200 min-w-[150px] py-2">分拣口</th>
                <th className="px-3 border-r border-gray-200 min-w-[150px] py-2">分拣规则</th>
                <th className="px-3 border-r border-gray-200 min-w-[150px] py-2">分拣最大重量</th>
                <th className="px-3 border-r border-gray-200 min-w-[180px] py-2">添加时间</th>
                <th className="px-3 min-w-[120px] py-2 border-r border-gray-200">操作</th>
              </tr>
            </thead>
            <tbody>
              {[
                { id: '1', port: 'A01', rule: 'SKU分拣', maxWeight: '50kg', time: '2026-05-10 14:20:00' },
                { id: '2', port: 'A02', rule: '国家分拣', maxWeight: '30kg', time: '2026-05-11 09:10:00' },
                { id: '3', port: 'B01', rule: '重量分拣', maxWeight: '100kg', time: '2026-05-11 08:30:00' },
              ].map((item, idx) => (
                <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-3 border-r border-gray-200 py-2">
                    <div className="flex items-center justify-center gap-1">
                      <input type="checkbox" />
                      <span>{idx + 1}</span>
                    </div>
                  </td>
                  <td className="px-3 border-r border-gray-200 py-2">{item.port}</td>
                  <td className="px-3 border-r border-gray-200 py-2">{item.rule}</td>
                  <td className="px-3 border-r border-gray-200 py-2">{item.maxWeight}</td>
                  <td className="px-3 border-r border-gray-200 text-gray-500 py-2">{item.time}</td>
                  <td className="px-3 text-blue-500 cursor-pointer py-2 border-r border-gray-200">
                    <span className="hover:underline mx-1">[编辑]</span>
                    <span className="hover:underline mx-1">[删除]</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination Section */}
        <div className="p-2 border-t border-gray-200 bg-white flex items-center justify-end whitespace-nowrap overflow-hidden">
          <div className="flex items-center gap-4 text-[11px] text-gray-500">
            <span>总计 0 个记录分为 1 页当前第 1 页，每页</span>
            <select className="border border-gray-300 rounded-sm px-1 h-6 outline-none bg-white">
              <option>10</option>
            </select>
            <div className="flex items-center gap-1 border-l pl-4 border-gray-200 font-normal ml-2">
               <button className="px-2 h-6 hover:text-blue-500">第一页</button>
               <button className="px-2 h-6 hover:text-blue-500">上一页</button>
               <button className="px-2 h-6 hover:text-blue-500">下一页</button>
               <button className="px-2 h-6 hover:text-blue-500 transition-colors">最末页</button>
               <select className="border border-gray-300 rounded-sm px-1 h-6 ml-1 outline-none">
                  <option>1</option>
               </select>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Meta */}
      <div className="mt-8 text-center text-[11px] text-gray-400 pb-10 italic-normal select-none">
         <p>共执行 8 个查询，用时 0.037044 秒，Gzip 已禁用，内存占用 7.169 MB</p>
      </div>
    </div>
  );
}
