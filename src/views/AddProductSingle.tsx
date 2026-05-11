import React from 'react';
import { Search, Plus, Calendar, Save, Type, Bold, Italic, Underline, Link, Image as ImageIcon, List, ListOrdered, AlignLeft, AlignCenter, AlignRight } from 'lucide-react';
import { cn } from '../lib/utils';

export function AddProductSingle() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 w-full mx-auto my-6 animate-in fade-in duration-500">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
        
        {/* Row 1 */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <label className="w-24 text-right text-xs text-gray-600">客户名称</label>
            <div className="flex flex-1 gap-2">
              <input type="text" placeholder="请输入客户名称" className="flex-1 px-3 py-1.5 border border-gray-200 rounded-sm text-sm focus:outline-none focus:border-blue-400" />
              <button className="bg-gray-100 hover:bg-gray-200 text-gray-600 px-4 py-1.5 rounded-sm text-sm transition-colors border border-gray-200">查询</button>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <label className="w-24 text-right text-xs text-gray-600"><span className="text-red-500 mr-0.5">*</span>Fnsku</label>
            <div className="flex flex-1 gap-2">
              <input type="text" className="flex-1 px-3 py-1.5 border border-gray-200 rounded-sm text-sm focus:outline-none focus:border-blue-400" />
              <button className="bg-[#ff4d4f] hover:bg-[#ff7875] text-white px-3 py-1.5 rounded-sm text-sm transition-colors">生成</button>
              <span className="text-red-500 text-xs self-center font-bold">*</span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <label className="w-24 text-right text-xs text-gray-600"><span className="text-red-500 mr-0.5">*</span>seller sku</label>
            <div className="flex flex-1 gap-2">
              <input type="text" className="flex-1 px-3 py-1.5 border border-gray-200 rounded-sm text-sm focus:outline-none focus:border-blue-400" />
              <span className="text-red-500 text-xs self-center font-bold">*</span>
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex items-center gap-2">
          <label className="w-24 text-right text-xs text-gray-600"><span className="text-red-500 mr-0.5">*</span>产品名称</label>
          <div className="flex flex-1 gap-2">
            <input type="text" className="flex-1 px-3 py-1.5 border border-gray-200 rounded-sm text-sm focus:outline-none focus:border-blue-400" />
            <span className="text-red-500 text-xs self-center">*</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <label className="w-24 text-right text-xs text-gray-600"><span className="text-red-500 mr-0.5">*</span>英文名称</label>
          <div className="flex flex-1 gap-2">
            <input type="text" className="flex-1 px-3 py-1.5 border border-gray-200 rounded-sm text-sm focus:outline-none focus:border-blue-400" />
            <span className="text-red-500 text-xs self-center">*</span>
          </div>
        </div>

        {/* Row 3 */}
        <div className="flex items-center gap-2">
          <label className="w-24 text-right text-xs text-gray-600"><span className="text-red-500 mr-0.5">*</span>海关编码</label>
          <div className="flex flex-1 gap-2">
            <input type="text" className="flex-1 px-3 py-1.5 border border-gray-200 rounded-sm text-sm focus:outline-none focus:border-blue-400" />
            <span className="text-red-500 text-xs self-center">*</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <label className="w-24 text-right text-xs text-gray-600">申报价值</label>
          <input type="text" className="flex-1 px-3 py-1.5 border border-gray-200 rounded-sm text-sm focus:outline-none focus:border-blue-400" />
        </div>

        {/* Row 4 */}
        <div className="flex items-center gap-2">
          <label className="w-24 text-right text-xs text-gray-600">原产地</label>
          <input type="text" className="flex-1 px-3 py-1.5 border border-gray-200 rounded-sm text-sm focus:outline-none focus:border-blue-400" />
        </div>

        <div className="flex items-center gap-2">
          <label className="w-24 text-right text-xs text-gray-600">产品描述</label>
          <input type="text" className="flex-1 px-3 py-1.5 border border-gray-200 rounded-sm text-sm focus:outline-none focus:border-blue-400" />
        </div>

        {/* Row 5 */}
        <div className="flex items-center gap-2">
          <label className="w-24 text-right text-xs text-gray-600"><span className="text-red-500 mr-0.5">*</span>产品规格</label>
          <div className="flex flex-1 gap-2">
            <input type="text" className="flex-1 px-3 py-1.5 border border-gray-200 rounded-sm text-sm focus:outline-none focus:border-blue-400" />
            <span className="text-red-500 text-xs self-center">*</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <label className="w-24 text-right text-xs text-gray-600">颜色</label>
          <input type="text" placeholder="请输入" className="flex-1 px-3 py-1.5 border border-gray-200 rounded-sm text-sm focus:outline-none focus:border-blue-400" />
        </div>

        {/* Row 6 */}
        <div className="flex items-center gap-2">
          <label className="w-24 text-right text-xs text-gray-600"><span className="text-red-500 mr-0.5">*</span>重量(kg)</label>
          <input type="text" className="flex-1 px-3 py-1.5 border border-gray-200 rounded-sm text-sm focus:outline-none focus:border-blue-400" />
        </div>

        <div className="flex items-center gap-2">
          <label className="w-24 text-right text-xs text-gray-600">系统重量(kg)</label>
          <input type="text" className="flex-1 px-3 py-1.5 border border-gray-200 rounded-sm text-sm focus:outline-none focus:border-blue-400" />
        </div>

        {/* Row 7 - Dimensions */}
        <div className="flex items-center gap-2">
          <label className="w-24 text-right text-xs text-gray-600"><span className="text-red-500 mr-0.5">*</span>尺寸(cm)</label>
          <div className="flex flex-1 gap-1 items-center">
            <input type="text" placeholder="长" className="w-[31%] px-3 py-1.5 border border-gray-200 rounded-sm text-sm focus:outline-none focus:border-blue-400" />
            <input type="text" placeholder="宽" className="w-[31%] px-3 py-1.5 border border-gray-200 rounded-sm text-sm focus:outline-none focus:border-blue-400" />
            <input type="text" placeholder="高" className="w-[31%] px-3 py-1.5 border border-gray-200 rounded-sm text-sm focus:outline-none focus:border-blue-400" />
            <span className="text-red-500 text-xs ml-1">*</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <label className="w-24 text-right text-xs text-gray-600">系统尺寸(cm)</label>
          <div className="flex flex-1 gap-1 items-center">
            <input type="text" placeholder="长" className="w-[31%] px-3 py-1.5 border border-gray-200 rounded-sm text-sm focus:outline-none focus:border-blue-400" />
            <input type="text" placeholder="宽" className="w-[31%] px-3 py-1.5 border border-gray-200 rounded-sm text-sm focus:outline-none focus:border-blue-400" />
            <input type="text" placeholder="高" className="w-[31%] px-3 py-1.5 border border-gray-200 rounded-sm text-sm focus:outline-none focus:border-blue-400" />
            <span className="text-red-500 text-xs ml-1">*</span>
          </div>
        </div>

        {/* Row 8 */}
        <div className="flex items-center gap-2">
          <label className="w-24 text-right text-xs text-gray-600">图片网络URL</label>
          <input type="text" className="flex-1 px-3 py-1.5 border border-gray-200 rounded-sm text-sm focus:outline-none focus:border-blue-400" />
        </div>

        <div className="flex items-center gap-2">
          <label className="w-24 text-right text-xs text-gray-600">含电池</label>
          <select className="flex-1 px-3 py-1.5 border border-gray-200 rounded-sm text-sm focus:outline-none focus:border-blue-400 bg-white">
            <option>不含电池</option>
            <option>含电池</option>
          </select>
        </div>

        {/* Row 9 */}
        <div className="flex items-center gap-2">
          <label className="w-24 text-right text-xs text-gray-600">产品类型</label>
          <select className="flex-1 px-3 py-1.5 border border-gray-200 rounded-sm text-sm focus:outline-none focus:border-blue-400 bg-white">
            <option>单个产品</option>
            <option>组合产品</option>
          </select>
        </div>

        <div className="flex items-center gap-2">
          <label className="w-24 text-right text-xs text-gray-600"><span className="text-red-500 mr-0.5">*</span>产品分类</label>
          <div className="flex flex-1 gap-2">
            <select className="flex-1 px-3 py-1.5 border border-gray-200 rounded-sm text-sm focus:outline-none focus:border-blue-400 bg-white">
              <option>请选择</option>
            </select>
            <span className="text-red-500 text-xs self-center">*</span>
          </div>
        </div>

        {/* Row 10 */}
        <div className="flex items-center gap-2">
          <label className="w-24 text-right text-xs text-gray-600">SPU</label>
          <input type="text" className="flex-1 px-3 py-1.5 border border-gray-200 rounded-sm text-sm focus:outline-none focus:border-blue-400" />
        </div>

        <div className="flex items-center gap-2">
          <label className="w-24 text-right text-xs text-gray-600">网络地址</label>
          <input type="text" className="flex-1 px-3 py-1.5 border border-gray-200 rounded-sm text-sm focus:outline-none focus:border-blue-400" />
        </div>

        {/* Row 11 */}
        <div className="flex items-center gap-2">
          <label className="w-24 text-right text-xs text-gray-600">平台SKU</label>
          <div className="flex flex-1 gap-1">
            <input type="text" className="w-20 px-3 py-1.5 border border-gray-200 rounded-sm text-sm focus:outline-none focus:border-blue-400" />
            <button className="bg-red-500 hover:bg-red-600 text-white w-8 h-8 rounded-sm flex items-center justify-center transition-colors">
              <Plus size={16} />
            </button>
          </div>
        </div>

        {/* Empty placeholder for alignment */}
        <div></div>

        {/* Row 12 */}
        <div className="flex items-center gap-2">
          <label className="w-24 text-right text-xs text-gray-600">零售指导价格</label>
          <input type="text" className="flex-1 px-3 py-1.5 border border-gray-200 rounded-sm text-sm focus:outline-none focus:border-blue-400" />
        </div>

        <div className="flex items-center gap-2">
          <label className="w-24 text-right text-xs text-gray-600">分销截止时间</label>
          <div className="flex-1 relative">
            <input type="text" className="w-full px-3 py-1.5 border border-gray-200 rounded-sm text-sm focus:outline-none focus:border-blue-400" />
            <Calendar className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
          </div>
        </div>

        {/* Row 13 */}
        <div className="flex items-center gap-2">
          <label className="w-24 text-right text-xs text-gray-600">分销备注</label>
          <input type="text" className="flex-1 px-3 py-1.5 border border-gray-200 rounded-sm text-sm focus:outline-none focus:border-blue-400" />
        </div>

        <div className="flex items-center gap-2">
          <label className="w-24 text-right text-xs text-gray-600">成本价格</label>
          <input type="text" className="flex-1 px-3 py-1.5 border border-gray-200 rounded-sm text-sm focus:outline-none focus:border-blue-400" />
        </div>

        {/* Product Image */}
        <div className="col-span-1 md:col-span-2 flex items-start gap-2 mt-4">
          <label className="w-24 text-right text-xs text-gray-600">产品图片</label>
          <div className="w-16 h-16 border-2 border-dashed border-gray-200 rounded-lg flex items-center justify-center cursor-pointer hover:border-blue-300 transition-colors bg-gray-50 group">
            <Plus size={24} className="text-gray-300 group-hover:text-blue-400 transition-colors" />
          </div>
        </div>

        {/* Product Long Description - Rich Text Area */}
        <div className="col-span-1 md:col-span-2 flex flex-col gap-2 mt-4">
          <div className="flex items-start gap-2">
            <label className="w-24 text-right text-xs text-gray-600 pt-2">产品描述</label>
            <div className="flex-1 border border-gray-200 rounded-sm overflow-hidden bg-white shadow-sm">
              <div className="bg-gray-50/80 border-b border-gray-200 p-1 flex flex-wrap gap-0.5">
                <ToolbarButton icon={<Type size={14} />} />
                <div className="w-[1px] h-4 bg-gray-300 mx-1 self-center" />
                <ToolbarButton icon={<Bold size={14} />} />
                <ToolbarButton icon={<Italic size={14} />} />
                <ToolbarButton icon={<Underline size={14} />} />
                <div className="w-[1px] h-4 bg-gray-300 mx-1 self-center" />
                <ToolbarButton icon={<AlignLeft size={14} />} />
                <ToolbarButton icon={<AlignCenter size={14} />} />
                <ToolbarButton icon={<AlignRight size={14} />} />
                <div className="w-[1px] h-4 bg-gray-300 mx-1 self-center" />
                <ToolbarButton icon={<List size={14} />} />
                <ToolbarButton icon={<ListOrdered size={14} />} />
                <div className="w-[1px] h-4 bg-gray-300 mx-1 self-center" />
                <ToolbarButton icon={<Link size={14} />} />
                <ToolbarButton icon={<ImageIcon size={14} />} />
              </div>
              <textarea 
                rows={10} 
                className="w-full p-4 text-sm focus:outline-none resize-y min-h-[250px]"
                placeholder="在此输入详细的产品描述..."
              />
            </div>
          </div>
        </div>

      </div>

      <div className="mt-12 flex justify-center pb-8">
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-16 py-2 rounded-sm text-sm font-medium transition-all shadow-md active:scale-95 flex items-center gap-2">
          <Save size={16} />
          保存
        </button>
      </div>
    </div>
  );
}

function ToolbarButton({ icon }: { icon: React.ReactNode }) {
  return (
    <button className="p-1.5 hover:bg-gray-200 rounded-sm text-gray-500 transition-colors">
      {icon}
    </button>
  );
}
