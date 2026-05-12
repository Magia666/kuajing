import React from 'react';
import { cn } from '../lib/utils';
import { Search } from 'lucide-react';

export type FinancialReportMode = 'report-sale-detail' | 'report-sale-sum' | 'report-inbound' | 'report-delivery';

interface FinancialReportProps {
  mode: FinancialReportMode;
}

const MOCK_SALE_DETAIL = [
  { id: 1, client: 'VIP001', billNo: 'B202605110001', admin: 'sysadmin', type: '正常', wms: '美西仓', addTime: '2026-05-11 10:00:00', payTime: '2026-05-11 10:05:00', freight: 1250.00, freightCost: 1000.00, whFee: 50.00, amount: 1300.00, cost: 1050.00, profit: 250.00 },
  { id: 2, client: 'VIP002', billNo: 'B202605110002', admin: 'sysadmin', type: '正常', wms: '美东仓', addTime: '2026-05-10 14:20:00', payTime: '2026-05-10 14:30:00', freight: 850.00, freightCost: 700.00, whFee: 30.00, amount: 880.00, cost: 730.00, profit: 150.00 },
];

const MOCK_SALE_SUM = [
  { id: 1, client: 'VIP001', wms: '美西仓', freight: 12500.00, whFee: 500.00, amount: 13000.00, count: 10 },
  { id: 2, client: 'VIP002', wms: '美东仓', freight: 8500.00, whFee: 300.00, amount: 8800.00, count: 5 },
];

const MOCK_INBOUND = [
  { id: 1, client: 'VIP001', receiveNo: 'RCV20260511001', wms: '美西仓', type: '大货入库', qty: 500, boxes: 50, amount: 250.00, cost: 200.00, profit: 50.00, payStatus: '已付款', addTime: '2026-05-11 09:00:00', payTime: '2026-05-11 09:15:00' },
  { id: 2, client: 'VIP003', receiveNo: 'RCV20260511002', wms: '美东仓', type: '退货入库', qty: 10, boxes: 1, amount: 15.00, cost: 10.00, profit: 5.00, payStatus: '未付款', addTime: '2026-05-11 11:30:00', payTime: '-' },
];

const MOCK_DELIVERY = [
  { id: 1, client: 'VIP001', refNo: 'REF-001', outNo: 'OUT20260511001', channel: 'USPS', wms: '美西仓', type: '一件代发', weight: 1.5, freight: 15.00, whFee: 2.00, amount: 17.00, cost: 12.00, profit: 5.00, payStatus: '已付款', addTime: '2026-05-11 10:00:00', payTime: '2026-05-11 10:05:00' },
  { id: 2, client: 'VIP002', refNo: 'REF-002', outNo: 'OUT20260511002', channel: 'FedEx', wms: '美东仓', type: 'FBA转运', weight: 150.0, freight: 350.00, whFee: 50.00, amount: 400.00, cost: 300.00, profit: 100.00, payStatus: '已付款', addTime: '2026-05-10 14:20:00', payTime: '2026-05-10 14:30:00' },
];

