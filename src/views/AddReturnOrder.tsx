import React, { useState } from 'react';
import { Search, FileOutput, Trash2, FileInput, PlusSquare, Calendar } from 'lucide-react';
import { cn } from '../lib/utils';

export function AddReturnOrder() {
  return (
    <div className="bg-white rounded-sm border border-gray-200 animate-in fade-in duration-500 w-full h-full overflow-hidden pb-10">
      {/* Header */}
      <div className="bg-[#e4e7ed] px-4 py-2 flex items-center justify-between border-b border-gray-300">
        <div className="flex items-center">
          <div className="w-1 h-4 bg-blue-500 mr-2"></div>
          <span className="text-[14px] font-medium text-gray-700">添加退货订单</span>
        </div>
        <button className="bg-[#00bccd] hover:bg-[#00a2b1] text-white h-7 px-3 text-[12px] rounded-sm transition-colors">
          批量导入退货
        </button>
      </div>

      {/* Form Area */}
      <div className="p-6 bg-[#f5f7fa] grid grid-cols-2 gap-x-12 gap-y-4 border-b border-gray-200">
        {/* Left Column */}
        <div className="space-y-4 text-[12px]">
          <div className="flex items-center gap-4">
            <label className="w-24 text-right text-gray-600">客户名称</label>
            <div className="flex-1 flex gap-2">
              <input 
                type="text" 
                placeholder="请输入客户名称" 
                className="flex-1 h-8 px-2 border border-gray-300 rounded-sm outline-none focus:border-blue-400 bg-white"
              />
              <button className="bg-[#f4f4f5] hover:bg-gray-200 text-gray-700 h-8 px-4 border border-gray-300 rounded-sm">查询</button>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <label className="w-24 text-right text-gray-600">参考单号</label>
            <div className="flex-1 flex gap-2">
              <input 
                type="text" 
                className="flex-1 h-8 px-2 border border-gray-300 rounded-sm outline-none focus:border-blue-400 bg-white"
              />
              <button className="bg-[#f4f4f5] hover:bg-gray-200 text-gray-700 h-8 px-4 border border-gray-300 rounded-sm">生成</button>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <label className="w-24 text-right text-gray-600">预计到货时间</label>
            <div className="flex-1 relative">
              <input 
                type="text" 
                className="w-full h-8 px-2 border border-gray-300 rounded-sm outline-none focus:border-blue-400 bg-white"
              />
              <div className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                <Calendar size={14} />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <label className="w-24 text-right text-gray-600">备注</label>
            <div className="flex-1">
              <input 
                type="text" 
                className="w-full h-8 px-2 border border-gray-300 rounded-sm outline-none focus:border-blue-400 bg-white"
              />
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-4 text-[12px]">
          <div className="flex items-center gap-4">
            <label className="w-24 text-right text-gray-600">寄往国家</label>
            <div className="flex-1 flex gap-2">
              <input 
                type="text" 
                placeholder="请选择国家" 
                className="flex-1 h-8 px-2 border border-gray-300 rounded-sm outline-none focus:border-blue-400 bg-white"
              />
              <button className="bg-[#f4f4f5] hover:bg-gray-200 text-gray-700 h-8 px-4 border border-gray-300 rounded-sm">查询</button>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <label className="w-24 text-right text-gray-600">目的仓库</label>
            <div className="flex-1">
              <select className="w-full h-8 px-2 border border-gray-300 rounded-sm outline-none focus:border-blue-400 bg-white">
                <option value="">请选择目的仓库</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="p-4 flex items-center gap-4">
        <button className="flex items-center gap-1.5 text-[12px] text-blue-600 hover:text-blue-700 bg-white px-2 py-1 border border-gray-200 rounded-sm shadow-sm transition-all hover:bg-gray-50">
          <FileOutput size={14} /> 导出明细
        </button>
        <button className="flex items-center gap-1.5 text-[12px] text-blue-600 hover:text-blue-700 bg-white px-2 py-1 border border-gray-200 rounded-sm shadow-sm transition-all hover:bg-gray-50">
          <Trash2 size={14} /> 删除
        </button>
        <button className="flex items-center gap-1.5 text-[12px] text-blue-600 hover:text-blue-700 bg-white px-2 py-1 border border-gray-200 rounded-sm shadow-sm transition-all hover:bg-gray-50">
          <FileInput size={14} /> 导入明细
        </button>
        <button className="flex items-center gap-1.5 text-[12px] text-blue-600 hover:text-blue-700 bg-white px-2 py-1 border border-gray-200 rounded-sm shadow-sm transition-all hover:bg-gray-50">
          <PlusSquare size={14} /> 添加明细
        </button>
        <div className="ml-2 text-[12px] text-red-500 font-medium">
          温馨提示:装箱号为退货的物流单号
        </div>
      </div>

      {/* Main Table Wrapper */}
      <div className="px-4">
        <div className="border border-gray-200 min-h-0 flex flex-col relative overflow-hidden bg-white">
          <table className="w-full text-left text-[12px] border-collapse min-w-[1400px]">
            <thead className="bg-[#f5f7fa] text-gray-600 font-medium">
              <tr>
                <th className="px-3 py-2 w-10 border-r border-gray-200"><input type="checkbox" /></th>
                <th className="px-3 py-2 border-r border-gray-200">装箱号</th>
                <th className="px-3 py-2 border-r border-gray-200">Fnsku</th>
                <th className="px-3 py-2 border-r border-gray-200">单箱数量</th>
                <th className="px-3 py-2 border-r border-gray-200">产品名称</th>
                <th className="px-3 py-2 border-r border-gray-200">英文名称</th>
                <th className="px-3 py-2 border-r border-gray-200">单价</th>
                <th className="px-3 py-2 border-r border-gray-200">重量(kg)</th>
                <th className="px-3 py-2 border-r border-gray-200">长(cm)</th>
                <th className="px-3 py-2 border-r border-gray-200">宽(cm)</th>
                <th className="px-3 py-2 border-r border-gray-200">高(cm)</th>
                <th className="px-3 py-2 border-r border-gray-200">校验订单</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="px-3 py-2 border-r border-gray-200"><input type="checkbox" /></td>
                <td className="px-3 py-2 border-r border-gray-200 text-blue-600">BOX20240511001</td>
                <td className="px-3 py-2 border-r border-gray-200">X001ABC234</td>
                <td className="px-3 py-2 border-r border-gray-200 font-medium">50</td>
                <td className="px-3 py-2 border-r border-gray-200 text-left">智能无线耳机 - 黑色</td>
                <td className="px-3 py-2 border-r border-gray-200 text-left italic">Smart Wireless Earphones - Black</td>
                <td className="px-3 py-2 border-r border-gray-200">12.50</td>
                <td className="px-3 py-2 border-r border-gray-200">8.5</td>
                <td className="px-3 py-2 border-r border-gray-200">40</td>
                <td className="px-3 py-2 border-r border-gray-200">30</td>
                <td className="px-3 py-2 border-r border-gray-200">25</td>
                <td className="px-3 py-2 text-green-500 border-r border-gray-200">校验通过</td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="px-3 py-2 border-r border-gray-200"><input type="checkbox" /></td>
                <td className="px-3 py-2 border-r border-gray-200 text-blue-600">BOX20240511002</td>
                <td className="px-3 py-2 border-r border-gray-200">X002DEF567</td>
                <td className="px-3 py-2 border-r border-gray-200 font-medium">30</td>
                <td className="px-3 py-2 border-r border-gray-200 text-left">便携式迷你充电宝</td>
                <td className="px-3 py-2 border-r border-gray-200 text-left italic">Portable Mini Power Bank</td>
                <td className="px-3 py-2 border-r border-gray-200">8.00</td>
                <td className="px-3 py-2 border-r border-gray-200">6.2</td>
                <td className="px-3 py-2 border-r border-gray-200">35</td>
                <td className="px-3 py-2 border-r border-gray-200">25</td>
                <td className="px-3 py-2 border-r border-gray-200">20</td>
                <td className="px-3 py-2 text-green-500 border-r border-gray-200">校验通过</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Bottom Actions */}
        <div className="mt-12 flex items-center justify-center gap-4">
          <button className="w-32 py-2 text-blue-500 border border-blue-500 rounded-sm hover:bg-blue-50 transition-colors text-[14px]">
            校验订单
          </button>
          <button className="w-32 py-2 bg-blue-500 text-white border border-blue-500 rounded-sm hover:bg-blue-600 transition-colors text-[14px]">
            提交
          </button>
        </div>
      </div>

      {/* Footer statistics */}
      <div className="text-center text-[10px] text-gray-400 mt-20">
        共执行 7 个查询，用时 0.026857 秒，Gzip 已禁用，内存占用 5.695 MB
      </div>
    </div>
  );
}
