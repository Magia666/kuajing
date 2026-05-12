import React, { useState } from 'react';
import { Search, Plus, Trash2, FileOutput, FileInput, PlusSquare, Info, ShieldAlert } from 'lucide-react';
import { cn } from '../lib/utils';

export function AddOrder() {
  const [firstLegType, setFirstLegType] = useState('dropship'); // 一件代发
  const [deliveryMethod, setDeliveryMethod] = useState('overseas'); // 自寄海外仓

  return (
    <div className="bg-white rounded-sm border border-gray-200 animate-in fade-in duration-500 w-full h-full overflow-hidden pb-10">
      {/* Header */}
      <div className="bg-[#e4e7ed] px-4 py-2 flex items-center border-b border-gray-300">
        <div className="w-1 h-4 bg-blue-500 mr-2"></div>
        <span className="text-[14px] font-medium text-gray-700">添加订单</span>
      </div>

      {/* Order Info Form */}
      <div className="p-6 bg-[#f5f7fa] grid grid-cols-2 gap-x-12 gap-y-4 border-b border-gray-200">
        {/* Left Column */}
        <div className="space-y-4">
          <div className="flex items-center gap-4 group">
            <label className="w-24 text-right text-[12px] text-gray-600">客户名称</label>
            <div className="flex-1 flex gap-2">
              <input 
                type="text" 
                placeholder="请输入客户名称" 
                className="flex-1 h-8 px-2 border border-gray-300 rounded-sm text-[12px] outline-none focus:border-blue-400 bg-white"
              />
              <button className="bg-[#e4e7ed] hover:bg-gray-300 text-gray-700 h-8 px-4 text-[12px] border border-gray-300 rounded-sm">查询</button>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <label className="w-24 text-right text-[12px] text-gray-600">头程类型</label>
            <div className="flex-1">
              <button 
                onClick={() => setFirstLegType('dropship')}
                className={cn(
                  "h-8 px-4 text-[12px] rounded-sm transition-colors border",
                  firstLegType === 'dropship' 
                    ? "bg-blue-500 text-white border-blue-500" 
                    : "bg-white text-gray-600 border-gray-300 hover:bg-gray-50"
                )}
              >
                一件代发
              </button>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <label className="w-24 text-right text-[12px] text-gray-600">交货方式</label>
            <div className="flex-1">
              <button 
                onClick={() => setDeliveryMethod('overseas')}
                className={cn(
                  "h-8 px-4 text-[12px] rounded-sm transition-colors border",
                  deliveryMethod === 'overseas'
                    ? "bg-blue-500 text-white border-blue-500" 
                    : "bg-white text-gray-600 border-gray-300 hover:bg-gray-50"
                )}
              >
                自寄海外仓
              </button>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <label className="w-24 text-right text-[12px] text-gray-600">预计到货时间</label>
            <div className="flex-1 relative">
              <input 
                type="text" 
                className="w-full h-8 px-2 border border-gray-300 rounded-sm text-[12px] outline-none focus:border-blue-400 bg-white pr-8"
              />
              <div className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <label className="w-24 text-right text-[12px] text-gray-600">托数</label>
            <div className="flex-1">
              <input 
                type="text" 
                className="w-full h-8 px-2 border border-gray-300 rounded-sm text-[12px] outline-none focus:border-blue-400 bg-white"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <label className="w-24 text-right text-[12px] text-gray-600">备注</label>
            <div className="flex-1">
              <input 
                type="text" 
                className="w-full h-8 px-2 border border-gray-300 rounded-sm text-[12px] outline-none focus:border-blue-400 bg-white"
              />
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-4">
          <div className="flex items-center gap-4 group">
            <label className="w-24 text-right text-[12px] text-gray-600">寄往国家</label>
            <div className="flex-1 flex gap-2">
              <input 
                type="text" 
                placeholder="请输入寄往国家" 
                className="flex-1 h-8 px-2 border border-gray-300 rounded-sm text-[12px] outline-none focus:border-blue-400 bg-white"
              />
              <button className="bg-[#e4e7ed] hover:bg-gray-300 text-gray-700 h-8 px-4 text-[12px] border border-gray-300 rounded-sm">查询</button>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <label className="w-24 text-right text-[12px] text-gray-600">目的仓库</label>
            <div className="flex-1">
              <select className="w-full h-8 px-2 border border-gray-300 rounded-sm text-[12px] outline-none focus:border-blue-400 bg-white">
                <option>请选择目的仓库</option>
              </select>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <label className="w-24 text-right text-[12px] text-gray-600">运输方式</label>
            <div className="flex-1">
              <select className="w-full h-8 px-2 border border-gray-300 rounded-sm text-[12px] outline-none focus:border-blue-400 bg-white">
                <option>快递</option>
              </select>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <label className="w-24 text-right text-[12px] text-gray-600">报关方式</label>
            <div className="flex-1">
              <select className="w-full h-8 px-2 border border-gray-300 rounded-sm text-[12px] outline-none focus:border-blue-400 bg-white">
                <option>单独退税报关</option>
              </select>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <label className="w-24 text-right text-[12px] text-gray-600">柜型</label>
            <div className="flex-1">
              <select className="w-full h-8 px-2 border border-gray-300 rounded-sm text-[12px] outline-none focus:border-blue-400 bg-white">
                <option>请选择柜型</option>
              </select>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <label className="w-24 text-right text-[12px] text-gray-600">转单号</label>
            <div className="flex-1">
              <input 
                type="text" 
                className="w-full h-8 px-2 border border-gray-300 rounded-sm text-[12px] outline-none focus:border-blue-400 bg-white"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons for Table */}
      <div className="p-4 flex flex-wrap items-center gap-4">
        <button className="flex items-center gap-1.5 text-[12px] text-blue-600 hover:text-blue-700 bg-white px-2 py-1 border border-gray-200 rounded-sm shadow-sm transition-all hover:bg-gray-50">
          <FileOutput size={14} />
          导出明细
        </button>
        <button className="flex items-center gap-1.5 text-[12px] text-blue-600 hover:text-blue-700 bg-white px-2 py-1 border border-gray-200 rounded-sm shadow-sm transition-all hover:bg-gray-50">
          <Trash2 size={14} />
          删除
        </button>
        <button className="flex items-center gap-1.5 text-[12px] text-blue-600 hover:text-blue-700 bg-white px-2 py-1 border border-gray-200 rounded-sm shadow-sm transition-all hover:bg-gray-50">
          <FileInput size={14} />
          导入明细
        </button>
        <button className="flex items-center gap-1.5 text-[12px] text-blue-600 hover:text-blue-700 bg-white px-2 py-1 border border-gray-200 rounded-sm shadow-sm transition-all hover:bg-gray-50">
          <PlusSquare size={14} />
          添加明细
        </button>
        <div className="ml-2 flex items-center gap-1 text-[12px] text-red-500 whitespace-nowrap">
           PS:相同的装箱号表示SKU装在同一箱,装箱号建议您用1,2,3,4罗马数字来标识
        </div>
      </div>

      {/* Main Table Wrapper */}
      <div className="px-4 pb-4">
        <div className="border border-gray-200 min-h-[400px] flex flex-col relative overflow-auto">
          <table className="w-full text-left text-[12px] border-collapse min-w-[1400px]">
            <thead className="bg-[#f5f7fa] text-gray-600 font-medium">
              <tr>
                <th className="px-3 py-2 w-10 border-r border-gray-200"><input type="checkbox" /></th>
                <th className="px-3 py-2 border-r border-gray-200">装箱号</th>
                <th className="px-3 py-2 border-r border-gray-200">箱数</th>
                <th className="px-3 py-2 border-r border-gray-200">Fnsku</th>
                <th className="px-3 py-2 border-r border-gray-200">单箱数量</th>
                <th className="px-3 py-2 border-r border-gray-200 w-80">产品名称</th>
                <th className="px-3 py-2 border-r border-gray-200 w-64">英文名称</th>
                <th className="px-3 py-2 border-r border-gray-200">单价</th>
                <th className="px-3 py-2 border-r border-gray-200">重量(kg)</th>
                <th className="px-3 py-2 border-r border-gray-200">长(cm)</th>
                <th className="px-3 py-2 border-r border-gray-200">宽(cm)</th>
                <th className="px-3 py-2 border-r border-gray-200">高(cm)</th>
                <th className="px-3 py-2 border-r border-gray-200">校验订单</th>
              </tr>
            </thead>
            <tbody>
              {[
                { id: '1', boxNo: '1', boxes: 1, fnsku: 'D120154AGF2', qty: 50, name: '猫咪水杯', enName: 'Cat Mug', price: 15.5, weight: 25.0, l: 40, w: 30, h: 30 },
                { id: '2', boxNo: '2', boxes: 1, fnsku: 'D12021T8BFJ', qty: 100, name: '短袖', enName: 'T-shirt', price: 8.0, weight: 20.0, l: 50, w: 40, h: 20 },
              ].map((item, idx) => (
                <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-3 py-2 border-r border-gray-200"><input type="checkbox" /></td>
                  <td className="px-3 py-2 border-r border-gray-200">{item.boxNo}</td>
                  <td className="px-3 py-2 border-r border-gray-200">{item.boxes}</td>
                  <td className="px-3 py-2 border-r border-gray-200 text-blue-500">{item.fnsku}</td>
                  <td className="px-3 py-2 border-r border-gray-200">{item.qty}</td>
                  <td className="px-3 py-2 border-r border-gray-200 text-left truncate max-w-[200px]">{item.name}</td>
                  <td className="px-3 py-2 border-r border-gray-200 text-left truncate max-w-[150px]">{item.enName}</td>
                  <td className="px-3 py-2 border-r border-gray-200">{item.price.toFixed(2)}</td>
                  <td className="px-3 py-2 border-r border-gray-200">{item.weight.toFixed(1)}</td>
                  <td className="px-3 py-2 border-r border-gray-200">{item.l}</td>
                  <td className="px-3 py-2 border-r border-gray-200">{item.w}</td>
                  <td className="px-3 py-2 border-r border-gray-200">{item.h}</td>
                  <td className="px-3 py-2 text-green-500 font-medium border-r border-gray-200">通过</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Summary Row */}
        <div className="mt-4 flex items-center justify-between px-4 py-2 bg-white border border-gray-100 shadow-sm text-[12px]">
          <div className="flex items-center gap-4">
            <span className="text-gray-600">订单汇总:总箱数:<span className="text-red-500 font-medium">2</span>箱,总数量:<span className="text-red-500 font-medium">150</span>个</span>
            <button className="bg-[#00bccd] hover:bg-[#00a2b1] text-white px-3 py-1 rounded-sm transition-colors">检测</button>
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="mt-12 flex items-center justify-center gap-4 pb-10">
          <button className="w-32 py-2 text-blue-500 border border-blue-500 rounded-sm hover:bg-blue-50 transition-colors text-[14px]">校验订单</button>
          <button className="w-32 py-2 bg-blue-500 text-white border border-blue-500 rounded-sm hover:bg-blue-600 transition-colors text-[14px]">提交</button>
        </div>
      </div>

      {/* Footer statistics */}
      <div className="text-center text-[10px] text-gray-400 mt-auto">
        共执行 10 个查询，用时 0.022263 秒，Gzip 已禁用，内存占用 6.742 MB
      </div>
    </div>
  );
}
