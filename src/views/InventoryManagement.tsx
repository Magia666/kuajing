import React, { useState } from 'react';
import { Search, FileSpreadsheet, Clock, Calendar, HelpCircle, Package, Warehouse, LayoutGrid, CheckCircle2, Plus, Link, Image as LucideImage } from 'lucide-react';
import { 
  PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip,
  BarChart, Bar, XAxis, YAxis, CartesianGrid
} from 'recharts';
import { cn } from '../lib/utils';

interface InventoryData {
  id: string;
  customerName: string;
  customerCode: string;
  fnsku: string;
  sellerSku: string;
  productName: string;
  warehouse: string;
  shelf: string;
  transitCount: number;
  availableCount: number;
  pendingCount: number;
  distCount: number;
  day10Sales: number;
  day30Sales: number;
  invAge: number;
  volume: number;
  warningLimit: number;
  entryTime: string;
}

const MOCK_DATA: InventoryData[] = [
  { id: '1', customerName: 'yueyang07', customerCode: '12021', fnsku: 'D12021T8BFJ', sellerSku: 'SKU01', productName: '短袖', warehouse: '星卓越泰国国仓', shelf: 'A1-02-03', transitCount: 0, availableCount: 18, pendingCount: 0, distCount: 3, day10Sales: 5, day30Sales: 15, invAge: 158.1, volume: 0.009, warningLimit: 5, entryTime: '2025-12-04 13:31:42' },
  { id: '2', customerName: 'yueyang01', customerCode: '12015', fnsku: 'D120154AGF2', sellerSku: 'SKU02', productName: '猫咪水杯', warehouse: '星卓越泰国国仓', shelf: 'B2-01-01', transitCount: 0, availableCount: 50, pendingCount: 0, distCount: 50, day10Sales: 10, day30Sales: 45, invAge: 158.1, volume: 0.013, warningLimit: 10, entryTime: '2025-12-04 13:30:58' },
  { id: '3', customerName: 'qin', customerCode: '12014', fnsku: 'D12014GK1AA', sellerSku: 'SKU03', productName: '猫粮10好', warehouse: '星卓越泰国国仓', shelf: 'C5-04-02', transitCount: 30, availableCount: 100, pendingCount: 0, distCount: 0, day10Sales: 20, day30Sales: 80, invAge: 158.1, volume: 0.001, warningLimit: 20, entryTime: '2025-12-04 13:29:21' },
  { id: '4', customerName: 'qin', customerCode: '12014', fnsku: 'D12014U4YX1', sellerSku: 'SKU04', productName: '猫砂', warehouse: '星卓越泰国国仓', shelf: 'C5-04-03', transitCount: 50, availableCount: 225, pendingCount: 2, distCount: 80, day10Sales: 15, day30Sales: 60, invAge: 158.9, volume: 0.001, warningLimit: 50, entryTime: '2025-12-03 19:49:18' },
  { id: '5', customerName: 'qin', customerCode: '12014', fnsku: 'D12014TCL0Z', sellerSku: 'SKU05', productName: '猫砂二号', warehouse: '深圳转运仓', shelf: 'D1-01-01', transitCount: 0, availableCount: 300, pendingCount: 1, distCount: 0, day10Sales: 50, day30Sales: 120, invAge: 158.9, volume: 0.007, warningLimit: 50, entryTime: '2025-12-03 19:49:18' },
  { id: '6', customerName: 'jinyi', customerCode: '12013', fnsku: 'D120136O4FH', sellerSku: 'SKU06', productName: '测试商品', warehouse: '星卓越泰国国仓', shelf: 'E3-02-05', transitCount: 10, availableCount: 70, pendingCount: 0, distCount: 30, day10Sales: 5, day30Sales: 10, invAge: 160.7, volume: 0, warningLimit: 10, entryTime: '2025-12-01 23:59:01' },
  { id: '7', customerName: 'chenwei', customerCode: '12000', fnsku: 'D12000QJXUV', sellerSku: 'SKU07', productName: '乔丹速干短袖T恤', warehouse: '美国洛杉矶仓', shelf: 'F1-05-08', transitCount: 200, availableCount: 0, pendingCount: 2, distCount: 297, day10Sales: 0, day30Sales: 0, invAge: 376.2, volume: 0, warningLimit: 50, entryTime: '2024-04-30 10:51:27' },
  { id: '8', customerName: 'shanghai_tech', customerCode: '13001', fnsku: 'D13001A8BBC', sellerSku: 'SKU08', productName: '无线蓝牙耳机', warehouse: '美国纽约仓', shelf: 'A2-03-01', transitCount: 100, availableCount: 450, pendingCount: 5, distCount: 120, day10Sales: 35, day30Sales: 150, invAge: 45.2, volume: 0.005, warningLimit: 100, entryTime: '2026-03-15 09:20:11' },
  { id: '9', customerName: 'beijing_trade', customerCode: '13002', fnsku: 'D13002X9ZZP', sellerSku: 'SKU09', productName: '便携式咖啡机', warehouse: '英国伦敦仓', shelf: 'B1-02-02', transitCount: 0, availableCount: 85, pendingCount: 1, distCount: 0, day10Sales: 12, day30Sales: 40, invAge: 88.5, volume: 0.025, warningLimit: 50, entryTime: '2026-01-20 14:15:30' },
  { id: '10', customerName: 'shenzhen_elec', customerCode: '13003', fnsku: 'D13003Y5MMK', sellerSku: 'SKU10', productName: '智能手表', warehouse: '星卓越泰国国仓', shelf: 'C2-01-05', transitCount: 50, availableCount: 320, pendingCount: 8, distCount: 0, day10Sales: 45, day30Sales: 180, invAge: 32.1, volume: 0.003, warningLimit: 100, entryTime: '2026-04-10 11:45:00' },
  { id: '11', customerName: 'guangzhou_garment', customerCode: '13004', fnsku: 'D13004W2LLJ', sellerSku: 'SKU11', productName: '无缝瑜伽裤', warehouse: '美国洛杉矶仓', shelf: 'D4-05-02', transitCount: 200, availableCount: 800, pendingCount: 15, distCount: 300, day10Sales: 80, day30Sales: 350, invAge: 15.5, volume: 0.008, warningLimit: 200, entryTime: '2026-04-25 10:30:20' },
  { id: '12', customerName: 'hangzhou_home', customerCode: '13005', fnsku: 'D13005V1NNH', sellerSku: 'SKU12', productName: '香薰机', warehouse: '德国法兰克福仓', shelf: 'E1-01-01', transitCount: 0, availableCount: 150, pendingCount: 3, distCount: 0, day10Sales: 8, day30Sales: 25, invAge: 120.4, volume: 0.015, warningLimit: 30, entryTime: '2025-12-15 08:20:10' },
];

interface InventoryManagementProps {
  mode: string;
}

