import React from 'react';
import { cn } from '../lib/utils';

export type CompanySettlementMode = 'corp-daily-flow' | 'corp-monthly-flow' | 'corp-wh-flow' | 'corp-agent-flow' | 'corp-cust-balance';

interface CompanySettlementProps {
  mode: CompanySettlementMode;
}

const MOCK_FLOW = Array.from({ length: 8 }).map((_, i) => ({
  id: String(i + 1),
  date: `2026-05-${String(11 - i).padStart(2, '0')}`,
  month: i === 7 ? '2025-11' : i === 6 ? '2025-12' : `2026-0${7 - i}`,
  warehouse: '星卓樾泰泰国仓',
  agent: '测试代理',
  orderCount: i === 6 ? 8 : 0,
  rechargeInc: i === 6 ? 1807462.68 : 0,
  freightInc: 0,
  freightCost: 0,
  whInc: 0,
  whCost: 0,
  miscInc: 0,
  internalCost: 0,
  totalInc: 0,
  totalExp: 0,
  profit: 0
}));

const MOCK_CUST_BALANCE = Array.from({ length: 10 }).map((_, i) => ({
  id: String(i + 1),
  clientName: `yueyang${30 - i}`,
  clientId: `${12045 - i}`,
  sales: '',
  cs: '',
  balance: 0.00,
  creditLimit: 0.00,
  deposit: 0.00,
  pendingFreight: 0,
  pendingMisc: 0,
  srvFee: 0,
  pendingWh: 0,
  availableBal: 0,
  thisMonthRecharge: 0,
  recent3MonthRecharge: 0,
  lastLogin: ''
}));

