import React from 'react';
import { Search, Info, Trash2, Upload, Download } from 'lucide-react';
import { cn } from '../lib/utils';

interface HSCodeData {
  id: string;
  productName: string;
  middleCol: string;
  hsCode: string;
  unit: string;
  unitCode: string;
}

const MOCK_DATA: HSCodeData[] = [
  { id: '1', productName: '塑胶环', middleCol: '', hsCode: '3926909090', unit: '千克', unitCode: '035' },
  { id: '2', productName: '弹簧', middleCol: '', hsCode: '7320209000', unit: '千克', unitCode: '035' },
  { id: '3', productName: '灯泡', middleCol: '', hsCode: '8539229000', unit: '千克', unitCode: '035' },
  { id: '4', productName: '灯芯', middleCol: '', hsCode: '8539900000', unit: '千克', unitCode: '035' },
  { id: '5', productName: '胶壳', middleCol: '', hsCode: '3926909090', unit: '千克', unitCode: '035' },
  { id: '6', productName: '胶膜', middleCol: '', hsCode: '3920430090', unit: '千克', unitCode: '035' },
  { id: '7', productName: '说明书', middleCol: '', hsCode: '4901990000', unit: '千克', unitCode: '035' },
  { id: '8', productName: '贴纸', middleCol: '', hsCode: '4811490000', unit: '千克', unitCode: '035' },
  { id: '9', productName: '铁链', middleCol: '', hsCode: '7315120000', unit: '千克', unitCode: '035' },
];

export function HSCodeManagement() {
  return (
    <div className="bg-[#f5f7fa] animate-in fade-in duration-500 w-full h-full overflow-hidden">
      {/* Top Controls */}
      <div className="bg-white p-4 border-b border-gray-200">
        <div className="max-w-[1600px] mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
              <input type="text" className="h-8 pl-8 pr-2 border border-gray-300 rounded-sm text-[12px] w-64 outline-none focus:border-blue-400" />
            </div>
            <button className="bg-blue-500 hover:bg-blue-600 text-white h-8 px-4 text-[12px] rounded-sm transition-colors">确定</button>
          </div>

          <div className="flex items-center gap-4 text-[12px]">
            <div className="flex items-center gap-2">
              <span className="text-gray-600">导入Excel表:</span>
              <label className="cursor-pointer bg-white border border-gray-300 hover:bg-gray-50 px-2 py-1 rounded-sm text-gray-600">
                选择文件
                <input type="file" className="hidden" />
              </label>
              <span className="text-gray-400 italic">未选择文件</span>
              <button className="bg-blue-500 hover:bg-blue-600 text-white h-8 px-4 rounded-sm">提交</button>
            </div>
            <button className="text-gray-600 hover:text-blue-500 flex items-center gap-1 font-medium">
              <Download size={14} /> 下载模板
            </button>
          </div>
        </div>
      </div>

      {/* Add New Section */}
      <div className="bg-white p-4 mt-4 border-y border-gray-200">
        <div className="max-w-[1600px] mx-auto flex items-center gap-4">
          <label className="text-[12px] text-gray-600">新增品名:</label>
          <input type="text" className="h-8 px-2 border border-gray-300 text-[12px] w-32 outline-none focus:border-blue-400" />
          <input type="text" placeholder="输入编码" className="h-8 px-2 border border-gray-300 text-[12px] w-32 outline-none focus:border-blue-400" />
          <input type="text" className="h-8 px-2 border border-gray-300 text-[12px] w-32 outline-none focus:border-blue-400" />
          <input type="text" className="h-8 px-2 border border-gray-300 text-[12px] w-32 outline-none focus:border-blue-400" />
          <button className="bg-blue-500 hover:bg-blue-600 text-white h-7 px-4 text-[12px] rounded-sm transition-colors">查询</button>
        </div>
      </div>

      {/* Main Table */}
      <div className="p-4">
        <div className="bg-white border border-gray-200">
          <table className="w-full text-[12px] text-left border-collapse">
            <thead className="bg-[#f5f7fa] text-gray-600 font-medium">
              <tr>
                <th className="px-4 py-3 border-r border-gray-200 w-1/4 px-3 py-2">产品名称</th>
                <th className="px-4 py-3 border-r border-gray-200 px-3 py-2">HS编码</th>
                <th className="px-4 py-3 border-r border-gray-200 px-3 py-2">单位</th>
                <th className="px-4 py-3 border-r border-gray-200 px-3 py-2">单位编码</th>
                <th className="px-4 py-3 px-3 py-2 border-r border-gray-200">操作</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {MOCK_DATA.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-3 border-r border-gray-200 px-3 py-2">{item.productName}</td>
                  <td className="px-4 py-3 border-r border-gray-200 text-gray-600 px-3 py-2">{item.hsCode}</td>
                  <td className="px-4 py-3 border-r border-gray-200 px-3 py-2">{item.unit}</td>
                  <td className="px-4 py-3 border-r border-gray-200 text-gray-500 px-3 py-2">{item.unitCode}</td>
                  <td className="px-4 py-3 px-3 py-2 border-r border-gray-200">
                    <button className="text-gray-800 hover:text-red-500 transition-colors">删除</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Footer info matches screenshot */}
        <div className="mt-8 text-center text-[10px] text-gray-400">
          共执行 3 个查询，用时 {Math.random().toFixed(6)} 秒，Gzip 已禁用，内存占用 { (2 + Math.random()).toFixed(3) } MB
        </div>
      </div>
    </div>
  );
}
