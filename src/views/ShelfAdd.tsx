import React from 'react';

export function ShelfAdd() {
  return (
    <div className="bg-white h-full overflow-hidden font-sans text-gray-700 p-4">
      <div className="mb-8 border-l-4 border-[#00a2e8] pl-2 flex items-center">
        <span className="text-[14px] font-bold text-[#00a2e8]">新增货架</span>
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-2 gap-x-12 gap-y-6">
        {/* Left Column */}
        <div className="space-y-6">
          <div className="flex items-center">
            <label className="w-32 text-right text-[12px] text-gray-600 mr-4">归属仓库</label>
            <select className="flex-1 border border-gray-300 rounded-sm h-9 px-3 outline-none text-[12px] bg-white">
               <option>仓库名称</option>
            </select>
            <span className="text-red-500 ml-2">*</span>
          </div>

          <div className="flex items-center">
            <label className="w-32 text-right text-[12px] text-gray-600 mr-4">区域名称</label>
            <input type="text" className="flex-1 border border-gray-300 rounded-sm h-9 px-3 outline-none text-[12px]" />
            <span className="text-red-500 ml-2">*如: 衣服区,电子区</span>
          </div>

          <div className="flex items-center">
            <label className="w-32 text-right text-[12px] text-gray-600 mr-4">货架名称</label>
            <input type="text" placeholder="请输入字母" className="flex-1 border border-gray-300 rounded-sm h-9 px-3 outline-none text-[12px]" />
            <span className="text-red-500 ml-2">*如: A B C</span>
          </div>

          <div className="flex items-center">
            <label className="w-32 text-right text-[12px] text-gray-600 mr-4">货架数量</label>
            <input type="text" placeholder="请输入数字" className="flex-1 border border-gray-300 rounded-sm h-9 px-3 outline-none text-[12px]" />
            <span className="text-red-500 ml-2">*</span>
          </div>

          <div className="flex items-center">
            <label className="w-32 text-right text-[12px] text-gray-600 mr-4">层数</label>
            <input type="text" placeholder="请输入数字" className="flex-1 border border-gray-300 rounded-sm h-9 px-3 outline-none text-[12px]" />
            <span className="text-red-500 ml-2">*</span>
          </div>

          <div className="flex items-center">
            <label className="w-32 text-right text-[12px] text-gray-600 mr-4">格数</label>
            <input type="text" placeholder="请输入数字" className="flex-1 border border-gray-300 rounded-sm h-9 px-3 outline-none text-[12px]" />
            <span className="text-red-500 ml-2">*如果不分格数,则默认为一格</span>
          </div>

          <div className="flex items-center">
            <label className="w-32 text-right text-[12px] text-gray-600 mr-4">库存容量</label>
            <input type="text" placeholder="请输入数字" className="flex-1 border border-gray-300 rounded-sm h-9 px-3 outline-none text-[12px]" />
            <span className="text-red-500 ml-2">*</span>
          </div>

          <div className="flex items-center">
            <label className="w-32 text-right text-[12px] text-gray-600 mr-4">货架类型</label>
            <div className="flex items-center gap-4 text-[12px]">
              <label className="flex items-center gap-1 cursor-pointer">
                <input type="radio" name="shelfType" defaultChecked className="text-blue-500" />
                小货架
              </label>
              <label className="flex items-center gap-1 cursor-pointer">
                <input type="radio" name="shelfType" />
                大货架
              </label>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6 pt-[40px]">
          <div className="text-[12px] text-red-500 mb-2 pl-4">
             货架名称格式为：货架分区-架位数-层数 如：A区 第6货架 第5层：A-06-05<br/>
             货架条码：按起始号叠加，为4位数
          </div>

          <div className="flex items-center">
            <label className="w-32 text-right text-[12px] text-gray-600 mr-4">条码起始号</label>
            <input type="text" className="flex-1 border border-gray-300 rounded-sm h-9 px-3 outline-none text-[12px]" />
            <span className="text-red-500 ml-2">*</span>
          </div>

          <div className="flex items-center">
            <label className="w-32 text-right text-[12px] text-gray-600 mr-4">货架起始号</label>
            <input type="text" defaultValue="0" className="flex-1 border border-gray-300 rounded-sm h-9 px-3 outline-none text-[12px]" />
            <span className="text-red-500 ml-2">*</span>
          </div>

          <div className="flex items-center">
            <label className="w-32 text-right text-[12px] text-gray-600 mr-4">层数起始号</label>
            <input type="text" defaultValue="1" className="flex-1 border border-gray-300 rounded-sm h-9 px-3 outline-none text-[12px]" />
            <span className="text-red-500 ml-2">*</span>
          </div>

          <div className="flex items-center">
            <label className="w-32 text-right text-[12px] text-gray-600 mr-4">格数起始号</label>
            <input type="text" defaultValue="1" className="flex-1 border border-gray-300 rounded-sm h-9 px-3 outline-none text-[12px]" />
            <span className="text-red-500 ml-2">*</span>
          </div>

          <div className="flex items-center">
            <label className="w-32 text-right text-[12px] text-gray-600 mr-4">排序</label>
            <input type="text" defaultValue="50" className="flex-1 border border-gray-300 rounded-sm h-9 px-3 outline-none text-[12px]" />
          </div>

          <div className="flex items-center">
            <label className="w-32 text-right text-[12px] text-gray-600 mr-4">状态</label>
            <div className="flex items-center gap-4 text-[12px]">
              <label className="flex items-center gap-1 cursor-pointer">
                <input type="radio" name="status" defaultChecked className="text-blue-500" />
                显示
              </label>
              <label className="flex items-center gap-1 cursor-pointer">
                <input type="radio" name="status" />
                不显示
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-2 mt-16 px-4 max-w-4xl mx-auto">
        <button className="bg-[#00a2e8] hover:bg-blue-600 text-white px-8 h-8 text-[12px] rounded-sm transition-colors shadow-sm font-medium">确定</button>
        <button className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 px-8 h-8 text-[12px] rounded-sm transition-colors shadow-sm font-medium">重置</button>
      </div>
    </div>
  );
}
