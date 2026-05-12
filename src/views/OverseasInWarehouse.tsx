import React, { useState } from 'react';
import { Search, FileSpreadsheet, Info, Download, Edit, Printer, RotateCcw, Calendar } from 'lucide-react';
import { cn } from '../lib/utils';

interface OrderData {
  id: string;
  customerName: string;
  customerCode: string;
  refNo: string;
  totalBoxes: number;
  inBoxes: number;
  weight: number;
  volume: number;
  channel: string;
  warehouse: string;
  deliveryMethod: string;
  targetType: string;
  firstLegType: string;
  status: string;
  pushWms: string;
  addedTime: string;
  remark: string;
  pushStatus: string;
}

const MOCK_DATA: OrderData[] = [
  {
    id: '1',
    customerName: 'yueyang07',
    customerCode: '12021',
    refNo: 'FX12021001',
    totalBoxes: 1,
    inBoxes: 1,
    weight: 4,
    volume: 0,
    channel: '',
    warehouse: '星卓越泰国国仓',
    deliveryMethod: '自寄海外仓',
    targetType: '寄往海外仓',
    firstLegType: '一件代发',
    status: '海外仓已入库',
    pushWms: '未推送',
    addedTime: '2025-12-04 13:29:33',
    remark: '无',
    pushStatus: ''
  },
  {
    id: '2',
    customerName: 'yueyang01',
    customerCode: '12015',
    refNo: 'FX12015001',
    totalBoxes: 1,
    inBoxes: 1,
    weight: 50,
    volume: 1,
    channel: '',
    warehouse: '星卓越泰国国仓',
    deliveryMethod: '自寄海外仓',
    targetType: '寄往海外仓',
    firstLegType: '一件代发',
    status: '海外仓已入库',
    pushWms: '未推送',
    addedTime: '2025-12-04 13:28:29',
    remark: '123',
    pushStatus: ''
  },
  {
    id: '3',
    customerName: 'qin',
    customerCode: '12014',
    refNo: 'FX12014004',
    totalBoxes: 1,
    inBoxes: 1,
    weight: 10,
    volume: 0.01,
    channel: '',
    warehouse: '星卓越泰国国仓',
    deliveryMethod: '自寄海外仓',
    targetType: '寄往海外仓',
    firstLegType: '一件代发',
    status: '海外仓已入库',
    pushWms: '未推送',
    addedTime: '2025-12-04 13:27:44',
    remark: '',
    pushStatus: ''
  },
  {
     id: '4',
     customerName: 'qin',
     customerCode: '12014',
     refNo: 'FX12014003',
     totalBoxes: 1,
     inBoxes: 1,
     weight: 30,
     volume: 1,
     channel: '',
     warehouse: '星卓越泰国国仓',
     deliveryMethod: '自寄海外仓',
     targetType: '寄往海外仓',
     firstLegType: '一件代发',
     status: '海外仓已入库',
     pushWms: '未推送',
     addedTime: '2025-12-04 00:59:59',
     remark: '',
     pushStatus: ''
   }
];

