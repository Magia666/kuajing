import React from 'react';
import { Calendar, Search } from 'lucide-react';

export function DropshipPendingShelf() {
  const MOCK_DATA = [
    { id: '1', customer: 'yueyang07', code: '12021', inboundNo: 'FX12021001', packingNo: 'FX12021001-24567', productName: '短袖', fnsku: 'D12021T8BFJ', qty: 21, warehouse: '星卓越泰国国仓', time: '2025-12-04 13:31:42' },
    { id: '2', customer: 'yueyang01', code: '12015', inboundNo: 'FX12015001', packingNo: 'FX12015001-123', productName: '猫咪水杯', fnsku: 'D120154AGF2', qty: 100, warehouse: '星卓越泰国国仓', time: '2025-12-04 13:30:58' },
    { id: '3', customer: 'qin', code: '12014', inboundNo: 'FX12014004', packingNo: 'FX12014004-1', productName: '猫粮10好', fnsku: 'D12014GK1AA', qty: 100, warehouse: '星卓越泰国国仓', time: '2025-12-04 13:29:21' },
    { id: '4', customer: 'qin', code: '12014', inboundNo: 'FX12014003', packingNo: 'FX12014003-1', productName: '猫砂二号', fnsku: 'D12014TCL0Z', qty: 100, warehouse: '星卓越泰国国仓', time: '2025-12-04 13:29:17' },
    { id: '5', customer: 'qin', code: '12014', inboundNo: 'FX12014003', packingNo: 'FX12014003-1', productName: '猫砂', fnsku: 'D12014U4YX1', qty: 100, warehouse: '星卓越泰国国仓', time: '2025-12-04 13:29:17' },
    { id: '6', customer: 'qin', code: '12014', inboundNo: 'FXTH202512002', packingNo: 'FXTH202512002-13689', productName: '猫砂二号', fnsku: 'D12014TCL0Z', qty: 1, warehouse: '星卓越泰国国仓', time: '2025-12-03 20:23:52' },
    { id: '7', customer: 'qin', code: '12014', inboundNo: 'FX12014002', packingNo: 'FX12014002-1', productName: '猫砂二号', fnsku: 'D12014TCL0Z', qty: 100, warehouse: '星卓越泰国国仓', time: '2025-12-04 13:29:10' },
    { id: '8', customer: 'qin', code: '12014', inboundNo: 'FX12014002', packingNo: 'FX12014002-1', productName: '猫砂', fnsku: 'D12014U4YX1', qty: 10, warehouse: '星卓越泰国国仓', time: '2025-12-04 13:29:10' },
    { id: '9', customer: 'qin', code: '12014', inboundNo: 'FX12014001', packingNo: 'FX12014001-1', productName: '猫砂二号', fnsku: 'D12014TCL0Z', qty: 99, warehouse: '星卓越泰国国仓', time: '2025-12-03 19:49:18' },
    { id: '10', customer: 'qin', code: '12014', inboundNo: 'FX12014001', packingNo: 'FX12014001-2', productName: '猫砂', fnsku: 'D12014U4YX1', qty: 195, warehouse: '星卓越泰国国仓', time: '2025-12-03 19:49:18' },
  ];

  const totalQty = MOCK_DATA.reduce((acc, curr) => acc + curr.qty, 0);

  return (
    <div className="bg-[#f0f2f5] h-full overflow-hidden font-sans text-gray-700">
      <div className="bg-white p-2 border-b border-gray-200 flex flex-wrap items-center gap-2">
        <div className="flex items-center">
          <select className="h-7 border border-gray-300 text-[12px] outline-none px-1 bg-white border-r-0 rounded-l-sm">
            <option>参考单号</option>
            <option>入仓单号</option>
            <option>装箱单号</option>
            <option>Fnsku</option>
          </select>
          <input type="text" className="h-7 border border-gray-300 text-[12px] outline-none px-2 w-32 border-l-0" />
        </div>
        
        <div className="flex items-center gap-1 border border-gray-300 h-7 px-1 rounded-sm bg-white">
          <span className="text-[12px] text-gray-400 whitespace-nowrap">客户名称</span>
          <input type="text" className="outline-none text-[12px] w-24 px-1" />
        </div>

        <div className="flex items-center gap-1 border border-gray-300 h-7 px-1 rounded-sm bg-white">
          <span className="text-[12px] text-gray-400 whitespace-nowrap">Fnsku</span>
          <input type="text" className="outline-none text-[12px] w-24 px-1" />
        </div>

        <div className="flex items-center gap-1">
          <div className="flex items-center h-7 px-2 border border-gray-300 bg-white rounded-sm text-[11px] text-gray-500 gap-2">
            <span>2024-04-11</span>
            <Calendar size={12} className="text-gray-400" />
          </div>
          <span className="text-gray-300">-</span>
          <div className="flex items-center h-7 px-2 border border-gray-300 bg-white rounded-sm text-[11px] text-gray-500 gap-2">
            <span>2026-05-11</span>
            <Calendar size={12} className="text-gray-400" />
          </div>
        </div>

        <select className="border border-gray-300 h-7 text-[12px] outline-none px-1 bg-white rounded-sm">
          <option>订单类型</option>
        </select>

        <select className="border border-gray-300 h-7 text-[12px] outline-none px-1 bg-white rounded-sm">
          <option>全部订单</option>
        </select>

        <select className="border border-gray-300 h-7 text-[12px] outline-none px-1 bg-white rounded-sm">
          <option>目的仓库</option>
        </select>

        <button className="bg-[#00a2e8] hover:bg-blue-600 text-white px-5 h-7 text-[12px] rounded-sm transition-colors">查询</button>
      </div>

      <div className="bg-white m-2 border border-gray-200 rounded-sm overflow-hidden shadow-sm">
        <div className="overflow-auto">
          <table className="w-full border-collapse text-[12px] text-left">
            <thead className="bg-[#f5f7fa] text-gray-600 font-medium">
              <tr>
                <th className="px-3 border-r border-gray-200 w-12 py-2"><input type="checkbox" className="mr-1" />序号</th>
                <th className="px-3 border-r border-gray-200 min-w-[100px] py-2">客户名称</th>
                <th className="px-3 border-r border-gray-200 min-w-[100px] py-2">入仓单号</th>
                <th className="px-3 border-r border-gray-200 min-w-[120px] py-2">装箱单号</th>
                <th className="px-3 border-r border-gray-200 min-w-[120px] py-2">产品名称</th>
                <th className="px-3 border-r border-gray-200 min-w-[100px] py-2">Fnsku</th>
                <th className="px-3 border-r border-gray-200 min-w-[80px] py-2">入库数量</th>
                <th className="px-3 border-r border-gray-200 min-w-[100px] py-2">仓库名称</th>
                <th className="px-3 border-r border-gray-200 min-w-[130px] py-2">入库时间</th>
                <th className="px-3 py-2 border-r border-gray-200">状态</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {MOCK_DATA.map((item, index) => (
                <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-3 border-r border-gray-200 py-2"><input type="checkbox" className="mr-1" />{index + 1}</td>
                  <td className="px-3 border-r border-gray-200 py-2">
                    <span>{item.customer}</span>
                    <span className="text-red-500 font-bold ml-1">({item.code})</span>
                  </td>
                  <td className="px-3 border-r border-gray-200 text-blue-500 py-2">{item.inboundNo}</td>
                  <td className="px-3 border-r border-gray-200 py-2">{item.packingNo}</td>
                  <td className="px-3 border-r border-gray-200 py-2">{item.productName}</td>
                  <td className="px-3 border-r border-gray-200 py-2">{item.fnsku}</td>
                  <td className="px-3 border-r border-gray-200 font-normal py-2">{item.qty}</td>
                  <td className="px-3 border-r border-gray-200 py-2">{item.warehouse}</td>
                  <td className="px-3 border-r border-gray-200 text-gray-500 py-2">{item.time}</td>
                  <td className="px-3 py-2 border-r border-gray-200">待上架</td>
                </tr>
              ))}
              {/* Summary Row */}
              <tr className="hover:bg-gray-50 transition-colors">
                <td colSpan={6} className="px-3 border-r border-gray-200 font-bold py-2">总计</td>
                <td className="px-3 border-r border-gray-200 font-bold py-2">{totalQty}</td>
                <td colSpan={3} className="px-3 border-r border-gray-200 py-2"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-white mx-2 p-2 border border-gray-200 flex flex-wrap items-center gap-2 justify-between">
        <div className="flex items-center gap-1">
          <input type="text" placeholder="货架" className="border border-gray-300 h-8 px-2 outline-none text-[12px] w-24 rounded-sm" />
          <button className="bg-[#ff9c3a] hover:bg-orange-600 text-white px-3 h-8 text-[12px] rounded-sm transition-colors shadow-sm">提交上架</button>
        </div>

        <div className="flex items-center gap-4 text-[11px] text-gray-500 whitespace-nowrap">
          <span>总计 17 个记录分为 2 页当前第 1 页，每页</span>
          <select className="border border-gray-300 rounded-sm px-1 h-6 outline-none">
            <option>10</option>
            <option>100</option>
          </select>
          <div className="flex items-center gap-1 border-l pl-4 border-gray-200">
             <button className="px-1 hover:text-blue-500">第一页</button>
             <button className="px-1 hover:text-blue-500">上一页</button>
             <button className="px-1 hover:text-blue-500">下一页</button>
             <button className="px-1 hover:text-blue-500 transition-colors">最末页</button>
             <select className="border border-gray-300 rounded-sm px-1 h-6 ml-2 outline-none">
                <option>1</option>
             </select>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-[11px] text-gray-400 pb-10">
         <p>共执行 11 个查询，用时 0.047169 秒，Gzip 已禁用，内存占用 8.818 MB</p>
      </div>
    </div>
  );
}
