import React from 'react';
import { cn } from '../lib/utils';

export type AgentSettlementMode = 'agent-fee-entry' | 'agent-fee-list' | 'agent-pending-bill' | 'agent-write-off-bill' | 'agent-done-bill' | 'agent-shipping-check';

interface AgentSettlementProps {
  mode: AgentSettlementMode;
}

const MOCK_FEE_LIST = Array.from({ length: 15 }).map((_, i) => ({
  id: i + 1,
  agentName: ['FedEx代理', 'UPS代理', 'DHL代理', 'USPS代理'][i % 4],
  whName: ['美西仓', '美东仓', '欧洲仓', '澳洲仓'][i % 4],
  admin: 'fxadmin',
  type: ['操作费', '仓租费', '贴标费', '打包费'][i % 4],
  remark: `5月${['操作费用', '仓租补录', '杂费'][i % 3]}`,
  fee: parseFloat((Math.random() * 2000 + 100).toFixed(2)),
  status: i % 3 === 0 ? '已结算' : '未结算',
  settleTime: i % 3 === 0 ? `2026-05-${10 + i} 00:00:00` : '',
  addTime: `2026-05-${10 + (i % 5)} 10:00:00`
}));

const MOCK_PENDING_BILLS = Array.from({ length: 20 }).map((_, i) => ({
  id: i + 1,
  agentName: ['FedEx代理', 'UPS代理', 'DHL代理', 'USPS代理'][i % 4],
  clientName: `VIP00${(i % 9) + 1}`,
  outNo: `OUT2026051100${i + 1}`,
  refNo: `REF-00${i + 1}`,
  channel: ['FedEx Ground', 'UPS Next Day', 'DHL Express', 'USPS Priority'][i % 4],
  whName: ['美西仓', '美东仓', '欧洲仓', '澳洲仓'][i % 4],
  orderType: ['一件代发', 'FBA转运', '电商小包', 'B2B托盘'][i % 4],
  weight: parseFloat((Math.random() * 20 + 0.5).toFixed(2)),
  freight: parseFloat((Math.random() * 150 + 10).toFixed(2)),
  addTime: `2026-05-${10 + (i % 5)} 10:00:00`
}));

const MOCK_WRITE_OFF_BILLS = Array.from({ length: 12 }).map((_, i) => ({
  id: i + 1,
  agentName: ['FedEx代理', 'UPS代理', 'DHL代理', 'USPS代理'][i % 4],
  billNo: `B2026051010${i}`,
  admin: 'fxadmin',
  whName: ['美西仓', '美东仓', '欧洲仓', '澳洲仓'][i % 4],
  fee: parseFloat((Math.random() * 5000 + 500).toFixed(2)),
  addTime: `2026-05-${10 + (i % 5)} 15:30:00`,
  writeOffTime: ''
}));

const MOCK_DONE_BILLS = Array.from({ length: 15 }).map((_, i) => ({
  id: i + 1,
  agentName: ['FedEx代理', 'UPS代理', 'DHL代理', 'USPS代理'][i % 4],
  billNo: `B2026050510${i}`,
  admin: 'sysadmin',
  whName: ['美西仓', '美东仓', '欧洲仓', '澳洲仓'][i % 4],
  fee: parseFloat((Math.random() * 3000 + 200).toFixed(2)),
  addTime: `2026-05-0${1 + (i % 5)} 10:00:00`,
  writeOffTime: `2026-05-0${5 + (i % 5)} 14:00:00`
}));

