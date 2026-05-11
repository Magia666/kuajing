import React from 'react';
import { Calendar } from 'lucide-react';

export function InboundReport() {
  const MOCK_DATA = [
    { id: '1', warehouse: '全部仓库', time: '2025-12-04', type: '代发入库', orders: 5, boxes: 5, skuTypes: 5, skuQty: 532, volume: '0.04162', value: '5000.00' },
    { id: '2', warehouse: '全部仓库', time: '2025-12-03', type: '代发入库', orders: 1, boxes: 2, skuTypes: 2, skuQty: 300, volume: '0.0036', value: '0.00' },
    { id: '3', warehouse: '全部仓库', time: '2025-12-03', type: '退货入库', orders: 1, boxes: 1, skuTypes: 1, skuQty: 1, volume: '0.000024', value: '0.00' },
    { id: '4', warehouse: '全部仓库', time: '2025-12-01', type: '代发入库', orders: 1, boxes: 1, skuTypes: 1, skuQty: 100, volume: '0.0006', value: '0.00' },
    { id: '5', warehouse: '全部仓库', time: '2025-04-30', type: '代发入库', orders: 1, boxes: 1, skuTypes: 4, skuQty: 700, volume: '7.0169', value: '0.00' },
    { id: '6', warehouse: '全部仓库', time: '2025-04-29', type: '代发入库', orders: 1, boxes: 1, skuTypes: 1, skuQty: 0, volume: '0', value: '0.00' },
    { id: '7', warehouse: '全部仓库', time: '2025-04-19', type: '代发入库', orders: 1, boxes: 1, skuTypes: 1, skuQty: 10, volume: '0', value: '0.00' },
    { id: '8', warehouse: '全部仓库', time: '2025-04-02', type: '代发入库', orders: 2, boxes: 2, skuTypes: 1, skuQty: 0, volume: '0', value: '0.00' },
    { id: '9', warehouse: '全部仓库', time: '2025-03-25', type: '代发入库', orders: 1, boxes: 1, skuTypes: 1, skuQty: 10, volume: '0.00001', value: '0.00' },
  ];

  const total = MOCK_DATA.reduce((acc, curr) => ({
    orders: acc.orders + curr.orders,
    boxes: acc.boxes + curr.boxes,
    skuTypes: acc.skuTypes + curr.skuTypes,
    skuQty: acc.skuQty + curr.skuQty,
    volume: (parseFloat(acc.volume) + parseFloat(curr.volume)).toFixed(6),
    value: (parseFloat(acc.value) + parseFloat(curr.value)).toFixed(0)
  }), { orders: 0, boxes: 0, skuTypes: 0, skuQty: 0, volume: '0', value: '0' });

  return (
    <div className="bg-[#f0f2f5] min-h-screen font-sans text-gray-700">
      {/* Search Header */}
      <div className="bg-white p-2 border-b border-gray-200 flex flex-wrap items-center gap-2">
        <div className="flex items-center gap-1 border border-gray-300 h-7 px-2 bg-white rounded-sm">
           <span className="text-[12px] text-gray-500">仓库名称</span>
           <select className="outline-none text-[12px] bg-transparent ml-2">
              <option>全部仓库</option>
           </select>
        </div>

        <div className="flex items-center gap-1 text-[12px] text-gray-500">
          <span className="mx-1">时间</span>
          <div className="flex items-center gap-1 bg-white border border-gray-300 h-7 px-2 rounded-sm">
            <span>2023-05-01</span>
            <Calendar size={12} className="text-gray-400" />
          </div>
          <span className="text-gray-300">-</span>
          <div className="flex items-center gap-1 bg-white border border-gray-300 h-7 px-2 rounded-sm">
            <span>2026-05-11</span>
            <Calendar size={12} className="text-gray-400" />
          </div>
        </div>

        <select className="border border-gray-300 h-7 text-[12px] outline-none px-2 bg-white rounded-sm">
           <option>按日查询</option>
        </select>

        <select className="border border-gray-300 h-7 text-[12px] outline-none px-2 bg-white rounded-sm">
           <option>全部类型</option>
        </select>

        <button className="bg-[#00a2e8] hover:bg-blue-600 text-white px-5 h-7 text-[12px] rounded-sm transition-colors shadow-sm">查询</button>
      </div>

      {/* Table Section */}
      <div className="bg-white m-2 border border-gray-200 rounded-sm overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-[12px] text-left">
            <thead className="bg-[#f5f7fa] text-gray-600 font-medium">
              <tr>
                <th className="px-3 border-r border-gray-200 min-w-[120px] py-2">仓库名称</th>
                <th className="px-3 border-r border-gray-200 min-w-[120px] py-2">时间</th>
                <th className="px-3 border-r border-gray-200 min-w-[120px] py-2">订单类型</th>
                <th className="px-3 border-r border-gray-200 min-w-[100px] py-2">订单数量</th>
                <th className="px-3 border-r border-gray-200 min-w-[100px] py-2">箱数</th>
                <th className="px-3 border-r border-gray-200 min-w-[100px] py-2">SKU种类</th>
                <th className="px-3 border-r border-gray-200 min-w-[100px] py-2">SKU数量</th>
                <th className="px-3 border-r border-gray-200 min-w-[100px] py-2">体积</th>
                <th className="px-3 min-w-[100px] py-2 border-r border-gray-200">SKU货值</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {MOCK_DATA.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-3 border-r border-gray-200 py-2">{item.warehouse}</td>
                  <td className="px-3 border-r border-gray-200 py-2">{item.time}</td>
                  <td className="px-3 border-r border-gray-200 py-2">{item.type}</td>
                  <td className="px-3 border-r border-gray-200 py-2">{item.orders}</td>
                  <td className="px-3 border-r border-gray-200 py-2">{item.boxes}</td>
                  <td className="px-3 border-r border-gray-200 py-2">{item.skuTypes}</td>
                  <td className="px-3 border-r border-gray-200 py-2">{item.skuQty}</td>
                  <td className="px-3 border-r border-gray-200 py-2">{item.volume}</td>
                  <td className="px-3 py-2 border-r border-gray-200">{item.value}</td>
                </tr>
              ))}
              {/* Total Footer Row */}
              <tr className="h-11 bg-[#fffbf2] text-red-500 font-bold border-t border-gray-200">
                <td colSpan={3} className="px-3 border-r border-gray-200 py-2">合计</td>
                <td className="px-3 border-r border-gray-200 py-2">{total.orders}</td>
                <td className="px-3 border-r border-gray-200 py-2">{total.boxes}</td>
                <td className="px-3 border-r border-gray-200 py-2">{total.skuTypes}</td>
                <td className="px-3 border-r border-gray-200 py-2">{total.skuQty}</td>
                <td className="px-3 border-r border-gray-200 py-2">{total.volume}</td>
                <td className="px-3 py-2 border-r border-gray-200">{total.value}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Footer Meta */}
      <div className="mt-8 text-center text-[11px] text-gray-400 pb-10">
         <p>共执行 3 个查询，用时 0.022290 秒，Gzip 已禁用，内存占用 6.515 MB</p>
      </div>
    </div>
  );
}
