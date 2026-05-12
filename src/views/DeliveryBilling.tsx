import React from 'react';
import { Search } from 'lucide-react';
import { cn } from '../lib/utils';

interface DeliveryRecord {
  id: string;
  clientName: string;
  clientId: string;
  refNo?: string;
  outboundNo?: string;
  billNo?: string;
  channel?: string;
  warehouse: string;
  orderType?: string;
  weight?: number;
  shippingFee?: number;
  inboundFee?: number;
  distCommission?: number;
  distAmount?: number;
  storageFee?: number;
  totalAmount?: number;
  totalCost?: number;
  profit?: number;
  paymentStatus?: string;
  status?: string;
  addedTime: string;
  paymentTime?: string;
}

const MOCK_A: DeliveryRecord[] = [
  { id: '1', clientName: 'yueyang02', clientId: '12016', refNo: 'FXDF202512013', outboundNo: '0.0121', channel: 'Shopee', warehouse: '星卓樾泰泰国仓', orderType: '一件代发', weight: 2.00, shippingFee: 0.00, inboundFee: 30.74, totalAmount: 30.74, totalCost: 29.00, profit: 1.74, paymentStatus: '未付款', addedTime: '2025-12-04 13:41:47' },
  { id: '2', clientName: 'qin', clientId: '12014', refNo: 'FXDF202512012', outboundNo: '99999', channel: 'Shopee', warehouse: '星卓樾泰泰国仓', orderType: '一件代发', weight: 40.00, shippingFee: 0.00, inboundFee: 0.00, totalAmount: 0.00, totalCost: 0.00, profit: 0.00, paymentStatus: '未付款', addedTime: '2025-12-04 01:20:48' },
  { id: '3', clientName: 'qin', clientId: '12014', refNo: 'FXDF202512009', outboundNo: '123', channel: 'Shopee', warehouse: '星卓樾泰泰国仓', orderType: '一件代发', weight: 2.00, shippingFee: 0.00, inboundFee: 165.90, totalAmount: 165.90, totalCost: 158.00, profit: 7.90, paymentStatus: '未付款', addedTime: '2025-12-04 01:12:46' },
  { id: '4', clientName: 'chenwei', clientId: '12000', refNo: 'FXDF202503001', outboundNo: 'DYDF202502004', channel: 'Shopee', warehouse: '星卓樾泰泰国仓', orderType: '一件代发', weight: 1.00, shippingFee: 0.00, inboundFee: 0.00, totalAmount: 0.00, totalCost: 0.00, profit: 0.00, paymentStatus: '未付款', addedTime: '2025-03-25 11:10:11' }
];

const MOCK_B: DeliveryRecord[] = [
  { id: '1', clientName: 'qin', clientId: '12014', refNo: 'FXDF202512006', outboundNo: '11111', channel: 'Shopee', warehouse: '星卓樾泰泰国仓', orderType: '一件代发', weight: 20.00, shippingFee: 0.00, inboundFee: 0.00, totalAmount: 0.00, totalCost: 0.00, profit: 0.00, paymentStatus: '未付款', addedTime: '2025-12-03 19:58:10' }
];

const MOCK_C: DeliveryRecord[] = [
  { id: '1', clientName: 'yueyang07', clientId: '12021', warehouse: '星卓樾泰泰国仓', billNo: 'Y10004', refNo: 'FXDF202512013', distCommission: 1.74, distAmount: 29.00, storageFee: 0.00, totalAmount: 29.00, status: '待销账', addedTime: '2025-12-04 13:41:47' },
  { id: '2', clientName: 'fxchenwei', clientId: '12000', warehouse: '星卓樾泰泰国仓', billNo: 'Y10003', refNo: 'FXDF202512010', distCommission: 7.90, distAmount: 158.00, storageFee: 0.00, totalAmount: 158.00, status: '待销账', addedTime: '2025-12-04 01:14:14' },
  { id: '3', clientName: 'fxchenwei', clientId: '12000', warehouse: '星卓樾泰泰国仓', billNo: 'Y10002', refNo: 'FXDF202512009', distCommission: 7.90, distAmount: 158.00, storageFee: 0.00, totalAmount: 158.00, status: '待销账', addedTime: '2025-12-04 01:12:46' },
  { id: '4', clientName: 'fxchenwei', clientId: '12000', warehouse: '星卓樾泰泰国仓', billNo: 'Y10001', refNo: 'FXDF202512007', distCommission: 7.90, distAmount: 158.00, storageFee: 0.00, totalAmount: 158.00, status: '待销账', addedTime: '2025-12-04 01:03:42' }
];

