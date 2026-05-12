import React from 'react';
import { Search } from 'lucide-react';
import { cn } from '../lib/utils';

export type ClientSettlementMode = 'cust-uncollected' | 'cust-collected' | 'cust-bill-mgmt' | 'cust-recharge-sum';

interface ClientSettlementProps {
  mode: ClientSettlementMode;
}

const MOCK_UNCOLLECTED = Array.from({ length: 10 }).map((_, i) => ({
  id: String(i + 1),
  clientName: `yueyang${30 - i}`,
  clientId: `${12045 - i}`,
  sales: '',
  cs: '',
  balance: 0.00,
  creditLimit: 0.00,
  deposit: 0.00,
  pendingDev: 0,
  pendingMisc: 0,
  srvFee: 0,
  pendingStorage: 0,
  frozen: 0,
  availableBalance: 0
}));

const MOCK_COLLECTED = Array.from({ length: 10 }).map((_, i) => ({
  id: String(i + 1),
  clientName: `yueyang${30 - i}`,
  clientId: `${12045 - i}`,
  sales: '',
  cs: '',
  devFee: 0,
  storageFee: 0,
  miscInc: 0,
  srvFee: 0,
  totalAmt: 0
}));

const MOCK_BILL_MGMT = [
  { id: '1', clientName: 'jinyi', clientId: '12013', billNo: 'B2025120211441319051', admin: 'fxadmin', type: '入库账单', warehouse: '星卓樾泰泰国仓', addTime: '2025-12-02 11:44:13', payTime: '', devFee: 0.00, devCost: 0.00, inWhFee: 0.00, billAmt: 0.00, billCost: 0.00, profit: 0.00 }
];

const MOCK_RECHARGE = [
  { id: '1', clientName: 'qin', clientId: '12014', sales: '', cs: '', totalAmt: 149253.73, count: 1 },
  { id: '2', clientName: 'yueyang01', clientId: '12015', sales: '', cs: '', totalAmt: 1492537.31, count: 1 },
  { id: '3', clientName: 'yueyang02', clientId: '12016', sales: '', cs: '', totalAmt: 14925.37, count: 1 },
  { id: '4', clientName: 'yueyang07', clientId: '12021', sales: '', cs: '', totalAmt: 149253.73, count: 1 },
  { id: '5', clientName: 'yueyang10', clientId: '12024', sales: '', cs: '', totalAmt: 1492.54, count: 1 },
];