export function FinancialReports({ mode }: FinancialReportProps) {
  const getTotals = () => {
    if (mode === 'report-sale-detail') {
      return { freight: 2100, freightCost: 1700, whFee: 80, amount: 2180, cost: 1780, profit: 400 };
    }
    if (mode === 'report-sale-sum') {
      return { freight: 21000, whFee: 800, amount: 21800, count: 15 };
    }
    if (mode === 'report-inbound') {
      return { qty: 510, boxes: 51, amount: 265, cost: 210, profit: 55 };
    }
    if (mode === 'report-delivery') {
      return { weight: 151.5, freight: 365, whFee: 52, amount: 417, cost: 312, profit: 105 };
    }
    return {};
  };

  const totals = getTotals();

  return (
    <div className="bg-[#f0f2f5] h-full overflow-hidden flex flex-col font-sans w-full">
      <div className="bg-white border border-gray-200 animate-in fade-in duration-500 mt-2 mx-2 p-3 flex flex-wrap items-start gap-3 mb-2">
        {mode === 'report-sale-detail' && (
          <>
            <div className="flex items-center gap-1">
              <span className="text-[12px] text-gray-600 bg-gray-50 border border-gray-200 border-r-0 px-2 py-1 h-7 flex items-center whitespace-nowrap">账单号码</span>
              <input type="text" placeholder="请输入账单号码" className="border border-gray-300 px-2 h-7 w-40 text-[12px] outline-none focus:border-blue-400" />
            </div>
            <div className="flex items-center gap-1">
              <span className="text-[12px] text-gray-600 bg-gray-50 border border-gray-200 border-r-0 px-2 py-1 h-7 flex items-center whitespace-nowrap">客户名称</span>
              <input type="text" placeholder="请输入客户名称" className="border border-gray-300 px-2 h-7 w-40 text-[12px] outline-none focus:border-blue-400" />
            </div>
            <select className="border border-gray-300 px-2 h-7 text-[12px] outline-none bg-white min-w-[100px]">
              <option>添加时间</option>
              <option>付款时间</option>
            </select>
            <div className="flex items-center">
              <input type="date" defaultValue="2024-04-11" className="border border-gray-300 px-2 h-7 text-[12px] outline-none" />
              <input type="date" defaultValue="2026-05-11" className="border border-gray-300 px-2 h-7 text-[12px] outline-none border-l-0" />
            </div>
            <select className="border border-gray-300 px-2 h-7 text-[12px] outline-none bg-white min-w-[100px]">
              <option>全部销售</option>
            </select>
            <select className="border border-gray-300 px-2 h-7 text-[12px] outline-none bg-white min-w-[100px]">
              <option>全部客服</option>
            </select>
            <select className="border border-gray-300 px-2 h-7 text-[12px] outline-none bg-white min-w-[100px]">
              <option>全部仓库</option>
            </select>
            <button className="bg-[#1890ff] hover:bg-[#1890ff]/90 text-white px-6 h-7 text-[12px] transition-colors rounded-sm shadow-sm ml-2">查询</button>
          </>
        )}

        {mode === 'report-sale-sum' && (
          <>
            <div className="flex items-center gap-1">
              <span className="text-[12px] text-gray-600 bg-gray-50 border border-gray-200 border-r-0 px-2 py-1 h-7 flex items-center whitespace-nowrap">客户名称</span>
              <input type="text" placeholder="请输入客户名称" className="border border-gray-300 px-2 h-7 w-40 text-[12px] outline-none focus:border-blue-400" />
            </div>
            <div className="flex items-center gap-1">
              <span className="text-[12px] text-gray-600 font-medium whitespace-nowrap bg-white px-2 py-1.5 h-7 flex items-center">时间</span>
              <div className="flex items-center">
                <input type="date" defaultValue="2026-04-11" className="border border-gray-300 px-2 h-7 text-[12px] outline-none" />
                <input type="date" defaultValue="2026-05-11" className="border border-gray-300 px-2 h-7 text-[12px] outline-none border-l-0" />
              </div>
            </div>
            <select className="border border-gray-300 px-2 h-7 text-[12px] outline-none bg-white min-w-[100px]">
              <option>全部仓库</option>
            </select>
            <button className="bg-[#1890ff] hover:bg-[#1890ff]/90 text-white px-6 h-7 text-[12px] transition-colors rounded-sm shadow-sm ml-2">查询</button>
            <button className="bg-[#1890ff] hover:bg-[#1890ff]/90 text-white px-6 h-7 text-[12px] transition-colors rounded-sm shadow-sm ml-2">导出账单</button>
          </>
        )}

        {mode === 'report-inbound' && (
          <>
            <div className="flex items-center gap-1">
              <span className="text-[12px] text-gray-600 bg-gray-50 border border-gray-200 border-r-0 px-2 py-1 h-7 flex items-center whitespace-nowrap">客户名称</span>
              <input type="text" className="border border-gray-300 px-2 h-7 w-32 text-[12px] outline-none focus:border-blue-400" />
            </div>
            <div className="flex items-center gap-1">
              <span className="text-[12px] text-gray-600 bg-gray-50 border border-gray-200 border-r-0 px-2 py-1 h-7 flex items-center whitespace-nowrap">收货编号</span>
              <input type="text" placeholder="关键词" className="border border-gray-300 px-2 h-7 w-40 text-[12px] outline-none focus:border-blue-400" />
            </div>
            <select className="border border-gray-300 px-2 h-7 text-[12px] outline-none bg-white min-w-[100px]">
              <option>全部仓库</option>
            </select>
            <select className="border border-gray-300 px-2 h-7 text-[12px] outline-none bg-white min-w-[100px]">
              <option>全部订单</option>
            </select>
            <select className="border border-gray-300 px-2 h-7 text-[12px] outline-none bg-white min-w-[100px]">
              <option>添加时间</option>
              <option>付款时间</option>
            </select>
            <div className="flex items-center">
              <input type="date" defaultValue="2026-04-11" className="border border-gray-300 px-2 h-7 text-[12px] outline-none" />
              <input type="date" defaultValue="2026-05-11" className="border border-gray-300 px-2 h-7 text-[12px] outline-none border-l-0" />
            </div>
            <button className="bg-[#1890ff] hover:bg-[#1890ff]/90 text-white px-5 h-7 text-[12px] transition-colors rounded-sm shadow-sm ml-2">查询</button>
            <button className="bg-[#1890ff] hover:bg-[#1890ff]/90 text-white px-5 h-7 text-[12px] transition-colors rounded-sm shadow-sm ml-2">查看明细</button>
            <button className="bg-[#1890ff] hover:bg-[#1890ff]/90 text-white px-5 h-7 text-[12px] transition-colors rounded-sm shadow-sm ml-2">导出Excel</button>
          </>
        )}

        {mode === 'report-delivery' && (
          <div className="flex flex-wrap w-full gap-2 items-start">
            <div className="flex items-start gap-1">
              <span className="text-[12px] text-gray-600 bg-gray-50 border border-gray-200 border-r-0 px-2 h-14 flex items-center whitespace-nowrap">参考单号</span>
              <textarea placeholder="如有多个请用换行隔开" className="border border-gray-300 p-1 h-14 w-40 text-[12px] resize-none outline-none focus:border-blue-400"></textarea>
            </div>
            <div className="flex items-start gap-1">
              <span className="text-[12px] text-gray-600 bg-gray-50 border border-gray-200 border-r-0 px-2 h-14 flex items-center whitespace-nowrap">出库单号</span>
              <textarea className="border border-gray-300 p-1 h-14 w-40 text-[12px] resize-none outline-none focus:border-blue-400"></textarea>
            </div>
            <div className="flex flex-wrap gap-2 items-center flex-1">
              <div className="flex items-center gap-1">
                <span className="text-[12px] text-gray-600 bg-gray-50 border border-gray-200 border-r-0 px-2 py-1 h-7 flex items-center whitespace-nowrap">客户名称</span>
                <input type="text" className="border border-gray-300 px-2 h-7 w-24 text-[12px] outline-none focus:border-blue-400" />
              </div>
              <select className="border border-gray-300 px-1 h-7 text-[12px] outline-none bg-white">
                <option>全部销售</option>
              </select>
              <select className="border border-gray-300 px-1 h-7 text-[12px] outline-none bg-white">
                <option>全部客服</option>
              </select>
              <select className="border border-gray-300 px-1 h-7 text-[12px] outline-none bg-white">
                <option>全部仓库</option>
              </select>
              <select className="border border-gray-300 px-1 h-7 text-[12px] outline-none bg-white">
                <option>出货渠道</option>
              </select>
              <select className="border border-gray-300 px-1 h-7 text-[12px] outline-none bg-white">
                <option>全部类型</option>
              </select>
              <select className="border border-gray-300 px-1 h-7 text-[12px] outline-none bg-white">
                <option>付款状态</option>
              </select>
              <select className="border border-gray-300 px-1 h-7 text-[12px] outline-none bg-white">
                <option>全部订单</option>
              </select>
              <select className="border border-gray-300 px-1 h-7 text-[12px] outline-none bg-white">
                <option>添加时间</option>
              </select>
              <div className="flex items-center">
                <input type="date" defaultValue="2026-04-11" className="border border-gray-300 px-1 h-7 text-[12px] outline-none w-[110px]" />
                <input type="date" defaultValue="2026-05-11" className="border border-gray-300 px-1 h-7 text-[12px] outline-none border-l-0 w-[110px]" />
              </div>
              <select className="border border-gray-300 px-1 h-7 text-[12px] outline-none bg-white">
                <option>费用搜索</option>
              </select>
              <button className="bg-[#1890ff] hover:bg-[#1890ff]/90 text-white px-4 h-7 text-[12px] transition-colors rounded-sm shadow-sm ml-1">查询</button>
              <button className="bg-[#1890ff] hover:bg-[#1890ff]/90 text-white px-4 h-7 text-[12px] transition-colors rounded-sm shadow-sm ml-1">导出Excel</button>
              <button className="bg-[#1890ff] hover:bg-[#1890ff]/90 text-white px-4 h-7 text-[12px] transition-colors rounded-sm shadow-sm ml-1">导出复核</button>
              <button className="bg-[#1890ff] hover:bg-[#1890ff]/90 text-white px-4 h-7 text-[12px] transition-colors rounded-sm shadow-sm ml-1">查看明细</button>
            </div>
          </div>
        )}
      </div>

      <div className="bg-white border border-gray-200 flex-1 mx-2 overflow-auto relative">
        <table className="w-full border-collapse text-[12px] text-center min-w-max">
          <thead className="bg-[#f5f7fa] text-gray-600 font-medium">
            <tr className="border-b border-gray-200">
              {mode === 'report-delivery' && (
                <th className="px-2 py-3 border-r border-gray-200 w-10">
                  <input type="checkbox" />
                </th>
              )}
              {mode !== 'report-delivery' && <th className="px-3 py-3 border-r border-gray-200 w-16">
                {mode === 'report-sale-detail' ? <><input type="checkbox" className="mr-1" /> 序号</> :
                 mode === 'report-sale-sum' ? <><input type="checkbox" className="mr-1" /> 序号</> :
                 mode === 'report-inbound' ? <><input type="checkbox" className="mr-1" /> 序号</> : '序号'}
              </th>}
              
              <th className="px-3 py-3 border-r border-gray-200">客户名称</th>
              
              {mode === 'report-sale-detail' && (
                <>
                  <th className="px-3 py-3 border-r border-gray-200">账单号码</th>
                  <th className="px-3 py-3 border-r border-gray-200">生成管理员</th>
                  <th className="px-3 py-3 border-r border-gray-200">账单类型</th>
                  <th className="px-3 py-3 border-r border-gray-200">仓库名称</th>
                  <th className="px-3 py-3 border-r border-gray-200">添加时间</th>
                  <th className="px-3 py-3 border-r border-gray-200">付款时间</th>
                  <th className="px-3 py-3 border-r border-gray-200">运费</th>
                  <th className="px-3 py-3 border-r border-gray-200">运费成本</th>
                  <th className="px-3 py-3 border-r border-gray-200">库内费用</th>
                  <th className="px-3 py-3 border-r border-gray-200">账单金额</th>
                  <th className="px-3 py-3 border-r border-gray-200">账单成本</th>
                  <th className="px-3 py-3 border-r border-gray-200">利润</th>
                  <th className="px-3 py-3 border-r border-gray-200">操作</th>
                </>
              )}

              {mode === 'report-sale-sum' && (
                <>
                  <th className="px-3 py-3 border-r border-gray-200">所属仓库</th>
                  <th className="px-3 py-3 border-r border-gray-200">运费</th>
                  <th className="px-3 py-3 border-r border-gray-200">库内费用</th>
                  <th className="px-3 py-3 border-r border-gray-200">账单金额</th>
                  <th className="px-3 py-3 border-r border-gray-200">账单数量</th>
                </>
              )}

              {mode === 'report-inbound' && (
                <>
                  <th className="px-3 py-3 border-r border-gray-200">收货编号</th>
                  <th className="px-3 py-3 border-r border-gray-200">仓库名称</th>
                  <th className="px-3 py-3 border-r border-gray-200">收货类型</th>
                  <th className="px-3 py-3 border-r border-gray-200">总数量</th>
                  <th className="px-3 py-3 border-r border-gray-200">箱数</th>
                  <th className="px-3 py-3 border-r border-gray-200">总金额</th>
                  <th className="px-3 py-3 border-r border-gray-200">总成本</th>
                  <th className="px-3 py-3 border-r border-gray-200">利润</th>
                  <th className="px-3 py-3 border-r border-gray-200">付款状态</th>
                  <th className="px-3 py-3 border-r border-gray-200">添加时间</th>
                  <th className="px-3 py-3 border-r border-gray-200">付款时间</th>
                  <th className="px-3 py-3 border-r border-gray-200">操作</th>
                </>
              )}

              {mode === 'report-delivery' && (
                <>
                  <th className="px-3 py-3 border-r border-gray-200">参考单号</th>
                  <th className="px-3 py-3 border-r border-gray-200">出库单号</th>
                  <th className="px-3 py-3 border-r border-gray-200">出货渠道</th>
                  <th className="px-3 py-3 border-r border-gray-200">仓库名称</th>
                  <th className="px-3 py-3 border-r border-gray-200">订单类型</th>
                  <th className="px-3 py-3 border-r border-gray-200">计费重量(kg)</th>
                  <th className="px-3 py-3 border-r border-gray-200">运费</th>
                  <th className="px-3 py-3 border-r border-gray-200">库内费用</th>
                  <th className="px-3 py-3 border-r border-gray-200">总金额</th>
                  <th className="px-3 py-3 border-r border-gray-200">总成本</th>
                  <th className="px-3 py-3 border-r border-gray-200">利润</th>
                  <th className="px-3 py-3 border-r border-gray-200">付款状态</th>
                  <th className="px-3 py-3 border-r border-gray-200">添加时间</th>
                  <th className="px-3 py-3 border-r border-gray-200">付款时间</th>
                  <th className="px-3 py-3 border-r border-gray-200">操作</th>
                </>
              )}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {mode === 'report-sale-detail' && MOCK_SALE_DETAIL.map((item, index) => (
              <tr key={item.id} className="hover:bg-[#f5f7fa] transition-colors">
                <td className="px-3 py-3 border-r border-gray-200"><input type="checkbox" className="mr-1" /> {index + 1}</td>
                <td className="px-3 py-3 border-r border-gray-200">{item.client}</td>
                <td className="px-3 py-3 border-r border-gray-200">{item.billNo}</td>
                <td className="px-3 py-3 border-r border-gray-200">{item.admin}</td>
                <td className="px-3 py-3 border-r border-gray-200">{item.type}</td>
                <td className="px-3 py-3 border-r border-gray-200">{item.wms}</td>
                <td className="px-3 py-3 border-r border-gray-200 text-gray-500">{item.addTime}</td>
                <td className="px-3 py-3 border-r border-gray-200 text-red-500">{item.payTime}</td>
                <td className="px-3 py-3 border-r border-gray-200">{item.freight.toFixed(2)}</td>
                <td className="px-3 py-3 border-r border-gray-200">{item.freightCost.toFixed(2)}</td>
                <td className="px-3 py-3 border-r border-gray-200">{item.whFee.toFixed(2)}</td>
                <td className="px-3 py-3 border-r border-gray-200">{item.amount.toFixed(2)}</td>
                <td className="px-3 py-3 border-r border-gray-200">{item.cost.toFixed(2)}</td>
                <td className="px-3 py-3 border-r border-gray-200">{item.profit.toFixed(2)}</td>
                <td className="px-3 py-3 border-r border-gray-200">
                  <button className="text-blue-500 hover:text-blue-700">查看</button>
                </td>
              </tr>
            ))}

            {mode === 'report-sale-sum' && MOCK_SALE_SUM.map((item, index) => (
              <tr key={item.id} className="hover:bg-[#f5f7fa] transition-colors">
                <td className="px-3 py-3 border-r border-gray-200"><input type="checkbox" className="mr-1" /> {index + 1}</td>
                <td className="px-3 py-3 border-r border-gray-200">{item.client}</td>
                <td className="px-3 py-3 border-r border-gray-200">{item.wms}</td>
                <td className="px-3 py-3 border-r border-gray-200">{item.freight.toFixed(2)}</td>
                <td className="px-3 py-3 border-r border-gray-200">{item.whFee.toFixed(2)}</td>
                <td className="px-3 py-3 border-r border-gray-200">{item.amount.toFixed(2)}</td>
                <td className="px-3 py-3 border-r border-gray-200">{item.count}</td>
              </tr>
            ))}

            {mode === 'report-inbound' && MOCK_INBOUND.map((item, index) => (
              <tr key={item.id} className="hover:bg-[#f5f7fa] transition-colors">
                <td className="px-3 py-3 border-r border-gray-200"><input type="checkbox" className="mr-1" /> {index + 1}</td>
                <td className="px-3 py-3 border-r border-gray-200">{item.client}</td>
                <td className="px-3 py-3 border-r border-gray-200">{item.receiveNo}</td>
                <td className="px-3 py-3 border-r border-gray-200">{item.wms}</td>
                <td className="px-3 py-3 border-r border-gray-200">{item.type}</td>
                <td className="px-3 py-3 border-r border-gray-200">{item.qty}</td>
                <td className="px-3 py-3 border-r border-gray-200">{item.boxes}</td>
                <td className="px-3 py-3 border-r border-gray-200">{item.amount.toFixed(2)}</td>
                <td className="px-3 py-3 border-r border-gray-200">{item.cost.toFixed(2)}</td>
                <td className="px-3 py-3 border-r border-gray-200">{item.profit.toFixed(2)}</td>
                <td className="px-3 py-3 border-r border-gray-200">{item.payStatus}</td>
                <td className="px-3 py-3 border-r border-gray-200 text-gray-500">{item.addTime}</td>
                <td className="px-3 py-3 border-r border-gray-200 text-gray-500">{item.payTime}</td>
                <td className="px-3 py-3 border-r border-gray-200">
                  <button className="text-blue-500 hover:text-blue-700">查看</button>
                </td>
              </tr>
            ))}

            {mode === 'report-delivery' && MOCK_DELIVERY.map((item) => (
              <tr key={item.id} className="hover:bg-[#f5f7fa] transition-colors">
                <td className="px-2 py-3 border-r border-gray-200"><input type="checkbox" /></td>
                <td className="px-3 py-3 border-r border-gray-200">{item.client}</td>
                <td className="px-3 py-3 border-r border-gray-200">{item.refNo}</td>
                <td className="px-3 py-3 border-r border-gray-200">{item.outNo}</td>
                <td className="px-3 py-3 border-r border-gray-200">{item.channel}</td>
                <td className="px-3 py-3 border-r border-gray-200">{item.wms}</td>
                <td className="px-3 py-3 border-r border-gray-200">{item.type}</td>
                <td className="px-3 py-3 border-r border-gray-200">{item.weight.toFixed(2)}</td>
                <td className="px-3 py-3 border-r border-gray-200">{item.freight.toFixed(2)}</td>
                <td className="px-3 py-3 border-r border-gray-200">{item.whFee.toFixed(2)}</td>
                <td className="px-3 py-3 border-r border-gray-200">{item.amount.toFixed(2)}</td>
                <td className="px-3 py-3 border-r border-gray-200">{item.cost.toFixed(2)}</td>
                <td className="px-3 py-3 border-r border-gray-200">{item.profit.toFixed(2)}</td>
                <td className="px-3 py-3 border-r border-gray-200">{item.payStatus}</td>
                <td className="px-3 py-3 border-r border-gray-200 text-gray-500">{item.addTime}</td>
                <td className="px-3 py-3 border-r border-gray-200 text-gray-500">{item.payTime}</td>
                <td className="px-3 py-3 border-r border-gray-200">
                  <button className="text-blue-500 hover:text-blue-700">查看</button>
                </td>
              </tr>
            ))}

            {/* Totals Row */}
            {mode === 'report-sale-detail' && (
              <tr className="bg-gray-50 font-medium text-red-500 border-b border-gray-200">
                <td colSpan={8} className="px-3 py-3 text-center border-r border-gray-200">合计</td>
                <td className="px-3 py-3 border-r border-gray-200">{totals.freight}</td>
                <td className="px-3 py-3 border-r border-gray-200">{totals.freightCost}</td>
                <td className="px-3 py-3 border-r border-gray-200">{totals.whFee}</td>
                <td className="px-3 py-3 border-r border-gray-200">{totals.amount}</td>
                <td className="px-3 py-3 border-r border-gray-200">{totals.cost}</td>
                <td className="px-3 py-3 border-r border-gray-200">{totals.profit}</td>
                <td className="px-3 py-3 border-r border-gray-200"></td>
              </tr>
            )}

            {mode === 'report-sale-sum' && (
              <tr className="bg-gray-50 font-medium text-red-500 border-b border-gray-200">
                <td colSpan={3} className="px-3 py-3 text-center border-r border-gray-200">总计</td>
                <td className="px-3 py-3 border-r border-gray-200">{totals.freight}</td>
                <td className="px-3 py-3 border-r border-gray-200">{totals.whFee}</td>
                <td className="px-3 py-3 border-r border-gray-200">{totals.amount}</td>
                <td className="px-3 py-3 border-r border-gray-200">{totals.count}</td>
              </tr>
            )}

            {mode === 'report-inbound' && (
              <tr className="bg-gray-50 font-medium text-red-500 border-b border-gray-200">
                <td colSpan={5} className="px-3 py-3 text-center border-r border-gray-200">合计</td>
                <td className="px-3 py-3 border-r border-gray-200">{totals.qty}</td>
                <td className="px-3 py-3 border-r border-gray-200">{totals.boxes}</td>
                <td className="px-3 py-3 border-r border-gray-200">{totals.amount}</td>
                <td className="px-3 py-3 border-r border-gray-200">{totals.cost}</td>
                <td className="px-3 py-3 border-r border-gray-200">{totals.profit}</td>
                <td colSpan={4} className="px-3 py-3 border-r border-gray-200"></td>
              </tr>
            )}

            {mode === 'report-delivery' && (
              <tr className="bg-gray-50 font-medium text-red-500 border-b border-gray-200">
                <td colSpan={7} className="px-3 py-3 text-center border-r border-gray-200">合计</td>
                <td className="px-3 py-3 border-r border-gray-200">{totals.weight}</td>
                <td className="px-3 py-3 border-r border-gray-200">{totals.freight}</td>
                <td className="px-3 py-3 border-r border-gray-200">{totals.whFee}</td>
                <td className="px-3 py-3 border-r border-gray-200">{totals.amount}</td>
                <td className="px-3 py-3 border-r border-gray-200">{totals.cost}</td>
                <td className="px-3 py-3 border-r border-gray-200">{totals.profit}</td>
                <td colSpan={4} className="px-3 py-3 border-r border-gray-200"></td>
              </tr>
            )}
          </tbody>
        </table>

        {/* Footer info/pagination */}
        <div className="w-full flex items-center justify-between px-4 py-2 bg-white border-t border-gray-100 absolute bottom-0 left-0 right-0">
          {mode === 'report-sale-detail' ? (
            <div className="text-red-500 text-[12px]">账单金额红色标识客户账户余额足以支付</div>
          ) : <div></div>}
          
          <div className="flex items-center gap-2 text-[12px] text-gray-600">
            <span>总计 2 个记录分为 1 页当前第 1 页，每页</span>
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

      <div className="w-full text-center py-4 text-[11px] text-gray-400 bg-[#f0f2f5]">
        共执行 {mode === 'report-sale-detail' ? '8' : mode === 'report-sale-sum' ? '6' : mode === 'report-inbound' ? '7' : '10'} 个查询，用时 {(Math.random() * 0.05).toFixed(6)} 秒，Gzip 已禁用，内存占用 {(5.1 + Math.random() * 2).toFixed(3)} MB
      </div>
    </div>
  );
}
