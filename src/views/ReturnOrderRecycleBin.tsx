import React, { useState } from 'react';
import { Search, RotateCcw, Trash2 } from 'lucide-react';

interface ReturnOrderData {
  id: string;
  customerName: string;
  customerCode: string;
  refNo: string;
  boxes: number;
  weight: number;
  warehouse: string;
  deliveryMethod: string;
  status: string;
  addedTime: string;
  pushStatus: string;
}

const MOCK_DATA: ReturnOrderData[] = [
  {
    id: '1',
    customerName: '深圳酷飞科技有限公司',
    customerCode: '13005',
    refNo: 'RET-DEL-001',
    boxes: 5,
    weight: 45.2,
    warehouse: '美西1号仓',
    deliveryMethod: '卡派',
    status: '已作废',
    addedTime: '2024-05-01 09:30',
    pushStatus: '未推送'
  },
  {
    id: '2',
    customerName: '广州华丰贸易',
    customerCode: '13006',
    refNo: 'RET-DEL-002',
    boxes: 2,
    weight: 18.5,
    warehouse: '美东2号仓',
    deliveryMethod: '快递',
    status: '已作废',
    addedTime: '2024-05-02 10:15',
    pushStatus: '未推送'
  },
  {
    id: '3',
    customerName: '义乌市速优进出口有限公司',
    customerCode: '13007',
    refNo: 'RET-DEL-003',
    boxes: 10,
    weight: 110.0,
    warehouse: '海外中转仓-1',
    deliveryMethod: '专线',
    status: '已作废',
    addedTime: '2024-05-03 14:20',
    pushStatus: '已推送'
  }
];