const MOCK_SHIPPING_CHECKS = Array.from({ length: 18 }).map((_, i) => ({
  id: i + 1,
  agentName: ['FedEx代理', 'UPS代理', 'DHL代理', 'USPS代理'][i % 4],
  clientName: `VIP00${(i % 9) + 1}`,
  outNo: `OUT2026051100${i + 5}`,
  refNo: `REF-00${i + 5}`,
  channel: ['FedEx Express', 'UPS Ground', 'DHL Express', 'USPS Priority'][i % 4],
  whName: ['美西仓', '美东仓', '欧洲仓', '澳洲仓'][i % 4],
  orderType: ['电商小包', '一件代发', 'FBA转运', 'B2B托盘'][i % 4],
  weight: parseFloat((Math.random() * 10 + 0.5).toFixed(2)),
  freight: parseFloat((Math.random() * 100 + 5).toFixed(2)),
  addTime: `2026-05-${10 + (i % 5)} 11:00:00`
}));

export function AgentSettlement({ mode }: AgentSettlementProps) {
  const getFeeTotals = () => {
    return MOCK_FEE_LIST.reduce((acc, curr) => ({
      fee: acc.fee + curr.fee
    }), { fee: 0 });
  };

  const getPendingTotals = () => {
    return MOCK_PENDING_BILLS.reduce((acc, curr) => ({
      weight: acc.weight + curr.weight,
      freight: acc.freight + curr.freight
    }), { weight: 0, freight: 0 });
  };

  const getShippingTotals = () => {
    return MOCK_SHIPPING_CHECKS.reduce((acc, curr) => ({
      weight: acc.weight + curr.weight,
      freight: acc.freight + curr.freight
    }), { weight: 0, freight: 0 });
  };

  const getWriteOffTotals = () => {
    return MOCK_WRITE_OFF_BILLS.reduce((acc, curr) => ({
      fee: acc.fee + curr.fee
    }), { fee: 0 });
  };

  const getDoneTotals = () => {
    return MOCK_DONE_BILLS.reduce((acc, curr) => ({
      fee: acc.fee + curr.fee
    }), { fee: 0 });
  };

  const feeTotals = getFeeTotals();
  const pendingTotals = getPendingTotals();
  const shippingTotals = getShippingTotals();
  const writeOffTotals = getWriteOffTotals();
  const doneTotals = getDoneTotals();

  return (
    <div className="bg-[#f0f2f5] h-full overflow-hidden flex flex-col font-sans w-full">
      {mode === 'agent-fee-entry' ? (
        <div className="bg-white rounded-sm border border-gray-200 animate-in fade-in duration-500 mt-2 mx-2 p-6 flex flex-col flex-1 h-full min-h-0">
          <div className="mb-6">
            <h2 className="text-[#1890ff] text-[14px] font-bold border-l-4 border-[#1890ff] pl-2 -ml-6">代理费用录入</h2>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="w-[800px] mt-4 text-[13px] mr-[100px]">
              <div className="flex mb-4 items-center">
                <label className="w-32 text-right pr-4 text-gray-600">代理名称</label>
                <div className="flex-1 flex items-center relative">
                  <select className="border border-gray-300 rounded px-3 h-8 w-full outline-none focus:border-blue-400 appearance-none bg-white">
                    <option>请选择所属代理</option>
                  </select>
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 text-xs">▼</div>
                  <span className="text-red-500 ml-2 font-bold">*</span>
                </div>
              </div>

              <div className="flex mb-4 items-center">
                <label className="w-32 text-right pr-4 text-gray-600">仓库名称</label>
                <div className="flex-1 flex items-center relative">
                  <select className="border border-gray-300 rounded px-3 h-8 w-full outline-none focus:border-blue-400 appearance-none bg-white">
                    <option>请选择仓库</option>
                  </select>
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 text-xs">▼</div>
                  <span className="text-red-500 ml-2 font-bold">*</span>
                </div>
              </div>

              <div className="flex mb-4 items-center">
                <label className="w-32 text-right pr-4 text-gray-600">添加管理员</label>
                <div className="flex-1 flex items-center relative">
                  <select className="border border-gray-300 rounded px-3 h-8 w-full outline-none focus:border-blue-400 appearance-none bg-white">
                    <option>fxadmin</option>
                  </select>
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 text-xs">▼</div>
                  <span className="text-red-500 ml-2 font-bold">*</span>
                </div>
              </div>

              <div className="flex mb-4 items-center">
                <label className="w-32 text-right pr-4 text-gray-600">
                  <span className="text-red-500">*</span>费用类型
                </label>
                <div className="flex-1 flex items-center relative">
                  <select className="border border-gray-300 rounded px-3 h-8 w-full outline-none focus:border-blue-400 appearance-none bg-white">
                    <option>费用类型</option>
                  </select>
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 text-xs">▼</div>
                  <span className="text-red-500 ml-2 font-bold">*</span>
                </div>
              </div>

              <div className="flex mb-4 items-center">
                <label className="w-32 text-right pr-4 text-gray-600">
                  <span className="text-red-500">*</span>费用
                </label>
                <div className="flex-1 flex items-center">
                  <input type="text" placeholder="费用" className="border border-gray-300 rounded px-3 h-8 w-full outline-none focus:border-blue-400" />
                </div>
              </div>

              <div className="flex mb-4 items-start">
                <label className="w-32 text-right pr-4 text-gray-600 pt-1">
                  <span className="text-red-500">*</span>备注
                </label>
                <div className="flex-1 flex items-start">
                  <textarea placeholder="备注" className="border border-gray-300 rounded px-3 py-2 w-full h-24 outline-none focus:border-blue-400 resize-none"></textarea>
                </div>
              </div>

              <div className="flex mb-4 items-center">
                <label className="w-32 text-right pr-4 text-gray-600">
                  <span className="text-red-500">*</span>状态
                </label>
                <div className="flex-1 flex items-center relative">
                  <select className="border border-gray-300 rounded px-3 h-8 w-full outline-none focus:border-blue-400 appearance-none bg-white">
                    <option>未结算</option>
                  </select>
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 text-xs">▼</div>
                </div>
              </div>

              <div className="flex mb-4 items-center">
                <label className="w-32 text-right pr-4 text-gray-600">
                  <span className="text-red-500">*</span>结算时间
                </label>
                <div className="flex-1 flex items-center">
                  <input type="text" className="border border-gray-300 rounded px-3 h-8 w-full outline-none focus:border-blue-400" />
                </div>
              </div>

            </div>
          </div>
          <div className="flex justify-end pr-[20%] mt-8 mb-4">
              <button className="bg-[#1890ff] text-white rounded px-8 py-1.5 focus:outline-none hover:bg-blue-500 transition-colors">保存</button>
            </div>
        </div>
      ) : (
        <div className="bg-white rounded-sm border border-gray-200 animate-in fade-in duration-500 flex-1 flex flex-col mt-2 mx-2 relative min-h-0">
          {/* Header Actions / Filters */}
          <div className="p-3 border-b border-gray-100 flex flex-wrap items-start gap-3 bg-gray-50/50">
            {mode === 'agent-fee-list' && (
              <>
                <div className="flex items-center gap-1">
                  <span className="text-[12px] text-gray-600 bg-gray-50 border border-gray-200 border-r-0 px-2 py-1 h-7 flex items-center whitespace-nowrap">关键词</span>
                  <input type="text" placeholder="关键词" className="border border-gray-300 px-2 h-7 w-40 text-[12px] outline-none focus:border-blue-400" />
                </div>
                
                <div className="flex items-center">
                  <input type="date" defaultValue="2026-04-11" className="border border-gray-300 px-2 h-7 text-[12px] outline-none" />
                  <input type="date" defaultValue="2026-05-11" className="border border-gray-300 px-2 h-7 text-[12px] outline-none border-l-0" />
                </div>

                <button className="bg-[#1890ff] hover:bg-[#1890ff]/90 text-white px-6 h-7 text-[12px] transition-colors rounded-sm ml-2">查询</button>
                <button className="bg-[#1890ff] hover:bg-[#1890ff]/90 text-white px-6 h-7 text-[12px] transition-colors rounded-sm ml-2">导出Excel</button>
              </>
            )}

            {(mode === 'agent-write-off-bill' || mode === 'agent-done-bill') && (
              <>
                <div className="flex items-center gap-1">
                  <span className="text-[12px] text-gray-600 bg-gray-50 border border-gray-200 border-r-0 px-2 py-1 h-7 flex items-center whitespace-nowrap">账单号码</span>
                  <input type="text" placeholder="请输入账单号码" className="border border-gray-300 px-2 h-7 w-40 text-[12px] outline-none focus:border-blue-400" />
                </div>
                
                <select className="border border-gray-300 px-2 h-7 text-[12px] outline-none bg-white min-w-[100px]">
                  <option>添加时间</option>
                </select>

                <div className="flex items-center">
                  <input type="date" defaultValue="2024-04-11" className="border border-gray-300 px-2 h-7 text-[12px] outline-none" />
                  <input type="date" defaultValue="2026-05-11" className="border border-gray-300 px-2 h-7 text-[12px] outline-none border-l-0" />
                </div>
                
                <select className="border border-gray-300 px-2 h-7 text-[12px] outline-none bg-white min-w-[100px]">
                  <option>代理名称</option>
                </select>
                
                <select className="border border-gray-300 px-2 h-7 text-[12px] outline-none bg-white min-w-[100px]">
                  <option>全部仓库</option>
                </select>

                <button className="bg-[#1890ff] hover:bg-[#1890ff]/90 text-white px-6 h-7 text-[12px] transition-colors rounded-sm ml-2">查询</button>
                <button className="bg-[#1890ff] hover:bg-[#1890ff]/90 text-white px-6 h-7 text-[12px] transition-colors rounded-sm ml-2">导出Excel</button>
              </>
            )}

            {(mode === 'agent-pending-bill' || mode === 'agent-shipping-check') && (
              <div className="flex flex-wrap w-full gap-2 items-start">
                <div className="flex items-start gap-1">
                  <span className="text-[12px] text-gray-600 bg-gray-50 border border-gray-200 border-r-0 px-2 h-14 flex items-center whitespace-nowrap">出库单号</span>
                  <textarea placeholder="如有多个请用换行隔开" className="border border-gray-300 p-1 h-14 w-40 text-[12px] resize-none outline-none focus:border-blue-400"></textarea>
                </div>
                <div className="flex items-start gap-1">
                  <span className="text-[12px] text-gray-600 bg-gray-50 border border-gray-200 border-r-0 px-2 h-14 flex items-center whitespace-nowrap">参考单号</span>
                  <textarea placeholder="如有多个请用换行隔开" className="border border-gray-300 p-1 h-14 w-40 text-[12px] resize-none outline-none focus:border-blue-400"></textarea>
                </div>
                
                <div className="flex flex-wrap gap-2 items-center flex-1">
                  <div className="flex items-center gap-1">
                    <span className="text-[12px] text-gray-600 bg-gray-50 border border-gray-200 border-r-0 px-2 py-1 h-7 flex items-center whitespace-nowrap">客户名称</span>
                    <input type="text" placeholder="请输入客户名称" className="border border-gray-300 px-2 h-7 w-32 text-[12px] outline-none focus:border-blue-400" />
                  </div>
                  <select className="border border-gray-300 px-2 h-7 text-[12px] outline-none bg-white min-w-[100px]">
                    <option>代理名称</option>
                  </select>
                  <select className="border border-gray-300 px-2 h-7 text-[12px] outline-none bg-white min-w-[100px]">
                    <option>全部仓库</option>
                  </select>
                  <select className="border border-gray-300 px-2 h-7 text-[12px] outline-none bg-white min-w-[100px]">
                    <option>出货渠道</option>
                  </select>
                  <select className="border border-gray-300 px-2 h-7 text-[12px] outline-none bg-white min-w-[100px]">
                    <option>全部类型</option>
                  </select>
                  
                  <div className="flex items-center">
                    <input type="date" defaultValue="2026-04-11" className="border border-gray-300 px-2 h-7 text-[12px] outline-none" />
                    <input type="date" defaultValue="2026-05-11" className="border border-gray-300 px-2 h-7 text-[12px] outline-none border-l-0" />
                  </div>
                  <button className="bg-[#1890ff] hover:bg-[#1890ff]/90 text-white px-5 h-7 text-[12px] transition-colors rounded-sm shadow-sm ml-2">查询</button>
                  <button className="bg-[#1890ff] hover:bg-[#1890ff]/90 text-white px-5 h-7 text-[12px] transition-colors rounded-sm shadow-sm ml-2">导出Excel</button>
                </div>
              </div>
            )}
          </div>

          {/* Table area */}
          <div className="overflow-auto flex-1 pb-16">
            <table className="w-full border-collapse text-[12px] text-center min-w-max border-b border-gray-200">
              <thead className="bg-[#f5f7fa] text-gray-600 font-medium">
                <tr className="border-b border-gray-200">
                  <th className="px-3 py-3 border-r border-gray-200 w-16">
                    <div className="flex items-center justify-center gap-1">
                      <input type="checkbox" /> {(mode === 'agent-fee-list' || mode === 'agent-write-off-bill' || mode === 'agent-done-bill') && '序号'}
                    </div>
                  </th>
                  
                  {mode === 'agent-fee-list' && (
                    <>
                      <th className="px-3 py-3 border-r border-gray-200">代理名称</th>
                      <th className="px-3 py-3 border-r border-gray-200">仓库名称</th>
                      <th className="px-3 py-3 border-r border-gray-200">添加管理员</th>
                      <th className="px-3 py-3 border-r border-gray-200">费用类型</th>
                      <th className="px-3 py-3 border-r border-gray-200">备注</th>
                      <th className="px-3 py-3 border-r border-gray-200">费用</th>
                      <th className="px-3 py-3 border-r border-gray-200">状态</th>
                      <th className="px-3 py-3 border-r border-gray-200">结算时间</th>
                      <th className="px-3 py-3 border-r border-gray-200">添加时间</th>
                      <th className="px-3 py-3 border-r border-gray-200">操作</th>
                    </>
                  )}

                  {(mode === 'agent-write-off-bill' || mode === 'agent-done-bill') && (
                    <>
                      <th className="px-3 py-3 border-r border-gray-200">代理名称</th>
                      <th className="px-3 py-3 border-r border-gray-200">账单号码</th>
                      <th className="px-3 py-3 border-r border-gray-200">生成管理员</th>
                      <th className="px-3 py-3 border-r border-gray-200">仓库名称</th>
                      <th className="px-3 py-3 border-r border-gray-200 text-red-500">账单金额</th>
                      <th className="px-3 py-3 border-r border-gray-200">添加时间</th>
                      <th className="px-3 py-3 border-r border-gray-200">销账时间</th>
                      <th className="px-3 py-3 border-r border-gray-200">操作</th>
                    </>
                  )}

                  {(mode === 'agent-pending-bill' || mode === 'agent-shipping-check') && (
                    <>
                      <th className="px-3 py-3 border-r border-gray-200">代理名称</th>
                      <th className="px-3 py-3 border-r border-gray-200">客户名称</th>
                      <th className="px-3 py-3 border-r border-gray-200">出库单号</th>
                      <th className="px-3 py-3 border-r border-gray-200">参考单号</th>
                      <th className="px-3 py-3 border-r border-gray-200">出货渠道</th>
                      <th className="px-3 py-3 border-r border-gray-200">仓库名称</th>
                      <th className="px-3 py-3 border-r border-gray-200">订单类型</th>
                      <th className="px-3 py-3 border-r border-gray-200">计费重量(kg)</th>
                      <th className="px-3 py-3 border-r border-gray-200">运费</th>
                      <th className="px-3 py-3 border-r border-gray-200">添加时间</th>
                      <th className="px-3 py-3 border-r border-gray-200">操作</th>
                    </>
                  )}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-gray-700">
                {mode === 'agent-fee-list' && MOCK_FEE_LIST.map((item, index) => (
                  <tr key={item.id} className="hover:bg-[#f5f7fa] transition-colors">
                    <td className="px-3 py-3 border-r border-gray-200">
                      <div className="flex items-center justify-center gap-1">
                        <input type="checkbox" /> {index + 1}
                      </div>
                    </td>
                    <td className="px-3 py-3 border-r border-gray-200">{item.agentName}</td>
                    <td className="px-3 py-3 border-r border-gray-200">{item.whName}</td>
                    <td className="px-3 py-3 border-r border-gray-200">{item.admin}</td>
                    <td className="px-3 py-3 border-r border-gray-200">{item.type}</td>
                    <td className="px-3 py-3 border-r border-gray-200">{item.remark}</td>
                    <td className="px-3 py-3 border-r border-gray-200 text-red-500 font-medium">{item.fee.toFixed(2)}</td>
                    <td className="px-3 py-3 border-r border-gray-200">{item.status}</td>
                    <td className="px-3 py-3 border-r border-gray-200 text-gray-500">{item.settleTime}</td>
                    <td className="px-3 py-3 border-r border-gray-200 text-gray-500">{item.addTime}</td>
                    <td className="px-3 py-3 border-r border-gray-200">
                      <button className="text-blue-500 hover:text-blue-700">查看</button>
                    </td>
                  </tr>
                ))}
                {mode === 'agent-fee-list' && (
                  <tr className="bg-gray-50 font-medium text-red-500 border-b border-gray-200">
                    <td colSpan={6} className="px-3 py-3 text-center border-r border-gray-200 border-l">总计</td>
                    <td className="px-3 py-3 border-r border-gray-200">{feeTotals.fee.toFixed(2)}</td>
                    <td colSpan={4} className="px-3 py-3 border-r border-gray-200"></td>
                  </tr>
                )}

                {mode === 'agent-pending-bill' && MOCK_PENDING_BILLS.map((item, index) => (
                  <tr key={item.id} className="hover:bg-[#f5f7fa] transition-colors">
                    <td className="px-3 py-3 border-r border-gray-200">
                      <div className="flex items-center justify-center gap-1">
                        <input type="checkbox" />
                      </div>
                    </td>
                    <td className="px-3 py-3 border-r border-gray-200">{item.agentName}</td>
                    <td className="px-3 py-3 border-r border-gray-200">{item.clientName}</td>
                    <td className="px-3 py-3 border-r border-gray-200">{item.outNo}</td>
                    <td className="px-3 py-3 border-r border-gray-200">{item.refNo}</td>
                    <td className="px-3 py-3 border-r border-gray-200">{item.channel}</td>
                    <td className="px-3 py-3 border-r border-gray-200">{item.whName}</td>
                    <td className="px-3 py-3 border-r border-gray-200 text-red-500">{item.orderType}</td>
                    <td className="px-3 py-3 border-r border-gray-200">{item.weight.toFixed(2)}</td>
                    <td className="px-3 py-3 border-r border-gray-200">{item.freight.toFixed(2)}</td>
                    <td className="px-3 py-3 border-r border-gray-200 text-gray-500">{item.addTime}</td>
                    <td className="px-3 py-3 border-r border-gray-200">
                      <button className="text-blue-500 hover:text-blue-700">查看</button>
                    </td>
                  </tr>
                ))}
                {mode === 'agent-pending-bill' && (
                  <tr className="bg-gray-50 font-medium text-red-500 border-b border-gray-200">
                    <td colSpan={7} className="px-3 py-3 text-center border-r border-gray-200 border-l">合计</td>
                    <td className="px-3 py-3 border-r border-gray-200"></td>
                    <td className="px-3 py-3 border-r border-gray-200">{pendingTotals.weight.toFixed(2)}</td>
                    <td className="px-3 py-3 border-r border-gray-200">{pendingTotals.freight.toFixed(2)}</td>
                    <td colSpan={2} className="px-3 py-3 border-r border-gray-200"></td>
                  </tr>
                )}

                {mode === 'agent-shipping-check' && MOCK_SHIPPING_CHECKS.map((item, index) => (
                  <tr key={item.id} className="hover:bg-[#f5f7fa] transition-colors">
                    <td className="px-3 py-3 border-r border-gray-200">
                      <div className="flex items-center justify-center gap-1">
                        <input type="checkbox" />
                      </div>
                    </td>
                    <td className="px-3 py-3 border-r border-gray-200">{item.agentName}</td>
                    <td className="px-3 py-3 border-r border-gray-200">{item.clientName}</td>
                    <td className="px-3 py-3 border-r border-gray-200">{item.outNo}</td>
                    <td className="px-3 py-3 border-r border-gray-200">{item.refNo}</td>
                    <td className="px-3 py-3 border-r border-gray-200">{item.channel}</td>
                    <td className="px-3 py-3 border-r border-gray-200">{item.whName}</td>
                    <td className="px-3 py-3 border-r border-gray-200 text-red-500">{item.orderType}</td>
                    <td className="px-3 py-3 border-r border-gray-200">{item.weight.toFixed(2)}</td>
                    <td className="px-3 py-3 border-r border-gray-200">{item.freight.toFixed(2)}</td>
                    <td className="px-3 py-3 border-r border-gray-200 text-gray-500">{item.addTime}</td>
                    <td className="px-3 py-3 border-r border-gray-200">
                      <button className="text-blue-500 hover:text-blue-700">查看</button>
                    </td>
                  </tr>
                ))}
                {mode === 'agent-shipping-check' && (
                  <tr className="bg-gray-50 font-medium text-red-500 border-b border-gray-200">
                    <td colSpan={7} className="px-3 py-3 text-center border-r border-gray-200 border-l">合计</td>
                    <td className="px-3 py-3 border-r border-gray-200"></td>
                    <td className="px-3 py-3 border-r border-gray-200">{shippingTotals.weight.toFixed(2)}</td>
                    <td className="px-3 py-3 border-r border-gray-200">{shippingTotals.freight.toFixed(2)}</td>
                    <td colSpan={2} className="px-3 py-3 border-r border-gray-200"></td>
                  </tr>
                )}

                {mode === 'agent-write-off-bill' && MOCK_WRITE_OFF_BILLS.map((item, index) => (
                  <tr key={item.id} className="hover:bg-[#f5f7fa] transition-colors">
                    <td className="px-3 py-3 border-r border-gray-200">
                      <div className="flex items-center justify-center gap-1">
                        <input type="checkbox" /> {index + 1}
                      </div>
                    </td>
                    <td className="px-3 py-3 border-r border-gray-200">{item.agentName}</td>
                    <td className="px-3 py-3 border-r border-gray-200">{item.billNo}</td>
                    <td className="px-3 py-3 border-r border-gray-200">{item.admin}</td>
                    <td className="px-3 py-3 border-r border-gray-200">{item.whName}</td>
                    <td className="px-3 py-3 border-r border-gray-200 text-red-500">{item.fee.toFixed(2)}</td>
                    <td className="px-3 py-3 border-r border-gray-200 text-gray-500">{item.addTime}</td>
                    <td className="px-3 py-3 border-r border-gray-200 text-gray-500">{item.writeOffTime}</td>
                    <td className="px-3 py-3 border-r border-gray-200">
                      <button className="text-blue-500 hover:text-blue-700">查看</button>
                    </td>
                  </tr>
                ))}
                {mode === 'agent-write-off-bill' && (
                  <tr className="bg-gray-50 font-medium text-red-500 border-b border-gray-200">
                    <td colSpan={4} className="px-3 py-3 text-center border-r border-gray-200 border-l">合计</td>
                    <td className="px-3 py-3 border-r border-gray-200"></td>
                    <td className="px-3 py-3 border-r border-gray-200">{writeOffTotals.fee.toFixed(2)}</td>
                    <td colSpan={3} className="px-3 py-3 border-r border-gray-200"></td>
                  </tr>
                )}

                {mode === 'agent-done-bill' && MOCK_DONE_BILLS.map((item, index) => (
                  <tr key={item.id} className="hover:bg-[#f5f7fa] transition-colors">
                    <td className="px-3 py-3 border-r border-gray-200">
                      <div className="flex items-center justify-center gap-1">
                        <input type="checkbox" /> {index + 1}
                      </div>
                    </td>
                    <td className="px-3 py-3 border-r border-gray-200">{item.agentName}</td>
                    <td className="px-3 py-3 border-r border-gray-200">{item.billNo}</td>
                    <td className="px-3 py-3 border-r border-gray-200">{item.admin}</td>
                    <td className="px-3 py-3 border-r border-gray-200">{item.whName}</td>
                    <td className="px-3 py-3 border-r border-gray-200 text-red-500">{item.fee.toFixed(2)}</td>
                    <td className="px-3 py-3 border-r border-gray-200 text-gray-500">{item.addTime}</td>
                    <td className="px-3 py-3 border-r border-gray-200 text-gray-500">{item.writeOffTime}</td>
                    <td className="px-3 py-3 border-r border-gray-200">
                      <button className="text-blue-500 hover:text-blue-700">查看</button>
                    </td>
                  </tr>
                ))}
                {mode === 'agent-done-bill' && (
                  <tr className="bg-gray-50 font-medium text-red-500 border-b border-gray-200">
                    <td colSpan={4} className="px-3 py-3 text-center border-r border-gray-200 border-l">合计</td>
                    <td className="px-3 py-3 border-r border-gray-200"></td>
                    <td className="px-3 py-3 border-r border-gray-200">{doneTotals.fee.toFixed(2)}</td>
                    <td colSpan={3} className="px-3 py-3 border-r border-gray-200"></td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Footer info/pagination AND possible generate button */}
          <div className="w-full flex items-center justify-between px-4 py-2 bg-white border-t border-gray-100 absolute bottom-0 left-0 right-0 h-14">
            <div>
              {mode === 'agent-pending-bill' && (
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 h-8 text-[12px] transition-colors rounded-sm shadow-sm">
                  生成账单
                </button>
              )}
            </div>
            
            <div className="flex items-center gap-2 text-[12px] text-gray-600">
              <span>总计 {
            mode === 'agent-fee-list' ? MOCK_FEE_LIST.length :
            mode === 'agent-pending-bill' ? MOCK_PENDING_BILLS.length :
            mode === 'agent-shipping-check' ? MOCK_SHIPPING_CHECKS.length :
            mode === 'agent-write-off-bill' ? MOCK_WRITE_OFF_BILLS.length :
            mode === 'agent-done-bill' ? MOCK_DONE_BILLS.length : 15
          } 个记录分为 1 页当前第 1 页，每页</span>
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
      )}
      
      {mode !== 'agent-fee-entry' && (
        <div className="w-full text-center py-4 text-[11px] text-gray-400 bg-[#f0f2f5]">
          共执行 {mode === 'agent-write-off-bill' || mode === 'agent-done-bill' ? '7' : mode === 'agent-fee-list' ? '6' : '10'} 个查询，用时 {(Math.random() * 0.05).toFixed(6)} 秒，Gzip 已禁用，内存占用 {(7.3 + Math.random() * 0.2).toFixed(3)} MB
        </div>
      )}
    </div>
  );
}
