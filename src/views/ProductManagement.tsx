import React, { useState } from 'react';
import { Search, Plus, FileSpreadsheet, MoreHorizontal, Info, Edit, Printer, Trash2, CheckCircle, XCircle, Power, ExternalLink, Package } from 'lucide-react';
import { cn } from '../lib/utils';

interface ProductData {
  id: string;
  customerName: string;
  customerCode: string;
  spu: string;
  fnsku: string;
  sellerSku: string;
  platformSku: string;
  image?: string;
  productName: string;
  weight: number;
  size: string;
  costPrice: number;
  distPrice: number;
  declaredValue: number;
  status: string;
  productType: string;
  pushStatus: string;
  pushExcellentWms: string;
  addedTime: string;
}

const MOCK_DATA: ProductData[] = [
  { id: '1', customerName: 'yueyang01', customerCode: '12015', spu: '', fnsku: 'D120154AGF2', sellerSku: '123321', platformSku: '', productName: '猫咪水杯', weight: 0.5, size: '10*5*5', costPrice: 0.00, distPrice: 78.00, declaredValue: 50.00, status: '启用', productType: '单个产品', pushStatus: '', pushExcellentWms: '未推送', addedTime: '2025-12-04 13:23:19' },
  { id: '2', customerName: 'yueyang07', customerCode: '12021', spu: '', fnsku: 'D12021T8BFJ', sellerSku: '123456445', platformSku: '', productName: '短袖', weight: 2, size: '20*24*1', costPrice: 0.00, distPrice: 29.00, declaredValue: 0.00, status: '启用', productType: '单个产品', pushStatus: '', pushExcellentWms: '未推送', addedTime: '2025-12-04 13:22:37' },
  { id: '3', customerName: 'yueyang02', customerCode: '12016', spu: '', fnsku: 'D12016706KE', sellerSku: '1112', platformSku: '', productName: '水杯', weight: 0.5, size: '10*5*10', costPrice: 0.00, distPrice: 0.00, declaredValue: 20.00, status: '启用', productType: '单个产品', pushStatus: '', pushExcellentWms: '未推送', addedTime: '2025-12-04 13:21:51' },
  { id: '4', customerName: 'shanghai_tech', customerCode: '13001', spu: 'S001', fnsku: 'FNSKU001', sellerSku: 'SKU-001', platformSku: 'P-001', productName: '无线蓝牙耳机', weight: 0.2, size: '5*5*3', costPrice: 45.00, distPrice: 89.00, declaredValue: 30.00, status: '待审核', productType: '单个产品', pushStatus: '', pushExcellentWms: '未推送', addedTime: '2026-05-10 10:00:00' },
  { id: '5', customerName: 'beijing_trade', customerCode: '13002', spu: 'S002', fnsku: 'FNSKU002', sellerSku: 'SKU-002', platformSku: 'P-002', productName: '便携式咖啡机', weight: 1.5, size: '15*15*25', costPrice: 120.00, distPrice: 249.00, declaredValue: 100.00, status: '停用', productType: '单个产品', pushStatus: '', pushExcellentWms: '已推送', addedTime: '2026-05-09 14:30:00' },
  { id: '6', customerName: 'shenzhen_elec', customerCode: '13003', spu: 'S003', fnsku: 'FNSKU003', sellerSku: 'SKU-003', platformSku: 'P-003', productName: '智能手表', weight: 0.3, size: '10*10*5', costPrice: 200.00, distPrice: 399.00, declaredValue: 150.00, status: '审核不通过', productType: '单个产品', pushStatus: '', pushExcellentWms: '未推送', addedTime: '2026-05-11 09:15:00' },
  { id: '10', customerName: 'jinyi', customerCode: '12013', spu: '1', fnsku: 'D12013R38P7', sellerSku: 'yy', platformSku: '', productName: '小帕纸巾', weight: 2, size: '1*1*1', costPrice: 1000.00, distPrice: 0.00, declaredValue: 10000.00, status: '启用', productType: '单个产品', pushStatus: '', pushExcellentWms: '已推送', addedTime: '2025-06-17 14:47:53' },
  { id: '11', customerName: 'guangzhou_garment', customerCode: '13004', spu: 'S004', fnsku: 'FNSKU004', sellerSku: 'SKU-004', platformSku: 'P-004', productName: '无缝瑜伽裤', weight: 0.8, size: '20*30*2', costPrice: 15.00, distPrice: 45.00, declaredValue: 20.00, status: '启用', productType: '支持多规格变体产品', pushStatus: '部分推送', pushExcellentWms: '未推送', addedTime: '2026-05-08 14:20:00' },
  { id: '12', customerName: 'hangzhou_home', customerCode: '13005', spu: 'S005', fnsku: 'FNSKU005', sellerSku: 'SKU-005', platformSku: 'P-005', productName: '香薰机', weight: 0.5, size: '10*10*15', costPrice: 35.00, distPrice: 85.00, declaredValue: 40.00, status: '待审核', productType: '单个产品', pushStatus: '', pushExcellentWms: '已推送', addedTime: '2026-05-07 10:11:30' },
  { id: '13', customerName: 'chengdu_toys', customerCode: '13006', spu: 'S006', fnsku: 'FNSKU006', sellerSku: 'SKU-006', platformSku: 'P-006', productName: '益智积木', weight: 1.2, size: '25*15*10', costPrice: 20.00, distPrice: 60.00, declaredValue: 25.00, status: '停用', productType: '单个产品', pushStatus: '', pushExcellentWms: '未推送', addedTime: '2026-05-12 08:00:22' },
  { id: '14', customerName: 'wuhan_sports', customerCode: '13007', spu: 'S007', fnsku: 'FNSKU007', sellerSku: 'SKU-007', platformSku: 'P-007', productName: '筋膜枪', weight: 0.9, size: '18*15*8', costPrice: 80.00, distPrice: 199.00, declaredValue: 90.00, status: '审核不通过', productType: '单个产品', pushStatus: '', pushExcellentWms: '未推送', addedTime: '2026-04-30 11:45:00' },
  { id: '15', customerName: 'nanjing_beauty', customerCode: '13008', spu: 'S008', fnsku: 'FNSKU008', sellerSku: 'SKU-008', platformSku: 'P-008', productName: '电动修眉刀', weight: 0.1, size: '12*2*2', costPrice: 12.00, distPrice: 39.00, declaredValue: 15.00, status: '启用', productType: '单个产品', pushStatus: '', pushExcellentWms: '已推送', addedTime: '2026-04-20 16:30:15' },
];

