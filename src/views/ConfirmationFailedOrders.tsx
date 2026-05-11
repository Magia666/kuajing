import React, { useState } from 'react';
import { Search, FileSpreadsheet, Calendar } from 'lucide-react';
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
    customerName: '武汉云航海贸易',
    customerCode: '13009',
    refNo: 'ERR-778899',
    totalBoxes: 4,
    inBoxes: 0,
    weight: 42.5,
    volume: 0.4,
    channel: '中欧班列',
    warehouse: '匈牙利仓',
    deliveryMethod: '自寄海外仓',
    targetType: '寄往海外仓',
    firstLegType: '头程订单',
    status: '确认未通过',
    pushWms: '未推送',
    addedTime: '2024-05-08 14:20:11',
    remark: 'SKU信息不匹配',
    pushStatus: '推送失败'
  },
  {
    id: '2',
    customerName: '成都锦绣电商',
    customerCode: '13010',
    refNo: 'ERR-665544',
    totalBoxes: 8,
    inBoxes: 0,
    weight: 88.0,
    volume: 0.9,
    channel: '美森限时达',
    warehouse: '洛杉矶3号仓',
    deliveryMethod: '货代送货',
    targetType: '寄往海外仓',
    firstLegType: '头程订单',
    status: '确认未通过',
    pushWms: '未推送',
    addedTime: '2024-05-09 11:30:45',
    remark: '重量超重限制',
    pushStatus: '推送失败'
  }
];

export function ConfirmationFailedOrders() {
  const totals = {
    totalBoxes: 12,
    inBoxes: 0,
    weight: 130.5,
    volume: 1.3
  };

  return (
    <div className="bg-white rounded-sm border border-gray-200 animate-in fade-in duration-500 w-full min-h-screen">
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
            <span>2026-04-11</span>
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
      <div className="overflow-x-auto">
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
                <td className="px-3 py-2 border-r border-gray-200">{item.pushStatus}</td>
                <td className="px-3 py-2 border-r border-gray-200">
                  <div className="flex flex-wrap gap-2 text-blue-500">
                    <button className="hover:underline flex items-center gap-0.5">详情</button>
                    <button className="hover:underline flex items-center gap-0.5">删除</button>
                  </div>
                </td>
              </tr>
            ))}
            <tr className="bg-[#fffdf9] font-medium text-red-500">
              <td colSpan={2} className="px-3 py-2 border-r border-gray-200"></td>
              <td className="px-3 py-2 border-r border-gray-200">总计</td>
              <td className="px-3 py-2 border-r border-gray-200">{totals.totalBoxes}</td>
              <td className="px-3 py-2 border-r border-gray-200">{totals.inBoxes}</td>
              <td className="px-3 py-2 border-r border-gray-200">{totals.weight}</td>
              <td className="px-3 py-2 border-r border-gray-200 font-mono">{totals.volume}</td>
              <td colSpan={11} className="px-3 py-2 border-r border-gray-200"></td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Footer Actions */}
      <div className="p-3 border-t border-gray-200 bg-white flex items-center justify-between">
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1.5 rounded-sm text-[12px] shadow-sm transition-all">
          导出所选
        </button>

        <div className="flex items-center gap-4 text-[12px] text-gray-500">
          <span>总计 {MOCK_DATA.length} 个记录分为 1 页当前第 1 页，每页</span>
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
          <select className="border border-gray-300 rounded-sm px-1 h-6 outline-none">
            <option>1</option>
          </select>
        </div>
      </div>

      <div className="text-center text-[10px] text-gray-400 py-6">
        共执行 15 个查询，用时 0.020997 秒，Gzip 已禁用，内存占用 6.748 MB
      </div>
    </div>
  );
}