export function OverseasInWarehouse() {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const totals = {
    totalBoxes: 14,
    inBoxes: 14,
    weight: 342.11,
    volume: 13.19
  };

  return (
    <div className="bg-white rounded-sm border border-gray-200 animate-in fade-in duration-500 w-full h-full overflow-hidden">
      {/* Top Filter Bar */}
      <div className="p-3 bg-[#f5f7fa] flex flex-wrap gap-y-3 gap-x-4 border-b border-gray-200 sticky top-0 z-10">
        <div className="flex items-center gap-2">
          <select className="h-7 border border-gray-300 text-[12px] outline-none px-1 bg-white">
            <option>参考单号</option>
          </select>
          <input type="text" placeholder="如有多个请用换行隔开" className="h-7 px-2 border border-gray-300 text-[12px] w-48 outline-none focus:border-blue-400" />
        </div>
        <div className="flex items-center gap-2">
          <label className="text-[12px] text-gray-600 whitespace-nowrap">客户名称</label>
          <input type="text" className="h-7 px-2 border border-gray-300 text-[12px] w-32 outline-none focus:border-blue-400" />
        </div>
        <div className="flex items-center gap-2">
          <label className="text-[12px] text-gray-600 whitespace-nowrap">Fnsku</label>
          <input type="text" className="h-7 px-2 border border-gray-300 text-[12px] w-32 outline-none focus:border-blue-400" />
        </div>
        
        <div className="flex items-center gap-2">
          <div className="flex items-center h-7 px-2 border border-gray-300 bg-white rounded-sm text-[12px] text-gray-500 gap-2">
            <span>2024-04-11</span>
            <Calendar size={12} />
          </div>
          <span className="text-gray-400">-</span>
          <div className="flex items-center h-7 px-2 border border-gray-300 bg-white rounded-sm text-[12px] text-gray-500 gap-2">
            <span>2026-05-11</span>
            <Calendar size={12} />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <select className="h-7 border border-gray-300 text-[12px] outline-none px-1 bg-white">
            <option>订单类型</option>
          </select>
          <select className="h-7 border border-gray-300 text-[12px] outline-none px-1 bg-white">
            <option>全部订单</option>
          </select>
          <select className="h-7 border border-gray-300 text-[12px] outline-none px-1 bg-white">
            <option>目的仓库</option>
          </select>
        </div>

        <div className="flex items-center border border-gray-300 h-7 rounded-sm overflow-hidden text-[11px]">
          <button className="px-2 h-full hover:bg-gray-50 bg-white text-gray-600 border-r border-gray-300">海外仓未推送</button>
          <button className="px-2 h-full hover:bg-gray-50 bg-white text-gray-600">海外仓已推送</button>
        </div>

        <div className="flex gap-2 ml-auto">
          <button className="bg-blue-500 hover:bg-blue-600 text-white h-7 px-4 text-[12px] rounded-sm flex items-center gap-1"><Search size={14} /> 查询</button>
          <button className="bg-blue-500 hover:bg-blue-600 text-white h-7 px-4 text-[12px] rounded-sm flex items-center gap-1"><FileSpreadsheet size={14} /> 导出Excel</button>
        </div>
      </div>

      {/* Main Table */}
      <div className="overflow-auto">
        <table className="w-full text-[12px] text-left border-collapse min-w-[2000px]">
          <thead className="bg-[#f5f7fa] text-gray-600 font-medium">
            <tr>
              <th className="px-3 py-2 border-r border-gray-200 w-20">
                <div className="flex items-center gap-2">
                  <input type="checkbox" /> 序号
                </div>
              </th>
              <th className="px-3 py-2 border-r border-gray-200">客户名称</th>
              <th className="px-3 py-2 border-r border-gray-200">参考单号</th>
              <th className="px-3 py-2 border-r border-gray-200">总箱数</th>
              <th className="px-3 py-2 border-r border-gray-200">已入箱数</th>
              <th className="px-3 py-2 border-r border-gray-200">重量(kg)</th>
              <th className="px-3 py-2 border-r border-gray-200">体积(cm)</th>
              <th className="px-3 py-2 border-r border-gray-200">出货渠道</th>
              <th className="px-3 py-2 border-r border-gray-200">目的仓库</th>
              <th className="px-3 py-2 border-r border-gray-200">交货方式</th>
              <th className="px-3 py-2 border-r border-gray-200">目的类型</th>
              <th className="px-3 py-2 border-r border-gray-200">头程类型</th>
              <th className="px-3 py-2 border-r border-gray-200">状态</th>
              <th className="px-3 py-2 border-r border-gray-200">推送星卓越WMS</th>
              <th className="px-3 py-2 border-r border-gray-200 whitespace-nowrap">添加时间</th>
              <th className="px-3 py-2 border-r border-gray-200 w-40">备注</th>
              <th className="px-3 py-2 border-r border-gray-200">推送状态</th>
              <th className="px-3 py-2 border-r border-gray-200">操作</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {MOCK_DATA.map((item, index) => (
              <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-3 py-2 border-r border-gray-200">
                  <div className="flex items-center gap-2">
                    <input type="checkbox" /> {index + 1}
                  </div>
                </td>
                <td className="px-3 py-2 border-r border-gray-200">
                  <span>{item.customerName}</span>
                  <span className="text-red-500 ml-1 text-[10px]">({item.customerCode})</span>
                </td>
                <td className="px-3 py-2 border-r border-gray-200 text-blue-500 font-medium">{item.refNo}</td>
                <td className="px-3 py-2 border-r border-gray-200">{item.totalBoxes}</td>
                <td className="px-3 py-2 border-r border-gray-200">{item.inBoxes}</td>
                <td className="px-3 py-2 border-r border-gray-200">{item.weight}</td>
                <td className="px-3 py-2 border-r border-gray-200 font-mono">{item.volume}</td>
                <td className="px-3 py-2 border-r border-gray-200 italic text-gray-400">{item.channel || '-'}</td>
                <td className="px-3 py-2 border-r border-gray-200">{item.warehouse}</td>
                <td className="px-3 py-2 border-r border-gray-200">{item.deliveryMethod}</td>
                <td className="px-3 py-2 border-r border-gray-200">{item.targetType}</td>
                <td className="px-3 py-2 border-r border-gray-200">{item.firstLegType}</td>
                <td className="px-3 py-2 border-r border-gray-200">{item.status}</td>
                <td className="px-3 py-2 border-r border-gray-200">
                  {item.pushWms}
                </td>
                <td className="px-3 py-2 border-r border-gray-200 text-gray-500 leading-tight">
                  {item.addedTime}
                </td>
                <td className="px-3 py-2 border-r border-gray-200 text-gray-500 truncate max-w-[10rem]">
                  {item.remark}
                </td>
                <td className="px-3 py-2 border-r border-gray-200">-</td>
                <td className="px-3 py-2 border-r border-gray-200">
                  <div className="flex flex-wrap gap-2 text-blue-500">
                    <button className="hover:underline flex items-center gap-0.5"><Info size={12}/>[详情]</button>
                    <button className="hover:underline flex items-center gap-0.5"><Download size={12}/>[导出]</button>
                    <button className="hover:underline flex items-center gap-0.5"><Edit size={12}/>[修改尺寸]</button>
                    <button className="hover:underline flex items-center gap-0.5"><Printer size={12}/>[打印]</button>
                    <button className="hover:underline flex items-center gap-0.5 text-red-500"><RotateCcw size={12}/>[回退待入库]</button>
                  </div>
                </td>
              </tr>
            ))}
            {/* Summary Row */}
            <tr className="bg-[#fffdf9] font-medium text-red-500">
              <td colSpan={2} className="px-3 py-2 border-r border-gray-200"></td>
              <td className="px-3 py-2 border-r border-gray-200">总计</td>
              <td className="px-3 py-2 border-r border-gray-200">{totals.totalBoxes}</td>
              <td className="px-3 py-2 border-r border-gray-200">{totals.inBoxes}</td>
              <td className="px-3 py-2 border-r border-gray-200">{totals.weight}</td>
              <td className="px-3 py-2 border-r border-gray-200">{totals.volume}</td>
              <td colSpan={11} className="px-3 py-2 border-r border-gray-200"></td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Footer Actions */}
      <div className="p-3 border-t border-gray-200 bg-white flex flex-wrap items-center gap-2">
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1.5 rounded-sm text-[12px] shadow-sm transition-all">
          导出所选
        </button>

        <div className="ml-auto flex items-center gap-4 text-[12px] text-gray-500">
          <span>总计 13 个记录分为 1 页当前第 1 页，每页</span>
          <select className="border border-gray-300 rounded-sm px-1 h-6 outline-none">
            <option>100</option>
            <option>200</option>
          </select>
          <div className="flex items-center gap-1">
             <button className="px-1 hover:bg-gray-100 disabled:opacity-30" disabled>第一页</button>
             <button className="px-1 hover:bg-gray-100 disabled:opacity-30" disabled>上一页</button>
             <button className="px-1 hover:bg-gray-100 disabled:opacity-30" disabled>下一页</button>
             <button className="px-1 hover:bg-gray-100 disabled:opacity-30" disabled>最末页</button>
          </div>
          <select className="border border-gray-300 rounded-sm px-1 h-6 outline-none text-[12px]">
            <option>1</option>
          </select>
        </div>
      </div>

      {/* Technical Footer */}
      <div className="text-center text-[10px] text-gray-400 py-6">
        共执行 15 个查询，用时 0.022799 秒，Gzip 已禁用，内存占用 6.750 MB
      </div>
    </div>
  );
}
