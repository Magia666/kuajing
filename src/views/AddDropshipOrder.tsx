import React, { useState } from 'react';
import { Search, Plus, Trash2, FileOutput, FileInput, PlusSquare, Info, Upload } from 'lucide-react';
import { cn } from '../lib/utils';

export function AddDropshipOrder() {
  return (
    <div className="bg-[#f5f7fa] animate-in fade-in duration-500 w-full h-full overflow-hidden pb-20">
      {/* Header */}
      <div className="bg-[#e4e7ed] px-4 py-2 flex items-center justify-between border-b border-gray-300">
        <div className="flex items-center">
          <div className="w-1 h-4 bg-blue-500 mr-2"></div>
          <span className="text-[14px] font-medium text-gray-700">添加代发发货</span>
        </div>
        <div className="flex gap-2">
          <button className="bg-[#00bccd] hover:bg-[#00a2b1] text-white h-7 px-3 text-[12px] rounded-sm transition-colors">
            批量导入发货
          </button>
          <button className="bg-[#00bccd] hover:bg-[#00a2b1] text-white h-7 px-3 text-[12px] rounded-sm transition-colors">
            批量上传面单
          </button>
          <button className="bg-[#00bccd] hover:bg-[#00a2b1] text-white h-7 px-3 text-[12px] rounded-sm transition-colors">
            渠道编码对照表
          </button>
        </div>
      </div>

      <div className="p-4 space-y-4">
        {/* Section 1: Top Form */}
        <div className="bg-white p-6 border border-gray-200 grid grid-cols-2 gap-x-20 gap-y-4">
          {/* Left Column */}
          <div className="space-y-4 text-[12px]">
            <div className="flex items-center gap-4">
              <label className="w-24 text-right text-gray-600">收件国家</label>
              <select className="flex-1 h-8 px-2 border border-gray-300 rounded-sm outline-none focus:border-blue-400">
                <option value="">请选择国家</option>
              </select>
            </div>
            <div className="flex items-center gap-4">
              <label className="w-24 text-right text-gray-600">发货仓库</label>
              <select className="flex-1 h-8 px-2 border border-gray-300 rounded-sm outline-none focus:border-blue-400">
                <option value="">请选择发货仓库</option>
              </select>
            </div>
            <div className="flex items-center gap-4">
              <label className="w-24 text-right text-gray-600">参考单号</label>
              <div className="flex-1 flex gap-2">
                <input type="text" className="flex-1 h-8 px-2 border border-gray-300 rounded-sm outline-none focus:border-blue-400" />
                <button className="bg-red-500 hover:bg-red-600 text-white h-8 px-4 rounded-sm">生成</button>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <label className="w-24 text-right text-gray-600">备注</label>
              <input type="text" className="flex-1 h-8 px-2 border border-gray-300 rounded-sm outline-none focus:border-blue-400" />
            </div>
            <div className="flex items-center gap-4">
              <label className="w-24 text-right text-gray-600">上传面单</label>
              <div className="flex-1 flex items-center gap-2">
                <button className="border border-gray-300 h-8 px-4 rounded-sm flex items-center gap-2 bg-gray-50 hover:bg-gray-100">
                   选择文件
                </button>
                <span className="text-gray-400">未选择文件</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <label className="w-24 text-right text-gray-600">物料列表</label>
              <button className="bg-red-500 hover:bg-red-600 text-white h-8 px-4 rounded-sm">添加物料</button>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-4 text-[12px]">
            <div className="flex items-center gap-4">
              <label className="w-24 text-right text-gray-600">选择客户</label>
              <div className="flex-1 flex gap-2">
                <input type="text" placeholder="请输入用户名称" className="flex-1 h-8 px-2 border border-gray-300 rounded-sm outline-none focus:border-blue-400" />
                <button className="bg-[#f4f4f5] border border-gray-300 hover:bg-gray-200 h-8 px-4 rounded-sm">查询</button>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <label className="w-24 text-right text-gray-600">出货渠道</label>
              <div className="flex-1 flex items-center gap-2">
                <select className="flex-1 h-8 px-2 border border-gray-300 rounded-sm outline-none focus:border-blue-400">
                  <option value="">请选择指定快递</option>
                </select>
                <button className="text-blue-500 hover:underline">请选择出货渠道</button>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <label className="w-24 text-right text-gray-600">出库单号</label>
              <div className="flex-1 flex items-center gap-2">
                <input type="text" className="flex-1 h-8 px-2 border border-gray-300 rounded-sm outline-none focus:border-blue-400" />
                <span className="text-gray-400 italic">PS:自提渠道使用</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <label className="w-24 text-right text-gray-600">地址类型</label>
              <select className="flex-1 h-8 px-2 border border-gray-300 rounded-sm outline-none focus:border-blue-400">
                <option value="">地址类型</option>
              </select>
            </div>
            <div className="flex items-center gap-4">
              <label className="w-24 text-right text-gray-600">签名服务</label>
              <select className="flex-1 h-8 px-2 border border-gray-300 rounded-sm outline-none focus:border-blue-400">
                <option value="">不做签名</option>
              </select>
            </div>
          </div>
        </div>

        {/* Section 2: Recipient Info */}
        <div className="border border-gray-200 overflow-hidden">
          <div className="bg-[#e4e7ed] px-4 py-1.5 flex items-center border-l-2 border-blue-500">
            <span className="text-[13px] font-medium text-gray-700">收件人信息</span>
          </div>
          <div className="bg-white p-6 grid grid-cols-2 gap-x-20 gap-y-4">
            {/* Left Column */}
            <div className="space-y-4 text-[12px]">
              <div className="flex items-center gap-4">
                <label className="w-24 text-right text-gray-600">选择收件人</label>
                <div className="flex-1 flex gap-2">
                  <input type="text" placeholder="选择收件人" className="flex-1 h-8 px-2 border border-gray-300 rounded-sm outline-none focus:border-blue-400" />
                  <button className="bg-[#f4f4f5] border border-gray-300 hover:bg-gray-200 h-8 px-4 rounded-sm">查询</button>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <label className="w-24 text-right text-gray-600">收件人</label>
                <input type="text" placeholder="请输入收件人名称" className="flex-1 h-8 px-2 border border-gray-300 rounded-sm outline-none focus:border-blue-400" />
              </div>
              <div className="flex items-start gap-4">
                <label className="w-24 text-right text-gray-600 mt-2">收件地址</label>
                <div className="flex-1 space-y-2">
                  <input type="text" placeholder="请输入收件详细地址" className="w-full h-8 px-2 border border-gray-300 rounded-sm outline-none focus:border-blue-400" />
                  <input type="text" placeholder="请输入收件详细地址2" className="w-full h-8 px-2 border border-gray-300 rounded-sm outline-none focus:border-blue-400" />
                  <div className="flex gap-2">
                    <input type="text" placeholder="请输入区" className="flex-1 h-8 px-2 border border-gray-300 rounded-sm outline-none focus:border-blue-400" />
                    <select className="flex-1 h-8 px-2 border border-gray-300 rounded-sm outline-none focus:border-blue-400">
                      <option value="">请选择州</option>
                    </select>
                    <button className="bg-[#f4f4f5] border border-gray-300 hover:bg-gray-200 h-8 px-4 rounded-sm">查询</button>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4 ml-24">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="rounded-sm" />
                  <span>设置为默认收件人</span>
                </label>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-4 text-[12px]">
              <div className="flex items-center gap-4">
                <label className="w-24 text-right text-gray-600">门牌号</label>
                <input type="text" placeholder="门牌号" className="flex-1 h-8 px-2 border border-gray-300 rounded-sm outline-none focus:border-blue-400" />
              </div>
              <div className="flex items-center gap-4">
                <label className="w-24 text-right text-gray-600">公司名称</label>
                <input type="text" placeholder="请输入公司名称" className="flex-1 h-8 px-2 border border-gray-300 rounded-sm outline-none focus:border-blue-400" />
              </div>
              <div className="flex items-center gap-4">
                <label className="w-24 text-right text-gray-600">收件电话</label>
                <input type="text" className="flex-1 h-8 px-2 border border-gray-300 rounded-sm outline-none focus:border-blue-400" />
              </div>
              <div className="flex items-center gap-4">
                <label className="w-24 text-right text-gray-600">邮政编码</label>
                <input type="text" className="flex-1 h-8 px-2 border border-gray-300 rounded-sm outline-none focus:border-blue-400" />
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Product Info */}
        <div className="border border-gray-200 overflow-hidden">
          <div className="bg-[#e4e7ed] px-4 py-1.5 flex items-center justify-between border-l-2 border-blue-500">
            <span className="text-[13px] font-medium text-gray-700">产品信息</span>
            <button className="bg-red-500 hover:bg-red-600 text-white h-7 px-3 text-[12px] rounded-sm transition-colors">
              添加产品
            </button>
          </div>
          <div className="bg-white overflow-auto">
            <table className="w-full text-[12px] border-collapse text-left border-b border-gray-200">
              <thead className="bg-[#f5f7fa] text-gray-600 font-medium">
                <tr className="bg-gray-100 text-gray-600">
                  <th className="px-3 py-2 border-r border-gray-200 font-medium">Fnsku</th>
                  <th className="px-3 py-2 border-r border-gray-200 font-medium w-[40%]">产品名称</th>
                  <th className="px-3 py-2 border-r border-gray-200 font-medium">发货数量</th>
                  <th className="px-3 py-2 border-r border-gray-200 font-medium">重量(kg)</th>
                  <th className="px-3 py-2 border-r border-gray-200 font-medium">产品规格</th>
                  <th className="px-3 py-2 font-medium border-r border-gray-200">操作</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-3 py-3 border-r border-gray-200 font-mono py-2">B08XYZ1234</td>
                  <td className="px-3 py-3 border-r border-gray-200 text-left py-2">LED 护眼台灯 - 可调光 USB 充电</td>
                  <td className="px-3 py-3 border-r border-gray-200 font-medium py-2">2</td>
                  <td className="px-3 py-3 border-r border-gray-200 py-2">1.2</td>
                  <td className="px-3 py-3 border-r border-gray-200 text-gray-500 py-2">20*15*10 cm</td>
                  <td className="px-3 py-3 py-2 border-r border-gray-200">
                    <button className="text-red-500 hover:text-red-700">移除</button>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-3 py-3 border-r border-gray-200 font-mono py-2">B09ABC5678</td>
                  <td className="px-3 py-3 border-r border-gray-200 text-left py-2">人体工学无线鼠标 (静音版)</td>
                  <td className="px-3 py-3 border-r border-gray-200 font-medium py-2">5</td>
                  <td className="px-3 py-3 border-r border-gray-200 py-2">0.5</td>
                  <td className="px-3 py-3 border-r border-gray-200 text-gray-500 py-2">12*8*5 cm</td>
                  <td className="px-3 py-3 py-2 border-r border-gray-200">
                    <button className="text-red-500 hover:text-red-700">移除</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Section 4: Freight Calculation */}
        <div className="border border-gray-200 overflow-hidden">
          <div className="bg-[#e4e7ed] px-4 py-1.5 flex items-center border-l-2 border-blue-500">
            <span className="text-[13px] font-medium text-gray-700">运费估算</span>
          </div>
          <div className="bg-white">
            <table className="w-full text-left text-[12px] border-collapse border-b border-gray-200">
              <thead className="bg-[#f5f7fa] text-gray-600 font-medium">
                <tr className="bg-gray-100 text-gray-600 border-b border-gray-200">
                  <th className="px-3 py-2 border-r border-gray-200 font-medium">序号</th>
                  <th className="px-3 py-2 border-r border-gray-200 font-medium">出货渠道</th>
                  <th className="px-3 py-2 border-r border-gray-200 font-medium">物料费用</th>
                  <th className="px-3 py-2 border-r border-gray-200 font-medium">增值服务</th>
                  <th className="px-3 py-2 border-r border-gray-200 font-medium">运费</th>
                  <th className="px-3 py-2 border-r border-gray-200 font-medium">费用总计</th>
                  <th className="px-3 py-2 border-r border-gray-200 font-medium">出货渠道备注</th>
                  <th className="px-3 py-2 font-medium border-r border-gray-200">操作</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-200 hover:bg-green-50 transition-colors bg-green-50/30">
                  <td className="px-3 py-3 border-r border-gray-200 py-2">1</td>
                  <td className="px-3 py-3 border-r border-gray-200 text-blue-600 font-medium py-2">UPS Ground (Standard)</td>
                  <td className="px-3 py-3 border-r border-gray-200 py-2">¥0.00</td>
                  <td className="px-3 py-3 border-r border-gray-200 py-2">¥5.00</td>
                  <td className="px-3 py-3 border-r border-gray-200 font-bold text-orange-600 py-2">¥85.50</td>
                  <td className="px-3 py-3 border-r border-gray-200 font-bold text-red-600 py-2">¥90.50</td>
                  <td className="px-3 py-3 border-r border-gray-200 text-gray-400 italic text-[11px] py-2">全美 3-5 天送达</td>
                  <td className="px-3 py-3 py-2 border-r border-gray-200">
                    <button className="bg-blue-500 text-white px-2 py-1 rounded-sm">选择</button>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-3 py-3 border-r border-gray-200 py-2">2</td>
                  <td className="px-3 py-3 border-r border-gray-200 text-blue-600 font-medium py-2">USPS Priority Mail</td>
                  <td className="px-3 py-3 border-r border-gray-200 py-2">¥0.00</td>
                  <td className="px-3 py-3 border-r border-gray-200 py-2">¥5.00</td>
                  <td className="px-3 py-3 border-r border-gray-200 font-bold text-orange-600 py-2">¥98.20</td>
                  <td className="px-3 py-3 border-r border-gray-200 font-bold text-red-600 py-2">¥103.20</td>
                  <td className="px-3 py-3 border-r border-gray-200 text-gray-400 italic text-[11px] py-2">全美 1-3 天送达</td>
                  <td className="px-3 py-3 py-2 border-r border-gray-200">
                    <button className="border border-blue-500 text-blue-500 px-2 py-1 rounded-sm hover:bg-blue-50 transition-colors">选择</button>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="p-4 space-y-2 border-t border-gray-200">
              <div className="text-[12px]">
                运费估算: <button className="text-red-500 hover:underline">点击估算</button>
              </div>
              <div className="text-[12px] text-gray-400">
                温馨提醒: 此处估算的是您预选的发货方式以及产品的重量预估的初步运费，实际运费待后台打包后为准
              </div>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center pt-8">
          <button className="bg-[#00a2ff] hover:bg-blue-600 text-white w-40 py-2 rounded-sm text-[14px]">
            提交
          </button>
        </div>
      </div>
    </div>
  );
}