export function InventoryManagement({ mode }: InventoryManagementProps) {
  if (mode === 'owner-dist-inv') {
    return <OwnerDistInv />;
  }

  if (mode === 'cust-dist-inv') {
    return <CustDistInv />;
  }

  if (mode === 'inv-warning') {
    return <InvWarning />;
  }

  if (mode === 'inv-detail') {
    return <InvDetail />;
  }

  if (mode === 'inv-age-analysis') {
    return <InvAgeAnalysis />;
  }

  if (mode === 'inv-query-combo') {
    return <InvQueryCombo />;
  }

  if (mode === 'inv-transit') {
    return <TransitDetail />;
  }

  if (mode === 'inv-history-shelf') {
    return <InvHistory />;
  }

  if (mode === 'pending-off-shelf') {
    return <PendingOffShelf />;
  }

  if (mode === 'done-off-shelf') {
    return <DoneOffShelf />;
  }

  if (mode === 'material-add') {
    return <MaterialAdd />;
  }

  if (mode === 'material-list') {
    return <MaterialList />;
  }

  if (mode === 'material-record') {
    return <MaterialRecord />;
  }

  if (mode !== 'inv-query') {
    return (
      <div className="p-20 text-center text-gray-400 bg-white h-full overflow-hidden">
        页面开发中...
      </div>
    );
  }

  return (
    <div className="bg-[#f0f2f5] h-full overflow-hidden font-sans text-gray-700">
      {/* Search Bar */}
      <div className="bg-white p-2 border-b border-gray-200 flex flex-wrap items-center gap-2">
        <div className="flex items-center gap-1 border border-gray-200 h-7 px-1">
          <span className="text-[12px] text-gray-500 whitespace-nowrap">客户名称</span>
          <input type="text" placeholder="请输入客户名称" className="outline-none text-[12px] w-28" />
        </div>
        <div className="flex items-center gap-1 border border-gray-200 h-7 px-1">
          <span className="text-[12px] text-gray-500 whitespace-nowrap">Fnsku</span>
          <input type="text" placeholder="Fnsku" className="outline-none text-[12px] w-28" />
        </div>
        <div className="flex items-center gap-1 border border-gray-200 h-7 px-1">
          <span className="text-[12px] text-gray-500 whitespace-nowrap">seller sku</span>
          <input type="text" placeholder="seller sku" className="outline-none text-[12px] w-28" />
        </div>
        <div className="flex items-center gap-1 border border-gray-200 h-7 px-1">
          <span className="text-[12px] text-gray-500 whitespace-nowrap">产品名称</span>
          <input type="text" className="outline-none text-[12px] w-28" />
        </div>
        
        <select className="border border-gray-200 h-7 text-[12px] outline-none px-1 bg-white">
           <option>全部库存</option>
        </select>
        <select className="border border-gray-200 h-7 text-[12px] outline-none px-1 bg-white">
           <option>全部仓库</option>
        </select>
        <select className="border border-gray-200 h-7 text-[12px] outline-none px-1 bg-white">
           <option>全部销售</option>
        </select>

        <button className="bg-[#00a2e8] hover:bg-blue-600 text-white px-4 h-7 text-[12px] rounded-sm transition-colors">查询</button>
        <button className="bg-[#00a2e8] hover:bg-blue-600 text-white px-4 h-7 text-[12px] rounded-sm transition-colors">导出Excel</button>
        
        <span className="text-[12px] text-blue-400 ml-2">Ps:点击销量可查看趋势图</span>
      </div>

      {/* Main Table Content */}
      <div className="bg-white m-2 border border-gray-200 rounded-sm overflow-hidden min-h-[calc(100vh-160px)]">
        <div className="overflow-auto overflow-y-auto max-h-[calc(100vh-200px)]">
          <table className="w-full border-collapse text-[12px] text-left border-b border-gray-200">
            <thead className="bg-[#f5f7fa] text-gray-600 font-medium">
              <tr className="hover:bg-gray-50 transition-colors">
                <th className="px-3 border-r border-gray-200 min-w-[50px] py-2"><input type="checkbox" className="mr-1" />序号</th>
                <th className="px-3 border-r border-gray-200 min-w-[120px] py-2">客户名称</th>
                <th className="px-3 border-r border-gray-200 min-w-[100px] py-2">Fnsku</th>
                <th className="px-3 border-r border-gray-200 min-w-[150px] py-2">产品名称</th>
                <th className="px-3 border-r border-gray-200 min-w-[100px] py-2">仓库名称</th>
                <th className="px-3 border-r border-gray-200 min-w-[60px] py-2">货架</th>
                <th className="px-3 border-r border-gray-200 min-w-[60px] py-2">代发途中</th>
                <th className="px-3 border-r border-gray-200 min-w-[60px] font-bold py-2">代发库存↕</th>
                <th className="px-3 border-r border-gray-200 min-w-[70px] py-2">待处理库存</th>
                <th className="px-3 border-r border-gray-200 min-w-[60px] py-2">分销库存</th>
                <th className="px-3 border-r border-gray-100 min-w-[60px] py-2">10天销量</th>
                <th className="px-3 border-r border-gray-100 min-w-[60px] py-2">30天销量</th>
                <th className="px-3 border-r border-gray-200 min-w-[60px] py-2">库龄(天)</th>
                <th className="px-3 border-r border-gray-200 min-w-[60px] py-2">体积(m³)</th>
                <th className="px-3 border-r border-gray-200 min-w-[70px] py-2">库存预警</th>
                <th className="px-3 border-r border-gray-200 min-w-[120px] py-2">入仓时间</th>
                <th className="px-3 py-2 border-r border-gray-200">操作</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 border-b border-gray-200">
              {MOCK_DATA.map((item, i) => (
                <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-3 border-r border-gray-200 py-2"><input type="checkbox" className="mr-1" />{i + 1}</td>
                  <td className="px-3 border-r border-gray-200 py-2">
                    <span className="text-gray-700">{item.customerName}</span>
                    <span className="text-red-500 font-bold ml-1">({item.customerCode})</span>
                  </td>
                  <td className="px-3 border-r border-gray-200 text-blue-500 font-medium py-2">{item.fnsku}</td>
                  <td className="px-3 border-r border-gray-200 py-2">{item.productName}</td>
                  <td className="px-3 border-r border-gray-200 py-2">{item.warehouse}</td>
                  <td className="px-3 border-r border-gray-200 italic text-gray-400 py-2">{item.shelf || ''}</td>
                  <td className="px-3 border-r border-gray-200 underline text-blue-500 cursor-pointer py-2">{item.transitCount}</td>
                  <td className="px-3 border-r border-gray-200 underline text-blue-500 cursor-pointer font-bold py-2">{item.availableCount}</td>
                  <td className="px-3 border-r border-gray-200 underline text-blue-500 cursor-pointer py-2">{item.pendingCount}</td>
                  <td className="px-3 border-r border-gray-200 py-2">{item.distCount}</td>
                  <td className="px-3 border-r border-gray-100 text-blue-500 py-2">{item.day10Sales}</td>
                  <td className="px-3 border-r border-gray-100 text-blue-500 py-2">{item.day30Sales}</td>
                  <td className="px-3 border-r border-gray-200 py-2">{item.invAge}</td>
                  <td className="px-3 border-r border-gray-200 py-2">{item.volume}</td>
                  <td className="px-3 border-r border-gray-200 text-red-500 py-2">{item.warningLimit || 0}</td>
                  <td className="px-3 border-r border-gray-200 text-gray-500 py-2">{item.entryTime}</td>
                  <td className="px-3 py-2 border-r border-gray-200">
                    <div className="flex flex-col text-blue-500 text-[10px] items-center">
                      <button className="hover:underline transition-colors">[安全库存]</button>
                      <button className="hover:underline transition-colors">[代发盘点] [打印条码]</button>
                    </div>
                  </td>
                </tr>
              ))}
              {/* Total Row */}
              <tr className="hover:bg-gray-50 transition-colors">
                <td colSpan={6} className="text-right pr-4 border-r border-gray-200 px-3 py-2">合计</td>
                <td className="px-3 border-r border-gray-200 py-2">1</td>
                <td className="px-3 border-r border-gray-200 py-2">1063</td>
                <td className="px-3 border-r border-gray-200 py-2">7</td>
                <td className="px-3 border-r border-gray-200 py-2">587</td>
                <td className="px-3 border-r border-gray-100 py-2">0</td>
                <td className="px-3 border-r border-gray-100 py-2">0</td>
                <td className="px-3 border-r border-gray-200 py-2"></td>
                <td className="px-3 border-r border-gray-200 py-2">2.755</td>
                <td className="px-3 py-2 border-r border-gray-200" colSpan={3}></td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Table Footer Actions */}
        <div className="p-2 border-t border-gray-200 flex items-center justify-between bg-white sticky bottom-0 z-10">
          <div className="flex items-center gap-2">
            <select className="border border-gray-300 rounded-sm h-7 text-[12px] outline-none px-2">
               <option>全部仓库</option>
            </select>
            <input type="text" className="border border-gray-300 rounded-sm h-7 text-[12px] px-2 w-32" />
            <button className="bg-[#f0ad4e] hover:bg-orange-500 text-white px-4 h-7 text-[12px] rounded-sm transition-colors">代发盘点</button>
          </div>
          
          <div className="flex items-center gap-4 text-[11px] text-gray-600">
            <span>总计 13 个记录分为 1 页当前第 1 页，每页</span>
            <select className="border border-gray-300 rounded-sm px-1 h-6 outline-none bg-white">
              <option>100</option>
            </select>
            <div className="flex items-center gap-1 ml-4 border-l pl-4 font-normal">
               <button className="px-2 h-6 hover:text-blue-500">第一页</button>
               <button className="px-2 h-6 hover:text-blue-500">上一页</button>
               <button className="px-2 h-6 hover:text-blue-500">下一页</button>
               <button className="px-2 h-6 hover:text-blue-500">最末页</button>
               <select className="border border-gray-300 rounded-sm px-1 h-6 text-[11px] ml-2 outline-none">
                  <option>1</option>
               </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function OwnerDistInv() {
  const DIST_DATA = [
    { id: '1', customer: 'yueyang07', code: '12021', fnsku: 'D12021T8BFJ', name: '短袖', price: '29.00', rate: '0.06', total: '30.74', category: '', warehouse: '星卓越泰国国仓', inventory: 3 },
    { id: '2', customer: 'yueyang01', code: '12015', fnsku: 'D120154AGF2', name: '猫咪水杯', price: '78.00', rate: '0.06', total: '82.68', category: '', warehouse: '星卓越泰国国仓', inventory: 50 },
    { id: '3', customer: 'qin', code: '12014', fnsku: 'D12014U4YX1', name: '猫砂', price: '80.00', rate: '0.05', total: '84', category: '', warehouse: '星卓越泰国国仓', inventory: 80 },
    { id: '4', customer: 'chenwei', code: '12000', fnsku: 'D12000DLHGJ', name: '儿童赶海连体玩水衣服', price: '98.00', rate: '0.1', total: '107.8', category: '', warehouse: '星卓越泰国国仓', inventory: 100 },
    { id: '5', customer: 'chenwei', code: '12000', fnsku: 'D120007CH2L', name: '商务泡茶塑壳水杯', price: '110.00', rate: '0.00', total: '110', category: '', warehouse: '星卓越泰国国仓', inventory: 2 },
    { id: '6', customer: 'chenwei', code: '12000', fnsku: 'D12000QJXUV', name: '乔丹速干短袖T恤', price: '158.00', rate: '0.09', total: '172.22', category: '', warehouse: '星卓越泰国国仓', inventory: 297 },
    { id: '7', customer: 'YY', code: '12012', fnsku: 'THBB478', name: '赠送挂饰1个-THBB478', price: '0.20', rate: '0.1', total: '0.22', category: '', warehouse: '星卓越泰国国仓', inventory: 10 },
  ];

  return (
    <div className="bg-[#f0f2f5] h-full overflow-hidden font-sans text-gray-700">
      <div className="bg-white p-2 border-b border-gray-200 flex flex-wrap items-center gap-2">
        <div className="flex items-center gap-1 border border-gray-200 h-7 px-1">
          <span className="text-[12px] text-gray-500 whitespace-nowrap">客户名称</span>
          <input type="text" placeholder="请输入客户名称" className="outline-none text-[12px] w-28" />
        </div>
        <div className="flex items-center gap-1 border border-gray-200 h-7 px-1">
          <span className="text-[12px] text-gray-500 whitespace-nowrap">Fnsku</span>
          <input type="text" placeholder="Fnsku" className="outline-none text-[12px] w-28" />
        </div>
        <div className="flex items-center gap-1 border border-gray-200 h-7 px-1">
          <span className="text-[12px] text-gray-500 whitespace-nowrap">产品名称</span>
          <input type="text" className="outline-none text-[12px] w-28" />
        </div>
        <div className="flex items-center gap-1 border border-gray-200 h-7 px-1">
          <span className="text-[12px] text-gray-500 whitespace-nowrap">英文名称</span>
          <input type="text" className="outline-none text-[12px] w-28" />
        </div>
        <select className="border border-gray-200 h-7 text-[12px] outline-none px-1 bg-white">
           <option>全部仓库</option>
        </select>
        <button className="bg-[#00a2e8] hover:bg-blue-600 text-white px-5 h-7 text-[12px] rounded-sm transition-colors">查询</button>
      </div>

      <div className="bg-white m-2 border border-gray-200 rounded-sm overflow-hidden">
        <div className="overflow-auto">
          <table className="w-full border-collapse text-[12px] text-left border-b border-gray-200">
            <thead className="bg-[#f5f7fa] text-gray-600 font-medium">
              <tr className="hover:bg-gray-50 transition-colors">
                <th className="px-3 border-r border-gray-200 w-12 py-2"><input type="checkbox" className="mr-1" />序号</th>
                <th className="px-3 border-r border-gray-200 py-2">客户名称</th>
                <th className="px-3 border-r border-gray-200 py-2">Fnsku</th>
                <th className="px-3 border-r border-gray-200 py-2">产品名称</th>
                <th className="px-3 border-r border-gray-200 py-2">分销价格</th>
                <th className="px-3 border-r border-gray-200 py-2">佣金比例</th>
                <th className="px-3 border-r border-gray-200 border-dashed py-2">分销总金额</th>
                <th className="px-3 border-r border-gray-200 py-2">产品分类</th>
                <th className="px-3 border-r border-gray-200 py-2">仓库名称</th>
                <th className="px-3 border-r border-gray-200 font-bold text-red-500 py-2">实际库存</th>
                <th className="px-3 border-r border-gray-200 py-2">10天销量</th>
                <th className="px-3 border-r border-gray-200 py-2">30天销量</th>
                <th className="px-3 py-2 border-r border-gray-200">操作</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 border-b border-gray-200">
              {DIST_DATA.map((item, i) => (
                <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-3 border-r border-gray-200 py-2"><input type="checkbox" className="mr-1" />{i + 1}</td>
                  <td className="px-3 border-r border-gray-200 py-2">
                    <span>{item.customer}</span>
                    <span className="text-red-500 font-bold ml-1">({item.code})</span>
                  </td>
                  <td className="px-3 border-r border-gray-200 text-blue-500 py-2">{item.fnsku}</td>
                  <td className="px-3 border-r border-gray-200 py-2">{item.name}</td>
                  <td className="px-3 border-r border-gray-200 py-2">{item.price}</td>
                  <td className="px-3 border-r border-gray-200 py-2">{item.rate}</td>
                  <td className="px-3 border-r border-gray-200 border-dashed py-2">{item.total}</td>
                  <td className="px-3 border-r border-gray-200 italic text-gray-400 py-2">{item.category}</td>
                  <td className="px-3 border-r border-gray-200 py-2">{item.warehouse}</td>
                  <td className="px-3 border-r border-gray-200 text-red-500 font-bold py-2">{item.inventory}</td>
                  <td className="px-3 border-r border-gray-200 py-2"></td>
                  <td className="px-3 border-r border-gray-200 py-2"></td>
                  <td className="px-3 py-2 border-r border-gray-200">
                    <button className="text-blue-500 hover:underline">[查看产品]</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-2 border-t border-gray-200 flex items-center justify-between bg-white">
          <button className="bg-[#f0ad4e] hover:bg-orange-500 text-white px-4 h-7 text-[12px] rounded-sm transition-colors">打印标签</button>
          
          <div className="flex items-center gap-4 text-[11px] text-gray-600">
            <span>总计 {DIST_DATA.length} 个记录分为 1 页当前第 1 页，每页</span>
            <select className="border border-gray-300 rounded-sm px-1 h-6 outline-none bg-white">
              <option>100</option>
            </select>
            <div className="flex items-center gap-1 ml-4 border-l pl-4 font-normal">
               <button className="px-2 h-6 hover:text-blue-500">第一页</button>
               <button className="px-2 h-6 hover:text-blue-500">上一页</button>
               <button className="px-2 h-6 hover:text-blue-500">下一页</button>
               <button className="px-2 h-6 hover:text-blue-500 transition-colors">最末页</button>
               <select className="border border-gray-300 rounded-sm px-1 h-6 text-[11px] ml-2 outline-none">
                  <option>1</option>
               </select>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-8 text-center text-[11px] text-gray-400 pb-10">
         <p>共执行 12 个查询，用时 0.032585 秒，Gzip 已禁用，内存占用 8.881 MB</p>
      </div>
    </div>
  );
}

function CustDistInv() {
  const CUST_DIST_DATA = [
    { id: '1', customer: 'yueyang02', code: '12016', fnsku: 'D12021T8BFJ', sellerSku: '123456445', name: '短袖', enName: 'T shirt', weight: '2.00', sysWeight: '0.00', price: '29', rate: '0.06', total: '30.74', status: '启用', warehouse: '星卓越泰国国仓', inventory: 0, addTime: '2025-12-04 13:36:22', duration: '158.1天' },
    { id: '2', customer: 'qin', code: '12014', fnsku: 'D12000QJXUV', sellerSku: 'D12000QJXUV', name: '乔丹速干短袖T恤', enName: 'Jordan quick drying short sleeved t-shirt', weight: '2.00', sysWeight: '2.00', price: '158', rate: '0.05', total: '165.9', status: '启用', warehouse: '星卓越泰国国仓', inventory: 18, addTime: '2025-12-04 01:09:54', duration: '158.6天' },
    { id: '3', customer: 'qin', code: '12014', fnsku: 'D12000QJXUV', sellerSku: 'D12000QJXUV', name: '乔丹速干短袖T恤', enName: 'Jordan quick drying short sleeved t-shirt', weight: '2.00', sysWeight: '0.00', price: '158', rate: '0.05', total: '165.9', status: '启用', warehouse: '星卓越泰国国仓', inventory: 18, addTime: '2025-12-04 01:09:54', duration: '158.6天' },
    { id: '4', customer: 'jinyi', code: '12013', fnsku: 'D12000QJXUV', sellerSku: 'D12000QJXUV', name: '乔丹速干短袖T恤', enName: 'Jordan quick drying short sleeved t-shirt', weight: '2.00', sysWeight: '0.00', price: '158', rate: '0.05', total: '165.9', status: '启用', warehouse: '星卓越泰国国仓', inventory: 100, addTime: '2025-12-03 16:43:03', duration: '159天' },
    { id: '5', customer: 'chenwei', code: '12000', fnsku: 'THBB478', sellerSku: 'THBB478', name: '赠送挂饰1个-THBB478', enName: '', weight: '0.10', sysWeight: '10.00', price: '0.2', rate: '0.00', total: '0.2', status: '启用', warehouse: '星卓越泰国国仓', inventory: 1, addTime: '2025-12-02 11:24:25', duration: '160.2天' },
    { id: '6', customer: 'chenwei', code: '12000', fnsku: 'THBB478', sellerSku: 'THBB478', name: '赠送挂饰1个-THBB478', enName: '', weight: '0.10', sysWeight: '0.00', price: '0.2', rate: '0.00', total: '0.2', status: '启用', warehouse: '星卓越泰国国仓', inventory: 1, addTime: '2025-12-02 11:24:25', duration: '160.2天' },
    { id: '7', customer: 'YY', code: '12012', fnsku: 'D12000QJXUV', sellerSku: 'D12000QJXUV', name: '乔丹速干短袖T恤', enName: 'Jordan quick drying short sleeved t-shirt', weight: '2.00', sysWeight: '0.00', price: '158', rate: '0.05', total: '165.9', status: '启用', warehouse: '星卓越泰国国仓', inventory: 1, addTime: '2025-05-29 10:27:36', duration: '347.3天' },
  ];

  return (
    <div className="bg-[#f0f2f5] h-full overflow-hidden font-sans text-gray-700">
      <div className="bg-white p-2 border-b border-gray-200 flex flex-wrap items-center gap-2">
        <div className="flex items-center gap-1 border border-gray-200 h-7 px-1">
          <span className="text-[12px] text-gray-500 whitespace-nowrap">客户名称</span>
          <input type="text" placeholder="请输入客户名称" className="outline-none text-[12px] w-28" />
        </div>
        <div className="flex items-center gap-1 border border-gray-200 h-7 px-1">
          <span className="text-[12px] text-gray-500 whitespace-nowrap">FnSKU</span>
          <input type="text" className="outline-none text-[12px] w-28" />
        </div>
        <div className="flex items-center gap-1 border border-gray-200 h-7 px-1">
          <span className="text-[12px] text-gray-500 whitespace-nowrap">seller sku</span>
          <input type="text" className="outline-none text-[12px] w-28" />
        </div>
        <div className="flex items-center gap-1 border border-gray-200 h-7 px-1">
          <span className="text-[12px] text-gray-500 whitespace-nowrap">产品名称</span>
          <input type="text" className="outline-none text-[12px] w-28" />
        </div>
        <div className="flex items-center gap-1 border border-gray-200 h-7 px-1">
          <span className="text-[12px] text-gray-500 whitespace-nowrap">英文名称</span>
          <input type="text" className="outline-none text-[12px] w-28" />
        </div>
        <select className="border border-gray-200 h-7 text-[12px] outline-none px-1 bg-white">
           <option>全部分类</option>
        </select>
        <button className="bg-[#00a2e8] hover:bg-blue-600 text-white px-5 h-7 text-[12px] rounded-sm transition-colors">查询</button>
        <button className="bg-[#00a2e8] hover:bg-blue-600 text-white px-5 h-7 text-[12px] rounded-sm transition-colors">新建产品</button>
      </div>

      <div className="bg-white m-2 border border-gray-200 rounded-sm overflow-hidden">
        <div className="overflow-auto">
          <table className="w-full border-collapse text-[12px] text-left border-b border-gray-200">
            <thead className="bg-[#f5f7fa] text-gray-600 font-medium">
              <tr className="hover:bg-gray-50 transition-colors">
                <th className="px-3 border-r border-gray-200 w-12 py-2"><input type="checkbox" className="mr-1" />序号</th>
                <th className="px-3 border-r border-gray-200 py-2">客户名称</th>
                <th className="px-3 border-r border-gray-200 py-2">Fnsku</th>
                <th className="px-3 border-r border-gray-200 py-2">seller sku</th>
                <th className="px-3 border-r border-gray-200 py-2">产品名称</th>
                <th className="px-3 border-r border-gray-200 py-2">英文名称</th>
                <th className="px-3 border-r border-gray-200 py-2">重量(kg)</th>
                <th className="px-3 border-r border-gray-200 py-2">系统重量(kg)</th>
                <th className="px-3 border-r border-gray-200 py-2">分销价格</th>
                <th className="px-3 border-r border-gray-200 py-2">佣金比例</th>
                <th className="px-3 border-r border-gray-200 py-2">分销总金额</th>
                <th className="px-3 border-r border-gray-200 py-2">状态</th>
                <th className="px-3 border-r border-gray-200 py-2">仓库名称</th>
                <th className="px-3 border-r border-gray-200 font-bold py-2">分销库存</th>
                <th className="px-3 border-r border-gray-200 py-2">添加时间</th>
                <th className="px-3 border-r border-gray-200 py-2">分销时长</th>
                <th className="px-3 py-2 border-r border-gray-200">操作</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 border-b border-gray-200">
              {CUST_DIST_DATA.map((item, i) => (
                <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-3 border-r border-gray-200 py-2"><input type="checkbox" className="mr-1" />{i + 1}</td>
                  <td className="px-3 border-r border-gray-200 py-2">
                    <span>{item.customer}</span>
                    <span className="text-red-500 font-bold ml-1">({item.code})</span>
                  </td>
                  <td className="px-3 border-r border-gray-200 text-blue-500 py-2">{item.fnsku}</td>
                  <td className="px-3 border-r border-gray-200 py-2">{item.sellerSku}</td>
                  <td className="px-3 border-r border-gray-200 py-2">{item.name}</td>
                  <td className="px-3 border-r border-gray-200 truncate max-w-[120px] py-2">{item.enName}</td>
                  <td className="px-3 border-r border-gray-200 py-2">{item.weight}</td>
                  <td className="px-3 border-r border-gray-200 py-2">{item.sysWeight}</td>
                  <td className="px-3 border-r border-gray-200 py-2">{item.price}</td>
                  <td className="px-3 border-r border-gray-200 py-2">{item.rate}</td>
                  <td className="px-3 border-r border-gray-200 py-2">{item.total}</td>
                  <td className="px-3 border-r border-gray-200 py-2">
                    <span className="text-green-600 bg-green-50 px-1 rounded-sm">{item.status}</span>
                  </td>
                  <td className="px-3 border-r border-gray-200 py-2">{item.warehouse}</td>
                  <td className="px-3 border-r border-gray-200 font-bold py-2">{item.inventory}</td>
                  <td className="px-3 border-r border-gray-200 text-gray-500 py-2">{item.addTime}</td>
                  <td className="px-3 border-r border-gray-200 py-2">{item.duration}</td>
                  <td className="px-3 py-2 border-r border-gray-200">
                    <div className="flex gap-1 text-blue-500 scale-90">
                      <button className="hover:underline">[详情]</button>
                      <button className="hover:underline">[移除分销]</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-2 border-t border-gray-200 flex items-center justify-between bg-white overflow-hidden">
          <button className="bg-[#f0ad4e] hover:bg-orange-500 text-white px-4 h-7 text-[12px] rounded-sm transition-colors whitespace-nowrap">打印标签</button>
          
          <div className="flex items-center gap-4 text-[11px] text-gray-600">
            <span>总计 {CUST_DIST_DATA.length} 个记录分为 1 页当前第 1 页，每页</span>
            <select className="border border-gray-300 rounded-sm px-1 h-6 outline-none bg-white">
              <option>100</option>
            </select>
            <div className="flex items-center gap-1 ml-4 border-l pl-4 font-normal whitespace-nowrap">
               <button className="px-2 h-6 hover:text-blue-500">第一页</button>
               <button className="px-2 h-6 hover:text-blue-500">上一页</button>
               <button className="px-2 h-6 hover:text-blue-500">下一页</button>
               <button className="px-2 h-6 hover:text-blue-500">最末页</button>
               <select className="border border-gray-300 rounded-sm px-1 h-6 text-[11px] ml-2 outline-none">
                  <option>1</option>
               </select>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-8 text-center text-[11px] text-gray-400 pb-10">
         <p>共执行 7 个查询，用时 0.034480 秒，Gzip 已禁用，内存占用 8.930 MB</p>
      </div>
    </div>
  );
}

function InvWarning() {
  const WARNING_DATA = [
    { id: '1', customer: 'yueyang07', code: '12021', fnsku: 'D12021T8BFJ', name: '短袖', warehouse: '星卓越泰国国仓', shelf: '', transit: 0, inventory: 2, pending: 0, dist: 3, sales10: 5, sales30: 15, age: 158.1, volume: 0.009, limit: 10, time: '2025-12-04 13:31:42' },
    { id: '2', customer: 'qin', code: '12014', fnsku: 'D12014U4YX1', name: '猫砂', warehouse: '星卓越泰国国仓', shelf: '', transit: 0, inventory: 5, pending: 2, dist: 80, sales10: 12, sales30: 45, age: 158.9, volume: 0.001, limit: 20, time: '2025-12-03 19:49:18' },
  ];

  return (
    <div className="bg-[#f0f2f5] h-full overflow-hidden font-sans text-gray-700">
      <div className="bg-white p-2 border-b border-gray-200 flex flex-wrap items-center gap-2">
        <div className="flex items-center gap-1 border border-gray-200 h-7 px-1">
          <span className="text-[12px] text-gray-500 whitespace-nowrap">客户名称</span>
          <input type="text" placeholder="请输入客户名称" className="outline-none text-[12px] w-28" />
        </div>
        <div className="flex items-center gap-1 border border-gray-200 h-7 px-1">
          <span className="text-[12px] text-gray-500 whitespace-nowrap">Fnsku</span>
          <input type="text" placeholder="Fnsku" className="outline-none text-[12px] w-28" />
        </div>
        <div className="flex items-center gap-1 border border-gray-200 h-7 px-1">
          <span className="text-[12px] text-gray-500 whitespace-nowrap">seller sku</span>
          <input type="text" placeholder="seller sku" className="outline-none text-[12px] w-28" />
        </div>
        <div className="flex items-center gap-1 border border-gray-200 h-7 px-1">
          <span className="text-[12px] text-gray-500 whitespace-nowrap">产品名称</span>
          <input type="text" className="outline-none text-[12px] w-28" />
        </div>
        
        <select className="border border-gray-200 h-7 text-[12px] outline-none px-1 bg-white">
           <option>全部库存</option>
        </select>
        <select className="border border-gray-200 h-7 text-[12px] outline-none px-1 bg-white">
           <option>全部仓库</option>
        </select>
        <select className="border border-gray-200 h-7 text-[12px] outline-none px-1 bg-white">
           <option>全部销售</option>
        </select>

        <button className="bg-[#00a2e8] hover:bg-blue-600 text-white px-4 h-7 text-[12px] rounded-sm transition-colors">查询</button>
        <button className="bg-[#00a2e8] hover:bg-blue-600 text-white px-4 h-7 text-[12px] rounded-sm transition-colors">导出Excel</button>
        
        <span className="text-[12px] text-blue-400 ml-2">Ps:点击销量可查看趋势图</span>
      </div>

      <div className="bg-white m-2 border border-gray-200 rounded-sm overflow-hidden min-h-[calc(100vh-160px)]">
        <div className="overflow-auto overflow-y-auto max-h-[calc(100vh-200px)]">
          <table className="w-full border-collapse text-[12px] text-left border-b border-gray-200">
            <thead className="bg-[#f5f7fa] text-gray-600 font-medium">
              <tr className="hover:bg-gray-50 transition-colors">
                <th className="px-3 border-r border-gray-200 min-w-[50px] py-2"><input type="checkbox" className="mr-1" />序号</th>
                <th className="px-3 border-r border-gray-200 min-w-[120px] py-2">客户名称</th>
                <th className="px-3 border-r border-gray-200 min-w-[100px] py-2">Fnsku</th>
                <th className="px-3 border-r border-gray-200 min-w-[150px] py-2">产品名称</th>
                <th className="px-3 border-r border-gray-200 min-w-[100px] py-2">仓库名称</th>
                <th className="px-3 border-r border-gray-200 min-w-[60px] py-2">货架</th>
                <th className="px-3 border-r border-gray-200 min-w-[60px] py-2">代发途中</th>
                <th className="px-3 border-r border-gray-200 min-w-[60px] font-bold py-2">代发库存↕</th>
                <th className="px-3 border-r border-gray-200 min-w-[70px] py-2">待处理库存</th>
                <th className="px-3 border-r border-gray-200 min-w-[60px] py-2">分销库存</th>
                <th className="px-3 border-r border-gray-100 min-w-[60px] py-2">10天销量</th>
                <th className="px-3 border-r border-gray-100 min-w-[60px] py-2">30天销量</th>
                <th className="px-3 border-r border-gray-200 min-w-[60px] py-2">库龄(天)</th>
                <th className="px-3 border-r border-gray-200 min-w-[60px] py-2">体积(m³)</th>
                <th className="px-3 border-r border-gray-200 min-w-[70px] py-2">库存预警</th>
                <th className="px-3 border-r border-gray-200 min-w-[120px] py-2">入仓时间</th>
                <th className="px-3 py-2 border-r border-gray-200">操作</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 border-b border-gray-200">
              {WARNING_DATA.map((item, i) => (
                <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-3 border-r border-gray-200 py-2"><input type="checkbox" className="mr-1" />{i + 1}</td>
                  <td className="px-3 border-r border-gray-200 py-2">
                    <span className="text-gray-700">{item.customer}</span>
                    <span className="text-red-500 font-bold ml-1">({item.code})</span>
                  </td>
                  <td className="px-3 border-r border-gray-200 text-blue-500 font-medium py-2">{item.fnsku}</td>
                  <td className="px-3 border-r border-gray-200 py-2">{item.name}</td>
                  <td className="px-3 border-r border-gray-200 py-2">{item.warehouse}</td>
                  <td className="px-3 border-r border-gray-200 text-gray-400 italic py-2">{item.shelf}</td>
                  <td className="px-3 border-r border-gray-200 underline text-blue-500 cursor-pointer py-2">{item.transit}</td>
                  <td className="px-3 border-r border-gray-200 underline text-red-500 cursor-pointer font-bold py-2">{item.inventory}</td>
                  <td className="px-3 border-r border-gray-200 underline text-blue-500 cursor-pointer py-2">{item.pending}</td>
                  <td className="px-3 border-r border-gray-200 py-2">{item.dist}</td>
                  <td className="px-3 border-r border-gray-100 text-blue-500 py-2">{item.sales10}</td>
                  <td className="px-3 border-r border-gray-100 text-blue-500 py-2">{item.sales30}</td>
                  <td className="px-3 border-r border-gray-200 py-2">{item.age}</td>
                  <td className="px-3 border-r border-gray-200 py-2">{item.volume}</td>
                  <td className="px-3 border-r border-gray-200 text-red-500 font-bold py-2">{item.limit}</td>
                  <td className="px-3 border-r border-gray-200 text-gray-400 py-2">{item.time}</td>
                  <td className="px-3 py-2 border-r border-gray-200">
                    <div className="flex flex-col text-blue-500 text-[10px] items-center scale-90">
                      <button className="hover:underline">[安全库存]</button>
                      <button className="hover:underline whitespace-nowrap">[代发盘点][打印条码]</button>
                    </div>
                  </td>
                </tr>
              ))}
              {/* Total Row */}
              <tr className="hover:bg-gray-50 transition-colors">
                <td colSpan={6} className="text-right pr-4 border-r border-gray-200 px-3 py-2">合计</td>
                <td className="px-3 border-r border-gray-200 py-2">0</td>
                <td className="px-3 border-r border-gray-200 py-2">7</td>
                <td className="px-3 border-r border-gray-200 py-2">2</td>
                <td className="px-3 border-r border-gray-200 py-2">83</td>
                <td className="px-3 border-r border-gray-100 py-2">17</td>
                <td className="px-3 border-r border-gray-100 py-2">60</td>
                <td className="px-3 border-r border-gray-200 py-2"></td>
                <td className="px-3 border-r border-gray-200 py-2">0.010</td>
                <td className="px-3 py-2 border-r border-gray-200" colSpan={3}></td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Table Footer Actions */}
        <div className="p-2 border-t border-gray-200 flex items-center justify-between bg-white sticky bottom-0 z-10">
          <div className="flex items-center gap-2">
            <select className="border border-gray-300 rounded-sm h-7 text-[12px] outline-none px-2">
               <option>全部仓库</option>
            </select>
            <input type="text" className="border border-gray-300 rounded-sm h-7 text-[12px] px-2 w-32" />
            <button className="bg-[#f0ad4e] hover:bg-orange-500 text-white px-4 h-7 text-[12px] rounded-sm transition-colors">代发盘点</button>
          </div>
          
          <div className="flex items-center gap-4 text-[11px] text-gray-600">
            <span>总计 {WARNING_DATA.length} 个记录分为 1 页当前第 1 页，每页</span>
            <select className="border border-gray-300 rounded-sm px-1 h-6 outline-none bg-white">
              <option>10</option>
              <option>100</option>
            </select>
            <div className="flex items-center gap-1 ml-4 border-l pl-4 font-normal whitespace-nowrap">
               <button className="px-2 h-6 hover:text-blue-500">第一页</button>
               <button className="px-2 h-6 hover:text-blue-500">上一页</button>
               <button className="px-2 h-6 hover:text-blue-500">下一页</button>
               <button className="px-2 h-6 hover:text-blue-500">最末页</button>
               <select className="border border-gray-300 rounded-sm px-1 h-6 text-[11px] ml-2 outline-none">
                  <option>1</option>
               </select>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-8 text-center text-[11px] text-gray-400 pb-10">
         <p>共执行 9 个查询，用时 0.032847 秒，Gzip 已禁用，内存占用 8.834 MB</p>
      </div>
    </div>
  );
}

function InvDetail() {
  const DETAIL_DATA = [
    { id: '1', customer: 'yueyang07', code: '12021', fnsku: 'D12021T8BFJ', warehouse: '星卓越泰国国仓', name: '短袖', change: '-1', remaining: 0, type: '冻结库存扣除', remark: '打包出库-FXDF202512013(分销)', invType: '一件代发', time: '2025-12-04 13:42:16' },
    { id: '2', customer: 'yueyang07', code: '12021', fnsku: 'D12021T8BFJ', warehouse: '星卓越泰国国仓', name: '短袖', change: '-1', remaining: 21, type: '冻结', remark: '发货申请-FXDF202512013[分销](1)', invType: '一件代发', time: '2025-12-04 13:41:47' },
    { id: '3', customer: 'yueyang07', code: '12021', fnsku: 'D12021T8BFJ', warehouse: '星卓越泰国国仓', name: '短袖', change: '+22', remaining: 22, type: '增加', remark: '海外仓入库-FX12021001-24567', invType: '一件代发', time: '2025-12-04 13:31:42' },
    { id: '4', customer: 'yueyang01', code: '12015', fnsku: 'D120154AGF2', warehouse: '星卓越泰国国仓', name: '猫咪水杯', change: '+100', remaining: 100, type: '增加', remark: '海外仓入库-FX12015001-123', invType: '一件代发', time: '2025-12-04 13:30:58' },
    { id: '5', customer: 'qin', code: '12014', fnsku: 'D12014GK1AA', warehouse: '星卓越泰国国仓', name: '猫粮10好', change: '+100', remaining: 100, type: '增加', remark: '海外仓入库-FX12014004-1', invType: '一件代发', time: '2025-12-04 13:29:21' },
    { id: '6', customer: 'qin', code: '12014', fnsku: 'D12014U4YX1', warehouse: '星卓越泰国国仓', name: '猫砂', change: '+100', remaining: 305, type: '增加', remark: '海外仓入库-FX12014003-1', invType: '一件代发', time: '2025-12-04 13:29:17' },
    { id: '7', customer: 'qin', code: '12014', fnsku: 'D12014TCL0Z', warehouse: '星卓越泰国国仓', name: '猫砂二号', change: '+100', remaining: 300, type: '增加', remark: '海外仓入库-FX12014003-1', invType: '一件代发', time: '2025-12-04 13:29:17' },
    { id: '8', customer: 'qin', code: '12014', fnsku: 'D12014U4YX1', warehouse: '星卓越泰国国仓', name: '猫砂', change: '+10', remaining: 205, type: '增加', remark: '海外仓入库-FX12014002-1', invType: '一件代发', time: '2025-12-04 13:29:10' },
    { id: '9', customer: 'qin', code: '12014', fnsku: 'D12014TCL0Z', warehouse: '星卓越泰国国仓', name: '猫砂二号', change: '+100', remaining: 200, type: '增加', remark: '海外仓入库-FX12014002-1', invType: '一件代发', time: '2025-12-04 13:29:10' },
    { id: '10', customer: 'qin', code: '12014', fnsku: 'D12014U4YX1', warehouse: '星卓越泰国国仓', name: '猫砂', change: '-2', remaining: 0, type: '冻结库存扣除', remark: '打包出库-FXDF202512012', invType: '一件代发', time: '2025-12-04 01:22:25' },
  ];

  return (
    <div className="bg-[#f0f2f5] h-full overflow-hidden font-sans text-gray-700">
      {/* Top Search Bar */}
      <div className="bg-white p-2 border-b border-gray-200">
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <div className="flex items-center gap-1 border border-gray-200 h-7 px-1 bg-white">
            <span className="text-[12px] text-gray-500 whitespace-nowrap">客户名称</span>
            <input type="text" placeholder="请输入客户名称" className="outline-none text-[12px] w-28" />
          </div>
          <div className="flex items-center gap-1 border border-gray-200 h-7 px-1 bg-white">
            <span className="text-[12px] text-gray-500 whitespace-nowrap">Fnsku</span>
            <input type="text" placeholder="请输入产品Fnsku" className="outline-none text-[12px] w-28" />
          </div>
          <div className="flex items-center gap-1 border border-gray-200 h-7 px-1 bg-white">
            <span className="text-[12px] text-gray-500 whitespace-nowrap">产品名称</span>
            <input type="text" className="outline-none text-[12px] w-28" />
          </div>
          <div className="flex items-center gap-1 border border-gray-200 h-7 px-1 bg-white">
            <span className="text-[12px] text-gray-500 whitespace-nowrap">备注</span>
            <input type="text" className="outline-none text-[12px] w-40" />
          </div>
          
          <div className="flex items-center gap-1">
             <span className="text-[12px] text-gray-500">时间</span>
             <div className="flex items-center border border-gray-200 rounded-sm px-2 h-7 bg-white">
                <input type="text" value="2024-05-05" className="w-20 outline-none text-[12px]" readOnly />
                <Calendar size={12} className="text-gray-400 cursor-pointer" />
             </div>
             <span className="text-gray-400">-</span>
             <div className="flex items-center border border-gray-200 rounded-sm px-2 h-7 bg-white">
                <input type="text" value="2026-05-12" className="w-20 outline-none text-[12px]" readOnly />
                <Calendar size={12} className="text-gray-400 cursor-pointer" />
             </div>
          </div>

          <select className="border border-gray-200 h-7 text-[12px] outline-none px-1 bg-white">
             <option>订单类型</option>
          </select>
          <select className="border border-gray-200 h-7 text-[12px] outline-none px-1 bg-white">
             <option>查看全部</option>
          </select>
          <select className="border border-gray-200 h-7 text-[12px] outline-none px-1 bg-white">
             <option>全部仓库</option>
          </select>
          <select className="border border-gray-200 h-7 text-[12px] outline-none px-1 bg-white">
             <option>全部类型</option>
          </select>
        </div>
        <div className="flex items-center gap-2">
          <button className="bg-[#00a2e8] hover:bg-blue-600 text-white px-8 h-7 text-[12px] rounded-sm transition-colors">查询</button>
          <button className="bg-[#00a2e8] hover:bg-blue-600 text-white px-6 h-7 text-[12px] rounded-sm transition-colors">导出Excel</button>
        </div>
      </div>

      {/* Main Table Content */}
      <div className="bg-white m-2 border border-gray-200 rounded-sm overflow-hidden">
        <div className="overflow-auto">
          <table className="w-full border-collapse text-[12px] text-left border-b border-gray-200">
            <thead className="bg-[#f5f7fa] text-gray-600 font-medium">
              <tr className="hover:bg-gray-50 transition-colors">
                <th className="px-3 border-r border-gray-200 w-12 py-2"><input type="checkbox" className="mr-1" />序号</th>
                <th className="px-3 border-r border-gray-200 min-w-[120px] py-2">客户名称</th>
                <th className="px-3 border-r border-gray-200 min-w-[100px] py-2">Fnsku</th>
                <th className="px-3 border-r border-gray-200 min-w-[100px] py-2">仓库名称</th>
                <th className="px-3 border-r border-gray-200 min-w-[150px] py-2">产品名称</th>
                <th className="px-3 border-r border-gray-200 min-w-[80px] py-2">库存变动</th>
                <th className="px-3 border-r border-gray-200 min-w-[80px] py-2">剩余库存</th>
                <th className="px-3 border-r border-gray-200 min-w-[100px] py-2">库存变动类型</th>
                <th className="px-3 border-r border-gray-200 min-w-[200px] py-2">备注</th>
                <th className="px-3 border-r border-gray-200 min-w-[80px] py-2">库存类型</th>
                <th className="px-3 min-w-[140px] py-2 border-r border-gray-200">添加时间</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 border-b border-gray-200">
              {DETAIL_DATA.map((item, i) => (
                <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-3 border-r border-gray-200 py-2"><input type="checkbox" className="mr-1" />{i + 1}</td>
                  <td className="px-3 border-r border-gray-200 py-2">
                    <span className="text-gray-700">{item.customer}</span>
                    <span className="text-red-500 font-bold ml-1">({item.code})</span>
                  </td>
                  <td className="px-3 border-r border-gray-200 text-blue-500 font-medium py-2">{item.fnsku}</td>
                  <td className="px-3 border-r border-gray-200 py-2">{item.warehouse}</td>
                  <td className="px-3 border-r border-gray-200 py-2">{item.name}</td>
                  <td className={cn(
                    "px-3 py-2 border-r border-gray-200 font-bold",
                    item.change.startsWith('+') ? "text-red-500" : "text-green-600"
                  )}>{item.change}</td>
                  <td className="px-3 border-r border-gray-200 py-2">{item.remaining}</td>
                  <td className="px-3 border-r border-gray-200 py-2">{item.type}</td>
                  <td className="px-3 border-r border-gray-200 text-left pl-3 py-2">{item.remark}</td>
                  <td className="px-3 border-r border-gray-200 py-2">{item.invType}</td>
                  <td className="px-3 text-gray-500 py-2 border-r border-gray-200">{item.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer info */}
        <div className="p-2 border-t border-gray-200 flex items-center justify-end bg-white">
          <div className="flex items-center gap-4 text-[11px] text-gray-600">
            <span>总计 36 个记录分为 4 页当前第 1 页，每页</span>
            <select className="border border-gray-300 rounded-sm px-1 h-6 outline-none bg-white">
              <option>10</option>
              <option>100</option>
            </select>
            <div className="flex items-center gap-1 ml-4 border-l pl-4 font-normal whitespace-nowrap">
               <button className="px-2 h-6 hover:text-blue-500">第一页</button>
               <button className="px-2 h-6 hover:text-blue-500">上一页</button>
               <button className="px-2 h-6 hover:text-blue-500">下一页</button>
               <button className="px-2 h-6 hover:text-blue-500">最末页</button>
               <select className="border border-gray-300 rounded-sm px-1 h-6 text-[11px] ml-2 outline-none">
                  <option>1</option>
               </select>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-8 text-center text-[11px] text-gray-400 pb-10">
         <p>共执行 8 个查询，用时 0.043883 秒，Gzip 已禁用，内存占用 8.830 MB</p>
      </div>
    </div>
  );
}

function InvAgeAnalysis() {
  const ageDistData = [
    { name: '10天内', value: 5, color: '#5b73cc' },
    { name: '10~30天', value: 8, color: '#91cd76' },
    { name: '30~60天', value: 12, color: '#fac858' },
    { name: '60~90天', value: 15, color: '#ee6666' },
    { name: '90~180天', value: 45, color: '#73c0de' },
    { name: '180~360天', value: 5, color: '#3ba272' },
    { name: '360天以上', value: 25, color: '#fc8452' },
  ];

  const transitAgeData = [
    { name: '10天内', value: 15, color: '#5b73cc' },
    { name: '10~30天', value: 25, color: '#91cd76' },
    { name: '30~60天', value: 20, color: '#fac858' },
    { name: '60~90天', value: 10, color: '#ee6666' },
    { name: '90~180天', value: 15, color: '#73c0de' },
    { name: '180~360天', value: 10, color: '#3ba272' },
    { name: '360天以上', value: 18, color: '#fc8452' },
  ];

  const top15InvData = [
    { name: 'qin(12014)', value: 625 },
    { name: 'fxchenwei(12000)', value: 295 },
    { name: 'jinyi(12013)', value: 75 },
    { name: 'yueyang01(12015)', value: 55 },
    { name: 'yueyang07(12021)', value: 25 },
    { name: 'YY(12012)', value: 10 },
    { name: 'test(12011)', value: 2 },
  ].sort((a, b) => b.value - a.value);

  return (
    <div className="bg-[#f0f2f5] h-full overflow-hidden font-sans text-gray-700">
      {/* Filter Bar */}
      <div className="bg-white p-2 border-b border-gray-200 flex items-center gap-2">
        <div className="flex items-center gap-1 border border-gray-200 h-7 px-1">
          <span className="text-[12px] text-gray-500 whitespace-nowrap">客户名称</span>
          <input type="text" placeholder="请输入客户名称" className="outline-none text-[12px] w-28" />
        </div>
        <select className="border border-gray-200 h-7 text-[12px] outline-none px-1 bg-white">
          <option>全部仓库</option>
        </select>
        <button className="bg-[#00a2e8] hover:bg-blue-600 text-white px-5 h-7 text-[12px] rounded-sm transition-colors">查询</button>
      </div>

      <div className="p-2 space-y-2">
        {/* Row 1: Pie Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
          <div className="bg-white border border-gray-200 p-4 h-[400px]">
             <h3 className="text-center font-bold text-gray-700 mb-4">全部仓库代发产品库龄分布</h3>
             <ResponsiveContainer width="100%" height="100%">
               <PieChart>
                 <Pie
                   data={ageDistData}
                   cx="50%"
                   cy="45%"
                   innerRadius={60}
                   outerRadius={100}
                   paddingAngle={0}
                   dataKey="value"
                   label={({ name, percent }) => `${name}`}
                 >
                   {ageDistData.map((entry, index) => (
                     <Cell key={`cell-${index}`} fill={entry.color} />
                   ))}
                 </Pie>
                 <Tooltip />
                 <Legend verticalAlign="top" align="left" layout="vertical" iconSize={12} iconType="rect" wrapperStyle={{ fontSize: '11px', paddingTop: '20px' }} />
               </PieChart>
             </ResponsiveContainer>
          </div>
          <div className="bg-white border border-gray-200 p-4 h-[400px]">
             <h3 className="text-center font-bold text-gray-700 mb-4">全部仓库中转库龄分布</h3>
             <ResponsiveContainer width="100%" height="100%">
               <PieChart>
                 <Pie
                   data={transitAgeData}
                   cx="50%"
                   cy="45%"
                   innerRadius={0}
                   outerRadius={100}
                   paddingAngle={0}
                   dataKey="value"
                   label={({ name, percent }) => `${name}`}
                 >
                   {transitAgeData.map((entry, index) => (
                     <Cell key={`cell-${index}`} fill={entry.color} />
                   ))}
                 </Pie>
                 <Tooltip />
                 <Legend verticalAlign="top" align="left" layout="vertical" iconSize={12} iconType="rect" wrapperStyle={{ fontSize: '11px', paddingTop: '20px' }} />
               </PieChart>
             </ResponsiveContainer>
          </div>
        </div>

        {/* Row 2: Bar Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
          <div className="bg-white border border-gray-200 p-4 min-h-0">
             <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-gray-700">全部仓库代发在仓库存排行TOP15</h3>
                <div className="flex items-center gap-1 text-[11px] text-gray-500">
                  <span className="w-3 h-3 bg-[#5b73cc] rounded-sm"></span> 在仓库存(个)
                </div>
             </div>
             <ResponsiveContainer width="100%" height={400}>
                <BarChart data={top15InvData} layout="vertical" margin={{ left: 50, right: 30 }}>
                  <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                  <XAxis type="number" axisLine={false} tickLine={false} tick={{ fontSize: 10 }} />
                  <YAxis type="category" dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10 }} width={100} />
                  <Tooltip cursor={{ fill: 'transparent' }} />
                  <Bar dataKey="value" fill="#5b73cc" radius={[0, 2, 2, 0]} barSize={40} />
                </BarChart>
             </ResponsiveContainer>
          </div>
          <div className="bg-white border border-gray-200 p-4 min-h-0">
             <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-gray-700">全部仓库中转在仓库存排行TOP15</h3>
                <div className="flex items-center gap-1 text-[11px] text-gray-500">
                  <span className="w-3 h-3 bg-[#5b73cc] rounded-sm"></span> 在仓库存(箱数)
                </div>
             </div>
             <div className="flex items-center justify-center h-[400px] border-l border-gray-100 italic text-gray-300">
                暂无数据
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function InvQueryCombo() {
  const COMBO_DATA = [
    { id: '1', customer: 'yueyang06', code: '12020', fnsku: 'D12020D3C9G', name: '拼图-A', category: '玩具', warehouse: '星卓越泰国国仓', inventory: 15, addTime: '2025-12-04 10:20:15' },
    { id: '2', customer: 'qin', code: '12014', fnsku: 'D12014KLW93', name: '组合套装-B', category: '生活用品', warehouse: '星卓越泰国国仓', inventory: 42, addTime: '2025-12-03 14:15:30' },
    { id: '3', customer: 'jinyi', code: '12013', fnsku: 'D12013PO23X', name: '办公套装', category: '文具', warehouse: '星卓越泰国国仓', inventory: 8, addTime: '2025-12-02 09:45:00' },
  ];

  return (
    <div className="bg-[#f0f2f5] h-full overflow-hidden font-sans text-gray-700">
      {/* Search Bar */}
      <div className="bg-white p-2 border-b border-gray-200 flex flex-wrap items-center gap-2">
        <div className="flex items-center gap-1 border border-gray-200 h-7 px-1">
          <span className="text-[12px] text-gray-500 whitespace-nowrap">客户名称</span>
          <input type="text" placeholder="请输入客户名称" className="outline-none text-[12px] w-28" />
        </div>
        <div className="flex items-center gap-1 border border-gray-200 h-7 px-1">
          <span className="text-[12px] text-gray-500 whitespace-nowrap">Fnsku</span>
          <input type="text" placeholder="Fnsku" className="outline-none text-[12px] w-28" />
        </div>
        <div className="flex items-center gap-1 border border-gray-200 h-7 px-1">
          <span className="text-[12px] text-gray-500 whitespace-nowrap">产品名称</span>
          <input type="text" className="outline-none text-[12px] w-28" />
        </div>
        <select className="border border-gray-200 h-7 text-[12px] outline-none px-1 bg-white">
           <option>全部仓库</option>
        </select>
        <button className="bg-[#00a2e8] hover:bg-blue-600 text-white px-5 h-7 text-[12px] rounded-sm transition-colors">查询</button>
      </div>

      {/* Main Table Content */}
      <div className="bg-white m-2 border border-gray-200 rounded-sm overflow-hidden">
        <div className="overflow-auto">
          <table className="w-full border-collapse text-[12px] text-left border-b border-gray-200">
            <thead className="bg-[#f5f7fa] text-gray-600 font-medium">
              <tr className="hover:bg-gray-50 transition-colors">
                <th className="px-3 border-r border-gray-200 w-12 py-2"><input type="checkbox" className="mr-1" />序号</th>
                <th className="px-3 border-r border-gray-200 py-2">客户名称</th>
                <th className="px-3 border-r border-gray-200 py-2">Fnsku</th>
                <th className="px-3 border-r border-gray-200 py-2">产品名称</th>
                <th className="px-3 border-r border-gray-200 py-2">产品分类</th>
                <th className="px-3 border-r border-gray-200 py-2">仓库名称</th>
                <th className="px-3 border-r border-gray-200 font-bold py-2">实际库存</th>
                <th className="px-3 border-r border-gray-200 py-2">添加时间</th>
                <th className="px-3 py-2 border-r border-gray-200">操作</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 border-b border-gray-200">
              {COMBO_DATA.map((item, i) => (
                <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-3 border-r border-gray-200 py-2"><input type="checkbox" className="mr-1" />{i + 1}</td>
                  <td className="px-3 border-r border-gray-200 py-2">
                    <span>{item.customer}</span>
                    <span className="text-red-500 font-bold ml-1">({item.code})</span>
                  </td>
                  <td className="px-3 border-r border-gray-200 text-blue-500 py-2">{item.fnsku}</td>
                  <td className="px-3 border-r border-gray-200 py-2">{item.name}</td>
                  <td className="px-3 border-r border-gray-200 py-2">{item.category}</td>
                  <td className="px-3 border-r border-gray-200 py-2">{item.warehouse}</td>
                  <td className="px-3 border-r border-gray-200 font-bold py-2">{item.inventory}</td>
                  <td className="px-3 border-r border-gray-200 text-gray-500 py-2">{item.addTime}</td>
                  <td className="px-3 text-blue-500 cursor-pointer py-2 border-r border-gray-200">
                    [打印条码]
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-2 border-t border-gray-200 flex items-center justify-between bg-white whitespace-nowrap overflow-hidden">
          <button className="bg-[#f0ad4e] hover:bg-orange-500 text-white px-4 h-7 text-[12px] rounded-sm transition-colors">打印条码</button>
          
          <div className="flex items-center gap-4 text-[11px] text-gray-600">
            <span>总计 {COMBO_DATA.length} 个记录分为 1 页当前第 1 页，每页</span>
            <select className="border border-gray-300 rounded-sm px-1 h-6 outline-none bg-white">
              <option>100</option>
            </select>
            <div className="flex items-center gap-1 ml-4 border-l pl-4 font-normal">
               <button className="px-2 h-6 hover:text-blue-500">第一页</button>
               <button className="px-2 h-6 hover:text-blue-500">上一页</button>
               <button className="px-2 h-6 hover:text-blue-500">下一页</button>
               <button className="px-2 h-6 hover:text-blue-500">最末页</button>
               <select className="border border-gray-300 rounded-sm px-1 h-6 text-[11px] ml-2 outline-none">
                  <option>1</option>
               </select>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-8 text-center text-[11px] text-gray-400 pb-10">
         <p>共执行 7 个查询，用时 0.033004 秒，Gzip 已禁用，内存占用 8.826 MB</p>
      </div>
    </div>
  );
}

function TransitDetail() {
  const TRANSIT_DATA = [
    { id: '1', customer: 'YY', code: '12012', refNo: 'FX12012002', boxNo: 'FX12012002-1', fnsku: 'D12012NBQWF', forecastQty: 1, warehouse: '星卓越泰国国仓', addTime: '2025-04-29 16:39:42', duration: 377, type: '一件代发' },
  ];

  return (
    <div className="bg-[#f0f2f5] h-full overflow-hidden font-sans text-gray-700">
      {/* Top Search Bar */}
      <div className="bg-white p-2 border-b border-gray-200">
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex items-center gap-1 border border-gray-200 h-7 px-1 bg-white">
            <select className="outline-none text-[12px] bg-transparent">
              <option>参考单号</option>
            </select>
            <input type="text" className="outline-none text-[12px] w-28" />
          </div>
          <div className="flex items-center gap-1 border border-gray-200 h-7 px-1 bg-white">
            <span className="text-[12px] text-gray-400 whitespace-nowrap">装箱单号</span>
            <input type="text" className="outline-none text-[12px] w-28" />
          </div>
          <div className="flex items-center gap-1 border border-gray-200 h-7 px-1 bg-white">
            <span className="text-[12px] text-gray-400 whitespace-nowrap">Fnsku</span>
            <input type="text" className="outline-none text-[12px] w-28" />
          </div>
          <div className="flex items-center gap-1 border border-gray-200 h-7 px-1 bg-white">
            <span className="text-[12px] text-gray-400 whitespace-nowrap">货架</span>
            <input type="text" className="outline-none text-[12px] w-24" />
          </div>
          <div className="flex items-center gap-1 border border-gray-200 h-7 px-1 bg-white">
            <span className="text-[12px] text-gray-400 whitespace-nowrap">客户名称</span>
            <input type="text" className="outline-none text-[12px] w-44" />
          </div>
          
          <div className="flex items-center gap-1">
             <div className="flex items-center border border-gray-200 rounded-sm px-2 h-7 bg-white">
                <input type="text" value="2024-04-11" className="w-20 outline-none text-[12px]" readOnly />
                <Calendar size={12} className="text-gray-400 cursor-pointer" />
             </div>
             <span className="text-gray-400">-</span>
             <div className="flex items-center border border-gray-200 rounded-sm px-2 h-7 bg-white">
                <input type="text" value="2026-05-11" className="w-20 outline-none text-[12px]" readOnly />
                <Calendar size={12} className="text-gray-400 cursor-pointer" />
             </div>
          </div>

          <select className="border border-gray-200 h-7 text-[12px] outline-none px-1 bg-white">
             <option>订单类型</option>
          </select>
          <select className="border border-gray-200 h-7 text-[12px] outline-none px-1 bg-white">
             <option>目的仓库</option>
          </select>
          <select className="border border-gray-200 h-7 text-[12px] outline-none px-1 bg-white">
             <option>查看全部</option>
          </select>
          <select className="border border-gray-200 h-7 text-[12px] outline-none px-1 bg-white">
             <option>全部库龄</option>
          </select>

          <button className="bg-[#00a2e8] hover:bg-blue-600 text-white px-8 h-7 text-[12px] rounded-sm transition-colors">查询</button>
          <button className="bg-[#00a2e8] hover:bg-blue-600 text-white px-6 h-7 text-[12px] rounded-sm transition-colors">导出Excel</button>
        </div>
      </div>

      {/* Main Table Content */}
      <div className="bg-white m-2 border border-gray-200 rounded-sm overflow-hidden">
        <div className="overflow-auto">
          <table className="w-full border-collapse text-[12px] text-left border-b border-gray-200">
            <thead className="bg-[#f5f7fa] text-gray-600 font-medium">
              <tr className="hover:bg-gray-50 transition-colors">
                <th className="px-3 border-r border-gray-200 w-12 py-2"><input type="checkbox" className="mr-1" />序号</th>
                <th className="px-3 border-r border-gray-200 py-2">客户名称</th>
                <th className="px-3 border-r border-gray-200 py-2">参考单号</th>
                <th className="px-3 border-r border-gray-200 py-2">装箱单号</th>
                <th className="px-3 border-r border-gray-200 py-2">Fnsku</th>
                <th className="px-3 border-r border-gray-200 py-2">预报数量</th>
                <th className="px-3 border-r border-gray-200 py-2">仓库名称</th>
                <th className="px-3 border-r border-gray-200 py-2">添加时间</th>
                <th className="px-3 border-r border-gray-200 py-2">订单时长(天)</th>
                <th className="px-3 py-2 border-r border-gray-200">头程类型</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 border-b border-gray-200">
              {TRANSIT_DATA.map((item, i) => (
                <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-3 border-r border-gray-200 py-2"><input type="checkbox" className="mr-1" />{i + 1}</td>
                  <td className="px-3 border-r border-gray-200 py-2">
                    <span className="text-gray-700">{item.customer}</span>
                    <span className="text-red-500 font-bold ml-1">({item.code})</span>
                  </td>
                  <td className="px-3 border-r border-gray-200 py-2">{item.refNo}</td>
                  <td className="px-3 border-r border-gray-200 py-2">{item.boxNo}</td>
                  <td className="px-3 border-r border-gray-200 py-2">{item.fnsku}</td>
                  <td className="px-3 border-r border-gray-200 font-bold py-2">{item.forecastQty}</td>
                  <td className="px-3 border-r border-gray-200 py-2">{item.warehouse}</td>
                  <td className="px-3 border-r border-gray-200 text-gray-500 py-2">
                    <div className="flex flex-col text-center">
                       <span>{item.addTime.split(' ')[0]}</span>
                       <span className="text-[10px]">{item.addTime.split(' ')[1]}</span>
                    </div>
                  </td>
                  <td className="px-3 border-r border-gray-200 py-2">{item.duration}</td>
                  <td className="px-3 py-2 border-r border-gray-200">{item.type}</td>
                </tr>
              ))}
              {/* Total Row */}
              <tr className="hover:bg-gray-50 transition-colors">
                <td colSpan={5} className="text-right pr-4 border-r border-gray-200 px-3 py-2">合计</td>
                <td className="px-3 border-r border-gray-200 py-2">1</td>
                <td className="px-3 py-2 border-r border-gray-200" colSpan={4}></td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Footer info */}
        <div className="p-2 border-t border-gray-200 flex items-center justify-end bg-white">
          <div className="flex items-center gap-4 text-[11px] text-gray-600">
            <span>总计 {TRANSIT_DATA.length} 个记录分为 1 页当前第 1 页，每页</span>
            <select className="border border-gray-300 rounded-sm px-1 h-6 outline-none bg-white">
              <option>10</option>
              <option>100</option>
            </select>
            <div className="flex items-center gap-1 ml-4 border-l pl-4 font-normal whitespace-nowrap">
               <button className="px-2 h-6 hover:text-blue-500 border-none bg-transparent cursor-pointer">第一页</button>
               <button className="px-2 h-6 hover:text-blue-500 border-none bg-transparent cursor-pointer">上一页</button>
               <button className="px-2 h-6 hover:text-blue-500 border-none bg-transparent cursor-pointer">下一页</button>
               <button className="px-2 h-6 hover:text-blue-500 border-none bg-transparent cursor-pointer transition-colors">最末页</button>
               <select className="border border-gray-300 rounded-sm px-1 h-6 text-[11px] ml-2 outline-none bg-white">
                  <option>1</option>
               </select>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-8 text-center text-[11px] text-gray-400 pb-10">
         <p>共执行 15 个查询，用时 0.034504 秒，Gzip 已禁用，内存占用 8.827 MB</p>
      </div>
    </div>
  );
}

function InvHistory() {
  const HISTORY_DATA = [
    { id: '1', customer: 'yueyang07', code: '12021', refNo: 'FX12021001', boxNo: 'FX12021001-24567', fnsku: 'D12021T8BFJ', forecast: 22, inbound: 22, outbound: 1, remaining: 21, shelf: '', area: '', warehouse: '星卓越泰国国仓', addTime: '2025-12-04 13:29:33', entryTime: '2025-12-04 13:31:42', age: 158.1, type: '一件代发' },
    { id: '2', customer: 'yueyang01', code: '12015', refNo: 'FX12015001', boxNo: 'FX12015001-123', fnsku: 'D120154AGF2', forecast: 100, inbound: 100, outbound: 0, remaining: 100, shelf: '', area: '', warehouse: '星卓越泰国国仓', addTime: '2025-12-04 13:28:29', entryTime: '2025-12-04 13:30:58', age: 158.1, type: '一件代发' },
    { id: '3', customer: 'qin', code: '12014', refNo: 'FX12014004', boxNo: 'FX12014004-1', fnsku: 'D12014GK1AA', forecast: 100, inbound: 100, outbound: 0, remaining: 100, shelf: '', area: '', warehouse: '星卓越泰国国仓', addTime: '2025-12-04 13:27:44', entryTime: '2025-12-04 13:29:21', age: 158.1, type: '一件代发' },
    { id: '4', customer: 'qin', code: '12014', refNo: 'FX12014003', boxNo: 'FX12014003-1', fnsku: 'D12014TCL0Z', forecast: 100, inbound: 100, outbound: 0, remaining: 100, shelf: '', area: '', warehouse: '星卓越泰国国仓', addTime: '2025-12-04 00:59:59', entryTime: '2025-12-04 13:29:17', age: 158.1, type: '一件代发' },
    { id: '5', customer: 'qin', code: '12014', refNo: 'FX12014003', boxNo: 'FX12014003-1', fnsku: 'D12014U4YX1', forecast: 100, inbound: 100, outbound: 0, remaining: 100, shelf: '', area: '', warehouse: '星卓越泰国国仓', addTime: '2025-12-04 00:59:59', entryTime: '2025-12-04 13:29:17', age: 158.1, type: '一件代发' },
    { id: '6', customer: 'qin', code: '12014', refNo: 'FXTH202512002', boxNo: 'FXTH202512002-13689', fnsku: 'D12014TCL0Z', forecast: 1, inbound: 1, outbound: 0, remaining: 1, shelf: '', area: '', warehouse: '星卓越泰国国仓', addTime: '2025-12-03 20:21:42', entryTime: '2025-12-04 20:23:52', age: 158.8, type: '一件代发' },
    { id: '7', customer: 'qin', code: '12014', refNo: 'FX12014002', boxNo: 'FX12014002-1', fnsku: 'D12014TCL0Z', forecast: 100, inbound: 100, outbound: 0, remaining: 100, shelf: '', area: '', warehouse: '星卓越泰国国仓', addTime: '2025-12-03 19:47:37', entryTime: '2025-12-04 13:29:10', age: 158.1, type: '一件代发' },
    { id: '8', customer: 'qin', code: '12014', refNo: 'FX12014002', boxNo: 'FX12014002-1', fnsku: 'D12014U4YX1', forecast: 10, inbound: 10, outbound: 0, remaining: 10, shelf: '', area: '', warehouse: '星卓越泰国国仓', addTime: '2025-12-03 19:47:37', entryTime: '2025-12-04 13:29:10', age: 158.1, type: '一件代发' },
    { id: '9', customer: 'qin', code: '12014', refNo: 'FX12014001', boxNo: 'FX12014001-1', fnsku: 'D12014TCL0Z', forecast: 100, inbound: 100, outbound: 1, remaining: 99, shelf: '', area: '', warehouse: '星卓越泰国国仓', addTime: '2025-12-03 19:46:32', entryTime: '2025-12-03 19:49:18', age: 158.9, type: '一件代发' },
    { id: '10', customer: 'qin', code: '12014', refNo: 'FX12014001', boxNo: 'FX12014001-2', fnsku: 'D12014U4YX1', forecast: 200, inbound: 200, outbound: 5, remaining: 195, shelf: '', area: '', warehouse: '星卓越泰国国仓', addTime: '2025-12-03 19:46:32', entryTime: '2025-12-03 19:49:18', age: 158.9, type: '一件代发' },
  ];

  return (
    <div className="bg-[#f0f2f5] h-full overflow-hidden font-sans text-gray-700">
      {/* Top Search Bar */}
      <div className="bg-white p-2 border-b border-gray-200">
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex items-center gap-1 border border-gray-200 h-7 px-1 bg-white">
            <select className="outline-none text-[12px] bg-transparent">
              <option>参考单号</option>
            </select>
            <input type="text" className="outline-none text-[12px] w-28" />
          </div>
          <div className="flex items-center gap-1 border border-gray-200 h-7 px-1 bg-white">
            <span className="text-[12px] text-gray-500 whitespace-nowrap">装箱单号</span>
            <input type="text" className="outline-none text-[12px] w-28" />
          </div>
          <div className="flex items-center gap-1 border border-gray-200 h-7 px-1 bg-white">
            <span className="text-[12px] text-gray-500 whitespace-nowrap">Fnsku</span>
            <input type="text" className="outline-none text-[12px] w-28" />
          </div>
          <div className="flex items-center gap-1 border border-gray-200 h-7 px-1 bg-white">
            <span className="text-[12px] text-gray-500 whitespace-nowrap">货架</span>
            <input type="text" className="outline-none text-[12px] w-24" />
          </div>
          <div className="flex items-center gap-1 border border-gray-200 h-7 px-1 bg-white">
            <span className="text-[12px] text-gray-500 whitespace-nowrap">客户名称</span>
            <input type="text" className="outline-none text-[12px] w-44" />
          </div>
          
          <div className="flex items-center gap-1">
             <div className="flex items-center border border-gray-200 rounded-sm px-2 h-7 bg-white">
                <input type="text" value="2024-04-11" className="w-20 outline-none text-[12px]" readOnly />
                <Calendar size={12} className="text-gray-400 cursor-pointer" />
             </div>
             <span className="text-gray-400">-</span>
             <div className="flex items-center border border-gray-200 rounded-sm px-2 h-7 bg-white">
                <input type="text" value="2026-05-11" className="w-20 outline-none text-[12px]" readOnly />
                <Calendar size={12} className="text-gray-400 cursor-pointer" />
             </div>
          </div>

          <select className="border border-gray-200 h-7 text-[12px] outline-none px-1 bg-white">
             <option>订单类型</option>
          </select>
          <select className="border border-gray-200 h-7 text-[12px] outline-none px-1 bg-white">
             <option>目的仓库</option>
          </select>
          <select className="border border-gray-200 h-7 text-[12px] outline-none px-1 bg-white">
             <option>查看全部</option>
          </select>
          <select className="border border-gray-200 h-7 text-[12px] outline-none px-1 bg-white">
             <option>全部库龄</option>
          </select>

          <button className="bg-[#00a2e8] hover:bg-blue-600 text-white px-8 h-7 text-[12px] rounded-sm transition-colors">查询</button>
          <button className="bg-[#00a2e8] hover:bg-blue-600 text-white px-6 h-7 text-[12px] rounded-sm transition-colors">导出Excel</button>
        </div>
      </div>

      {/* Main Table Content */}
      <div className="bg-white m-2 border border-gray-200 rounded-sm overflow-hidden">
        <div className="overflow-auto">
          <table className="w-full border-collapse text-[12px] text-left border-b border-gray-200">
            <thead className="bg-[#f5f7fa] text-gray-600 font-medium">
              <tr className="hover:bg-gray-50 transition-colors">
                <th className="px-3 border-r border-gray-200 w-12 py-2"><input type="checkbox" className="mr-1" />序号</th>
                <th className="px-3 border-r border-gray-200 py-2">客户名称</th>
                <th className="px-3 border-r border-gray-200 py-2">参考单号</th>
                <th className="px-3 border-r border-gray-200 py-2">装箱单号</th>
                <th className="px-3 border-r border-gray-200 py-2">Fnsku</th>
                <th className="px-3 border-r border-gray-200 py-2">预报数量</th>
                <th className="px-3 border-r border-gray-200 py-2">入库数量</th>
                <th className="px-3 border-r border-gray-200 py-2">出库数量</th>
                <th className="px-3 border-r border-gray-200 py-2">剩余库存</th>
                <th className="px-3 border-r border-gray-200 py-2">货架</th>
                <th className="px-3 border-r border-gray-200 py-2">货架区域</th>
                <th className="px-3 border-r border-gray-200 py-2">仓库名称</th>
                <th className="px-3 border-r border-gray-200 py-2">添加时间</th>
                <th className="px-3 border-r border-gray-200 py-2">入库时间</th>
                <th className="px-3 border-r border-gray-200 py-2">库龄(天)</th>
                <th className="px-3 py-2 border-r border-gray-200">头程类型</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 border-b border-gray-200">
              {HISTORY_DATA.map((item, i) => (
                <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-3 border-r border-gray-200 py-2"><input type="checkbox" className="mr-1" />{i + 1}</td>
                  <td className="px-3 border-r border-gray-200 py-2">
                    <span className="text-gray-700">{item.customer}</span>
                    <span className="text-red-500 font-bold ml-1">({item.code})</span>
                  </td>
                  <td className="px-3 border-r border-gray-200 py-2">{item.refNo}</td>
                  <td className="px-3 border-r border-gray-200 py-2">{item.boxNo}</td>
                  <td className="px-3 border-r border-gray-200 py-2">{item.fnsku}</td>
                  <td className="px-3 border-r border-gray-200 py-2">{item.forecast}</td>
                  <td className="px-3 border-r border-gray-200 py-2">{item.inbound}</td>
                  <td className="px-3 border-r border-gray-200 py-2">{item.outbound}</td>
                  <td className="px-3 border-r border-gray-200 text-red-500 font-bold py-2">{item.remaining}</td>
                  <td className="px-3 border-r border-gray-200 italic text-gray-400 py-2">{item.shelf}</td>
                  <td className="px-3 border-r border-gray-200 italic text-gray-400 py-2">{item.area}</td>
                  <td className="px-3 border-r border-gray-200 py-2">{item.warehouse}</td>
                  <td className="px-3 border-r border-gray-200 text-gray-500 py-2">
                    <div className="flex flex-col text-center">
                       <span>{item.addTime.split(' ')[0]}</span>
                       <span className="text-[10px]">{item.addTime.split(' ')[1]}</span>
                    </div>
                  </td>
                  <td className="px-3 border-r border-gray-200 text-gray-500 py-2">
                    <div className="flex flex-col text-center">
                       <span>{item.entryTime.split(' ')[0]}</span>
                       <span className="text-[10px]">{item.entryTime.split(' ')[1]}</span>
                    </div>
                  </td>
                  <td className="px-3 border-r border-gray-200 py-2">{item.age}</td>
                  <td className="px-3 py-2 border-r border-gray-200">{item.type}</td>
                </tr>
              ))}
              {/* Total Row */}
              <tr className="hover:bg-gray-50 transition-colors">
                <td colSpan={5} className="text-right pr-4 border-r border-gray-200 px-3 py-2">合计</td>
                <td className="px-3 border-r border-gray-200 py-2">833</td>
                <td className="px-3 border-r border-gray-200 py-2">833</td>
                <td className="px-3 border-r border-gray-200 py-2">7</td>
                <td className="px-3 border-r border-gray-200 py-2">826</td>
                <td className="px-3 py-2 border-r border-gray-200" colSpan={7}></td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Footer info */}
        <div className="p-2 border-t border-gray-200 flex items-center justify-end bg-white">
          <div className="flex items-center gap-4 text-[11px] text-gray-600">
            <span>总计 21 个记录分为 3 页当前第 1 页，每页</span>
            <select className="border border-gray-300 rounded-sm px-1 h-6 outline-none bg-white">
              <option>10</option>
              <option>100</option>
            </select>
            <div className="flex items-center gap-1 ml-4 border-l pl-4 font-normal whitespace-nowrap">
               <button className="px-2 h-6 hover:text-blue-500 border-none bg-transparent cursor-pointer">第一页</button>
               <button className="px-2 h-6 hover:text-blue-500 border-none bg-transparent cursor-pointer">上一页</button>
               <button className="px-2 h-6 hover:text-blue-500 border-none bg-transparent cursor-pointer">下一页</button>
               <button className="px-2 h-6 hover:text-blue-500 border-none bg-transparent cursor-pointer transition-colors">最末页</button>
               <select className="border border-gray-300 rounded-sm px-1 h-6 text-[11px] ml-2 outline-none bg-white">
                  <option>1</option>
               </select>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-8 text-center text-[11px] text-gray-400 pb-10">
         <p>共执行 12 个查询，用时 0.034504 秒，Gzip 已禁用，内存占用 8.827 MB</p>
      </div>
    </div>
  );
}

function MaterialAdd() {
  return (
    <div className="p-8 bg-white h-full overflow-hidden font-sans text-[12px]">
      <div className="flex items-center gap-2 mb-12">
        <div className="w-1 h-5 bg-[#00a2e8]"></div>
        <h2 className="text-[14px] font-bold text-[#00a2e8]">添加物料</h2>
      </div>

      <div className="max-w-2xl mx-auto space-y-5 pt-4">
        <div className="flex items-center">
          <label className="w-32 text-right pr-4 text-gray-700">
             <span className="text-red-500 mr-0.5">*</span>物料编号
          </label>
          <div className="flex-1 flex gap-2">
            <input 
              type="text" 
              placeholder="物料编号" 
              className="flex-1 border border-gray-200 h-9 px-3 outline-none focus:border-[#00a2e8] rounded-sm placeholder:text-gray-300"
            />
            <button className="bg-[#f5222d] hover:bg-red-600 text-white px-4 h-9 rounded-sm transition-colors text-[13px]">生成</button>
          </div>
        </div>

        <div className="flex items-center">
          <label className="w-32 text-right pr-4 text-gray-700">
             <span className="text-red-500 mr-0.5">*</span>物料名称
          </label>
          <input 
            type="text" 
            placeholder="物料名称" 
            className="flex-1 border border-gray-200 h-9 px-3 outline-none focus:border-[#00a2e8] rounded-sm placeholder:text-gray-300"
          />
        </div>

        <div className="flex items-center">
          <label className="w-32 text-right pr-4 text-gray-700">
             <span className="text-red-500 mr-0.5">*</span>物料英文名称
          </label>
          <input 
            type="text" 
            placeholder="物料英文名称" 
            className="flex-1 border border-gray-200 h-9 px-3 outline-none focus:border-[#00a2e8] rounded-sm placeholder:text-gray-300"
          />
        </div>

        <div className="flex items-center">
          <label className="w-32 text-right pr-4 text-gray-700">
             仓库名称
          </label>
          <div className="flex-1 flex items-center relative">
            <select className="flex-1 border border-gray-200 h-9 px-3 outline-none bg-white focus:border-[#00a2e8] rounded-sm text-gray-400">
              <option>请选择仓库</option>
            </select>
            <span className="text-red-500 absolute -right-3 font-bold">*</span>
          </div>
        </div>

        <div className="flex items-center">
          <label className="w-32 text-right pr-4 text-gray-700">
             <span className="text-red-500 mr-0.5">*</span>物料货值
          </label>
          <input 
            type="text" 
            placeholder="物料货值" 
            className="flex-1 border border-gray-200 h-9 px-3 outline-none focus:border-[#00a2e8] rounded-sm placeholder:text-gray-300"
          />
        </div>

        <div className="flex items-center">
          <label className="w-32 text-right pr-4 text-gray-700">
             状态
          </label>
          <select className="flex-1 border border-gray-200 h-9 px-3 outline-none bg-white focus:border-[#00a2e8] rounded-sm">
            <option>启用</option>
            <option>禁用</option>
          </select>
        </div>

        <div className="pt-16 flex justify-center translate-x-20">
          <button className="bg-[#00a2e8] hover:bg-[#0091d1] text-white w-32 h-9 rounded-sm transition-colors text-sm font-medium">提交</button>
        </div>
      </div>
    </div>
  );
}


function MaterialList() {
  const MATERIAL_DATA = [
    { id: '1', no: 'WL10004', name: '测试物料', enName: 'ceshiwuliao', warehouse: '星卓越泰国国仓', price: '100.00', inventory: 100, total: '10000', status: '启用', time: '2025-12-02 00:14:32' },
  ];

  return (
    <div className="bg-[#f0f2f5] h-full overflow-hidden font-sans text-gray-700">
      <div className="bg-[#efefef] p-2 border-b border-gray-200">
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex items-center border border-gray-200 h-7 bg-white">
            <span className="px-2 text-[12px] text-gray-500 bg-gray-50 h-full flex items-center border-r border-gray-200">物料编号</span>
            <input type="text" placeholder="物料编号" className="outline-none text-[12px] w-28 px-2" />
          </div>
          <div className="flex items-center border border-gray-200 h-7 bg-white">
            <span className="px-2 text-[12px] text-gray-500 bg-gray-50 h-full flex items-center border-r border-gray-200">关键词</span>
            <input type="text" placeholder="关键词" className="outline-none text-[12px] w-36 px-2" />
          </div>
          
          <select className="border border-gray-200 h-7 text-[12px] outline-none px-2 bg-white">
             <option>全部仓库</option>
          </select>
          
          <div className="flex items-center gap-1">
             <div className="flex items-center border border-gray-200 rounded-sm px-2 h-7 bg-white">
                <input type="text" className="w-20 outline-none text-[12px]" />
                <Calendar size={12} className="text-gray-400 cursor-pointer" />
             </div>
             <div className="flex items-center border border-gray-200 rounded-sm px-2 h-7 bg-white">
                <input type="text" className="w-20 outline-none text-[12px]" />
                <Calendar size={12} className="text-gray-400 cursor-pointer" />
             </div>
          </div>

          <button className="bg-[#00a2e8] hover:bg-blue-600 text-white px-8 h-7 text-[12px] rounded-sm transition-colors">查询</button>
        </div>
      </div>

      <div className="bg-white m-2 border border-gray-200 rounded-sm overflow-hidden">
        <div className="overflow-auto">
          <table className="w-full border-collapse text-[12px] text-left border-b border-gray-200">
            <thead className="bg-[#f5f7fa] text-gray-600 font-medium">
              <tr>
                <th className="px-3 border-r border-gray-200 w-12 py-2"><input type="checkbox" className="mr-1" />序号</th>
                <th className="px-3 border-r border-gray-200 py-2">物料编号</th>
                <th className="px-3 border-r border-gray-200 py-2">物料名称</th>
                <th className="px-3 border-r border-gray-200 py-2">物料英文名称</th>
                <th className="px-3 border-r border-gray-200 py-2">仓库名称</th>
                <th className="px-3 border-r border-gray-200 py-2">物料价值</th>
                <th className="px-3 border-r border-gray-200 py-2">库存</th>
                <th className="px-3 border-r border-gray-200 py-2">总价值</th>
                <th className="px-3 border-r border-gray-200 py-2">状态</th>
                <th className="px-3 border-r border-gray-200 py-2">添加时间</th>
                <th className="px-3 py-2 border-r border-gray-200">操作</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 border-b border-gray-200">
              {MATERIAL_DATA.map((item, i) => (
                <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-3 border-r border-gray-200 py-2"><input type="checkbox" className="mr-1" />{i + 1}</td>
                  <td className="px-3 border-r border-gray-200 py-2">{item.no}</td>
                  <td className="px-3 border-r border-gray-200 py-2">{item.name}</td>
                  <td className="px-3 border-r border-gray-200 py-2">{item.enName}</td>
                  <td className="px-3 border-r border-gray-200 py-2">{item.warehouse}</td>
                  <td className="px-3 border-r border-gray-200 py-2">{item.price}</td>
                  <td className="px-3 border-r border-gray-200 py-2">{item.inventory}</td>
                  <td className="px-3 border-r border-gray-200 py-2">{item.total}</td>
                  <td className="px-3 border-r border-gray-200 py-2">{item.status}</td>
                  <td className="px-3 border-r border-gray-200 text-gray-500 font-normal italic-none py-2">
                    <div className="flex flex-col text-center">
                       <span>{item.time.split(' ')[0]}</span>
                       <span className="text-[10px]">{item.time.split(' ')[1]}</span>
                    </div>
                  </td>
                  <td className="px-3 py-2 border-r border-gray-200">
                    <div className="flex items-center justify-center gap-1 text-blue-400 scale-90">
                      <button className="hover:underline">[物料入库]</button>
                      <button className="hover:underline">[物料出库]</button>
                      <button className="hover:underline">[编辑]</button>
                      <button className="hover:underline text-red-500">[删除]</button>
                    </div>
                  </td>
                </tr>
              ))}
              <tr className="hover:bg-gray-50 transition-colors">
                <td colSpan={5} className="text-right pr-4 border-r border-gray-200 italic-normal px-3 py-2">合计</td>
                <td className="px-3 border-r border-gray-200 py-2"></td>
                <td className="px-3 border-r border-gray-200 py-2">100</td>
                <td className="px-3 border-r border-gray-200 py-2">10000</td>
                <td className="px-3 py-2 border-r border-gray-200" colSpan={3}></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="p-2 border-t border-gray-200 flex items-center justify-end bg-white">
          <div className="flex items-center gap-4 text-[11px] text-gray-600">
            <span>总计 1 个记录分为 1 页当前第 1 页，每页</span>
            <select className="border border-gray-300 rounded-sm px-1 h-6 outline-none bg-white">
              <option>10</option>
            </select>
            <div className="flex items-center gap-1 ml-4 border-l pl-4 font-normal whitespace-nowrap">
               <button className="px-2 h-6 hover:text-blue-500 border-none bg-transparent cursor-pointer">第一页</button>
               <button className="px-2 h-6 hover:text-blue-500 border-none bg-transparent cursor-pointer">上一页</button>
               <button className="px-2 h-6 hover:text-blue-500 border-none bg-transparent cursor-pointer">下一页</button>
               <button className="px-2 h-6 hover:text-blue-500 border-none bg-transparent cursor-pointer transition-colors">最末页</button>
               <select className="border border-gray-300 rounded-sm px-1 h-6 text-[11px] ml-2 outline-none bg-white font-normal">
                  <option>1</option>
               </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PendingOffShelf() {
  const OFF_SHELF_DATA = [
    { id: '1', customer: 'qin', code: '12014', sku: 'D12014KLW93', name: '猫粮10好', warehouse: '星卓越泰国国仓', qty: 10, actualQty: 0, fee: '0.00', status: '待下架', time: '2026-05-10 10:20:15' },
    { id: '2', customer: 'yueyang07', code: '12021', sku: 'D12021T8BFJ', name: '短袖', warehouse: '星卓越泰国国仓', qty: 5, actualQty: 0, fee: '0.00', status: '待下架', time: '2026-05-11 09:15:30' },
    { id: '3', customer: 'jinyi', code: '12013', sku: 'D12013PO23X', name: '测试商品', warehouse: '星卓越泰国国仓', qty: 2, actualQty: 0, fee: '0.00', status: '待下架', time: '2026-05-11 08:45:00' },
  ];

  return (
    <div className="bg-[#f0f2f5] h-full overflow-hidden font-sans text-gray-700">
      <div className="bg-white p-2 border-b border-gray-200 flex flex-wrap items-center gap-2">
        <div className="flex items-center gap-1 border border-gray-200 h-7 px-1">
          <span className="text-[12px] text-gray-500 whitespace-nowrap">客户名称</span>
          <input type="text" placeholder="请输入客户名称" className="outline-none text-[12px] w-32 px-1" />
        </div>
        <div className="flex items-center gap-1 border border-gray-200 h-7 px-1">
          <span className="text-[12px] text-gray-500 whitespace-nowrap">Fnsku</span>
          <input type="text" placeholder="Fnsku" className="outline-none text-[12px] w-32 px-1" />
        </div>
        <select className="border border-gray-200 h-7 text-[12px] outline-none px-1 bg-white">
           <option>全部仓库</option>
        </select>
        <button className="bg-[#00a2e8] hover:bg-blue-600 text-white px-5 h-7 text-[12px] rounded-sm transition-colors">查询</button>
      </div>

      <div className="bg-white m-2 border border-gray-200 rounded-sm overflow-hidden">
        <div className="overflow-auto">
          <table className="w-full border-collapse text-[12px] text-left border-b border-gray-200">
            <thead className="bg-[#f5f7fa] text-gray-600 font-medium">
              <tr className="hover:bg-gray-50 transition-colors">
                <th className="px-3 border-r border-gray-200 w-12 py-2"><input type="checkbox" className="mr-1" />序号</th>
                <th className="px-3 border-r border-gray-200 min-w-[120px] py-2">客户名称</th>
                <th className="px-3 border-r border-gray-200 min-w-[100px] py-2">sku</th>
                <th className="px-3 border-r border-gray-200 min-w-[150px] py-2">产品名称</th>
                <th className="px-3 border-r border-gray-200 min-w-[120px] py-2">仓库名称</th>
                <th className="px-3 border-r border-gray-200 min-w-[80px] py-2">下架数量</th>
                <th className="px-3 border-r border-gray-200 min-w-[80px] py-2">实际下架数量</th>
                <th className="px-3 border-r border-gray-200 min-w-[80px] py-2">下架费用</th>
                <th className="px-3 border-r border-gray-200 min-w-[80px] py-2">状态</th>
                <th className="px-3 border-r border-gray-200 min-w-[130px] py-2">添加时间</th>
                <th className="px-3 py-2 border-r border-gray-200">操作</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 border-b border-gray-200">
              {OFF_SHELF_DATA.map((item, i) => (
                <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-3 border-r border-gray-200 py-2"><input type="checkbox" className="mr-1" />{i + 1}</td>
                  <td className="px-3 border-r border-gray-200 py-2">
                    <span>{item.customer}</span>
                    <span className="text-red-500 font-bold ml-1">({item.code})</span>
                  </td>
                  <td className="px-3 border-r border-gray-200 text-blue-500 py-2">{item.sku}</td>
                  <td className="px-3 border-r border-gray-200 py-2">{item.name}</td>
                  <td className="px-3 border-r border-gray-200 py-2">{item.warehouse}</td>
                  <td className="px-3 border-r border-gray-200 font-bold py-2">{item.qty}</td>
                  <td className="px-3 border-r border-gray-200 py-2">{item.actualQty}</td>
                  <td className="px-3 border-r border-gray-200 py-2">{item.fee}</td>
                  <td className="px-3 border-r border-gray-200 py-2">
                    <span className="bg-orange-50 text-orange-500 px-1 rounded-sm border border-orange-100">{item.status}</span>
                  </td>
                  <td className="px-3 border-r border-gray-200 text-gray-500 py-2">
                    <div className="flex flex-col text-center">
                       <span>{item.time.split(' ')[0]}</span>
                       <span className="text-[10px]">{item.time.split(' ')[1]}</span>
                    </div>
                  </td>
                  <td className="px-3 text-blue-500 cursor-pointer py-2 border-r border-gray-200">
                    <div className="flex flex-col scale-90">
                      <button className="hover:underline">[查看详情]</button>
                      <button className="hover:underline">[确认下架]</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-2 border-t border-gray-200 flex items-center justify-end bg-white whitespace-nowrap overflow-hidden">
          <div className="flex items-center gap-4 text-[11px] text-gray-600">
            <span>总计 {OFF_SHELF_DATA.length} 个记录分为 1 页当前第 1 页，每页</span>
            <select className="border border-gray-300 rounded-sm px-1 h-6 outline-none bg-white">
              <option>10</option>
              <option>100</option>
            </select>
            <div className="flex items-center gap-1 ml-4 border-l pl-4 font-normal">
               <button className="px-2 h-6 hover:text-blue-500">第一页</button>
               <button className="px-2 h-6 hover:text-blue-500">上一页</button>
               <button className="px-2 h-6 hover:text-blue-500">下一页</button>
               <button className="px-2 h-6 hover:text-blue-500 transition-colors">最末页</button>
               <select className="border border-gray-300 rounded-sm px-1 h-6 text-[11px] ml-2 outline-none whitespace-nowrap">
                  <option>1</option>
               </select>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-8 text-center text-[11px] text-gray-400 pb-10 italic-normal">
         <p>共执行 5 个查询，用时 {Math.random().toFixed(6)} 秒，Gzip 已禁用，内存占用 8.803 MB</p>
      </div>
    </div>
  );
}

function DoneOffShelf() {
  const DONE_DATA = [
    { id: '1', customer: 'qin', code: '12014', sku: 'D12014KLW93', name: '猫粮10好', warehouse: '星卓越泰国国仓', qty: 10, actualQty: 10, fee: '5.00', status: '已下架', time: '2026-05-10 10:20:15', doneTime: '2026-05-10 15:30:00' },
    { id: '2', customer: 'yueyang07', code: '12021', sku: 'D12021T8BFJ', name: '短袖', warehouse: '星卓越泰国国仓', qty: 5, actualQty: 5, fee: '2.50', status: '已下架', time: '2026-05-09 11:15:30', doneTime: '2026-05-09 14:20:00' },
    { id: '3', customer: 'jinyi', code: '12013', sku: 'D12013PO23X', name: '测试商品', warehouse: '星卓越泰国国仓', qty: 2, actualQty: 2, fee: '1.00', status: '已下架', time: '2026-05-08 09:45:00', doneTime: '2026-05-08 10:30:00' },
    { id: '4', customer: 'chenwei', code: '12000', sku: 'D12000QJXUV', name: '乔丹速干短袖T恤', warehouse: '星卓越泰国国仓', qty: 20, actualQty: 20, fee: '10.00', status: '已下架', time: '2026-05-07 14:00:00', doneTime: '2026-05-07 17:45:00' },
  ];

  return (
    <div className="bg-[#f0f2f5] h-full overflow-hidden font-sans text-gray-700">
      <div className="bg-white p-2 border-b border-gray-200 flex flex-wrap items-center gap-2">
        <div className="flex items-center gap-1 border border-gray-200 h-7 px-1">
          <span className="text-[12px] text-gray-500 whitespace-nowrap">客户名称</span>
          <input type="text" placeholder="请输入客户名称" className="outline-none text-[12px] w-32 px-1" />
        </div>
        <div className="flex items-center gap-1 border border-gray-200 h-7 px-1">
          <span className="text-[12px] text-gray-500 whitespace-nowrap">Fnsku</span>
          <input type="text" placeholder="Fnsku" className="outline-none text-[12px] w-32 px-1" />
        </div>
        <select className="border border-gray-200 h-7 text-[12px] outline-none px-1 bg-white">
           <option>全部仓库</option>
        </select>
        <button className="bg-[#00a2e8] hover:bg-blue-600 text-white px-5 h-7 text-[12px] rounded-sm transition-colors">查询</button>
      </div>

      <div className="bg-white m-2 border border-gray-200 rounded-sm overflow-hidden">
        <div className="overflow-auto">
          <table className="w-full border-collapse text-[12px] text-left border-b border-gray-200">
            <thead className="bg-[#f5f7fa] text-gray-600 font-medium">
              <tr className="hover:bg-gray-50 transition-colors">
                <th className="px-3 border-r border-gray-200 w-12 py-2"><input type="checkbox" className="mr-1" />序号</th>
                <th className="px-3 border-r border-gray-200 min-w-[120px] py-2">客户名称</th>
                <th className="px-3 border-r border-gray-200 min-w-[100px] py-2">sku</th>
                <th className="px-3 border-r border-gray-200 min-w-[150px] py-2">产品名称</th>
                <th className="px-3 border-r border-gray-200 min-w-[120px] py-2">仓库名称</th>
                <th className="px-3 border-r border-gray-200 min-w-[80px] py-2">下架数量</th>
                <th className="px-3 border-r border-gray-200 min-w-[80px] py-2">实际下架数量</th>
                <th className="px-3 border-r border-gray-200 min-w-[80px] py-2">下架费用</th>
                <th className="px-3 border-r border-gray-200 min-w-[80px] py-2">状态</th>
                <th className="px-3 border-r border-gray-200 min-w-[130px] py-2">下架时间</th>
                <th className="px-3 py-2 border-r border-gray-200">操作</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 border-b border-gray-200">
              {DONE_DATA.map((item, i) => (
                <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-3 border-r border-gray-200 font-normal py-2"><input type="checkbox" className="mr-1" />{i + 1}</td>
                  <td className="px-3 border-r border-gray-200 font-normal py-2">
                    <span>{item.customer}</span>
                    <span className="text-red-500 font-bold ml-1">({item.code})</span>
                  </td>
                  <td className="px-3 border-r border-gray-200 text-blue-500 font-normal py-2">{item.sku}</td>
                  <td className="px-3 border-r border-gray-200 font-normal py-2">{item.name}</td>
                  <td className="px-3 border-r border-gray-200 font-normal py-2">{item.warehouse}</td>
                  <td className="px-3 border-r border-gray-200 font-bold font-normal py-2">{item.qty}</td>
                  <td className="px-3 border-r border-gray-200 font-normal py-2">{item.actualQty}</td>
                  <td className="px-3 border-r border-gray-200 font-normal py-2">{item.fee}</td>
                  <td className="px-3 border-r border-gray-200 font-normal py-2">
                    <span className="bg-green-50 text-green-600 px-1 rounded-sm border border-green-100">{item.status}</span>
                  </td>
                  <td className="px-3 border-r border-gray-200 text-gray-500 font-normal whitespace-nowrap py-2">
                    <div className="flex flex-col text-center">
                       <span>{item.doneTime.split(' ')[0]}</span>
                       <span className="text-[10px]">{item.doneTime.split(' ')[1]}</span>
                    </div>
                  </td>
                  <td className="px-3 text-blue-500 cursor-pointer font-normal py-2 border-r border-gray-200">
                    <button className="hover:underline">[详情]</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-2 border-t border-gray-200 flex items-center justify-end bg-white">
          <div className="flex items-center gap-4 text-[11px] text-gray-600">
            <span>总计 {DONE_DATA.length} 个记录分为 1 页当前第 1 页，每页</span>
            <select className="border border-gray-300 rounded-sm px-1 h-6 outline-none bg-white">
              <option>10</option>
            </select>
            <div className="flex items-center gap-1 ml-4 border-l pl-4 font-normal whitespace-nowrap">
               <button className="px-2 h-6 hover:text-blue-500">第一页</button>
               <button className="px-2 h-6 hover:text-blue-500">上一页</button>
               <button className="px-2 h-6 hover:text-blue-500 font-normal">下一页</button>
               <button className="px-2 h-6 hover:text-blue-500 font-normal transition-colors">最末页</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MaterialRecord() {
  const RECORD_DATA = [
    { id: '1', no: 'WL10004', name: '测试物料', enName: '', warehouse: '星卓越泰国国仓', type: '物料入库', change: '+100', remark: '22', time: '2025-12-02 00:14:56' },
  ];

  return (
    <div className="bg-[#f0f2f5] h-full overflow-hidden font-sans text-gray-700">
      <div className="bg-[#efefef] p-2 border-b border-gray-200">
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex items-center border border-gray-200 h-7 bg-white">
            <span className="px-2 text-[12px] text-gray-500 bg-gray-50 h-full flex items-center border-r border-gray-200">物料编号</span>
            <input type="text" placeholder="物料编号" className="outline-none text-[12px] w-28 px-2" />
          </div>
          <div className="flex items-center border border-gray-200 h-7 bg-white">
            <span className="px-2 text-[12px] text-gray-500 bg-gray-50 h-full flex items-center border-r border-gray-200">关键词</span>
            <input type="text" placeholder="关键词" className="outline-none text-[12px] w-36 px-2" />
          </div>
          
          <select className="border border-gray-200 h-7 text-[12px] outline-none px-2 bg-white">
             <option>全部仓库</option>
          </select>
          
          <div className="flex items-center gap-1">
             <div className="flex items-center border border-gray-200 rounded-sm px-2 h-7 bg-white">
                <input type="text" value="2023-02-11" className="w-20 outline-none text-[12px]" readOnly />
                <Calendar size={12} className="text-gray-400 cursor-pointer" />
             </div>
             <div className="flex items-center border border-gray-200 rounded-sm px-2 h-7 bg-white">
                <input type="text" value="2026-05-11" className="w-20 outline-none text-[12px]" readOnly />
                <Calendar size={12} className="text-gray-400 cursor-pointer" />
             </div>
          </div>

          <button className="bg-[#00a2e8] hover:bg-blue-600 text-white px-8 h-7 text-[12px] rounded-sm transition-colors">查询</button>
        </div>
      </div>

      <div className="bg-white m-2 border border-gray-200 rounded-sm overflow-hidden">
        <div className="overflow-auto">
          <table className="w-full border-collapse text-[12px] text-left border-b border-gray-200">
            <thead className="bg-[#f5f7fa] text-gray-600 font-medium">
              <tr>
                <th className="px-3 border-r border-gray-200 w-12 py-2"><input type="checkbox" className="mr-1" />序号</th>
                <th className="px-3 border-r border-gray-200 py-2">物料编号</th>
                <th className="px-3 border-r border-gray-200 py-2">物料名称</th>
                <th className="px-3 border-r border-gray-200 py-2">物料英文名称</th>
                <th className="px-3 border-r border-gray-200 py-2">仓库名称</th>
                <th className="px-3 border-r border-gray-200 py-2">库存变动类型</th>
                <th className="px-3 border-r border-gray-200 py-2">库存变动</th>
                <th className="px-3 border-r border-gray-200 py-2">备注</th>
                <th className="px-3 py-2 border-r border-gray-200">添加时间</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 border-b border-gray-200">
              {RECORD_DATA.map((item, i) => (
                <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-3 border-r border-gray-200 py-2"><input type="checkbox" className="mr-1" />{i + 1}</td>
                  <td className="px-3 border-r border-gray-200 py-2">{item.no}</td>
                  <td className="px-3 border-r border-gray-200 py-2">{item.name}</td>
                  <td className="px-3 border-r border-gray-200 py-2">{item.enName}</td>
                  <td className="px-3 border-r border-gray-200 py-2">{item.warehouse}</td>
                  <td className="px-3 border-r border-gray-200 py-2">{item.type}</td>
                  <td className="px-3 border-r border-gray-200 text-red-500 font-bold py-2">{item.change}</td>
                  <td className="px-3 border-r border-gray-200 py-2">{item.remark}</td>
                  <td className="px-3 py-2 border-r border-gray-200">{item.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}