interface DeliveryBillingProps {
  mode: 'del-price-review' | 'del-pending-bill' | 'del-dist-bill';
}

export function DeliveryBilling({ mode }: DeliveryBillingProps) {
  let data: DeliveryRecord[] = [];
  if (mode === 'del-price-review') data = MOCK_A;
  if (mode === 'del-pending-bill') data = MOCK_B;
  if (mode === 'del-dist-bill') data = MOCK_C;

  const isDistBill = mode === 'del-dist-bill';

  return (
    <div className="bg-[#f0f2f5] h-full overflow-hidden flex flex-col font-sans w-full">
      <div className="bg-white rounded-sm border border-gray-200 animate-in fade-in duration-500 flex-1 flex flex-col mt-2 mx-2">
        {/* Search Bar */}
        <div className="p-3 border-b border-gray-100 flex flex-wrap items-center gap-3 bg-gray-50/50">
          {!isDistBill ? (
            <>
              <div className="flex items-center gap-1">
                <span className="text-[12px] text-gray-600 font-medium whitespace-nowrap bg-gray-100 px-3 py-1.5 border border-gray-200 border-r-0 h-7 flex items-center">参考单号</span>
                <textarea 
                  placeholder="如有多个请用换行隔开"
                  className="border border-gray-300 px-2 h-7 w-48 outline-none focus:border-blue-400 text-[12px] resize-none overflow-hidden" 
                  rows={1}
                />
                <span className="text-[12px] text-gray-600 font-medium whitespace-nowrap bg-gray-100 px-3 py-1.5 border border-gray-200 border-r-0 h-7 flex items-center border-l">出库单号</span>
                <textarea 
                  className="border border-gray-300 px-2 h-7 w-32 outline-none focus:border-blue-400 text-[12px] resize-none overflow-hidden" 
                  rows={1}
                />
              </div>
              
              <div className="flex items-center gap-1">
                <span className="text-[12px] text-gray-600 font-medium whitespace-nowrap bg-gray-100 px-3 py-1.5 border border-gray-200 border-r-0 h-7 flex items-center">客户名称</span>
                <input 
                  type="text" 
                  className="border border-gray-300 px-2 h-7 w-20 outline-none focus:border-blue-400 text-[12px]"
                />
              </div>

              <select className="border border-gray-300 outline-none text-[12px] px-2 h-7 w-20 bg-white">
                <option>全部销售</option>
              </select>

              <select className="border border-gray-300 outline-none text-[12px] px-2 h-7 w-20 bg-white">
                <option>全部客服</option>
              </select>

              <select className="border border-gray-300 outline-none text-[12px] px-2 h-7 w-20 bg-white">
                <option>全部仓库</option>
              </select>

              <select className="border border-gray-300 outline-none text-[12px] px-2 h-7 w-20 bg-white">
                <option>出货渠道</option>
              </select>
              
              <select className="border border-gray-300 outline-none text-[12px] px-2 h-7 w-20 bg-white">
                <option>全部类型</option>
              </select>

              <select className="border border-gray-300 outline-none text-[12px] px-2 h-7 w-20 bg-white">
                <option>付款状态</option>
              </select>
              
              <select className="border border-gray-300 outline-none text-[12px] px-2 h-7 w-20 bg-white">
                <option>全部订单</option>
              </select>

              <div className="flex items-center gap-1">
                <select className="border border-gray-300 outline-none text-[12px] px-2 h-7 w-24 bg-gray-100 font-medium">
                  <option>添加时间</option>
                </select>
                <div className="flex items-center">
                  <input type="date" defaultValue="2024-04-11" className="border border-gray-300 px-2 h-7 text-[12px] outline-none" />
                  <input type="date" defaultValue="2026-05-11" className="border border-gray-300 px-2 h-7 text-[12px] outline-none border-l-0" />
                </div>
              </div>

              <select className="border border-gray-300 outline-none text-[12px] px-2 h-7 w-20 bg-white">
                <option>费用搜索</option>
              </select>

              <div className="flex items-center gap-1">
                <button className="bg-[#1890ff] hover:bg-[#1890ff]/90 text-white px-5 h-7 text-[12px] transition-colors rounded-sm">查询</button>
                <button className="bg-[#1890ff] hover:bg-[#1890ff]/90 text-white px-3 h-7 text-[12px] transition-colors rounded-sm">导出Excel</button>
                <button className="bg-[#1890ff] hover:bg-[#1890ff]/90 text-white px-3 h-7 text-[12px] transition-colors rounded-sm">导出复核</button>
                <button className="bg-[#1890ff] hover:bg-[#1890ff]/90 text-white px-3 h-7 text-[12px] transition-colors rounded-sm">查看明细</button>
              </div>
            </>
          ) : (
            <>
              {/* Dist bill filters */}
              <div className="flex items-center gap-1">
                <span className="text-[12px] text-gray-600 font-medium whitespace-nowrap bg-gray-100 px-3 py-1.5 border border-gray-200 border-r-0 h-7 flex items-center">账单编号</span>
                <input type="text" className="border border-gray-300 px-2 h-7 w-32 outline-none focus:border-blue-400 text-[12px]" />
              </div>
              <div className="flex items-center gap-1">
                <span className="text-[12px] text-gray-600 font-medium whitespace-nowrap bg-gray-100 px-3 py-1.5 border border-gray-200 border-r-0 h-7 flex items-center">客户名称</span>
                <input type="text" className="border border-gray-300 px-2 h-7 w-32 outline-none focus:border-blue-400 text-[12px]" />
              </div>
              <div className="flex items-center gap-1">
                <span className="text-[12px] text-gray-600 font-medium whitespace-nowrap bg-gray-100 px-3 py-1.5 border border-gray-200 border-r-0 h-7 flex items-center">参考单号</span>
                <input type="text" className="border border-gray-300 px-2 h-7 w-32 outline-none focus:border-blue-400 text-[12px]" />
              </div>
              <div className="flex items-center gap-1">
                <span className="text-[12px] text-gray-600 font-medium whitespace-nowrap bg-gray-100 px-3 py-1.5 border border-gray-200 border-r-0 h-7 flex items-center">时间</span>
                <div className="flex items-center">
                  <input type="date" defaultValue="2024-04-11" className="border border-gray-300 px-2 h-7 text-[12px] outline-none" />
                  <input type="date" defaultValue="2026-05-11" className="border border-gray-300 px-2 h-7 text-[12px] outline-none border-l-0" />
                </div>
              </div>
              <select className="border border-gray-300 outline-none text-[12px] px-2 h-7 w-24 bg-white">
                <option>全部仓库</option>
              </select>
              <div className="flex items-center gap-1">
                <button className="bg-[#1890ff] hover:bg-[#1890ff]/90 text-white px-5 h-7 text-[12px] transition-colors rounded-sm">查询</button>
                <button className="bg-[#1890ff] hover:bg-[#1890ff]/90 text-white px-3 h-7 text-[12px] transition-colors rounded-sm">导出Excel</button>
              </div>
            </>
          )}

        </div>

        {/* Table area */}
        <div className="overflow-auto flex-1">
          <table className="w-full border-collapse text-[12px] text-center">
            <thead className="bg-[#f5f7fa] text-gray-600 font-medium">
              <tr className="border-b border-gray-200">
                <th className="px-3 py-2 border-r border-gray-200 w-16">
                  <div className="flex items-center justify-center gap-1 lg:font-normal">
                    <input type="checkbox" /> {!isDistBill ? '' : '序号'}
                  </div>
                </th>
                <th className="px-3 py-2 border-r border-gray-200">客户名称</th>
                
                {!isDistBill ? (
                  <>
                    <th className="px-3 py-2 border-r border-gray-200">参考单号</th>
                    <th className="px-3 py-2 border-r border-gray-200">出库单号</th>
                    <th className="px-3 py-2 border-r border-gray-200">出货渠道</th>
                    <th className="px-3 py-2 border-r border-gray-200">仓库名称</th>
                    <th className="px-3 py-2 border-r border-gray-200">订单类型</th>
                    <th className="px-3 py-2 border-r border-gray-200">计费重量(kg)</th>
                    <th className="px-3 py-2 border-r border-gray-200">运费</th>
                    <th className="px-3 py-2 border-r border-gray-200">库内费用</th>
                    <th className="px-3 py-2 border-r border-gray-200">总金额</th>
                    <th className="px-3 py-2 border-r border-gray-200">总成本</th>
                    <th className="px-3 py-2 border-r border-gray-200">利润</th>
                    <th className="px-3 py-2 border-r border-gray-200">付款状态</th>
                    <th className="px-3 py-2 border-r border-gray-200">添加时间</th>
                    <th className="px-3 py-2 border-r border-gray-200">付款时间</th>
                  </>
                ) : (
                  <>
                    <th className="px-3 py-2 border-r border-gray-200">仓库名称</th>
                    <th className="px-3 py-2 border-r border-gray-200">账单编号</th>
                    <th className="px-3 py-2 border-r border-gray-200">参考单号</th>
                    <th className="px-3 py-2 border-r border-gray-200">分销佣金</th>
                    <th className="px-3 py-2 border-r border-gray-200">分销金额</th>
                    <th className="px-3 py-2 border-r border-gray-200">仓储费</th>
                    <th className="px-3 py-2 border-r border-gray-200">总金额</th>
                    <th className="px-3 py-2 border-r border-gray-200">状态</th>
                    <th className="px-3 py-2 border-r border-gray-200">添加时间</th>
                    <th className="px-3 py-2 border-r border-gray-200">付款时间</th>
                  </>
                )}
                <th className="px-3 py-2 border-l border-gray-200 bg-[#f5f7fa]">操作</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 border-b border-gray-200">
              {data.map((item, index) => (
                <tr key={item.id} className="hover:bg-[#f5f7fa] transition-colors">
                  <td className="px-3 py-2 border-r border-gray-200">
                    <div className="flex items-center justify-center gap-1">
                      <input type="checkbox" /> {isDistBill ? index + 1 : item.id}
                    </div>
                  </td>
                  <td className="px-3 py-2 border-r border-gray-200">
                    {item.clientName} <span className="text-red-500">({item.clientId})</span>
                  </td>
                  
                  {!isDistBill ? (
                    <>
                      <td className="px-3 py-2 border-r border-gray-200">{item.refNo}</td>
                      <td className="px-3 py-2 border-r border-gray-200">{item.outboundNo}</td>
                      <td className="px-3 py-2 border-r border-gray-200 text-[#1890ff] hover:underline cursor-pointer">{item.channel}</td>
                      <td className="px-3 py-2 border-r border-gray-200">{item.warehouse}</td>
                      <td className="px-3 py-2 border-r border-gray-200">{item.orderType}</td>
                      <td className="px-3 py-2 border-r border-gray-200">{item.weight?.toFixed(2)}</td>
                      <td className="px-3 py-2 border-r border-gray-200">{item.shippingFee?.toFixed(2)}</td>
                      <td className="px-3 py-2 border-r border-gray-200">{item.inboundFee?.toFixed(2) === '0.00' ? '0' : item.inboundFee?.toFixed(2)}</td>
                      <td className="px-3 py-2 border-r border-gray-200">{item.totalAmount?.toFixed(2)}</td>
                      <td className="px-3 py-2 border-r border-gray-200">{item.totalCost?.toFixed(2)}</td>
                      <td className="px-3 py-2 border-r border-gray-200 text-red-500">{item.profit?.toFixed(2) === '0.00' ? '0' : item.profit?.toFixed(2)}</td>
                      <td className="px-3 py-2 border-r border-gray-200">{item.paymentStatus}</td>
                      <td className="px-3 py-2 border-r border-gray-200 text-gray-500 min-w-[80px]">
                        {item.addedTime && (
                          <div className="flex flex-col">
                            <span>{item.addedTime.split(' ')[0]}</span>
                            <span>{item.addedTime.split(' ')[1]}</span>
                          </div>
                        )}
                      </td>
                      <td className="px-3 py-2 border-r border-gray-200">{item.paymentTime}</td>
                    </>
                  ) : (
                    <>
                      <td className="px-3 py-2 border-r border-gray-200">{item.warehouse}</td>
                      <td className="px-3 py-2 border-r border-gray-200">{item.billNo}</td>
                      <td className="px-3 py-2 border-r border-gray-200">{item.refNo}</td>
                      <td className="px-3 py-2 border-r border-gray-200">{item.distCommission?.toFixed(2)}</td>
                      <td className="px-3 py-2 border-r border-gray-200">{item.distAmount?.toFixed(2)}</td>
                      <td className="px-3 py-2 border-r border-gray-200">{item.storageFee?.toFixed(2)}</td>
                      <td className="px-3 py-2 border-r border-gray-200">{item.totalAmount?.toFixed(2)}</td>
                      <td className="px-3 py-2 border-r border-gray-200">{item.status}</td>
                      <td className="px-3 py-2 border-r border-gray-200 text-gray-500 min-w-[80px]">
                        {item.addedTime && (
                          <div className="flex flex-col">
                            <span>{item.addedTime.split(' ')[0]}</span>
                            <span>{item.addedTime.split(' ')[1]}</span>
                          </div>
                        )}
                      </td>
                      <td className="px-3 py-2 border-r border-gray-200">{item.paymentTime}</td>
                    </>
                  )}
                  
                  <td className="px-3 py-2 border-l border-gray-200">
                    <div className="flex flex-wrap items-center justify-center gap-x-1 gap-y-1 text-[#1890ff] whitespace-nowrap">
                      {mode === 'del-price-review' && (
                        <>
                          <button className="hover:underline">[详情]</button>
                          <button className="hover:underline">[编辑]</button>
                          <button className="hover:underline">[重算]</button>
                        </>
                      )}
                      {mode === 'del-pending-bill' && (
                        <>
                          <button className="hover:underline">[详情]</button>
                          <button className="hover:underline">[退回]</button>
                        </>
                      )}
                      {mode === 'del-dist-bill' && (
                        <>
                          <button className="hover:underline">[查看详情]</button>
                          <button className="hover:underline">[重算]</button>
                        </>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
              
              {data.length > 0 && !isDistBill && (
                <tr className="hover:bg-gray-50 transition-colors text-red-500">
                  <td colSpan={7} className="px-3 py-2 text-center font-bold">合计</td>
                  <td className="px-3 py-2 border-r border-l border-gray-200 text-red-500 font-bold">{data.reduce((a, b) => a + (b.weight || 0), 0)}</td>
                  <td className="px-3 py-2 border-r border-gray-200 font-bold">{data.reduce((a, b) => a + (b.shippingFee || 0), 0)}</td>
                  <td className="px-3 py-2 border-r border-gray-200 font-bold">{data.reduce((a, b) => a + (b.inboundFee || 0), 0).toFixed(2)}</td>
                  <td className="px-3 py-2 border-r border-gray-200 font-bold">{data.reduce((a, b) => a + (b.totalAmount || 0), 0).toFixed(2)}</td>
                  <td className="px-3 py-2 border-r border-gray-200 font-bold">{data.reduce((a, b) => a + (b.totalCost || 0), 0)}</td>
                  <td className="px-3 py-2 border-r border-gray-200 font-bold">{data.reduce((a, b) => a + (b.profit || 0), 0).toFixed(2)}</td>
                  <td colSpan={5} className="px-3 py-2" />
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Footer actions & Pagination */}
        <div className="w-full flex items-center justify-between px-4 py-2 bg-gray-50/50">
          <div className="flex items-center gap-2">
            {mode === 'del-price-review' && (
              <>
                <button className="bg-[#f0ad4e] hover:bg-[#ec971f] text-white px-4 py-1.5 text-[12px] rounded-sm transition-colors">
                  提交单价复核
                </button>
                <button className="bg-[#f0ad4e] hover:bg-[#ec971f] text-white px-4 py-1.5 text-[12px] rounded-sm transition-colors">
                  提交单价复核(按条件)
                </button>
                <button className="bg-[#f0ad4e] hover:bg-[#ec971f] text-white px-4 py-1.5 text-[12px] rounded-sm transition-colors">
                  批量重算
                </button>
                <button className="bg-[#f0ad4e] hover:bg-[#ec971f] text-white px-4 py-1.5 text-[12px] rounded-sm transition-colors">
                  添加物料
                </button>
              </>
            )}
            {mode === 'del-pending-bill' && (
              <>
                <button className="bg-white border border-gray-300 text-gray-700 px-4 py-1.5 text-[12px] rounded-sm hover:bg-gray-50 transition-colors">
                  提交至待结余账单
                </button>
                <button className="bg-[#f0ad4e] hover:bg-[#ec971f] text-white px-4 py-1.5 text-[12px] rounded-sm transition-colors">
                  生成账单
                </button>
                <button className="bg-[#f0ad4e] hover:bg-[#ec971f] text-white px-4 py-1.5 text-[12px] rounded-sm transition-colors">
                  生成账单(按条件)
                </button>
                <button className="bg-[#f0ad4e] hover:bg-[#ec971f] text-white px-4 py-1.5 text-[12px] rounded-sm transition-colors">
                  批量退回
                </button>
              </>
            )}
            {mode === 'del-dist-bill' && (
              <button className="bg-[#f0ad4e] hover:bg-[#ec971f] text-white px-4 py-1.5 text-[12px] rounded-sm transition-colors">
                批量重算
              </button>
            )}
          </div>

          <div className="flex items-center gap-2 text-[12px] text-gray-600">
            <span>总计 {data.length} 个记录</span>
            <span>分为 1 页</span>
            <span>当前第 1 页，每页</span>
            <select className="border border-gray-300 rounded px-1 h-6 outline-none bg-white">
              <option>100</option>
            </select>
            <div className="flex items-center gap-1 ml-2 border-l border-gray-300 pl-3">
              <button className="text-gray-400 hover:text-gray-600">第一页</button>
              <button className="text-gray-400 hover:text-gray-600">上一页</button>
              <button className="text-gray-400 hover:text-gray-600">下一页</button>
              <button className="text-gray-400 hover:text-gray-600">最末页</button>
            </div>
            <select className="border border-gray-300 rounded h-6 outline-none ml-1 bg-white">
              <option>1</option>
            </select>
          </div>
        </div>
      </div>
      
      <div className="w-full text-center py-4 text-[11px] text-gray-400">
        共执行 {isDistBill ? 6 : 10} 个查询，用时 {(isDistBill ? 0.032077 : 0.033133).toFixed(6)} 秒，Gzip 已禁用，内存占用 {isDistBill ? 7.297 : 7.917} MB
      </div>
    </div>
  );
}