export function ReturnOrderRecycleBin() {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  return (
    <div className="bg-white rounded-sm border border-gray-200 animate-in fade-in duration-500 w-full h-full overflow-hidden">
      {/* Top Filter Bar */}
      <div className="p-3 border-b border-gray-100 flex flex-wrap items-center gap-3 bg-gray-50/50">
        <div className="flex items-center gap-2">
          <select className="border border-gray-300 rounded-sm px-2 h-7 outline-none focus:border-blue-400 text-[12px]">
            <option>参考单号</option>
            <option>客户名称</option>
          </select>
          <input 
            type="text" 
            className="border border-gray-300 rounded-sm px-2 h-7 w-48 outline-none focus:border-blue-400 text-[12px]"
          />
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[12px] text-gray-500 font-medium">客户名称</span>
          <input 
            type="text" 
            className="border border-gray-300 rounded-sm px-2 h-7 w-32 outline-none focus:border-blue-400 text-[12px]"
          />
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[12px] text-gray-500 font-medium">Fnsku</span>
          <input 
            type="text" 
            className="border border-gray-300 rounded-sm px-2 h-7 w-32 outline-none focus:border-blue-400 text-[12px]"
          />
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[12px] text-gray-500 font-medium">时间</span>
          <input type="date" className="border border-gray-300 rounded-sm px-1 h-7 text-[12px] outline-none" defaultValue="2022-04-11" />
          <span className="text-gray-400">-</span>
          <input type="date" className="border border-gray-300 rounded-sm px-1 h-7 text-[12px] outline-none" defaultValue="2026-05-11" />
        </div>

        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded-sm text-[12px] flex items-center gap-1 transition-colors ml-auto">
          <Search size={14} /> 查询
        </button>
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded-sm text-[12px] flex items-center gap-1 transition-colors">
          导出Excel
        </button>
      </div>

      {/* Table Section */}
      <div className="overflow-auto overflow-y-auto max-h-[calc(100vh-220px)] custom-scrollbar">
        <table className="w-full border-collapse text-[12px] text-left border-b border-gray-200">
          <thead className="bg-[#f5f7fa] text-gray-600 font-medium">
            <tr className="border-b border-gray-200">
              <th className="px-3 py-2 border-r border-gray-200 w-12"><input type="checkbox" /> 序号</th>
              <th className="px-3 py-2 border-r border-gray-200 min-w-[120px]">客户名称</th>
              <th className="px-3 py-2 border-r border-gray-200 min-w-[120px]">参考单号</th>
              <th className="px-3 py-2 border-r border-gray-200">总箱数</th>
              <th className="px-3 py-2 border-r border-gray-200">重量(kg)</th>
              <th className="px-3 py-2 border-r border-gray-200 min-w-[100px]">目的仓库</th>
              <th className="px-3 py-2 border-r border-gray-200">交货方式</th>
              <th className="px-3 py-2 border-r border-gray-200">状态</th>
              <th className="px-3 py-2 border-r border-gray-200 min-w-[120px]">添加时间</th>
              <th className="px-3 py-2 border-r border-gray-200">推送状态</th>
              <th className="px-3 py-2 border-r border-gray-200">操作</th>
            </tr>
          </thead>
          <tbody>
            {MOCK_DATA.map((item, index) => (
              <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-3 py-3 border-r border-gray-200 py-2">
                  <div className="flex items-center gap-2 justify-center">
                    <input type="checkbox" /> {index + 1}
                  </div>
                </td>
                <td className="px-3 py-3 border-r border-gray-200 text-blue-600 cursor-pointer hover:underline py-2">
                  {item.customerName}
                  <span className="text-gray-400 ml-1 text-[10px]">({item.customerCode})</span>
                </td>
                <td className="px-3 py-3 border-r border-gray-200 font-medium py-2">{item.refNo}</td>
                <td className="px-3 py-3 border-r border-gray-200 py-2">{item.boxes}</td>
                <td className="px-3 py-3 border-r border-gray-200 font-mono py-2">{item.weight}</td>
                <td className="px-3 py-3 border-r border-gray-200 text-gray-500 py-2">{item.warehouse}</td>
                <td className="px-3 py-3 border-r border-gray-200 py-2">{item.deliveryMethod}</td>
                <td className="px-3 py-3 border-r border-gray-200 py-2">
                  <span className="px-2 py-0.5 rounded-full bg-gray-100 text-gray-600 text-[10px] whitespace-nowrap">{item.status}</span>
                </td>
                <td className="px-3 py-3 border-r border-gray-200 text-gray-500 py-2">{item.addedTime}</td>
                <td className="px-3 py-3 border-r border-gray-200 py-2">
                   <span className="text-gray-400">{item.pushStatus}</span>
                </td>
                <td className="px-3 py-3 py-2 border-r border-gray-200">
                  <div className="flex items-center justify-center gap-2">
                    <button className="text-blue-500 hover:text-blue-700 flex items-center gap-0.5">
                      <RotateCcw size={10} /> 还原
                    </button>
                    <button className="text-red-500 hover:text-red-700 flex items-center gap-0.5">
                      <Trash2 size={10} /> 彻底删除
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Footer */}
      <div className="p-3 bg-white flex flex-wrap items-center justify-end border-t border-gray-200 fixed bottom-0 right-0 left-0 lg:left-64 z-20">
        <div className="flex items-center gap-4 text-[12px] text-gray-500">
          <span>总计 {MOCK_DATA.length} 个记录分为 1 页当前第 1 页，每页</span>
          <select className="border border-gray-300 rounded-sm px-1 h-6 outline-none focus:border-blue-400 text-[11px]">
            <option>100</option>
            <option>200</option>
          </select>
          <div className="flex items-center gap-1">
            <button className="px-2 h-6 border border-gray-300 rounded-sm hover:bg-gray-50 transition-colors">第一页</button>
            <button className="px-2 h-6 border border-gray-300 rounded-sm bg-gray-100 cursor-not-allowed">上一页</button>
            <button className="px-2 h-6 border border-gray-300 rounded-sm bg-gray-100 cursor-not-allowed">下一页</button>
            <button className="px-2 h-6 border border-gray-300 rounded-sm hover:bg-gray-50 transition-colors">最末页</button>
            <select className="border border-gray-300 rounded-sm px-1 h-6 outline-none text-[11px]">
              <option>1</option>
            </select>
          </div>
        </div>
      </div>
      
      <div className="p-10 text-center text-gray-400 text-[12px]">
        共执行 12 个查询，用时 0.028923 秒，Gzip 已禁用，内存占用 5.695 MB
      </div>
    </div>
  );
}
