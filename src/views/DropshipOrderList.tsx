import React, { useState } from 'react';
import { Search, FileSpreadsheet, Package, Truck, CheckCircle2, AlertCircle, Clock } from 'lucide-react';
import { cn } from '../lib/utils';

interface DropshipOrder {
  id: string;
  customerName: string;
  customerCode: string;
  outboundNo: string;
  refNo: string;
  sku: string[];
  qty: number;
  weight: number;
  image?: string;
  shippingMethod: string;
  warehouse: string;
  source: string;
  status: string;
  pushStatus: string;
  printCount: number;
  addedTime: string;
}

const MOCK_DATA: DropshipOrder[] = [
  {
    id: '1',
    customerName: 'yueyang02',
    customerCode: '12016',
    outboundNo: '0.0121',
    refNo: 'FXDF202512013',
    sku: ['D12021T8BFJ'],
    qty: 1,
    weight: 2.00,
    shippingMethod: 'Shopee (API:Shopee)',
    warehouse: '星卓越泰国国仓',
    source: '默认',
    status: '已签收',
    pushStatus: '',
    printCount: 1,
    addedTime: '2025-12-04 13:41:47'
  },
  {
    id: '2',
    customerName: 'qin',
    customerCode: '12014',
    outboundNo: '99999',
    refNo: 'FXDF202512012',
    sku: ['D12014U4YX1'],
    qty: 2,
    weight: 40.00,
    shippingMethod: 'Shopee (API:Shopee)',
    warehouse: '星卓越泰国国仓',
    source: '默认',
    status: '已签收',
    pushStatus: '',
    printCount: 1,
    addedTime: '2025-12-04 01:20:48'
  },
  {
    id: '3',
    customerName: 'qin',
    customerCode: '12014',
    outboundNo: '11111',
    refNo: 'FXDF202512011',
    sku: ['D12014U4YX1', 'D12014TCL0Z'],
    qty: 1,
    weight: 30.00,
    shippingMethod: 'Shopee (API:Shopee)',
    warehouse: '星卓越泰国国仓',
    source: '默认',
    status: '待打包',
    pushStatus: '',
    printCount: 0,
    addedTime: '2025-12-04 01:16:40'
  },
  {
    id: '4',
    customerName: 'qin',
    customerCode: '12014',
    outboundNo: '5555',
    refNo: 'FXDF202512010',
    sku: ['D12000QJXUV'],
    qty: 1,
    weight: 2.00,
    shippingMethod: 'Shopee (API:Shopee)',
    warehouse: '星卓越泰国国仓',
    source: '默认',
    status: '待确认',
    pushStatus: '',
    printCount: 0,
    addedTime: '2025-12-04 01:14:14',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=100&q=80'
  },
  {
    id: '6',
    customerName: 'qin',
    customerCode: '12014',
    outboundNo: '11111',
    refNo: 'FXDF202512008',
    sku: ['D12014U4YX1'],
    qty: 1,
    weight: 20.00,
    shippingMethod: 'Shopee (API:Shopee)',
    warehouse: '星卓越泰国国仓',
    source: '默认',
    status: '待确认',
    pushStatus: '',
    printCount: 0,
    addedTime: '2025-12-04 01:09:33'
  },
  {
    id: '7',
    customerName: 'qin',
    customerCode: '12014',
    outboundNo: '11111',
    refNo: 'FXDF202512007',
    sku: ['D12000QJXUV'],
    qty: 1,
    weight: 2.00,
    shippingMethod: 'Shopee (API:Shopee)',
    warehouse: '星卓越泰国国仓',
    source: '默认',
    status: '待确认',
    pushStatus: '',
    printCount: 0,
    addedTime: '2025-12-04 01:03:42',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=100&q=80'
  },
  {
    id: '5',
    customerName: 'qin',
    customerCode: '12014',
    outboundNo: '123',
    refNo: 'FXDF202512009',
    sku: ['D12000QJXUV'],
    qty: 1,
    weight: 2.00,
    shippingMethod: 'Shopee (API:Shopee)',
    warehouse: '星卓越泰国国仓',
    source: '默认',
    status: '已签收',
    pushStatus: '',
    printCount: 1,
    addedTime: '2025-12-04 01:12:46',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=100&q=80'
  },
  {
    id: '9',
    customerName: 'chenwei',
    customerCode: '12000',
    outboundNo: '794862747283',
    refNo: 'FXDF202504003',
    sku: ['Test01'],
    qty: 1,
    weight: 1.00,
    shippingMethod: 'Shopee (API:Shopee)',
    warehouse: '星卓越泰国国仓',
    source: '默认',
    status: '待打包',
    pushStatus: '',
    printCount: 5,
    addedTime: '2025-04-02 14:51:16'
  },
  {
    id: '10',
    customerName: 'chenwei',
    customerCode: '12000',
    outboundNo: '356780',
    refNo: 'FXDF202504001',
    sku: ['Test01'],
    qty: 1,
    weight: 1.00,
    shippingMethod: 'Shopee (API:Shopee)',
    warehouse: '星卓越泰国国仓',
    source: '默认',
    status: '待打包',
    pushStatus: '',
    printCount: 0,
    addedTime: '2025-04-02 14:07:03'
  },
  {
    id: '11',
    customerName: 'yueyang02',
    customerCode: '12016',
    outboundNo: '0.0121',
    refNo: 'FXDF202512013',
    sku: ['D12021T8BFJ'],
    qty: 1,
    weight: 2.00,
    shippingMethod: 'Shopee (API:Shopee)',
    warehouse: '星卓越泰国国仓',
    source: '默认',
    status: '缺货中',
    pushStatus: '',
    printCount: 0,
    addedTime: '2025-12-04 13:41:47'
  },
  {
    id: '12',
    customerName: 'qin',
    customerCode: '12014',
    outboundNo: '99999',
    refNo: 'FXDF202512012',
    sku: ['D12014U4YX1'],
    qty: 2,
    weight: 40.00,
    shippingMethod: 'Shopee (API:Shopee)',
    warehouse: '星卓越泰国国仓',
    source: '默认',
    status: '缺货中',
    pushStatus: '',
    printCount: 0,
    addedTime: '2025-12-04 01:20:48'
  },
  {
    id: '13',
    customerName: 'chenwei',
    customerCode: '12000',
    outboundNo: '794862747283',
    refNo: 'FXDF202504003',
    sku: ['Test01'],
    qty: 1,
    weight: 1.00,
    shippingMethod: 'Shopee (API:Shopee)',
    warehouse: '星卓越泰国国仓',
    source: '默认',
    status: '缺货中',
    pushStatus: '',
    printCount: 0,
    addedTime: '2025-04-02 14:51:16'
  },
  {
    id: '14',
    customerName: 'yueyang02',
    customerCode: '12016',
    outboundNo: '0.0121',
    refNo: 'FXDF202512015',
    sku: ['D12021T8BFJ'],
    qty: 1,
    weight: 2.00,
    shippingMethod: 'Shopee (API:Shopee)',
    warehouse: '星卓越泰国国仓',
    source: '默认',
    status: '待发货',
    pushStatus: '',
    printCount: 0,
    addedTime: '2025-12-05 10:41:47'
  },
  {
    id: '15',
    customerName: 'qin',
    customerCode: '12014',
    outboundNo: '99999',
    refNo: 'FXDF202512016',
    sku: ['D12014U4YX1'],
    qty: 2,
    weight: 40.00,
    shippingMethod: 'Shopee (API:Shopee)',
    warehouse: '星卓越泰国国仓',
    source: '默认',
    status: '待发货',
    pushStatus: '',
    printCount: 0,
    addedTime: '2025-12-05 11:20:48'
  },
  {
    id: '16',
    customerName: 'yueyang02',
    customerCode: '12016',
    outboundNo: '121212',
    refNo: 'FXDF202512017',
    sku: ['D12021T8BFJ'],
    qty: 1,
    weight: 2.00,
    shippingMethod: 'Shopee (API:Shopee)',
    warehouse: '星卓越泰国国仓',
    source: '默认',
    status: '待签收',
    pushStatus: '',
    printCount: 0,
    addedTime: '2025-12-06 10:41:47'
  },
  {
    id: '17',
    customerName: 'qin',
    customerCode: '12014',
    outboundNo: '88888',
    refNo: 'FXDF202512018',
    sku: ['D12014U4YX1'],
    qty: 1,
    weight: 20.00,
    shippingMethod: 'Shopee (API:Shopee)',
    warehouse: '星卓越泰国国仓',
    source: '默认',
    status: '待签收',
    pushStatus: '',
    printCount: 0,
    addedTime: '2025-12-06 11:20:48'
  },
  {
    id: '18',
    customerName: 'chenwei',
    customerCode: '12000',
    outboundNo: '77777',
    refNo: 'FXDF202512019',
    sku: ['Test01'],
    qty: 1,
    weight: 1.00,
    shippingMethod: 'Shopee (API:Shopee)',
    warehouse: '星卓越泰国国仓',
    source: '默认',
    status: '已删除',
    pushStatus: '',
    printCount: 0,
    addedTime: '2025-12-07 14:51:16'
  },
  {
    id: '19',
    customerName: 'yueyang02',
    customerCode: '12016',
    outboundNo: '66666',
    refNo: 'FXDF202512020',
    sku: ['D12021T8BFJ'],
    qty: 1,
    weight: 2.00,
    shippingMethod: 'Shopee (API:Shopee)',
    warehouse: '星卓越泰国国仓',
    source: '默认',
    status: '已签收',
    pushStatus: '',
    printCount: 2,
    addedTime: '2025-12-07 13:41:47'
  }
];