export function CompanySettlement({ mode }: CompanySettlementProps) {
  return (
    <div className="bg-[#f0f2f5] h-full overflow-hidden flex flex-col font-sans w-full">
      <div className="bg-white rounded-sm border border-gray-200 animate-in fade-in duration-500 flex-1 flex flex-col mt-2 mx-2">
        {/* Search Bar */}
        <div className="p-3 border-b border-gray-100 flex flex-wrap items-center gap-3 bg-gray-50/50">
          {(mode === 'corp-daily-flow' || mode === 'corp-monthly-flow' || mode === 'corp-wh-flow' || mode === 'corp-agent-flow') && (
            <>
              <div className="flex items-center gap-1">
                <span className="text-[12px] text-gray-600 font-medium whitespace-nowrap bg-white px-2 py-1.5 border border-gray-200 border-r-0 h-7 flex items-center">日期</span>
                <div className="flex items-center">
                  <input type={mode === 'corp-monthly-flow' ? 'month' : 'date'} defaultValue={mode === 'corp-monthly-flow' ? "2025-11" : "2026-05-04"} className="border border-gray-300 px-2 h-7 text-[12px] outline-none w-[110px]" />
                  <input type={mode === 'corp-monthly-flow' ? 'month' : 'date'} defaultValue={mode === 'corp-monthly-flow' ? "2026-05" : "2026-05-11"} className="border border-gray-300 px-2 h-7 text-[12px] outline-none border-l-0 w-[110px]" />
                </div>
              </div>

              {(mode === 'corp-daily-flow' || mode === 'corp-monthly-flow') && (
                <input type="text" placeholder="客户编号" className="border border-gray-300 px-2 h-7 w-32 outline-none focus:border-blue-400 text-[12px]" />
              )}

              {mode === 'corp-wh-flow' && (
                <>
                  <select className="border border-gray-300 outline-none text-[12px] px-2 h-7 w-36 bg-white">
                    <option>星卓樾泰泰国仓</option>
                  </select>
                  <select className="border border-gray-300 outline-none text-[12px] px-2 h-7 w-28 bg-white">
                    <option>按日查询</option>
                    <option>按月查询</option>
                  </select>
                </>
              )}

              {mode === 'corp-agent-flow' && (
                <>
                  <select className="border border-gray-300 outline-none text-[12px] px-2 h-7 w-36 bg-white">
                    <option>选择代理</option>
                  </select>
                  <select className="border border-gray-300 outline-none text-[12px] px-2 h-7 w-28 bg-white">
                    <option>按日查询</option>
                    <option>按月查询</option>
                  </select>
                </>
              )}

              <button className="bg-[#1890ff] hover:bg-[#1890ff]/90 text-white px-5 h-7 text-[12px] transition-colors rounded-sm ml-2">查询</button>
              
              <div className="flex items-center gap-2">
                {mode === 'corp-daily-flow' && (
                  <span className="text-[#1890ff] text-[12px]">日收支流水查询不能超过90天</span>
                )}
                <span className="text-red-500 text-[12px]">总收入不包含充值收入</span>
              </div>
            </>
          )}

          {mode === 'corp-cust-balance' && (
            <>
              <div className="flex items-center gap-1">
                <span className="text-[12px] text-gray-600 font-medium whitespace-nowrap bg-white px-2 py-1.5 border border-gray-200 border-r-0 h-7 flex items-center">关键词</span>
                <input type="text" className="border border-gray-300 px-2 h-7 w-32 outline-none focus:border-blue-400 text-[12px]" />
              </div>
              <select className="border border-gray-300 outline-none text-[12px] px-2 h-7 w-28 bg-white">
                <option>选择销售</option>
              </select>
              <select className="border border-gray-300 outline-none text-[12px] px-2 h-7 w-28 bg-white">
                <option>选择客服</option>
              </select>
              <button className="bg-[#1890ff] hover:bg-[#1890ff]/90 text-white px-5 h-7 text-[12px] transition-colors rounded-sm ml-2">查询</button>
            </>
          )}
        </div>

        {/* Table area */}
        <div className="overflow-auto flex-1">
          <table className="w-full border-collapse text-[12px] text-center border-b border-gray-200">
            <thead className="bg-[#f5f7fa] text-gray-600 font-medium">
              <tr className="border-b border-gray-200">
                <th className="px-3 py-3 border-r border-gray-200 w-16">
                  <div className="flex items-center justify-center gap-1 lg:font-normal">
                    <input type="checkbox" /> 序号
                  </div>
                </th>

                {(mode === 'corp-daily-flow' || mode === 'corp-monthly-flow' || mode === 'corp-wh-flow' || mode === 'corp-agent-flow') && (
                  <>
                    <th className="px-3 py-3 border-r border-gray-200">日期</th>
                    {mode === 'corp-wh-flow' && <th className="px-3 py-3 border-r border-gray-200">仓库名称</th>}
                    {mode === 'corp-agent-flow' && <th className="px-3 py-3 border-r border-gray-200">代理名称</th>}
                    <th className="px-3 py-3 border-r border-gray-200">订单数量</th>
                    {mode !== 'corp-wh-flow' && mode !== 'corp-agent-flow' && <th className="px-3 py-3 border-r border-gray-200">充值收入</th>}
                    <th className="px-3 py-3 border-r border-gray-200">运费收入</th>
                    <th className="px-3 py-3 border-r border-gray-200">运费成本</th>
                    <th className="px-3 py-3 border-r border-gray-200">库内费用收入</th>
                    <th className="px-3 py-3 border-r border-gray-200">库内费用成本</th>
                    <th className="px-3 py-3 border-r border-gray-200">杂项收入</th>
                    <th className="px-3 py-3 border-r border-gray-200">内部成本</th>
                    <th className="px-3 py-3 border-r border-gray-200">总收入</th>
                    <th className="px-3 py-3 border-r border-gray-200">总支出</th>
                    <th className="px-3 py-3 border-gray-200 text-red-500">利润</th>
                  </>
                )}

                {mode === 'corp-cust-balance' && (
                  <>
                    <th className="px-3 py-3 border-r border-gray-200">客户名称</th>
                    <th className="px-3 py-3 border-r border-gray-200">跟进销售</th>
                    <th className="px-3 py-3 border-r border-gray-200">跟进客服</th>
                    <th className="px-3 py-3 border-r border-gray-200">账户余额</th>
                    <th className="px-3 py-3 border-r border-gray-200">信用额度</th>
                    <th className="px-3 py-3 border-r border-gray-200">客户押金</th>
                    <th className="px-3 py-3 border-r border-gray-200">待付运费</th>
                    <th className="px-3 py-3 border-r border-gray-200">待付杂项</th>
                    <th className="px-3 py-3 border-r border-gray-200">服务费用</th>
                    <th className="px-3 py-3 border-r border-gray-200">待付仓储费</th>
                    <th className="px-3 py-3 border-r border-gray-200">可用余额</th>
                    <th className="px-3 py-3 border-r border-gray-200">本月充值金额</th>
                    <th className="px-3 py-3 border-r border-gray-200">近3月充值金额</th>
                    <th className="px-3 py-3 border-gray-200">最近登录时间</th>
                  </>
                )}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 border-b border-gray-200">
              {(mode === 'corp-cust-balance' ? MOCK_CUST_BALANCE : MOCK_FLOW).map((item: any, index) => (
                <tr key={item.id} className="hover:bg-[#f5f7fa] transition-colors">
                  <td className="px-3 py-3 border-r border-gray-200">
                    <div className="flex items-center justify-center gap-1">
                      {mode === 'corp-cust-balance' && <input type="checkbox" />}
                      <span>{mode === 'corp-cust-balance' ? index + 1 : 8 - index}</span>
                    </div>
                  </td>
                  
                  {(mode === 'corp-daily-flow' || mode === 'corp-monthly-flow' || mode === 'corp-wh-flow' || mode === 'corp-agent-flow') && (
                    <>
                      <td className="px-3 py-3 border-r border-gray-200">
                        {mode === 'corp-monthly-flow' ? item.month : item.date}
                      </td>
                      {mode === 'corp-wh-flow' && <td className="px-3 py-3 border-r border-gray-200">{item.warehouse}</td>}
                      {mode === 'corp-agent-flow' && <td className="px-3 py-3 border-r border-gray-200">{item.agent}</td>}
                      <td className="px-3 py-3 border-r border-gray-200">{item.orderCount}</td>
                      {mode !== 'corp-wh-flow' && mode !== 'corp-agent-flow' && <td className="px-3 py-3 border-r border-gray-200">{item.rechargeInc || 0}</td>}
                      <td className="px-3 py-3 border-r border-gray-200">{item.freightInc}</td>
                      <td className="px-3 py-3 border-r border-gray-200">{item.freightCost}</td>
                      <td className="px-3 py-3 border-r border-gray-200">{item.whInc}</td>
                      <td className="px-3 py-3 border-r border-gray-200">{item.whCost}</td>
                      <td className="px-3 py-3 border-r border-gray-200">{item.miscInc}</td>
                      <td className="px-3 py-3 border-r border-gray-200">{item.internalCost}</td>
                      <td className="px-3 py-3 border-r border-gray-200">{item.totalInc}</td>
                      <td className="px-3 py-3 border-r border-gray-200">{item.totalExp}</td>
                      <td className="px-3 py-3 text-red-500">{item.profit}</td>
                    </>
                  )}

                  {mode === 'corp-cust-balance' && (
                    <>
                      <td className="px-3 py-3 border-r border-gray-200">
                        {item.clientName} <span className="text-red-500">({item.clientId})</span>
                      </td>
                      <td className="px-3 py-3 border-r border-gray-200">{item.sales}</td>
                      <td className="px-3 py-3 border-r border-gray-200">{item.cs}</td>
                      <td className="px-3 py-3 border-r border-gray-200">{item.balance?.toFixed(2)}</td>
                      <td className="px-3 py-3 border-r border-gray-200">{item.creditLimit?.toFixed(2)}</td>
                      <td className="px-3 py-3 border-r border-gray-200">{item.deposit?.toFixed(2)}</td>
                      <td className="px-3 py-3 border-r border-gray-200">{item.pendingFreight}</td>
                      <td className="px-3 py-3 border-r border-gray-200">{item.pendingMisc}</td>
                      <td className="px-3 py-3 border-r border-gray-200">{item.srvFee}</td>
                      <td className="px-3 py-3 border-r border-gray-200">{item.pendingWh}</td>
                      <td className="px-3 py-3 border-r border-gray-200">{item.availableBal}</td>
                      <td className="px-3 py-3 border-r border-gray-200">{item.thisMonthRecharge}</td>
                      <td className="px-3 py-3 border-r border-gray-200">{item.recent3MonthRecharge}</td>
                      <td className="px-3 py-3">{item.lastLogin}</td>
                    </>
                  )}
                </tr>
              ))}

              {/* Total Row */}
              <tr className="hover:bg-gray-50 transition-colors">
                {mode === 'corp-cust-balance' ? (
                  <>
                    <td colSpan={4} className="px-3 py-3 text-center border-r border-gray-200 border-l font-normal">合计</td>
                    <td className="px-3 py-3 border-r border-gray-200 font-bold text-red-500">0</td>
                    <td className="px-3 py-3 border-r border-gray-200 font-bold text-red-500">0</td>
                    <td className="px-3 py-3 border-r border-gray-200 font-bold text-red-500">0</td>
                    <td className="px-3 py-3 border-r border-gray-200 font-bold text-red-500">0</td>
                    <td className="px-3 py-3 border-r border-gray-200 font-bold text-red-500">0</td>
                    <td className="px-3 py-3 border-r border-gray-200 font-bold text-red-500">0</td>
                    <td className="px-3 py-3 border-r border-gray-200 font-bold text-red-500">0</td>
                    <td className="px-3 py-3 border-r border-gray-200 font-bold text-red-500">0</td>
                    <td className="px-3 py-3 border-r border-gray-200 font-bold text-red-500">0</td>
                    <td className="px-3 py-3 border-r border-gray-200 font-bold text-red-500">0</td>
                    <td className="px-3 py-3"></td>
                  </>
                ) : (
                  <>
                    <td colSpan={mode === 'corp-wh-flow' || mode === 'corp-agent-flow' ? 3 : 2} className="px-3 py-3 text-center border-r border-gray-200 border-l font-normal">总计</td>
                    <td className="px-3 py-3 border-r border-gray-200">{MOCK_FLOW.reduce((a, b) => a + b.orderCount, 0)}</td>
                    {mode !== 'corp-wh-flow' && mode !== 'corp-agent-flow' && <td className="px-3 py-3 border-r border-gray-200">{MOCK_FLOW.reduce((a, b) => a + b.rechargeInc, 0)}</td>}
                    <td className="px-3 py-3 border-r border-gray-200">0</td>
                    <td className="px-3 py-3 border-r border-gray-200">0</td>
                    <td className="px-3 py-3 border-r border-gray-200">0</td>
                    <td className="px-3 py-3 border-r border-gray-200">0</td>
                    <td className="px-3 py-3 border-r border-gray-200">0</td>
                    <td className="px-3 py-3 border-r border-gray-200">0</td>
                    <td className="px-3 py-3 border-r border-gray-200">0</td>
                    <td className="px-3 py-3 border-r border-gray-200">0</td>
                    <td className="px-3 py-3 text-red-500">0</td>
                  </>
                )}
              </tr>
            </tbody>
          </table>
        </div>

        {/* Footer info/pagination */}
        {mode === 'corp-cust-balance' && (
          <div className="w-full flex items-center justify-end px-4 py-2 bg-white border-t border-gray-100">
            <div className="flex items-center gap-2 text-[12px] text-gray-600">
              <span>总计 36 个记录分为 4 页当前第 1 页，每页</span>
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
        )}
      </div>
      
      <div className="w-full text-center py-4 text-[11px] text-gray-400 bg-[#f0f2f5]">
        共执行 {mode === 'corp-cust-balance' ? '43' : '3'} 个查询，用时 {(Math.random() * 0.05).toFixed(6)} 秒，Gzip 已禁用，内存占用 {(7.2 + Math.random()).toFixed(3)} MB
      </div>
    </div>
  );
}
