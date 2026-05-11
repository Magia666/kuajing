import React from 'react';

export function MaterialAdd() {
  return (
    <div className="bg-white min-h-screen font-sans text-gray-700 p-6">
      <div className="mb-12 border-l-4 border-[#00a2e8] pl-2 flex items-center">
        <span className="text-[14px] font-bold text-[#00a2e8]">添加物料</span>
      </div>

      <div className="max-w-2xl mx-auto pl-10 space-y-6">
        
        {/* 物料编号 */}
        <div className="flex items-center">
          <label className="w-28 text-right text-[12px] text-gray-600 mr-4">
            <span className="text-red-500 mr-1">*</span>物料编号
          </label>
          <div className="flex w-[400px]">
            <input 
              type="text" 
              placeholder="物料编号" 
              className="flex-1 border border-gray-300 rounded-sm h-9 px-3 outline-none text-[12px]" 
            />
            <button className="bg-[#f04f4f] hover:bg-red-500 text-white px-4 ml-2 rounded-sm text-[12px]">
              生成
            </button>
          </div>
        </div>

        {/* 物料名称 */}
        <div className="flex items-center">
          <label className="w-28 text-right text-[12px] text-gray-600 mr-4">
            <span className="text-red-500 mr-1">*</span>物料名称
          </label>
          <input 
            type="text" 
            placeholder="物料名称" 
            className="w-[400px] border border-gray-300 rounded-sm h-9 px-3 outline-none text-[12px]" 
          />
        </div>

        {/* 物料英文名称 */}
        <div className="flex items-center">
          <label className="w-28 text-right text-[12px] text-gray-600 mr-4">
            <span className="text-red-500 mr-1">*</span>物料英文名称
          </label>
          <input 
            type="text" 
            placeholder="物料英文名称" 
            className="w-[400px] border border-gray-300 rounded-sm h-9 px-3 outline-none text-[12px]" 
          />
        </div>

        {/* 仓库名称 */}
        <div className="flex items-center">
          <label className="w-28 text-right text-[12px] text-gray-600 mr-4">
            仓库名称
          </label>
          <div className="flex items-center">
            <select className="w-[400px] border border-gray-300 rounded-sm h-9 px-3 outline-none text-[12px] bg-white text-gray-500">
              <option>请选择仓库</option>
            </select>
            <span className="text-red-500 ml-2">*</span>
          </div>
        </div>

        {/* 物料货值 */}
        <div className="flex items-center">
          <label className="w-28 text-right text-[12px] text-gray-600 mr-4">
            <span className="text-red-500 mr-1">*</span>物料货值
          </label>
          <input 
            type="text" 
            placeholder="物料货值" 
            className="w-[400px] border border-gray-300 rounded-sm h-9 px-3 outline-none text-[12px]" 
          />
        </div>

        {/* 状态 */}
        <div className="flex items-center">
          <label className="w-28 text-right text-[12px] text-gray-600 mr-4">
            状态
          </label>
          <select className="w-[400px] border border-gray-300 rounded-sm h-9 px-3 outline-none text-[12px] bg-white text-gray-500">
            <option>启用</option>
          </select>
        </div>

        {/* 提交按钮 */}
        <div className="flex justify-center pt-8 pr-16 max-w-[550px]">
          <button className="bg-[#00a2e8] hover:bg-blue-600 text-white px-10 h-9 text-[13px] rounded-sm transition-colors shadow-sm font-medium">
            提交
          </button>
        </div>

      </div>
    </div>
  );
}
