import React from 'react';

export function FBAWarehouse() {
  const MOCK_DATA = [
    { id: '1', code: 'Amazon-YYZ4', country: '加拿大', contact: '', zip: 'L6Y 0C9', address: 'Brampton 8050 Heritage Road', time: '2021-03-19 14:40:56' },
    { id: '2', code: 'Amazon-YYZ6', country: '加拿大', contact: '', zip: 'L6Y 0C9', address: 'Brampton 8050 Heritage Road', time: '2021-03-19 14:40:56' },
    { id: '3', code: 'Amazon-YVR3', country: '加拿大', contact: '', zip: 'V3L 5H4', address: 'New Westminster 109 Braid Street', time: '2021-03-19 14:40:56' },
    { id: '4', code: 'Amazon-YVR2', country: '加拿大', contact: '', zip: 'V3M 5Y9', address: 'Derwent PL Delta 450 Derwent', time: '2021-03-19 14:40:56' },
    { id: '5', code: 'Amazon-YVR4', country: '加拿大', contact: '', zip: 'V4M 0B9', address: 'Tsawwassen 4189 Salish Sea Way', time: '2021-03-19 14:40:56' },
    { id: '6', code: 'Amazon-YYC1-0E0', country: '加拿大', contact: '', zip: 'TOM 0E0', address: 'Calgary Col Robertson Wy and Crossiron Blvd', time: '2021-03-19 14:40:56' },
    { id: '7', code: 'Amazon-YYC1', country: '加拿大', contact: '', zip: 'T4A 1C6', address: 'Calgary 293069 Colonel Robertson', time: '2021-03-19 14:40:56' },
    { id: '8', code: 'Amazon-YOW1', country: '加拿大', contact: '', zip: 'K4B 0L3', address: 'Navan 5225 Boundary Road', time: '2021-03-19 14:40:56' },
    { id: '9', code: 'Amazon-RIC2', country: '美国', contact: '', zip: '23836', address: 'Chester 1901 Meadowville Technology Pkwy', time: '2021-03-19 14:40:55' },
    { id: '10', code: 'Amazon-RIC3', country: '美国', contact: '', zip: '23836', address: 'Chester across the street fm 1901', time: '2021-03-19 14:40:55' },
  ];

  return (
    <div className="bg-[#f0f2f5] h-full overflow-hidden font-sans text-gray-700">
      <div className="bg-white p-2 border-b border-gray-200 flex items-start gap-2">
        <div className="flex border border-gray-300 px-2 bg-white rounded-sm h-16 items-start py-1">
           <span className="text-[12px] text-gray-500 whitespace-nowrap mt-1">仓库名称</span>
           <textarea className="outline-none text-[12px] ml-2 w-48 resize-none h-full" />
        </div>
        
        <div className="flex items-center gap-1 h-8 mt-4">
          <span className="text-[12px] text-gray-500 mx-1">国家</span>
          <select className="border border-gray-300 h-8 text-[12px] outline-none px-2 bg-white rounded-sm shadow-sm cursor-pointer min-w-[100px]">
             <option>全部国家</option>
          </select>
          <button className="bg-[#00a2e8] hover:bg-blue-600 text-white px-5 h-8 text-[12px] rounded-sm transition-colors shadow-sm font-medium ml-1">查询</button>
          <button className="bg-[#00a2e8] hover:bg-blue-600 text-white px-5 h-8 text-[12px] rounded-sm transition-colors shadow-sm font-medium">添加仓库</button>
          <button className="bg-[#00a2e8] hover:bg-blue-600 text-white px-5 h-8 text-[12px] rounded-sm transition-colors shadow-sm font-medium">批量上传仓库</button>
        </div>
      </div>

      <div className="bg-white m-2 border border-gray-200 rounded-sm overflow-hidden shadow-sm">
        <div className="overflow-auto">
          <table className="w-full border-collapse text-[12px] text-left border-b border-gray-200">
            <thead className="bg-[#f5f7fa] text-gray-600 font-medium">
              <tr>
                <th className="px-3 border-r border-gray-200 w-20 whitespace-nowrap py-2">
                  <div className="flex items-center justify-center gap-1">
                    <input type="checkbox" />
                    <span>序号</span>
                  </div>
                </th>
                <th className="px-3 border-r border-gray-200 min-w-[150px] py-2">仓库编码</th>
                <th className="px-3 border-r border-gray-200 min-w-[100px] py-2">国家</th>
                <th className="px-3 border-r border-gray-200 min-w-[150px] py-2">联系方式</th>
                <th className="px-3 border-r border-gray-200 min-w-[120px] py-2">仓库邮政编码</th>
                <th className="px-3 border-r border-gray-200 min-w-[250px] py-2">仓库详细地址</th>
                <th className="px-3 border-r border-gray-200 min-w-[150px] py-2">添加时间</th>
                <th className="px-3 min-w-[120px] py-2 border-r border-gray-200">操作</th>
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
                  <td className="px-3 border-r border-gray-200 py-2">{item.code}</td>
                  <td className="px-3 border-r border-gray-200 py-2">{item.country}</td>
                  <td className="px-3 border-r border-gray-200 py-2">{item.contact}</td>
                  <td className="px-3 border-r border-gray-200 py-2">{item.zip}</td>
                  <td className="px-3 border-r border-gray-200 py-2">{item.address}</td>
                  <td className="px-3 border-r border-gray-200 text-gray-500 py-2">{item.time}</td>
                  <td className="px-3 text-blue-500 cursor-pointer py-2 border-r border-gray-200">
                    <span className="hover:underline mx-1">[编辑]</span>
                    <span className="hover:underline mx-1 text-red-500">[删除]</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-2 border-t border-gray-200 bg-white flex items-center justify-end">
          <div className="flex items-center gap-4 text-[11px] text-gray-500">
            <span>总计 274 个记录分为 28 页当前第 1 页，每页</span>
            <select className="border border-gray-300 rounded-sm px-1 h-6 outline-none bg-white">
              <option>10</option>
            </select>
            <div className="flex items-center gap-1 border-l pl-4 border-gray-200 font-normal">
               <button className="px-2 h-6 hover:text-blue-500">第一页</button>
               <button className="px-2 h-6 hover:text-blue-500">上一页</button>
               <button className="px-2 h-6 text-blue-500 hover:text-blue-700">下一页</button>
               <button className="px-2 h-6 text-blue-500 hover:text-blue-700">最末页</button>
               <select className="border border-gray-300 rounded-sm px-1 h-6 ml-2 outline-none">
                  <option>1</option>
               </select>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-[11px] text-gray-400 pb-10">
         <p>共执行 5 个查询，用时 0.019483 秒，Gzip 已禁用，内存占用 5.004 MB</p>
      </div>
    </div>
  );
}
