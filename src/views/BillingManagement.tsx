import React from 'react';
import { Search } from 'lucide-react';
import { cn } from '../lib/utils';

interface BillingRecord {
  id: string;
  clientName: string;
  clientId: string;
  receiptNo?: string;
  billNo?: string;
  admin?: string;
  billType?: string;
  warehouse: string;
  receiptType?: string;
  totalQty?: number;
  boxCount?: number;
  totalAmount?: number;
  totalCost?: number;
  profit: number;
  paymentStatus?: string;
  addedTime: string;
  paymentTime?: string;
  balanceTime?: string;
  shippingFee?: number;
  shippingCost?: number;
  inboundFee?: number;
  billAmount?: number;
  billCost?: number;
}

const MOCK_A: BillingRecord[] = [
  { id: '1', clientName: 'yueyang07', clientId: '12021', receiptNo: 'D1202120251204', warehouse: '星卓樾泰泰国仓', receiptType: '一件代发', totalQty: 22, boxCount: 1, totalAmount: 0.00, totalCost: 0.00, profit: 0, paymentStatus: '未付款', addedTime: '2025-12-04 13:31:42' },
  { id: '2', clientName: 'yueyang01', clientId: '12015', receiptNo: 'D1201520251204', warehouse: '星卓樾泰泰国仓', receiptType: '一件代发', totalQty: 100, boxCount: 1, totalAmount: 0.00, totalCost: 0.00, profit: 0, paymentStatus: '未付款', addedTime: '2025-12-04 13:30:58' }
];

const MOCK_B: BillingRecord[] = [
  { id: '1', clientName: 'qin', clientId: '12014', receiptNo: 'T1201420251203', warehouse: '星卓樾泰泰国仓', receiptType: '退货入库', totalQty: 1, boxCount: 1, totalAmount: 0.00, totalCost: 0.00, profit: 0, paymentStatus: '未付款', addedTime: '2025-12-03 20:23:52' }
];

const MOCK_C: BillingRecord[] = [
  { id: '1', clientName: 'jinyi', clientId: '12013', billNo: 'B2025120211441319051', admin: 'fxadmin', billType: '入库账单', warehouse: '星卓樾泰泰国仓', addedTime: '2025-12-02 11:44:13', shippingFee: 0.00, shippingCost: 0.00, inboundFee: 0, billAmount: 0.00, billCost: 0.00, profit: 0 }
];

const MOCK_D_E: BillingRecord[] = [
  { id: '1', clientName: 'wanglu', clientId: '12033', billNo: 'B202512052211559981', admin: 'sysadmin', billType: '入库账单', warehouse: '美东一仓', addedTime: '2025-12-05 09:30:00', balanceTime: '2025-12-05 10:15:22', paymentTime: '2025-12-05 11:20:00', shippingFee: 15.00, shippingCost: 10.00, inboundFee: 5.00, billAmount: 20.00, billCost: 15.00, profit: 5.00 },
  { id: '2', clientName: 'chenli', clientId: '12045', billNo: 'B202512063311668877', admin: 'fxadmin', billType: '出库账单', warehouse: '星卓樾泰泰国仓', addedTime: '2025-12-06 14:20:10', balanceTime: '2025-12-06 15:00:00', paymentTime: '2025-12-06 16:10:00', shippingFee: 45.00, shippingCost: 30.00, inboundFee: 10.00, billAmount: 55.00, billCost: 40.00, profit: 15.00 },
  { id: '3', clientName: 'lisi', clientId: '12089', billNo: 'B202512071122334455', admin: 'fxadmin', billType: '仓储账单', warehouse: '美西二仓', addedTime: '2025-12-07 08:00:00', balanceTime: '2025-12-07 09:12:00', paymentTime: '2025-12-07 10:30:00', shippingFee: 0.00, shippingCost: 0.00, inboundFee: 25.50, billAmount: 25.50, billCost: 15.00, profit: 10.50 }
];

interface BillingManagementProps {
  mode: 'inbound-price-review' | 'inbound-pending-bill' | 'inbound-balance-bill' | 'inbound-write-off-bill' | 'inbound-done-bill' | 'del-write-off-bill' | 'agent-write-off-bill' | 'del-balance-bill' | 'del-done-bill';
}

