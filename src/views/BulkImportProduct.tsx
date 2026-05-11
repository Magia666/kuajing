import React from 'react';
import { Download, Upload, Search } from 'lucide-react';
import { cn } from '../lib/utils';

export function BulkImportProduct() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 w-full mx-auto my-6 animate-in fade-in duration-500 min-h-[600px]">
      {/* Page Title */}
      <div className="flex items-center gap-2 mb-10">
        <div className="w-1 h-5 bg-blue-600 rounded-full"></div>
        <h2 className="text-lg font-bold text-gray-800">批量导入产品</h2>
      </div>

      <div className="space-y-8 ml-8">
        {/* Step 1: Select Customer */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span className="w-5 h-5 flex items-center justify-center rounded-full border border-gray-400 text-[10px] mr-1">1</span>
            请选择客户
          </div>
          <div className="flex items-center gap-2 max-w-md ml-6">
            <input 
              type="text" 
              className="flex-1 px-3 py-2 border border-gray-200 rounded-sm text-sm focus:outline-none focus:border-blue-400" 
              placeholder=""
            />
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-600 px-6 py-2 rounded-sm text-sm transition-colors border border-gray-200 flex items-center gap-2">
              <Search size={14} />
              查询
            </button>
          </div>
        </div>

        {/* Step 2: Download Template */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span className="w-5 h-5 flex items-center justify-center rounded-full border border-gray-400 text-[10px] mr-1">1</span>
            下载产品批量上传模板并填写信息
            <button className="text-blue-500 hover:underline ml-4 flex items-center gap-1 font-medium">
              下载模板
            </button>
          </div>
        </div>

        {/* Step 3: Upload Template */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span className="w-5 h-5 flex items-center justify-center rounded-full border border-gray-400 text-[10px] mr-1">3</span>
            上传填写完整的模板
          </div>
          <div className="ml-6 flex flex-col gap-4">
             <div className="flex items-center">
              <label className="cursor-pointer bg-gray-100 border border-gray-300 hover:bg-gray-200 px-3 py-1 rounded-sm text-xs text-gray-700 transition-colors mr-2">
                选择文件
                <input type="file" className="hidden" />
              </label>
              <span className="text-xs text-gray-400 italic">未选择文件</span>
             </div>
             
             <p className="text-xs text-gray-500 leading-relaxed max-w-2xl">
               上传说明：正确选择要上传的产品文件，上传成功后，可以对上传的产品进行修改
             </p>

             <button className="bg-blue-500 hover:bg-blue-600 text-white px-10 py-2 rounded-sm text-sm font-medium transition-all shadow-sm w-fit mt-2 flex items-center gap-2 active:scale-95">
               <Upload size={16} />
               上传
             </button>
          </div>
        </div>
      </div>
    </div>
  );
}
