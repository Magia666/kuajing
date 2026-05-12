import React from 'react';
import { Search, Calendar, Users, Package, Wallet } from 'lucide-react';

export function ManagerMonthlyReport() {
  return (
    <div className="bg-[#f0f2f5] h-full overflow-hidden font-sans text-gray-700 w-full flex flex-col p-4 gap-4 overflow-y-auto">
      {/* Header filter */}
      <div className="bg-white p-3 border border-gray-200 rounded-sm shadow-sm flex items-center gap-4">
        <div className="flex items-center gap-2">
          <span className="text-[14px] text-gray-600 font-medium">选择日期：</span>
          <input type="month" className="border border-gray-300 rounded px-2 py-1 text-[13px] outline-none" defaultValue="2026-05" />
        </div>
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-1.5 text-[13px] rounded transition-colors flex items-center gap-1">
          <Search size={14} />查询
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* 会员信息汇总 */}
        <div className="bg-white border border-gray-200 rounded-sm shadow-sm flex flex-col">
          <div className="p-3 border-b border-gray-100 flex items-center gap-2 bg-gray-50/50">
            <Users size={16} className="text-blue-500" />
            <h3 className="font-medium text-gray-700 text-[14px]">会员信息汇总</h3>
          </div>
          <div className="p-4 grid grid-cols-3 gap-4">
            <div className="bg-blue-50 p-4 rounded-sm border border-blue-100 text-center">
              <div className="text-blue-500 text-[24px] font-bold mb-1">12</div>
              <div className="text-gray-500 text-[12px]">新增会员</div>
            </div>
            <div className="bg-green-50 p-4 rounded-sm border border-green-100 text-center">
              <div className="text-green-500 text-[24px] font-bold mb-1">156</div>
              <div className="text-gray-500 text-[12px]">活跃会员</div>
            </div>
            <div className="bg-purple-50 p-4 rounded-sm border border-purple-100 text-center">
              <div className="text-purple-500 text-[24px] font-bold mb-1">8,402</div>
              <div className="text-gray-500 text-[12px]">会员总数</div>
            </div>
          </div>
        </div>

        {/* 订单数据汇总 */}
        <div className="bg-white border border-gray-200 rounded-sm shadow-sm flex flex-col">
          <div className="p-3 border-b border-gray-100 flex items-center gap-2 bg-gray-50/50">
            <Package size={16} className="text-orange-500" />
            <h3 className="font-medium text-gray-700 text-[14px]">订单数据汇总</h3>
          </div>
          <div className="p-4 grid grid-cols-5 gap-2">
            <div className="text-center p-2">
              <div className="text-[20px] font-bold text-gray-800 mb-1">45</div>
              <div className="text-gray-500 text-[12px]">头程订单</div>
            </div>
            <div className="text-center p-2">
              <div className="text-[20px] font-bold text-gray-800 mb-1">12</div>
              <div className="text-gray-500 text-[12px]">退货订单</div>
            </div>
            <div className="text-center p-2">
              <div className="text-[20px] font-bold text-gray-800 mb-1">850</div>
              <div className="text-gray-500 text-[12px]">代发订单</div>
            </div>
            <div className="text-center p-2">
              <div className="text-[20px] font-bold text-gray-800 mb-1">30</div>
              <div className="text-gray-500 text-[12px]">换标订单</div>
            </div>
            <div className="text-center p-2">
              <div className="text-[20px] font-bold text-gray-800 mb-1">8</div>
              <div className="text-gray-500 text-[12px]">中转订单</div>
            </div>
          </div>
        </div>
      </div>

      {/* 财务数据汇总 */}
      <div className="bg-white border border-gray-200 rounded-sm shadow-sm flex flex-col">
        <div className="p-3 border-b border-gray-100 flex items-center gap-2 bg-gray-50/50">
          <Wallet size={16} className="text-green-500" />
          <h3 className="font-medium text-gray-700 text-[14px]">财务数据汇总 (单位: 元)</h3>
        </div>
        <div className="p-6 grid grid-cols-5 gap-y-8 gap-x-4">
          <div className="flex flex-col items-center">
            <div className="text-gray-500 text-[13px] mb-2">待充值金额</div>
            <div className="text-[22px] font-bold text-gray-700">¥ 12,500.00</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-gray-500 text-[13px] mb-2">已充值金额</div>
            <div className="text-[22px] font-bold text-blue-500">¥ 84,200.00</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-gray-500 text-[13px] mb-2">待收运费</div>
            <div className="text-[22px] font-bold text-orange-500">¥ 4,120.00</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-gray-500 text-[13px] mb-2">已收运费</div>
            <div className="text-[22px] font-bold text-green-500">¥ 15,800.00</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-gray-500 text-[13px] mb-2">待收库内费</div>
            <div className="text-[22px] font-bold text-orange-500">¥ 800.00</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-gray-500 text-[13px] mb-2">已收库内费</div>
            <div className="text-[22px] font-bold text-green-500">¥ 3,200.00</div>
          </div>
          <div className="flex flex-col items-center">
             <div className="text-gray-500 text-[13px] mb-2">待收杂项(加服务订单)</div>
            <div className="text-[22px] font-bold text-orange-500">¥ 150.00</div>
          </div>
          <div className="flex flex-col items-center">
             <div className="text-gray-500 text-[13px] mb-2">已收杂项(加服务订单)</div>
            <div className="text-[22px] font-bold text-green-500">¥ 400.00</div>
          </div>

          <div className="col-span-1 border-l border-gray-100 flex flex-col justify-center items-center h-full"></div>
          
          <div className="flex flex-col items-center p-4 bg-orange-50 border border-orange-100 rounded">
            <div className="text-orange-600 text-[13px] mb-2 font-medium">总待收费用(不包充值)</div>
            <div className="text-[24px] font-bold text-orange-600">¥ 5,070.00</div>
          </div>
          <div className="flex flex-col items-center p-4 bg-green-50 border border-green-100 rounded">
             <div className="text-green-600 text-[13px] mb-2 font-medium">总已收费用(不包充值)</div>
            <div className="text-[24px] font-bold text-green-600">¥ 19,400.00</div>
          </div>
        </div>
      </div>
    </div>
  );
}
