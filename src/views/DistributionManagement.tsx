import React, { useState } from 'react';
import { Search, Plus, FileSpreadsheet, Info, Edit, Printer, Trash2, CheckCircle, Power, ExternalLink, Package, History } from 'lucide-react';
import { cn } from '../lib/utils';

interface DistributionData {
  id: string;
  customerName: string;
  customerCode: string;
  spu?: string;
  fnsku: string;
  sellerSku: string;
  image?: string;
  productName: string;
  weight: number;
  size: string;
  costPrice: number;
  distPrice: number;
  declaredValue: number;
  status: string;
  productType: string;
  isDistribution: string;
  commissionRate: number;
  totalDistAmount: number;
  pushStatus: string;
  pushExcellentWms: string;
  addedTime: string;
}

const MOCK_DATA: DistributionData[] = [
  {
    id: '1',
    customerName: 'jinyi',
    customerCode: '12013',
    fnsku: 'D12013604FH',
    sellerSku: 'SN1234',
    productName: '测试商品',
    weight: 1,
    size: '1*2*3',
    costPrice: 0.00,
    distPrice: 20.00,
    declaredValue: 0.00,
    status: '启用',
    productType: '单个产品',
    isDistribution: '待审核分销',
    commissionRate: 0.0,
    totalDistAmount: 20,
    pushStatus: '',
    pushExcellentWms: '未推送',
    addedTime: '2025-12-01 23:16:12'
  },
  {
    id: '2',
    customerName: 'YY',
    customerCode: '12012',
    fnsku: 'D12012NBQWF',
    sellerSku: '44444',
    productName: '44444',
    weight: 1,
    size: '1*1*1',
    costPrice: 0.00,
    distPrice: 100.00,
    declaredValue: 0.00,
    status: '启用',
    productType: '单个产品',
    isDistribution: '待审核分销',
    commissionRate: 0.09,
    totalDistAmount: 109,
    pushStatus: '',
    pushExcellentWms: '已推送',
    addedTime: '2025-04-19 16:34:59'
  }
];

interface DistApplyData {
  id: string;
  customerName: string;
  customerCode: string;
  fnsku: string;
  sellerSku: string;
  productName: string;
  englishName: string;
  weight: number;
  systemWeight: number;
  distPrice: number;
  commissionRate: number;
  totalDistAmount: number;
  status: string;
  warehouseName: string;
  inventory: number;
  addedTime: string;
  distDuration: string;
}

const APPLY_MOCK_DATA: DistApplyData[] = [
  {
    id: '1',
    customerName: 'qin',
    customerCode: '12014',
    fnsku: 'D12000DLHGJ',
    sellerSku: '20200914001',
    productName: '儿童赶海连体玩水衣服',
    englishName: 'water play clothes',
    weight: 2.00,
    systemWeight: 0.00,
    distPrice: 98,
    commissionRate: 0.1,
    totalDistAmount: 107.8,
    status: '待审核',
    warehouseName: '星卓越泰国国仓',
    inventory: 10,
    addedTime: '2025-12-04 09:24:04',
    distDuration: '158.2天'
  }
];

interface DistributionManagementProps {
  mode: 'pending-dist' | 'dist-list' | 'dist-apply';
}