export function ClientSettlement({ mode }: ClientSettlementProps) {
  let data: any[] = [];
  if (mode === 'cust-uncollected') data = MOCK_UNCOLLECTED;
  if (mode === 'cust-collected') data = MOCK_COLLECTED;
  if (mode === 'cust-bill-mgmt') data = MOCK_BILL_MGMT;
  if (mode === 'cust-recharge-sum') data = MOCK_RECHARGE;

  return (
    <div className="bg-[#f0f2f5] h-full overflow-hidden flex flex-col font-sans w-full">
      <div className="bg-white rounded-sm border border-gray-200 animate-in fade-in duration-500 flex-1 flex flex-col mt-2 mx-2">
        {/* Search Bar */}
        <div className="p-3 border-b border-gray-100 flex flex-wrap items-center gap-3 bg-gray-50/50">
          {(mode === 'cust-uncollected' || mode === 'cust-collected' || mode === 'cust-recharge-sum') && (
            <>
              <div className="flex items-center gap-1">
                <span className="text-[12px] text-gray-600 font-medium whitespace-nowrap bg-gray-100 px-3 py-1.5 border border-gray-200 border-r-0 h-7 flex items-center">关键词</span>
                <input type="text" className="border border-gray-300 px-2 h-7 w-32 outline-none focus:border-blue-400 text-[12px]" />
              </div>
              <select className="border border-gray-300 outline-none text-[12px] px-2 h-7 w-24 bg-white">
                <option>选择销售</option>
              </select>
              <select className="border border-gray-300 outline-none text-[12px] px-2 h-7 w-24 bg-white">
                <option>选择客服</option>
              </select>
              
              {(mode === 'cust-collected' || mode === 'cust-recharge-sum') && (
                <div className="flex items-center gap-1">
                  <span className="text-[12px] text-gray-600 font-medium whitespace-nowrap bg-white px-2 py-1.5 h-7 flex items-center">日期</span>
                  <div className="flex items-center">
                    <input type="date" defaultValue={mode === 'cust-recharge-sum' ? "2024-05-01" : "2026-04-11"} className="border border-gray-300 px-2 h-7 text-[12px] outline-none" />
                    <input type="date" defaultValue="2026-05-11" className="border border-gray-300 px-2 h-7 text-[12px] outline-none border-l-0" />
                  </div>
                </div>
              )}

              <button className="bg-[#1890ff] hover:bg-[#1890ff]/90 text-white px-5 h-7 text-[12px] transition-colors rounded-sm ml-2">查询</button>
              
              {mode === 'cust-uncollected' && (
                <div className="flex items-center gap-2">
                  <button className="bg-[#1890ff] hover:bg-[#1890ff]/90 text-white px-4 h-7 text-[12px] transition-colors rounded-sm">更新可用余额</button>
                  <span className="text-red-500 text-[12px]">PS:只针对排序用,更新时间:2025-12-03 20:25:36</span>
                </div>
              )}
              
              {(mode === 'cust-collected' || mode === 'cust-recharge-sum') && (
                <button className="bg-[#1890ff] hover:bg-[#1890ff]/90 text-white px-4 h-7 text-[12px] transition-colors rounded-sm">导出Excel</button>
              )}
            </>
          )}

          {mode === 'cust-bill-mgmt' && (
            <>
              <div className="flex items-center gap-1">
                <span className="text-[12px] text-gray-600 font-medium whitespace-nowrap bg-gray-100 px-3 py-1.5 border border-gray-200 border-r-0 h-7 flex items-center">账单号码</span>
                <input type="text" placeholder="请输入账单号码" className="border border-gray-300 px-2 h-7 w-32 outline-none focus:border-blue-400 text-[12px]" />
              </div>
              <div className="flex items-center gap-1">
                <span className="text-[12px] text-gray-600 font-medium whitespace-nowrap bg-gray-100 px-3 py-1.5 border border-gray-200 border-r-0 h-7 flex items-center">客户名称</span>
                <input type="text" placeholder="请输入客户名称" className="border border-gray-300 px-2 h-7 w-32 outline-none focus:border-blue-400 text-[12px]" />
              </div>
              
              <div className="flex items-center gap-1">
                <select className="border border-gray-300 outline-none text-[12px] px-2 h-7 w-24 bg-white">
                  <option>添加时间</option>
                </select>
                <div className="flex items-center">
                  <input type="date" defaultValue="2024-04-11" className="border border-gray-300 px-2 h-7 text-[12px] outline-none" />
                  <input type="date" defaultValue="2026-05-11" className="border border-gray-300 px-2 h-7 text-[12px] outline-none border-l-0" />
                </div>
              </div>
              
              <select className="border border-gray-300 outline-none text-[12px] px-2 h-7 w-24 bg-white">
                <option>全部销售</option>
              </select>
              <select className="border border-gray-300 outline-none text-[12px] px-2 h-7 w-24 bg-white">
                <option>全部客服</option>
              </select>
              <select className="border border-gray-300 outline-none text-[12px] px-2 h-7 w-24 bg-white">
                <option>全部仓库</option>
              </select>

              <div className="flex items-center gap-1 ml-2">
                <button className="bg-[#1890ff] hover:bg-[#1890ff]/90 text-white px-5 h-7 text-[12px] transition-colors rounded-sm">查询</button>
                <button className="bg-[#1890ff] hover:bg-[#1890ff]/90 text-white px-4 h-7 text-[12px] transition-colors rounded-sm">导出Excel</button>
                <button className="bg-[#1890ff] hover:bg-[#1890ff]/90 text-white px-4 h-7 text-[12px] transition-colors rounded-sm">打印账单</button>
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
                    <input type="checkbox" /> 序号
                  </div>
                </th>
                
                {mode === 'cust-uncollected' && (
                  <>
                    <th className="px-3 py-2 border-r border-gray-200">客户名称</th>
                    <th className="px-3 py-2 border-r border-gray-200">跟进销售</th>
                    <th className="px-3 py-2 border-r border-gray-200">跟进客服</th>
                    <th className="px-3 py-2 border-r border-gray-200">账户余额</th>
                    <th className="px-3 py-2 border-r border-gray-200">信用额度</th>
                    <th className="px-3 py-2 border-r border-gray-200">客户押金</th>
                    <th className="px-3 py-2 border-r border-gray-200">待付运费</th>
                    <th className="px-3 py-2 border-r border-gray-200">待付杂项</th>
                    <th className="px-3 py-2 border-r border-gray-200">服务费用</th>
                    <th className="px-3 py-2 border-r border-gray-200">待付仓储费</th>
                    <th className="px-3 py-2 border-r border-gray-200">冻结金额</th>
                    <th className="px-3 py-2 border-gray-200 text-[#1890ff]">可用余额 <span className="inline-block translate-y-[2px]">❖</span></th>
                  </>
                )}

                {mode === 'cust-collected' && (
                  <>
                    <th className="px-3 py-2 border-r border-gray-200">客户名称</th>
                    <th className="px-3 py-2 border-r border-gray-200">跟进销售</th>
                    <th className="px-3 py-2 border-r border-gray-200">跟进客服</th>
                    <th className="px-3 py-2 border-r border-gray-200">运费</th>
                    <th className="px-3 py-2 border-r border-gray-200">仓储费</th>
                    <th className="px-3 py-2 border-r border-gray-200">杂项收入</th>
                    <th className="px-3 py-2 border-r border-gray-200">服务费用</th>
                    <th className="px-3 py-2 border-gray-200">总金额</th>
                  </>
                )}

                {mode === 'cust-bill-mgmt' && (
                  <>
                    <th className="px-3 py-2 border-r border-gray-200">客户名称</th>
                    <th className="px-3 py-2 border-r border-gray-200">账单号码</th>
                    <th className="px-3 py-2 border-r border-gray-200">生成管理员</th>
                    <th className="px-3 py-2 border-r border-gray-200">账单类型</th>
                    <th className="px-3 py-2 border-r border-gray-200">仓库名称</th>
                    <th className="px-3 py-2 border-r border-gray-200">添加时间</th>
                    <th className="px-3 py-2 border-r border-gray-200">付款时间</th>
                    <th className="px-3 py-2 border-r border-gray-200">运费</th>
                    <th className="px-3 py-2 border-r border-gray-200">运费成本</th>
                    <th className="px-3 py-2 border-r border-gray-200">库内费用</th>
                    <th className="px-3 py-2 border-r border-gray-200">账单金额</th>
                    <th className="px-3 py-2 border-r border-gray-200">账单成本</th>
                    <th className="px-3 py-2 border-r border-gray-200">利润</th>
                    <th className="px-3 py-2 border-l border-gray-200 bg-[#f5f7fa]">操作</th>
                  </>
                )}

                {mode === 'cust-recharge-sum' && (
                  <>
                    <th className="px-3 py-2 border-r border-gray-200">客户名称</th>
                    <th className="px-3 py-2 border-r border-gray-200">跟进销售</th>
                    <th className="px-3 py-2 border-r border-gray-200">跟进客服</th>
                    <th className="px-3 py-2 border-r border-gray-200">总充值金额</th>
                    <th className="px-3 py-2 border-gray-200">充值次数</th>
                  </>
                )}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 border-b border-gray-200">
              {data.map((item, index) => (
                <tr key={item.id} className="hover:bg-[#f5f7fa] transition-colors">
                  <td className="px-3 py-2 border-r border-gray-200">
                    <div className="flex items-center justify-center gap-1">
                      <input type="checkbox" /> {index + 1}
                    </div>
                  </td>
                  
                  {(mode === 'cust-uncollected' || mode === 'cust-collected' || mode === 'cust-recharge-sum') && (
                    <>
                      <td className="px-3 py-2 border-r border-gray-200">
                        {item.clientName} <span className="text-red-500">({item.clientId})</span>
                      </td>
                      <td className="px-3 py-2 border-r border-gray-200">{item.sales}</td>
                      <td className="px-3 py-2 border-r border-gray-200">{item.cs}</td>
                    </>
                  )}

                  {mode === 'cust-uncollected' && (
                    <>
                      <td className="px-3 py-2 border-r border-gray-200">{item.balance?.toFixed(2)}</td>
                      <td className="px-3 py-2 border-r border-gray-200">{item.creditLimit?.toFixed(2)}</td>
                      <td className="px-3 py-2 border-r border-gray-200">{item.deposit?.toFixed(2)}</td>
                      <td className="px-3 py-2 border-r border-gray-200">{item.pendingDev}</td>
                      <td className="px-3 py-2 border-r border-gray-200">{item.pendingMisc}</td>
                      <td className="px-3 py-2 border-r border-gray-200">{item.srvFee}</td>
                      <td className="px-3 py-2 border-r border-gray-200">{item.pendingStorage}</td>
                      <td className="px-3 py-2 border-r border-gray-200">{item.frozen}</td>
                      <td className="px-3 py-2">{item.availableBalance}</td>
                    </>
                  )}

                  {mode === 'cust-collected' && (
                    <>
                      <td className="px-3 py-2 border-r border-gray-200">{item.devFee}</td>
                      <td className="px-3 py-2 border-r border-gray-200">{item.storageFee}</td>
                      <td className="px-3 py-2 border-r border-gray-200">{item.miscInc}</td>
                      <td className="px-3 py-2 border-r border-gray-200">{item.srvFee}</td>
                      <td className="px-3 py-2">{item.totalAmt}</td>
                    </>
                  )}

                  {mode === 'cust-bill-mgmt' && (
                    <>
                      <td className="px-3 py-2 border-r border-gray-200">
                        {item.clientName} <span className="text-red-500">({item.clientId})</span>
                      </td>
                      <td className="px-3 py-2 border-r border-gray-200">{item.billNo}</td>
                      <td className="px-3 py-2 border-r border-gray-200">{item.admin}</td>
                      <td className="px-3 py-2 border-r border-gray-200">{item.type}</td>
                      <td className="px-3 py-2 border-r border-gray-200">{item.warehouse}</td>
                      <td className="px-3 py-2 border-r border-gray-200 text-gray-500 whitespace-nowrap min-w-[80px]">
                        {item.addTime}
                      </td>
                      <td className="px-3 py-2 border-r border-gray-200 text-gray-500">{item.payTime}</td>
                      <td className="px-3 py-2 border-r border-gray-200">{item.devFee?.toFixed(2)}</td>
                      <td className="px-3 py-2 border-r border-gray-200">{item.devCost?.toFixed(2)}</td>
                      <td className="px-3 py-2 border-r border-gray-200">{item.inWhFee}</td>
                      <td className="px-3 py-2 border-r border-gray-200 text-red-500">{item.billAmt?.toFixed(2)}</td>
                      <td className="px-3 py-2 border-r border-gray-200">{item.billCost?.toFixed(2)}</td>
                      <td className="px-3 py-2 border-r border-gray-200">{item.profit}</td>
                      <td className="px-3 py-2 border-l border-gray-200">
                        <div className="flex items-center justify-center gap-1 text-[#1890ff] whitespace-nowrap">
                          <button className="hover:underline">[查看账单]</button>
                        </div>
                      </td>
                    </>
                  )}

                  {mode === 'cust-recharge-sum' && (
                    <>
                      <td className="px-3 py-2 border-r border-gray-200">{item.totalAmt?.toFixed(2)}</td>
                      <td className="px-3 py-2">{item.count}</td>
                    </>
                  )}
                </tr>
              ))}
              
              {data.length > 0 && (
                <tr className="hover:bg-gray-50 transition-colors text-red-500">
                  {mode === 'cust-uncollected' && (
                    <>
                      <td colSpan={4} className="px-3 py-2 text-center border-r border-gray-200 border-l">合计</td>
                      <td className="px-3 py-2 border-r border-gray-200 font-bold" colSpan={1}>{data.reduce((a, b) => a + (b.balance || 0), 0)}</td>
                      <td className="px-3 py-2 border-r border-gray-200 font-bold" colSpan={1}>{data.reduce((a, b) => a + (b.creditLimit || 0), 0)}</td>
                      <td className="px-3 py-2 border-r border-gray-200 font-bold" colSpan={1}>{data.reduce((a, b) => a + (b.deposit || 0), 0)}</td>
                      <td className="px-3 py-2 border-r border-gray-200 font-bold" colSpan={1}>{data.reduce((a, b) => a + (b.pendingDev || 0), 0)}</td>
                      <td className="px-3 py-2 border-r border-gray-200 font-bold" colSpan={1}>{data.reduce((a, b) => a + (b.pendingMisc || 0), 0)}</td>
                      <td className="px-3 py-2 border-r border-gray-200 font-bold" colSpan={1}>{data.reduce((a, b) => a + (b.srvFee || 0), 0)}</td>
                      <td className="px-3 py-2 border-r border-gray-200 font-bold" colSpan={1}>{data.reduce((a, b) => a + (b.pendingStorage || 0), 0)}</td>
                      <td className="px-3 py-2 border-r border-gray-200 font-bold" colSpan={1}>{data.reduce((a, b) => a + (b.frozen || 0), 0)}</td>
                      <td className="px-3 py-2 border-r border-gray-200 font-bold text-center" colSpan={1}>{data.reduce((a, b) => a + (b.availableBalance || 0), 0)}</td>
                    </>
                  )}
                  {mode === 'cust-collected' && (
                    <>
                      <td colSpan={4} className="px-3 py-2 text-center border-r border-gray-200 border-l">合计</td>
                      <td className="px-3 py-2 border-r border-gray-200 font-bold" colSpan={1}>{data.reduce((a, b) => a + (b.devFee || 0), 0)}</td>
                      <td className="px-3 py-2 border-r border-gray-200 font-bold" colSpan={1}>{data.reduce((a, b) => a + (b.storageFee || 0), 0)}</td>
                      <td className="px-3 py-2 border-r border-gray-200 font-bold" colSpan={1}>{data.reduce((a, b) => a + (b.miscInc || 0), 0)}</td>
                      <td className="px-3 py-2 border-r border-gray-200 font-bold" colSpan={1}>{data.reduce((a, b) => a + (b.srvFee || 0), 0)}</td>
                      <td className="px-3 py-2 font-bold text-center" colSpan={1}>{data.reduce((a, b) => a + (b.totalAmt || 0), 0)}</td>
                    </>
                  )}
                  {mode === 'cust-bill-mgmt' && (
                    <>
                      <td colSpan={8} className="px-3 py-2 text-center border-r border-gray-200 border-l font-bold">合计</td>
                      <td className="px-3 py-2 border-r border-gray-200 font-bold" colSpan={1}>{data.reduce((a, b) => a + (b.devFee || 0), 0)}</td>
                      <td className="px-3 py-2 border-r border-gray-200 font-bold" colSpan={1}>{data.reduce((a, b) => a + (b.devCost || 0), 0)}</td>
                      <td className="px-3 py-2 border-r border-gray-200 font-bold" colSpan={1}>{data.reduce((a, b) => a + (b.inWhFee || 0), 0)}</td>
                      <td className="px-3 py-2 border-r border-gray-200 font-bold" colSpan={1}>{data.reduce((a, b) => a + (b.billAmt || 0), 0)}</td>
                      <td className="px-3 py-2 border-r border-gray-200 font-bold" colSpan={1}>{data.reduce((a, b) => a + (b.billCost || 0), 0)}</td>
                      <td className="px-3 py-2 border-r border-gray-200 font-bold" colSpan={1}>{data.reduce((a, b) => a + (b.profit || 0), 0)}</td>
                      <td className="px-3 py-2" colSpan={1}></td>
                    </>
                  )}
                  {mode === 'cust-recharge-sum' && (
                    <>
                      <td colSpan={4} className="px-3 py-2 text-center border-r border-gray-200 border-l font-bold">合计</td>
                      <td className="px-3 py-2 border-r border-gray-200 font-bold" colSpan={1}>{data.reduce((a, b) => a + (b.totalAmt || 0), 0).toFixed(2)}</td>
                      <td className="px-3 py-2 font-bold text-center" colSpan={1}>{data.reduce((a, b) => a + (b.count || 0), 0)}</td>
                    </>
                  )}
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Footer actions & Pagination */}
        <div className="w-full flex items-center justify-between px-4 py-2 bg-gray-50/50">
          <div className="flex items-center gap-2">
            {mode === 'cust-bill-mgmt' && (
              <>
                <button className="bg-[#f0ad4e] hover:bg-[#ec971f] text-white px-4 py-1.5 text-[12px] rounded-sm transition-colors">
                  导出Excel
                </button>
                <button className="bg-[#f0ad4e] hover:bg-[#ec971f] text-white px-4 py-1.5 text-[12px] rounded-sm transition-colors">
                  打印账单
                </button>
                <span className="text-red-500 text-[12px] font-medium ml-2">账单金额红色标识客户账户余额足以支付</span>
              </>
            )}
          </div>

          <div className="flex items-center gap-2 text-[12px] text-gray-600 ml-auto">
            <span>总计 {mode === 'cust-recharge-sum' ? 5 : mode === 'cust-bill-mgmt' ? 1 : 36} 个记录</span>
            <span>分为 {mode === 'cust-recharge-sum' ? 1 : mode === 'cust-bill-mgmt' ? 1 : 4} 页</span>
            <span>当前第 1 页，每页</span>
            <select className="border border-gray-300 rounded px-1 h-6 outline-none bg-white">
              <option>10</option>
              <option>50</option>
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
        共执行 {mode === 'cust-uncollected' ? 17 : mode === 'cust-collected' ? 14 : mode === 'cust-bill-mgmt' ? 8 : 8} 个查询，用时 {0.02 + Math.random() * 0.02} 秒，Gzip 已禁用，内存占用 {(7.2 + Math.random()).toFixed(3)} MB
      </div>
    </div>
  );
}