interface DropshipOrderListProps {
  mode: 'ds-all' | 'ds-pending' | 'ds-pack' | 'ds-oos' | 'ds-ship' | 'ds-waiting' | 'ds-signed' | 'ds-deleted';
}

export function DropshipOrderList({ mode }: DropshipOrderListProps) {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case '待确认': return 'text-red-500';
      case '待打包': return 'text-red-500';
      case '缺货中': return 'text-red-500';
      case '待发货': return 'text-red-500';
      case '待签收': return 'text-red-500';
      case '已签收': return 'text-red-500';
      default: return 'text-gray-500';
    }
  };

  const filteredData = MOCK_DATA.filter(order => {
    if (mode === 'ds-all') return true;
    if (mode === 'ds-pending') return order.status === '待确认';
    if (mode === 'ds-pack') return order.status === '待打包';
    if (mode === 'ds-oos') return order.status === '缺货中';
    if (mode === 'ds-ship') return order.status === '待发货';
    if (mode === 'ds-waiting') return order.status === '待签收';
    if (mode === 'ds-signed') return order.status === '已签收';
    if (mode === 'ds-deleted') return order.status === '已删除';
    return true;
  });

  return (
    <div className="bg-white rounded-sm border border-gray-200 animate-in fade-in duration-500 w-full min-h-screen">
      {/* Search Bar */}
      <div className="p-2 border-b border-gray-100 flex flex-wrap items-center gap-2 bg-white overflow-x-hidden text-[12px]">
        <div className="flex items-center gap-1">
          <select className="border border-gray-300 rounded-sm px-1 h-7 outline-none">
            <option>参考单号</option>
          </select>
          <textarea className="border border-gray-300 rounded-sm px-1 py-0.5 h-7 w-24 outline-none resize-none overflow-hidden leading-tight text-[11px]" placeholder="如有多个请用换行隔开" />
        </div>
        <div className="flex items-center gap-1 border border-gray-300 rounded-sm px-1 h-7">
          <input type="text" className="w-20 outline-none" placeholder="出库单号" />
        </div>
        <div className="flex items-center gap-1 border border-gray-300 rounded-sm px-1 h-7">
          <input type="text" className="w-20 outline-none" placeholder="客户名称" />
        </div>
        <div className="flex items-center gap-1 border border-gray-300 rounded-sm px-1 h-7">
          <input type="text" className="w-20 outline-none" placeholder="Fnsku" />
        </div>
        <div className="flex items-center gap-1 border border-gray-300 rounded-sm px-1 h-7">
          <input type="text" className="w-16 outline-none" placeholder="店铺ID" />
        </div>
        <div className="flex items-center gap-1">
           <span className="text-gray-500 whitespace-nowrap">添加时间</span>
           <input type="date" className="border border-gray-300 rounded-sm px-1 h-7 text-[12px] outline-none" defaultValue="2022-04-11" />
           <span className="text-gray-400">-</span>
           <input type="date" className="border border-gray-300 rounded-sm px-1 h-7 text-[12px] outline-none" defaultValue="2026-05-11" />
        </div>
        
        <select className="border border-gray-300 rounded-sm px-1 h-7 outline-none"><option>全部销售</option></select>
        <select className="border border-gray-300 rounded-sm px-1 h-7 outline-none"><option>全部客服</option></select>
        <select className="border border-gray-300 rounded-sm px-1 h-7 outline-none"><option>全部仓库</option></select>
        <select className="border border-gray-300 rounded-sm px-1 h-7 outline-none"><option>全部快递</option></select>
        <select className="border border-gray-300 rounded-sm px-1 h-7 outline-none"><option>全部渠道</option></select>
        <select className="border border-gray-300 rounded-sm px-1 h-7 outline-none"><option>全部订单来源</option></select>
        <select className="border border-gray-300 rounded-sm px-1 h-7 outline-none"><option>打包条件</option></select>
        <select className="border border-gray-300 rounded-sm px-1 h-7 outline-none"><option>海外仓库</option></select>
        <select className="border border-gray-300 rounded-sm px-1 h-7 outline-none"><option>海外仓快递</option></select>

        <button className="bg-[#00a2e8] hover:bg-blue-600 text-white px-4 py-1 rounded-sm text-[12px] flex items-center gap-1 transition-colors ml-auto shadow-sm">
          查询
        </button>
        <button className="bg-[#00a2e8] hover:bg-blue-600 text-white px-4 py-1 rounded-sm text-[12px] flex items-center gap-1 transition-colors shadow-sm font-bold">
          导出订单
        </button>
      </div>

      {/* Summary Bar for ds-pack and ds-oos */}
      {(mode === 'ds-pack' || mode === 'ds-oos') && (
        <div className="px-4 py-2 bg-gray-50 border-b border-gray-200 flex items-center justify-between text-[12px]">
          <div className="flex items-center gap-1 text-gray-700">
            <span>当前订单总数为:<span className="text-red-500 font-bold">{filteredData.length}</span>个, 单件订单:<span className="text-red-500 font-bold">{filteredData.filter(d => d.qty === 1).length}</span>个,多件订单<span className="text-red-500 font-bold">{filteredData.filter(d => d.qty > 1).length}</span>个,未出跟踪号:<span className="text-red-500 font-bold">0</span>个,已出跟踪号面单异常:<span className="text-red-500 font-bold">1</span>个 , 店铺订单 <span className="text-red-500 font-bold">0</span>个, 待传平台 <span className="text-red-500 font-bold">0</span>个, 已回传平台 <span className="text-red-500 font-bold">0</span>个, 官方面单 <span className="text-red-500 font-bold">0</span>个 (PS:店铺回传统计目前只开放(Tiktok,TEMU,希音))</span>
          </div>
          <div className="flex items-center gap-2">
            <button className="bg-[#17a2b8] text-white px-3 py-1 rounded-sm">检测</button>
            <button className="bg-[#17a2b8] text-white px-3 py-1 rounded-sm">检测异常PDF</button>
            <button className="bg-[#17a2b8] text-white px-3 py-1 rounded-sm">导出回传模板</button>
            <button className="bg-[#17a2b8] text-white px-3 py-1 rounded-sm">导入出货单号</button>
          </div>
        </div>
      )}

      {/* Table Section */}
      <div className="overflow-x-auto overflow-y-auto max-h-[calc(100vh-250px)] custom-scrollbar">
        <table className="w-full border-collapse text-[12px] text-left">
          <thead className="bg-[#f5f7fa] text-gray-600 font-medium">
            <tr className="border-b border-gray-200">
              <th className="px-1 py-2 border-r border-gray-200 w-10 px-3"><input type="checkbox" /> 序号</th>
              <th className="px-3 py-2 border-r border-gray-200">客户名称</th>
              <th className="px-3 py-2 border-r border-gray-200">出库单号</th>
              <th className="px-3 py-2 border-r border-gray-200">参考单号</th>
              <th className="px-3 py-2 border-r border-gray-200">SKU</th>
              <th className="px-3 py-2 border-r border-gray-200">数量</th>
              <th className="px-3 py-2 border-r border-gray-200">重量(kg)</th>
              <th className="px-3 py-2 border-r border-gray-200">图片</th>
              <th className="px-3 py-2 border-r border-gray-200">运输方式</th>
              <th className="px-3 py-2 border-r border-gray-200">发货仓库</th>
              <th className="px-3 py-2 border-r border-gray-200">订单来源</th>
              <th className="px-3 py-2 border-r border-gray-200">状态</th>
              <th className="px-3 py-2 border-r border-gray-200">推送状态</th>
              <th className="px-3 py-2 border-r border-gray-200">打印次数</th>
              <th className="px-3 py-2 border-r border-gray-200">添加时间</th>
              <th className="px-3 py-2 border-r border-gray-200">操作</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((order, index) => (
              <tr key={order.id} className="border-b border-gray-100 hover:bg-[#fffdf2] transition-colors leading-tight">
                <td className="px-1 py-1 border-r border-gray-200 px-3 py-2">
                  <div className="flex items-center gap-1 justify-center whitespace-nowrap">
                    <input type="checkbox" /> {index + 1}
                  </div>
                </td>
                <td className="px-3 py-1 border-r border-gray-200 py-2">
                   <div className="text-gray-600">{order.customerName}</div>
                   <div className="text-red-500 text-[11px]">({order.customerCode})</div>
                </td>
                <td className="px-3 py-1 border-r border-gray-200 text-gray-600 py-2">{order.outboundNo}</td>
                <td className="px-3 py-1 border-r border-gray-200 text-gray-600 py-2">{order.refNo}</td>
                <td className="px-3 py-1 border-r border-gray-200 text-gray-600 py-2">
                  {order.sku.map((sku, i) => <div key={i}>{sku}</div>)}
                </td>
                <td className="px-3 py-1 border-r border-gray-200 text-gray-600 py-2">{order.qty}</td>
                <td className="px-3 py-1 border-r border-gray-200 text-gray-600 py-2">{order.weight.toFixed(2)}</td>
                <td className="px-1 py-1 border-r border-gray-200 px-3 py-2">
                   <div className="w-10 h-10 border border-gray-200 mx-auto bg-gray-50 flex items-center justify-center text-[10px] text-gray-300 italic">
                      {order.image ? <img src={order.image} className="w-full h-full object-cover" /> : "暂无图片"}
                   </div>
                </td>
                <td className="px-3 py-1 border-r border-gray-200 text-gray-600 py-2">
                   {order.shippingMethod}
                </td>
                <td className="px-3 py-1 border-r border-gray-200 text-gray-600 py-2">
                   {order.warehouse}
                </td>
                <td className="px-3 py-1 border-r border-gray-200 text-gray-600 py-2">
                   {order.source}
                </td>
                <td className="px-3 py-1 border-r border-gray-200 font-bold py-2">
                   <span className={getStatusColor(order.status)}>{order.status}</span>
                </td>
                <td className="px-3 py-1 border-r border-gray-200 text-gray-600 py-2">
                   {order.pushStatus || '-'}
                </td>
                <td className="px-3 py-1 border-r border-gray-200 text-gray-600 py-2">
                   {order.printCount}
                </td>
                <td className="px-3 py-1 border-r border-gray-200 text-gray-600 text-[11px] w-24 py-2">
                   {order.addedTime}
                </td>
                <td className="px-3 py-1 py-2 border-r border-gray-200">
                   <div className="flex flex-wrap items-center justify-center gap-x-1 text-blue-500 text-[11px]">
                      {mode === 'ds-pack' && <button className="hover:underline text-[#00a2e8] font-bold">[获取单号]</button>}
                      <button className="hover:underline">[面单]</button>
                      {order.status === '待确认' && <button className="hover:underline">[确定]</button>}
                      <button className="hover:underline">[详情]</button>
                      <button className="hover:underline">[轨迹]</button>
                      <button className="hover:underline">[导出]</button>
                      {(order.status === '待打包' || order.status === '待确认') && <button className="hover:underline">[编辑]</button>}
                   </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Bottom Actions Section */}
      <div className="p-2 border-t border-gray-200 bg-white">
        {mode === 'ds-pending' ? (
          <div className="flex items-center gap-2">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 rounded-sm text-[12px]">
              确认订单
            </button>
            <select className="border border-gray-300 rounded-sm px-2 py-1 text-[12px] h-7 outline-none bg-white">
              <option>请选择操作</option>
              <option>批量修改</option>
            </select>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-1 rounded-sm text-[12px]">
              提交
            </button>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 rounded-sm text-[12px]">
              添加物料
            </button>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 rounded-sm text-[12px]">
              删除
            </button>
          </div>
        ) : mode === 'ds-pack' ? (
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-1">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-2 py-1 rounded-sm text-[12px]">添加物料</button>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-2 py-1 rounded-sm text-[12px]">打印发货清单</button>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-2 py-1 rounded-sm text-[12px]">打印发货清单(无条码)</button>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-2 py-1 rounded-sm text-[12px]">打印面单+发货</button>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-2 py-1 rounded-sm text-[12px]">批量打印面单</button>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-2 py-1 rounded-sm text-[12px]">批量获取单号</button>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-2 py-1 rounded-sm text-[12px]">回传跟踪号</button>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-2 py-1 rounded-sm text-[12px]">删除</button>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-2 py-1 rounded-sm text-[12px]">清除出库单号</button>
              <select className="border border-gray-300 rounded-sm px-1 h-7 text-[12px]"><option>默认PDF</option></select>
              <select className="border border-gray-300 rounded-sm px-1 h-7 text-[12px]"><option>默认SKU水印</option></select>
            </div>
            <div className="flex items-center gap-1">
              <div className="border border-gray-300 rounded-sm px-1 h-7 flex items-center text-[12px]">按参考单号</div>
              <button className="bg-[#00a2e8] text-white px-3 py-1 rounded-sm text-[12px]">导出面单</button>
              <select className="border border-gray-300 rounded-sm px-1 h-7 text-[12px]"><option>请选择海外仓</option></select>
              <button className="bg-[#00a2e8] text-white px-3 py-1 rounded-sm text-[12px]">推送海外仓</button>
              <button className="bg-[#00a2e8] text-white px-3 py-1 rounded-sm text-[12px]">推送星卓越WMS</button>
              <button className="bg-[#00a2e8] text-white px-3 py-1 rounded-sm text-[12px]">回退待确认</button>
            </div>
          </div>
        ) : mode === 'ds-oos' ? (
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-1">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-2 py-1 rounded-sm text-[12px]">添加物料</button>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-2 py-1 rounded-sm text-[12px]">批量获取单号</button>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-2 py-1 rounded-sm text-[12px]">批量更新库存</button>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-2 py-1 rounded-sm text-[12px]">回传跟踪号</button>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-2 py-1 rounded-sm text-[12px]">删除</button>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-2 py-1 rounded-sm text-[12px]">清除出库单号</button>
            </div>
            <div className="flex items-center gap-1">
              <div className="border border-gray-300 rounded-sm px-1 h-7 flex items-center text-[12px]">按参考单号</div>
              <button className="bg-[#00a2e8] text-white px-3 py-1 rounded-sm text-[12px]">导出面单</button>
              <select className="border border-gray-300 rounded-sm px-1 h-7 text-[12px]"><option>请选择海外仓</option></select>
              <button className="bg-[#00a2e8] text-white px-3 py-1 rounded-sm text-[12px]">推送海外仓</button>
              <button className="bg-[#00a2e8] text-white px-3 py-1 rounded-sm text-[12px]">推送星卓越WMS</button>
              <button className="bg-[#00a2e8] text-white px-3 py-1 rounded-sm text-[12px]">回退待确认</button>
            </div>
          </div>
        ) : mode === 'ds-ship' ? (
          <div className="flex items-center gap-2">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 rounded-sm text-[12px]">
              回传跟踪号
            </button>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 rounded-sm text-[12px]">
              确认发货
            </button>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 rounded-sm text-[12px]">
              打印清单总表
            </button>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 rounded-sm text-[12px]">
              批量回退
            </button>
            <select className="border border-gray-300 rounded-sm px-2 py-1 text-[12px] h-7 outline-none bg-white min-w-[120px]">
              <option>请选择海外仓</option>
            </select>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 rounded-sm text-[12px]">
              同步海外仓发货
            </button>
          </div>
        ) : mode === 'ds-waiting' ? (
          <div className="flex items-center gap-2">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 rounded-sm text-[12px]">
              签收
            </button>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 rounded-sm text-[12px]">
              回传跟踪号
            </button>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 rounded-sm text-[12px]">
              批量回退
            </button>
          </div>
        ) : mode === 'ds-signed' ? (
          null
        ) : mode === 'ds-deleted' ? (
          <div className="flex items-center gap-2">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 rounded-sm text-[12px]">
              修改单号
            </button>
          </div>
        ) : (
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 rounded-sm text-[12px]">
            删除
          </button>
        )}
      </div>

      {/* Pagination Footer */}
      <div className="p-3 bg-white flex flex-wrap items-center justify-end border-t border-gray-200 fixed bottom-0 right-0 left-0 lg:left-64 z-20 shadow-sm border border-gray-300">
        <div className="flex items-center gap-4 text-[12px] text-gray-500">
          <span>总计 {filteredData.length} 个记录分为 1 页当前第 1 页，每页</span>
          <select className="border border-gray-300 rounded-sm px-1 h-6 outline-none focus:border-blue-400 text-[11px]">
            <option>100</option>
            <option>200</option>
          </select>
          <div className="flex items-center gap-1 ml-4 border-l pl-4 font-normal">
             <button className="px-2 h-6 hover:bg-gray-50 transition-colors">第一页</button>
             <button className="px-2 h-6 bg-gray-100 cursor-not-allowed text-gray-300">上一页</button>
             <button className="px-2 h-6 bg-gray-100 cursor-not-allowed text-gray-300">下一页</button>
             <button className="px-2 h-6 hover:bg-gray-50 transition-colors">最末页</button>
             <select className="border border-gray-300 rounded-sm px-1 h-6 outline-none text-[11px] ml-2">
                <option>1</option>
             </select>
          </div>
        </div>
      </div>
      <div className="p-8 text-center text-gray-400 text-[11px]">
        共执行 12 个查询，用时 0.040247 秒，Gzip 已禁用，内存占用 9.471 MB
      </div>
    </div>
  );

}