export function DistributionManagement({ mode }: DistributionManagementProps) {
  if (mode === 'dist-apply') {
    return (
      <div className="bg-white p-4 rounded-sm border border-gray-200 animate-in fade-in duration-500">
        {/* Filter Bar for Apply */}
        <div className="flex flex-wrap gap-y-3 bg-[#f5f7fa] p-3 rounded-sm mb-4">
          <div className="flex items-center gap-2 mr-4 min-w-[200px]">
            <label className="text-[12px] text-gray-600 whitespace-nowrap">客户名称</label>
            <input type="text" placeholder="请输入客户名称" className="flex-1 h-7 px-2 border border-gray-300 text-[12px] outline-none focus:border-blue-400" />
          </div>
          <div className="flex items-center gap-2 mr-4 min-w-[180px]">
            <label className="text-[12px] text-gray-600 whitespace-nowrap">FnSKU</label>
            <input type="text" className="flex-1 h-7 px-2 border border-gray-300 text-[12px] outline-none focus:border-blue-400" />
          </div>
          <div className="flex items-center gap-2 mr-4 min-w-[180px]">
            <label className="text-[12px] text-gray-600 whitespace-nowrap">seller sku</label>
            <input type="text" className="flex-1 h-7 px-2 border border-gray-300 text-[12px] outline-none focus:border-blue-400" />
          </div>
          <div className="flex items-center gap-2 mr-4 min-w-[200px]">
            <label className="text-[12px] text-gray-600 whitespace-nowrap">产品名称</label>
            <input type="text" className="flex-1 h-7 px-2 border border-gray-300 text-[12px] outline-none focus:border-blue-400" />
          </div>
          <div className="flex items-center gap-2 mr-4 min-w-[200px]">
            <label className="text-[12px] text-gray-600 whitespace-nowrap">英文名称</label>
            <input type="text" className="flex-1 h-7 px-2 border border-gray-300 text-[12px] outline-none focus:border-blue-400" />
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
          </div>
        </div>

        {/* Table for Apply */}
        <div className="overflow-x-auto border border-gray-200">
          <table className="w-full text-[12px] text-left border-collapse min-w-[1500px]">
            <thead className="bg-[#f5f7fa] text-gray-600 font-medium">
              <tr>
                <th className="px-3 py-2 border-r border-gray-200 w-20">
                  <div className="flex items-center gap-2">
                    <input type="checkbox" /> 序号
                  </div>
                </th>
                <th className="px-3 py-2 border-r border-gray-200">客户名称</th>
                <th className="px-3 py-2 border-r border-gray-200">Fnsku</th>
                <th className="px-3 py-2 border-r border-gray-200">seller sku</th>
                <th className="px-3 py-2 border-r border-gray-200">产品名称</th>
                <th className="px-3 py-2 border-r border-gray-200">英文名称</th>
                <th className="px-3 py-2 border-r border-gray-200">重量(kg)</th>
                <th className="px-3 py-2 border-r border-gray-200">系统重量(kg)</th>
                <th className="px-3 py-2 border-r border-gray-200">分销价格</th>
                <th className="px-3 py-2 border-r border-gray-200">佣金比例</th>
                <th className="px-3 py-2 border-r border-gray-200">分销总金额</th>
                <th className="px-3 py-2 border-r border-gray-200">状态</th>
                <th className="px-3 py-2 border-r border-gray-200">仓库名称</th>
                <th className="px-3 py-2 border-r border-gray-200">分销库存</th>
                <th className="px-3 py-2 border-r border-gray-200">添加时间</th>
                <th className="px-3 py-2 border-r border-gray-200">分销时长</th>
                <th className="px-3 py-2 border-r border-gray-200">操作</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {APPLY_MOCK_DATA.map((item, index) => (
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
                  <td className="px-3 py-2 border-r border-gray-200">{item.fnsku}</td>
                  <td className="px-3 py-2 border-r border-gray-200">{item.sellerSku}</td>
                  <td className="px-3 py-2 border-r border-gray-200">{item.productName}</td>
                  <td className="px-3 py-2 border-r border-gray-200 text-gray-500 overflow-hidden text-ellipsis whitespace-nowrap max-w-[150px]">{item.englishName}</td>
                  <td className="px-3 py-2 border-r border-gray-200">{item.weight.toFixed(2)}</td>
                  <td className="px-3 py-2 border-r border-gray-200">{item.systemWeight.toFixed(2)}</td>
                  <td className="px-3 py-2 border-r border-gray-200">{item.distPrice}</td>
                  <td className="px-3 py-2 border-r border-gray-200">{item.commissionRate}</td>
                  <td className="px-3 py-2 border-r border-gray-200">{item.totalDistAmount}</td>
                  <td className="px-3 py-2 border-r border-gray-200 text-red-500 font-bold">{item.status}</td>
                  <td className="px-3 py-2 border-r border-gray-200">{item.warehouseName}</td>
                  <td className="px-3 py-2 border-r border-gray-200">{item.inventory}</td>
                  <td className="px-3 py-2 border-r border-gray-200 text-gray-500">{item.addedTime}</td>
                  <td className="px-3 py-2 border-r border-gray-200">{item.distDuration}</td>
                  <td className="px-3 py-2 border-r border-gray-200">
                    <div className="flex flex-wrap gap-2 text-blue-500">
                      <button className="hover:underline">[审核]</button>
                      <button className="hover:underline">[详情]</button>
                      <button className="hover:underline text-red-500">[移除分销]</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Action Button */}
        <div className="mt-4">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-1.5 rounded-sm text-[12px] flex items-center gap-1">
             打印标签
          </button>
        </div>
      </div>
    );
  }

  // Pending Dist and Dist List views
  const displayData = mode === 'dist-list' ? [
    ...MOCK_DATA,
    {
      id: '3',
      customerName: 'chenwei',
      customerCode: '12000',
      spu: '1111',
      fnsku: 'Test01',
      sellerSku: 'Test01-1',
      productName: 'Test01',
      weight: 1,
      size: '1*1*1',
      costPrice: 0.00,
      distPrice: 20.00,
      declaredValue: 0.00,
      status: '启用',
      productType: '单个产品',
      isDistribution: '分销销售',
      commissionRate: 0.00,
      totalDistAmount: 20,
      pushStatus: '',
      pushExcellentWms: '已推送',
      addedTime: '2025-03-25 11:06:10'
    }
  ] : MOCK_DATA;

  return (
    <div className="bg-white p-4 rounded-sm border border-gray-200 animate-in fade-in duration-500">
      {/* Search Header */}
      <div className="flex flex-wrap gap-y-3 bg-[#f5f7fa] p-3 rounded-sm mb-4">
        {/* Same filters as ProductManagement */}
        <div className="flex items-center gap-2 mr-4 min-w-[200px]">
          <label className="text-[12px] text-gray-600">客户名称</label>
          <input type="text" placeholder="请输入客户名称" className="flex-1 h-7 px-2 border border-gray-300 text-[12px] outline-none" />
        </div>
        <div className="flex items-center gap-2 mr-4 min-w-[150px]">
          <label className="text-[12px] text-gray-600">SPU</label>
          <input type="text" className="flex-1 h-7 px-2 border border-gray-300 text-[12px] outline-none" />
        </div>
        <div className="flex items-center gap-2 mr-4 min-w-[180px]">
          <label className="text-[12px] text-gray-600">FnSKU</label>
          <input type="text" className="flex-1 h-7 px-2 border border-gray-300 text-[12px] outline-none" />
        </div>
        <div className="flex items-center gap-2 mr-4 min-w-[180px]">
          <label className="text-[12px] text-gray-600">seller sku</label>
          <input type="text" className="flex-1 h-7 px-2 border border-gray-300 text-[12px] outline-none" />
        </div>
        <div className="flex items-center gap-2 mr-4 min-w-[150px]">
          <label className="text-[12px] text-gray-600">平台SKU</label>
          <input type="text" className="flex-1 h-7 px-2 border border-gray-300 text-[12px] outline-none" />
        </div>
        <div className="flex items-center gap-2 mr-4 min-w-[200px]">
          <label className="text-[12px] text-gray-600">产品名称</label>
          <input type="text" className="flex-1 h-7 px-2 border border-gray-300 text-[12px] outline-none" />
        </div>
        
        <div className="flex gap-2 ml-auto">
          <button className="bg-blue-500 text-white h-7 px-4 text-[12px] rounded-sm flex items-center gap-1"><Search size={14}/>查询</button>
          <button className="bg-blue-500 text-white h-7 px-4 text-[12px] rounded-sm flex items-center gap-1"><Plus size={14}/>新建产品</button>
          <button className="bg-blue-500 text-white h-7 px-4 text-[12px] rounded-sm flex items-center gap-1"><FileSpreadsheet size={14}/>导出Excel</button>
        </div>
      </div>

      {/* Distribution Table */}
      <div className="overflow-x-auto border border-gray-200">
        <table className="w-full text-[12px] text-left border-collapse min-w-[1600px]">
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
              <th className="px-3 py-2 border-r border-gray-200">是否分销</th>
              <th className="px-3 py-2 border-r border-gray-200">佣金比例</th>
              <th className="px-3 py-2 border-r border-gray-200">分销总金额</th>
              <th className="px-3 py-2 border-r border-gray-200">推送状态</th>
              <th className="px-3 py-2 border-r border-gray-200">推送星卓越WMS</th>
              <th className="px-3 py-2 border-r border-gray-200">添加时间</th>
              <th className="px-3 py-2 border-r border-gray-200">操作</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
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
                <td className="px-3 py-2 border-r border-gray-200">{item.fnsku}</td>
                <td className="px-3 py-2 border-r border-gray-200">{item.sellerSku}</td>
                <td className="px-3 py-2 border-r border-gray-200">
                  <div className="w-8 h-8 bg-gray-100 rounded mx-auto flex items-center justify-center border border-gray-200">
                    <Package size={14} className="text-gray-400" />
                  </div>
                </td>
                <td className="px-3 py-2 border-r border-gray-200">{item.productName}</td>
                <td className="px-3 py-2 border-r border-gray-200">
                   <div className="text-gray-500">重量: {item.weight}</div>
                   <div className="text-gray-400 scale-75 origin-left">系统重量: </div>
                </td>
                <td className="px-3 py-2 border-r border-gray-200">
                   <div className="text-gray-500">尺寸: {item.size}</div>
                   <div className="text-gray-400 scale-75 origin-left">系统尺寸: </div>
                </td>
                <td className="px-3 py-2 border-r border-gray-200">{item.costPrice.toFixed(2)}</td>
                <td className="px-3 py-2 border-r border-gray-200">{item.distPrice.toFixed(2)}</td>
                <td className="px-3 py-2 border-r border-gray-200">{item.declaredValue.toFixed(2)}</td>
                <td className="px-3 py-2 border-r border-gray-200">
                  <span className="text-green-600 bg-green-50 px-1 border border-green-200 rounded-sm">
                    {item.status}
                  </span>
                </td>
                <td className="px-3 py-2 border-r border-gray-200">{item.productType}</td>
                <td className="px-3 py-2 border-r border-gray-200">
                  {item.isDistribution}
                </td>
                <td className="px-3 py-2 border-r border-gray-200">{item.commissionRate}</td>
                <td className="px-3 py-2 border-r border-gray-200">{item.totalDistAmount}</td>
                <td className="px-3 py-2 border-r border-gray-200">-</td>
                <td className="px-3 py-2 border-r border-gray-200">
                   <span className={cn(
                     "text-[10px]",
                     item.pushExcellentWms === '已推送' ? "text-blue-500" : "text-gray-400"
                   )}>
                     {item.pushExcellentWms}
                   </span>
                </td>
                <td className="px-3 py-2 border-r border-gray-200 text-gray-500 leading-none">
                   {item.addedTime}
                </td>
                <td className="px-3 py-2 border-r border-gray-200">
                  <div className="flex flex-wrap gap-x-2 gap-y-1 text-blue-500">
                    <button className="hover:underline">[详情]</button>
                    <button className="hover:underline">[编辑]</button>
                    <button className="hover:underline">[打印]</button>
                    <button className="hover:underline">[审核分销]</button>
                    <button className="hover:underline text-red-500">[取消分销]</button>
                    <button className="text-red-500 hover:underline">[删除]</button>
                    <button className="hover:underline">[修改后缀]</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer Actions */}
      <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          <button className="bg-orange-500 text-white px-3 py-1.5 rounded-sm text-[12px]">停用</button>
          <button className="bg-orange-500 text-white px-3 py-1.5 rounded-sm text-[12px]">打印标签</button>
          <button className="bg-orange-500 text-white px-3 py-1.5 rounded-sm text-[12px]">删除</button>
          <select className="border border-gray-300 rounded-sm px-2 text-[12px] h-8 text-gray-600">
            <option>请选择海外仓</option>
          </select>
          <button className="bg-blue-500 text-white px-3 py-1.5 rounded-sm text-[12px]">推送海外仓</button>
          <button className="bg-orange-500 text-white px-3 py-1.5 rounded-sm text-[12px]">推送星卓越WMS</button>
        </div>

        <div className="text-[12px] text-gray-500">
           总计 {displayData.length} 个记录分为 1 页当前第 1 页
        </div>
      </div>

    </div>
  );
}
