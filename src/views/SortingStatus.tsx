import React from 'react';

export function SortingStatus() {
  const MOCK_STATUS = [
    { id: '1', port: 'A01', maxWeight: '50.00kg', currentWeight: '12.45kg', isFull: '未满' },
    { id: '2', port: 'A02', maxWeight: '30.00kg', currentWeight: '29.90kg', isFull: '即将装满' },
    { id: '3', port: 'B01', maxWeight: '100.00kg', currentWeight: '100.00kg', isFull: '已满' },
    { id: '4', port: 'B02', maxWeight: '100.00kg', currentWeight: '0.00kg', isFull: '空闲' },
  ];

  return (
    <div className="bg-[#f0f2f5] h-full overflow-hidden font-sans text-gray-700">
      {/* Search Header */}
      <div className="bg-white p-2 border-b border-gray-200 flex items-center justify-start">
        <button className="bg-[#00a2e8] hover:bg-blue-600 text-white px-8 h-8 text-[12px] rounded-sm transition-colors shadow-sm font-medium">查询</button>
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
                <th className="px-3 border-r border-gray-200 min-w-[150px] py-2">分拣最大重量</th>
                <th className="px-3 border-r border-gray-200 min-w-[150px] py-2">当前重量</th>
                <th className="px-3 border-r border-gray-200 min-w-[150px] py-2">是否装满</th>
                <th className="px-3 min-w-[120px] py-2 border-r border-gray-200">操作</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {MOCK_STATUS.map((item, idx) => (
                <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-3 border-r border-gray-200 py-2">
                    <div className="flex items-center justify-center gap-1 font-normal">
                      <input type="checkbox" />
                      <span>{idx + 1}</span>
                    </div>
                  </td>
                  <td className="px-3 border-r border-gray-200 font-normal py-2">{item.port}</td>
                  <td className="px-3 border-r border-gray-200 font-normal py-2">{item.maxWeight}</td>
                  <td className="px-3 border-r border-gray-200 font-normal py-2">{item.currentWeight}</td>
                  <td className="px-3 border-r border-gray-200 font-normal py-2">
                    <span className={`px-2 py-0.5 rounded-full text-[10px] ${
                      item.isFull === '已满' ? 'bg-red-50 text-red-600 border border-red-100' :
                      item.isFull === '即将装满' ? 'bg-orange-50 text-orange-600 border border-orange-100' :
                      item.isFull === '空闲' ? 'bg-gray-50 text-gray-400 border border-gray-100' :
                      'bg-green-50 text-green-600 border border-green-100'
                    }`}>
                      {item.isFull}
                    </span>
                  </td>
                  <td className="px-3 font-normal text-blue-500 cursor-pointer py-2 border-r border-gray-200">
                    <span className="hover:underline mx-1">[清空分拣口]</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Footer Meta */}
      <div className="mt-8 text-center text-[11px] text-gray-400 pb-10 italic-normal select-none">
         <p>共执行 3 个查询，用时 0.029871 秒，Gzip 已禁用，内存占用 7.154 MB</p>
      </div>
    </div>
  );
}