export function BillingManagement({ mode }: BillingManagementProps) {
  let data: BillingRecord[] = [];
  if (mode === 'inbound-price-review') data = MOCK_A;
  if (mode === 'inbound-pending-bill') data = MOCK_B;
  if (mode === 'inbound-balance-bill' || mode === 'del-balance-bill') data = MOCK_C;
  if (mode === 'inbound-write-off-bill' || mode === 'inbound-done-bill' || mode === 'del-write-off-bill' || mode === 'agent-write-off-bill' || mode === 'del-done-bill') data = MOCK_D_E;

  const showsBillLayout = mode === 'inbound-balance-bill' || mode === 'del-balance-bill' || mode === 'inbound-write-off-bill' || mode === 'inbound-done-bill' || mode === 'del-write-off-bill' || mode === 'agent-write-off-bill' || mode === 'del-done-bill';

  return (
    <div className="bg-[#f0f2f5] h-full overflow-hidden flex flex-col font-sans w-full">
      <div className="bg-white rounded-sm border border-gray-200 animate-in fade-in duration-500 flex-1 flex flex-col mt-2 mx-2">
        {/* Search Bar */}
        <div className="p-3 border-b border-gray-100 flex flex-wrap items-center gap-3 bg-gray-50/50">
          <div className="flex items-center gap-1">
            <span className="text-[12px] text-gray-600 font-medium whitespace-nowrap bg-gray-100 px-3 py-1.5 border border-gray-200 border-r-0 h-7 flex items-center">{showsBillLayout ? '账单号码' : '客户名称'}</span>
            <input 
              type="text" 
              placeholder={showsBillLayout ? '请输入账单号码' : ''} 
              className="border border-gray-300 px-2 h-7 w-32 outline-none focus:border-blue-400 text-[12px]"
            />
          </div>
          <div className="flex items-center gap-1">
            <span className="text-[12px] text-gray-600 font-medium whitespace-nowrap bg-gray-100 px-3 py-1.5 border border-gray-200 border-r-0 h-7 flex items-center">{showsBillLayout ? '客户名称' : '收货编号'}</span>
            <input 
              type="text" 
              placeholder={showsBillLayout ? '请输入客户名称' : '关键词'} 
              className="border border-gray-300 px-2 h-7 w-32 outline-none focus:border-blue-400 text-[12px]"
            />
          </div>

          <div className="flex items-center gap-1">
            <span className="text-[12px] text-gray-600 font-medium whitespace-nowrap bg-gray-100 px-3 py-1.5 border border-gray-200 border-r-0 h-7 flex items-center">添加时间</span>
            <div className="flex items-center">
              <input type="date" defaultValue="2024-04-11" className="border border-gray-300 px-2 h-7 text-[12px] outline-none" />
              <input type="date" defaultValue="2026-05-11" className="border border-gray-300 px-2 h-7 text-[12px] outline-none border-l-0" />
            </div>
          </div>
          
          {showsBillLayout && (
            <div className="flex items-center gap-1">
              <select className="border border-gray-300 outline-none text-[12px] px-2 h-7 w-24">
                <option>全部销售</option>
              </select>
              <select className="border border-gray-300 outline-none text-[12px] px-2 h-7 w-24">
                <option>全部客服</option>
              </select>
            </div>
          )}

          {!showsBillLayout && (
            <select className="border border-gray-300 outline-none text-[12px] px-2 h-7 w-24">
              <option>全部仓库</option>
            </select>
          )}
          {!showsBillLayout && (
            <select className="border border-gray-300 outline-none text-[12px] px-2 h-7 w-24">
              <option>全部订单</option>
            </select>
          )}
          {showsBillLayout && (
            <select className="border border-gray-300 outline-none text-[12px] px-2 h-7 w-24">
              <option>全部仓库</option>
            </select>
          )}

          <div className="flex items-center gap-1">
            <button className="bg-[#1890ff] hover:bg-[#1890ff]/90 text-white px-5 h-7 text-[12px] transition-colors rounded-sm">
              查询
            </button>
            {!showsBillLayout && (
              <button className="bg-[#1890ff] hover:bg-[#1890ff]/90 text-white px-3 h-7 text-[12px] transition-colors rounded-sm">
                查看明细
              </button>
            )}
            <button className="bg-[#1890ff] hover:bg-[#1890ff]/90 text-white px-3 h-7 text-[12px] transition-colors rounded-sm">
              导出Excel
            </button>
            {showsBillLayout && (
              <button className="bg-[#1890ff] hover:bg-[#1890ff]/90 text-white px-3 h-7 text-[12px] transition-colors rounded-sm">
                打印账单
              </button>
            )}
          </div>
        </div>

        {/* Table area */}
        <div className="overflow-auto flex-1">
          <table className="w-full border-collapse text-[12px] text-center border-b border-gray-200">
            <thead className="bg-[#f5f7fa] text-gray-600 font-medium">
              <tr className="border-b border-gray-200">
                <th className="px-3 py-2 border-r border-gray-200 w-16">
                  <div className="flex items-center justify-center gap-1">
                    <input type="checkbox" /> 序号
                  </div>
                </th>
                <th className="px-3 py-2 border-r border-gray-200">客户名称</th>
                
                {showsBillLayout ? (
                  <>
                    <th className="px-3 py-2 border-r border-gray-200">账单号码</th>
                    <th className="px-3 py-2 border-r border-gray-200">生成管理员</th>
                    <th className="px-3 py-2 border-r border-gray-200">账单类型</th>
                    <th className="px-3 py-2 border-r border-gray-200">仓库名称</th>
                    <th className="px-3 py-2 border-r border-gray-200">添加时间</th>
                    {(mode === 'inbound-write-off-bill' || mode === 'del-write-off-bill' || mode === 'agent-write-off-bill') && <th className="px-3 py-2 border-r border-gray-200">结余时间</th>}
                    {(mode === 'inbound-done-bill' || mode === 'del-done-bill') && <th className="px-3 py-2 border-r border-gray-200">付款时间</th>}
                    <th className="px-3 py-2 border-r border-gray-200">运费</th>
                    <th className="px-3 py-2 border-r border-gray-200">运费成本</th>
                    <th className="px-3 py-2 border-r border-gray-200">库内费用</th>
                    <th className="px-3 py-2 border-r border-gray-200">账单金额</th>
                    <th className="px-3 py-2 border-r border-gray-200">账单成本</th>
                    <th className="px-3 py-2 border-r border-gray-200">利润</th>
                  </>
                ) : (
                  <>
                    <th className="px-3 py-2 border-r border-gray-200">收货编号</th>
                    <th className="px-3 py-2 border-r border-gray-200">仓库名称</th>
                    <th className="px-3 py-2 border-r border-gray-200">收货类型</th>
                    <th className="px-3 py-2 border-r border-gray-200">总数量</th>
                    <th className="px-3 py-2 border-r border-gray-200">箱数</th>
                    <th className="px-3 py-2 border-r border-gray-200">总金额</th>
                    <th className="px-3 py-2 border-r border-gray-200">总成本</th>
                    <th className="px-3 py-2 border-r border-gray-200">利润</th>
                    <th className="px-3 py-2 border-r border-gray-200">付款状态</th>
                    <th className="px-3 py-2 border-r border-gray-200">添加时间</th>
                    <th className="px-3 py-2 border-r border-gray-200">付款时间</th>
                  </>
                )}
                <th className="px-3 py-2 border-l border-gray-200 bg-white">操作</th>
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
                  <td className="px-3 py-2 border-r border-gray-200">
                    {item.clientName} <span className="text-red-500">({item.clientId})</span>
                  </td>
                  
                  {showsBillLayout ? (
                    <>
                      <td className="px-3 py-2 border-r border-gray-200">{item.billNo}</td>
                      <td className="px-3 py-2 border-r border-gray-200">{item.admin}</td>
                      <td className="px-3 py-2 border-r border-gray-200">{item.billType}</td>
                      <td className="px-3 py-2 border-r border-gray-200">{item.warehouse}</td>
                      <td className="px-3 py-2 border-r border-gray-200 text-gray-500 min-w-[80px]">
                        {item.addedTime && (
                          <div className="flex flex-col">
                            <span>{item.addedTime.split(' ')[0]}</span>
                            <span>{item.addedTime.split(' ')[1]}</span>
                          </div>
                        )}
                      </td>
                      {(mode === 'inbound-write-off-bill' || mode === 'del-write-off-bill' || mode === 'agent-write-off-bill') && <td className="px-3 py-2 border-r border-gray-200">{item.balanceTime}</td>}
                      {(mode === 'inbound-done-bill' || mode === 'del-done-bill') && <td className="px-3 py-2 border-r border-gray-200">{item.paymentTime}</td>}
                      <td className="px-3 py-2 border-r border-gray-200">{item.shippingFee?.toFixed(2)}</td>
                      <td className="px-3 py-2 border-r border-gray-200 text-gray-400">{item.shippingCost?.toFixed(2)}</td>
                      <td className="px-3 py-2 border-r border-gray-200">{item.inboundFee?.toFixed(2)}</td>
                      <td className="px-3 py-2 border-r border-gray-200 text-red-500 font-bold">{item.billAmount?.toFixed(2)}</td>
                      <td className="px-3 py-2 border-r border-gray-200">{item.billCost?.toFixed(2)}</td>
                      <td className="px-3 py-2 border-r border-gray-200">{item.profit?.toFixed(2)}</td>
                    </>
                  ) : (
                    <>
                      <td className="px-3 py-2 border-r border-gray-200">{item.receiptNo}</td>
                      <td className="px-3 py-2 border-r border-gray-200">{item.warehouse}</td>
                      <td className="px-3 py-2 border-r border-gray-200">{item.receiptType}</td>
                      <td className="px-3 py-2 border-r border-gray-200 text-red-500">{item.totalQty}</td>
                      <td className="px-3 py-2 border-r border-gray-200 text-red-500">{item.boxCount}</td>
                      <td className="px-3 py-2 border-r border-gray-200">{item.totalAmount?.toFixed(2)}</td>
                      <td className="px-3 py-2 border-r border-gray-200">{item.totalCost?.toFixed(2)}</td>
                      <td className="px-3 py-2 border-r border-gray-200 text-red-500">{item.profit}</td>
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
                  )}
                  
                  <td className="px-3 py-2 border-l border-gray-200">
                    <div className="flex flex-wrap items-center justify-center gap-x-1 gap-y-1 text-[#1890ff] whitespace-nowrap">
                      {mode === 'inbound-price-review' && (
                        <>
                          <button className="hover:underline">[费用信息]</button>
                          <button className="hover:underline">[详情]</button>
                          <button className="hover:underline">[编辑]</button>
                          <button className="hover:underline">[重算]</button>
                        </>
                      )}
                      {mode === 'inbound-pending-bill' && (
                        <>
                          <button className="hover:underline">[费用信息]</button>
                          <button className="hover:underline">[详情]</button>
                          <button className="hover:underline">[退回]</button>
                        </>
                      )}
                      {(mode === 'inbound-balance-bill' || mode === 'del-balance-bill') && (
                        <>
                          <button className="hover:underline text-red-500">[结余]</button>
                          <button className="hover:underline">[查看账单]</button>
                          <button className="hover:underline">[删除]</button>
                        </>
                      )}
                      {(mode === 'inbound-write-off-bill' || mode === 'del-write-off-bill' || mode === 'agent-write-off-bill') && (
                        <button className="hover:underline">[账单详情]</button>
                      )}
                      {(mode === 'inbound-done-bill' || mode === 'del-done-bill') && (
                        <button className="hover:underline">[账单详情]</button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
              
              {data.length > 0 && (
                <tr className="hover:bg-gray-50 transition-colors text-red-500">
                  <td colSpan={showsBillLayout ? 7 : 5} className="px-3 py-2 border-r border-gray-200 text-center font-bold">合计</td>
                  {showsBillLayout && (mode === 'inbound-write-off-bill' || mode === 'del-write-off-bill' || mode === 'agent-write-off-bill') && <td className="px-3 py-2 border-r border-gray-200" />}
                  {showsBillLayout && (mode === 'inbound-done-bill' || mode === 'del-done-bill') && <td className="px-3 py-2 border-r border-gray-200" />}
                  
                  {showsBillLayout ? (
                    <>
                      <td className="px-3 py-2 border-r border-gray-200">{data.reduce((a, b) => a + (b.shippingFee || 0), 0)}</td>
                      <td className="px-3 py-2 border-r border-gray-200">{data.reduce((a, b) => a + (b.shippingCost || 0), 0)}</td>
                      <td className="px-3 py-2 border-r border-gray-200">{data.reduce((a, b) => a + (b.inboundFee || 0), 0)}</td>
                      <td className="px-3 py-2 border-r border-gray-200">{data.reduce((a, b) => a + (b.billAmount || 0), 0)}</td>
                      <td className="px-3 py-2 border-r border-gray-200">{data.reduce((a, b) => a + (b.billCost || 0), 0)}</td>
                      <td className="px-3 py-2 border-r border-gray-200">{data.reduce((a, b) => a + (b.profit || 0), 0)}</td>
                    </>
                  ) : (
                    <>
                      <td className="px-3 py-2 border-r border-gray-200 text-red-500 font-bold">{data.reduce((a, b) => a + (b.totalQty || 0), 0)}</td>
                      <td className="px-3 py-2 border-r border-gray-200 text-red-500 font-bold">{data.reduce((a, b) => a + (b.boxCount || 0), 0)}</td>
                      <td className="px-3 py-2 border-r border-gray-200 font-bold">{data.reduce((a, b) => a + (b.totalAmount || 0), 0)}</td>
                      <td className="px-3 py-2 border-r border-gray-200 font-bold">{data.reduce((a, b) => a + (b.totalCost || 0), 0)}</td>
                      <td className="px-3 py-2 border-r border-gray-200 font-bold">{data.reduce((a, b) => a + (b.profit || 0), 0)}</td>
                      <td colSpan={3} className="px-3 py-2 border-r border-gray-200" />
                    </>
                  )}
                  <td className="px-3 py-2 border-l border-gray-200 bg-white" />
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Footer actions & Pagination */}
        <div className="w-full flex items-center justify-between px-4 py-2 border-t border-gray-200 bg-[#f9f9f9]">
          <div className="flex items-center gap-2">
            {mode === 'inbound-price-review' && (
              <>
                <button className="bg-[#f0ad4e] hover:bg-[#ec971f] text-white px-4 py-1.5 text-[12px] rounded-sm transition-colors">
                  提交单价复核
                </button>
                <button className="bg-[#f0ad4e] hover:bg-[#ec971f] text-white px-4 py-1.5 text-[12px] rounded-sm transition-colors">
                  批量重算
                </button>
              </>
            )}
            {mode === 'inbound-pending-bill' && (
              <>
                <button className="bg-white border border-gray-300 text-gray-700 px-4 py-1.5 text-[12px] rounded-sm hover:bg-gray-50 transition-colors">
                  提交至待结余账单
                </button>
                <button className="bg-[#f0ad4e] hover:bg-[#ec971f] text-white px-4 py-1.5 text-[12px] rounded-sm transition-colors">
                  生成账单
                </button>
              </>
            )}
            {showsBillLayout && (
              <>
                <button className="bg-[#f0ad4e] hover:bg-[#ec971f] text-white px-4 py-1.5 text-[12px] rounded-sm flex items-center gap-1 transition-colors">
                  导出Excel
                </button>
                <button className="bg-[#f0ad4e] hover:bg-[#ec971f] text-white px-4 py-1.5 text-[12px] rounded-sm flex items-center gap-1 transition-colors">
                  打印账单
                </button>
                {(mode === 'inbound-balance-bill' || mode === 'del-balance-bill') && (
                  <button className="bg-[#f0ad4e] hover:bg-[#ec971f] text-white px-4 py-1.5 text-[12px] rounded-sm flex items-center gap-1 transition-colors">
                    批量结余
                  </button>
                )}
                {(mode === 'inbound-write-off-bill' || mode === 'del-write-off-bill' || mode === 'agent-write-off-bill') && (
                  <button className="bg-[#f0ad4e] hover:bg-[#ec971f] text-white px-4 py-1.5 text-[12px] rounded-sm flex items-center gap-1 transition-colors">
                    批量付款
                  </button>
                )}
              </>
            )}

            {showsBillLayout && (
              <span className="text-red-500 text-[12px] ml-2 font-medium">账单金额红色标识客户账户余额足以支付</span>
            )}
          </div>

          <div className="flex items-center gap-2 text-[12px] text-gray-600">
            <span>总计 {data.length} 个记录</span>
            <span>分为 1 页</span>
            <span>当前第 1 页，每页</span>
            <select className="border border-gray-300 rounded px-1 h-6 outline-none">
              <option>100</option>
            </select>
            <div className="flex items-center gap-1 ml-2 border-l border-gray-300 pl-3">
              <button className="text-gray-400 hover:text-gray-600">第一页</button>
              <button className="text-gray-400 hover:text-gray-600">上一页</button>
              <button className="text-gray-400 hover:text-gray-600">下一页</button>
              <button className="text-gray-400 hover:text-gray-600">最末页</button>
            </div>
            <select className="border border-gray-300 rounded h-6 outline-none ml-1">
              <option>1</option>
            </select>
          </div>
        </div>
      </div>
      
      <div className="w-full text-center py-4 text-[11px] text-gray-400">
        共执行 8 个查询，用时 0.02982 秒，Gzip 已禁用，内存占用 7.416 MB
      </div>
    </div>
  );
}