interface ProductManagementProps {
  mode: 'pending-review' | 'product-list' | 'disabled-products' | 'rejected-products';
}

export function ProductManagement({ mode }: ProductManagementProps) {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  
  const getTitle = () => {
    switch(mode) {
      case 'pending-review': return '待审核产品';
      case 'product-list': return '产品列表';
      case 'disabled-products': return '停用产品';
      case 'rejected-products': return '审核不通过产品';
      default: return '产品管理';
    }
  };

  const filteredData = MOCK_DATA.filter(item => {
    if (mode === 'disabled-products') return item.status === '停用';
    if (mode === 'rejected-products') return item.status === '审核不通过';
    if (mode === 'pending-review') return item.status === '待审核';
    return true; // product-list shows all or active
  });

  const displayData = filteredData;

  return (
    <div className="bg-white p-4 rounded-sm border border-gray-200 animate-in fade-in duration-500">
      {/* Top Filter Bar */}
      <div className="flex flex-wrap gap-y-3 bg-[#f5f7fa] p-3 rounded-sm mb-4">
        <div className="flex items-center gap-2 mr-4 min-w-[200px]">
          <label className="text-[12px] text-gray-600 whitespace-nowrap">客户名称</label>
          <input type="text" placeholder="请输入客户名称" className="flex-1 h-7 px-2 border border-gray-300 text-[12px] outline-none focus:border-blue-400" />
        </div>
        <div className="flex items-center gap-2 mr-4 min-w-[150px]">
          <label className="text-[12px] text-gray-600 whitespace-nowrap">SPU</label>
          <input type="text" className="flex-1 h-7 px-2 border border-gray-300 text-[12px] outline-none focus:border-blue-400" />
        </div>
        <div className="flex items-center gap-2 mr-4 min-w-[180px]">
          <label className="text-[12px] text-gray-600 whitespace-nowrap">FnSKU</label>
          <input type="text" className="flex-1 h-7 px-2 border border-gray-300 text-[12px] outline-none focus:border-blue-400" />
        </div>
        <div className="flex items-center gap-2 mr-4 min-w-[180px]">
          <label className="text-[12px] text-gray-600 whitespace-nowrap">seller sku</label>
          <input type="text" className="flex-1 h-7 px-2 border border-gray-300 text-[12px] outline-none focus:border-blue-400" />
        </div>
        <div className="flex items-center gap-2 mr-4 min-w-[150px]">
          <label className="text-[12px] text-gray-600 whitespace-nowrap">平台SKU</label>
          <input type="text" className="flex-1 h-7 px-2 border border-gray-300 text-[12px] outline-none focus:border-blue-400" />
        </div>
        <div className="flex items-center gap-2 mr-4 min-w-[200px]">
          <label className="text-[12px] text-gray-600 whitespace-nowrap">产品名称</label>
          <input type="text" className="flex-1 h-7 px-2 border border-gray-300 text-[12px] outline-none focus:border-blue-400" />
        </div>
        
        <div className="flex items-center gap-2 mr-4">
          <select className="h-7 border border-gray-300 text-[12px] outline-none px-1">
            <option>是否分销</option>
          </select>
        </div>
        <div className="flex items-center gap-2 mr-4">
          <select className="h-7 border border-gray-300 text-[12px] outline-none px-1">
            <option>推送星卓越WMS</option>
          </select>
        </div>
        <div className="flex items-center gap-2 mr-4">
          <select className="h-7 border border-gray-300 text-[12px] outline-none px-1">
            <option>全部分类</option>
          </select>
        </div>

        <div className="flex gap-2 ml-auto">
          <button className="bg-blue-500 hover:bg-blue-600 text-white h-7 px-4 text-[12px] rounded-sm transition-colors flex items-center gap-1">
            <Search size={14} /> 查询
          </button>
          <button className="bg-blue-500 hover:bg-blue-600 text-white h-7 px-4 text-[12px] rounded-sm transition-colors flex items-center gap-1">
            <Plus size={14} /> 新建产品
          </button>
          <button className="bg-blue-500 hover:bg-blue-600 text-white h-7 px-4 text-[12px] rounded-sm transition-colors flex items-center gap-1">
            <FileSpreadsheet size={14} /> 导出Excel
          </button>
        </div>
      </div>

      {/* Main Table */}
      <div className="overflow-auto border border-gray-200">
        <table className="w-full text-[12px] text-left border-collapse min-w-[1500px] border-b border-gray-200">
          <thead className="bg-[#f5f7fa] text-gray-600 font-medium">
            <tr>
              <th className="px-3 py-2 border-r border-gray-200 w-20">
                <div className="flex items-center gap-2">
                  <input type="checkbox" /> 序号
                </div>
              </th>
              <th className="px-3 py-2 border-r border-gray-200">客户名称</th>
              <th className="px-3 py-2 border-r border-gray-200">SPU</th>
              <th className="px-3 py-2 border-r border-gray-200">Fnsku</th>
              <th className="px-3 py-2 border-r border-gray-200">seller sku</th>
              <th className="px-3 py-2 border-r border-gray-200">图片</th>
              <th className="px-3 py-2 border-r border-gray-200">产品名称</th>
              <th className="px-3 py-2 border-r border-gray-200">重量(kg)</th>
              <th className="px-3 py-2 border-r border-gray-200">尺寸(cm)</th>
              <th className="px-3 py-2 border-r border-gray-200">成本价格</th>
              <th className="px-3 py-2 border-r border-gray-200">分销价格</th>
              <th className="px-3 py-2 border-r border-gray-200">申报价值</th>
              <th className="px-3 py-2 border-r border-gray-200">状态</th>
              <th className="px-3 py-2 border-r border-gray-200">产品类型</th>
              <th className="px-3 py-2 border-r border-gray-200">推送状态</th>
              <th className="px-3 py-2 border-r border-gray-200">推送星卓越WMS</th>
              <th className="px-3 py-2 border-r border-gray-200">添加时间</th>
              <th className="px-3 py-2">操作</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 border-b border-gray-200">
            {displayData.map((item, index) => (
              <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-3 py-2 border-r border-gray-200">
                  <div className="flex items-center gap-2">
                    <input type="checkbox" /> {index + 1}
                  </div>
                </td>
                <td className="px-3 py-2 border-r border-gray-200">
                  <span className="text-gray-700">{item.customerName}</span>
                  <span className="text-red-500 ml-1 text-[10px]">({item.customerCode})</span>
                </td>
                <td className="px-3 py-2 border-r border-gray-200">{item.spu}</td>
                <td className="px-3 py-2 border-r border-gray-200 font-medium text-gray-600">{item.fnsku}</td>
                <td className="px-3 py-2 border-r border-gray-200 text-gray-600">{item.sellerSku}</td>
                <td className="px-3 py-2 border-r border-gray-200 w-16 text-center">
                  <div className="w-10 h-10 bg-gray-100 rounded-sm mx-auto flex items-center justify-center border border-gray-200">
                    <Package size={16} className="text-gray-400" />
                  </div>
                </td>
                <td className="px-3 py-2 border-r border-gray-200 font-medium text-gray-800">{item.productName}</td>
                <td className="px-3 py-2 border-r border-gray-200">
                   <div className="text-gray-500">重量: {item.weight}</div>
                   <div className="text-gray-400 scale-90 origin-left">系统重量: </div>
                </td>
                <td className="px-3 py-2 border-r border-gray-200">
                   <div className="text-gray-500">尺寸: {item.size}</div>
                   <div className="text-gray-400 scale-90 origin-left">系统尺寸: </div>
                </td>
                <td className="px-3 py-2 border-r border-gray-200">{item.costPrice.toFixed(2)}</td>
                <td className="px-3 py-2 border-r border-gray-200">{item.distPrice.toFixed(2)}</td>
                <td className="px-3 py-2 border-r border-gray-200">{item.declaredValue.toFixed(2)}</td>
                <td className="px-3 py-2 border-r border-gray-200 text-center">
                  <span className={cn(
                    "px-2 py-0.5 rounded-sm outline outline-1 outline-offset-1 text-[10px]",
                    item.status === '启用' ? "text-green-600 outline-green-200" : 
                    item.status === '停用' ? "text-gray-500 outline-gray-200" :
                    "text-red-500 outline-red-200"
                  )}>
                    {item.status}
                  </span>
                </td>
                <td className="px-3 py-2 border-r border-gray-200 whitespace-nowrap">{item.productType}</td>
                <td className="px-3 py-2 border-r border-gray-200 text-center">-</td>
                <td className="px-3 py-2 border-r border-gray-200 text-center">
                   <span className={cn(
                     "text-[10px]",
                     item.pushExcellentWms === '已推送' ? "text-blue-500" : "text-gray-400"
                   )}>
                     {item.pushExcellentWms}
                   </span>
                </td>
                <td className="px-3 py-2 border-r border-gray-200 text-gray-500 leading-tight">
                   {item.addedTime}
                </td>
                <td className="px-3 py-2">
                  <div className="flex flex-wrap gap-x-2 gap-y-1 text-blue-500">
                    <button className="hover:underline flex items-center gap-0.5"><Info size={12}/>[详情]</button>
                    <button className="hover:underline flex items-center gap-0.5"><Edit size={12}/>[编辑]</button>
                    <button className="hover:underline flex items-center gap-0.5"><Printer size={12}/>[打印]</button>
                    <button className="text-red-500 hover:underline flex items-center gap-0.5"><Trash2 size={12}/>[删除]</button>
                    <button className="hover:underline flex items-center gap-0.5">[修改后缀]</button>
                    {mode === 'product-list' && <button className="hover:underline flex items-center gap-0.5">[申请分销]</button>}
                  </div>
                </td>
              </tr>
            ))}
            {displayData.length === 0 && (
              <tr>
                <td colSpan={18} className="py-10 text-center text-gray-400 italic">
                  暂无匹配的订单数据
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Bottom Action Area */}
      <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          {mode === 'pending-review' && (
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1.5 rounded-sm text-[12px] flex items-center gap-1 active:scale-95 transition-all">
              <CheckCircle size={14} /> 审核
            </button>
          )}
          {mode === 'product-list' && (
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1.5 rounded-sm text-[12px] flex items-center gap-1 active:scale-95 transition-all">
              <Power size={14} /> 停用
            </button>
          )}
          {(mode === 'disabled-products' || mode === 'rejected-products' || mode === 'pending-review') && (
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1.5 rounded-sm text-[12px] flex items-center gap-1 active:scale-95 transition-all">
              <Power size={14} /> 启用
            </button>
          )}
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1.5 rounded-sm text-[12px] flex items-center gap-1 active:scale-95 transition-all">
            <Printer size={14} /> 打印标签
          </button>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1.5 rounded-sm text-[12px] flex items-center gap-1 active:scale-95 transition-all">
            <Trash2 size={14} /> 删除
          </button>
          
          {mode === 'product-list' && (
            <>
               <select className="border border-gray-300 rounded-sm px-2 text-[12px] outline-none h-8 text-gray-600">
                 <option>请选择海外仓</option>
               </select>
               <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1.5 rounded-sm text-[12px] flex items-center gap-1 active:scale-95 transition-all shadow-sm">
                 <ExternalLink size={14} /> 推送海外仓
               </button>
            </>
          )}
          
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1.5 rounded-sm text-[12px] flex items-center gap-1 active:scale-95 transition-all">
            推送星卓越WMS
          </button>
        </div>

        <div className="flex items-center gap-4 ml-auto text-[12px] text-gray-500">
           <span>总计 {displayData.length} 个记录分为 1 页当前第 1 页，每页</span>
           <select className="border border-gray-300 p-0.5 outline-none rounded-sm">
             <option>100</option>
             <option>200</option>
             <option>500</option>
           </select>
           <div className="flex items-center gap-1">
             <button className="p-1 hover:bg-gray-100 disabled:opacity-30" disabled>第一页</button>
             <button className="p-1 hover:bg-gray-100 disabled:opacity-30" disabled>上一页</button>
             <button className="p-1 hover:bg-gray-100 disabled:opacity-30" disabled>下一页</button>
             <button className="p-1 hover:bg-gray-100 disabled:opacity-30" disabled>最末页</button>
           </div>
           <select className="border border-gray-300 p-0.5 outline-none rounded-sm">
             <option>1</option>
           </select>
        </div>
      </div>
      
      {/* Footer Info */}
      <div className="mt-8 text-center text-[10px] text-gray-400">
        共执行 6 个查询，用时 {Math.random().toFixed(6)} 秒，Gzip 已禁用，内存占用 { (6 + Math.random()).toFixed(3) } MB
      </div>
    </div>
  );
}
