import React from 'react';

interface GenericViewProps {
  mode: string;
}

export function GenericView({ mode }: GenericViewProps) {
  const getTitle = () => {
    const titles: Record<string, string> = {
      'cust-list': '客户列表',
      'cust-logout': '注销客户',
      'cust-account': '客户账号',
      'cust-add': '添加客户',
      'cust-import': '导入客户',
      'h-arrears': '欠费客户',
      'h-sleeping': '沉睡客户',
      'h-quality': '优质客户',
      'h-recharge-rank': '充值排行',
      'h-rules': '层级规则',
      'tk-add': '添加工单',
      'tk-all': '全部工单',
      'tk-pending': '待处理工单',
      'tk-processing': '处理中工单',
      'tk-completed': '已完成工单',
      'tk-abnormal': '异常工单',
      'shop-list': '店铺管理',
      'shop-order-check': '订单排查',
      'vip-mgmt': 'VIP管理',
      'login-logs': '登录日志',
      'login-overview': '登录概览',
      'mgr-monthly': '经理每月报表',
      'mgr-daily': '经理每日报表',
      'fin-analysis': '财务概况分析',
      'wh-analysis': '仓库概况分析',
      'wh-fin-overview': '仓库财务概况',
      'io-analysis': '收支统计分析',
      'order-analysis': '订单统计分析',
      'cust-order-rank': '客户订单排行',
      'sales-perf': '销售绩效统计',
      'cs-perf': '客服绩效统计',
      'cust-analysis': '客户统计分析',
      'web-news': '新闻中心',
      'web-ads': '广告管理',
      'wechat-follow': '关注回复',
      'wechat-menu': '自定义菜单',
      'wechat-auto': '自动回复',
      'web-site-settings': '站点设置',
      'web-mobile-site': '手机站点',
      'web-friend-links': '友情链接',
      'web-navbar-settings': '导航设置',
      'admin-log': '管理员日志',
      'admin-list': '管理员列表',
      'admin-role': '角色管理',
      'sys-delivery': '派送设置',
      'type-set': '类型设置',
      'express-set': '发货快递',
      'country-list': '国家列表',
      'region-list': '地区列表',
      'cust-ann-remind': '客户公告提醒',
      'reg-protocol': '用户注册协议',
      'corp-ann-remind': '公司公告提醒',
      'api-list': 'API列表',
      'api-recv-log': 'API接收日志',
      'api-req-log': 'API请求日志',
      'ups-account': 'Ups账户设置',
      'fedex-account': 'Fedex账户设置',
      'usps-account': 'USPS账号设置',
      'ca-post-account': '加拿大邮政账户',
      'sf-local-account': '顺丰本土账户',
      'ship-code-set': '发货编码设置',
      'handheld-print-process': 'PDA打印流程',
      'handheld-print-history': 'PDA打印历史',
    };
    return titles[mode] || mode;
  };

  const title = getTitle();

  const getTableHeaders = () => {
    if (mode.includes('cust') || mode.startsWith('h-') || mode === 'vip-mgmt') {
      return ['客户名称/ID', '客户等级', '账户余额/信息', '专属负责人', '最近活跃时间'];
    }
    if (mode.includes('analysis') || mode.includes('mgr-') || mode.includes('perf') || mode.includes('rank')) {
      return ['报表名称/维度', '当前核心指标', '同期对比/分析', '系统/生成人', '统计周期'];
    }
    if (mode.includes('web-') || mode.includes('wechat-')) {
      return ['标题/内容', '发布状态/位置', '访问量/互动量', '发布人', '更新时间'];
    }
    if (mode.includes('sys-') || mode.includes('api-') || mode.includes('-set') || mode.includes('-account') || mode.includes('list') || mode.includes('role') || mode.includes('admin-')) {
      return ['配置项名/接口', '当前值/状态', '参数描述/说明', '操作人', '最后修改'];
    }
    if (mode.startsWith('tk-')) {
      return ['工单编号/标题', '工单类型', '处理进度/结果', '处理人', '更新时间'];
    }
    if (mode.startsWith('shop-')) {
      return ['店铺名称/平台', '授权状态', '单日订单量', '负责人', '同步时间'];
    }
    return ['主要信息', '类型/状态', '附加信息', '相关人员', '更新时间'];
  };

  const columns = getTableHeaders();

  return (
    <div className="bg-[#f0f2f5] h-full overflow-hidden flex flex-col font-sans w-full">
      <div className="bg-white rounded-sm border border-gray-200 animate-in fade-in duration-500 flex-1 flex flex-col mt-2 mx-2 relative min-h-0">
        {/* Header Actions */}
        <div className="p-3 border-b border-gray-100 flex flex-wrap items-center gap-3 bg-gray-50/50">
          <div className="flex items-center gap-1">
            <span className="text-[12px] text-gray-600 bg-gray-50 border border-gray-200 border-r-0 px-2 py-1 h-7 flex items-center whitespace-nowrap">名称搜索</span>
            <input type="text" placeholder={`搜索${title}`} className="border border-gray-300 px-2 h-7 w-40 text-[12px] outline-none focus:border-blue-400" />
          </div>
          <select className="border border-gray-300 px-2 h-7 text-[12px] outline-none bg-white min-w-[100px]">
            <option>全部状态</option>
          </select>
          <button className="bg-[#1890ff] hover:bg-[#1890ff]/90 text-white px-6 h-7 text-[12px] transition-colors rounded-sm ml-2">查询</button>
          {!mode.includes('log') && !mode.includes('report') && !mode.includes('analysis') && (
            <button className="bg-[#1890ff] hover:bg-[#1890ff]/90 text-white px-6 h-7 text-[12px] transition-colors rounded-sm ml-2">新增{title}</button>
          )}
        </div>

        {/* Table area */}
        <div className="overflow-auto flex-1 pb-16">
          <table className="w-full border-collapse text-[12px] text-center min-w-max">
            <thead className="bg-[#f5f7fa] text-gray-600 font-medium">
              <tr className="border-b border-gray-200">
                <th className="px-3 py-3 border-r border-gray-200 w-16">
                  <div className="flex items-center justify-center gap-1">
                    <input type="checkbox" /> 序号
                  </div>
                </th>
                {columns.map((col, idx) => (
                  <th key={idx} className="px-3 py-3 border-r border-gray-200">{col}</th>
                ))}
                <th className="px-3 py-3 border-r border-gray-200 w-32">操作</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 text-gray-700">
              {[1, 2, 3, 4, 5].map((item, index) => {
                let field1 = `业务数据 ${item + 101}`;
                let typeText = `分类 ${item % 3 + 1}`;
                let infoText = '正常状态';
                let person = 'admin';

                if (mode.includes('cust') || mode.startsWith('h-') || mode === 'vip-mgmt') {
                  field1 = `客户-${['深圳飞亚贸易', '义乌中宏跨境', '广州大志电商', '上海星辰实业', '北京通达科技'][index]}`;
                  typeText = ['一级代理 (VIP)', '企业客户', '大客户卖家', '核心客户', '普通客户'][index];
                  infoText = `余额: ¥${(Math.random()*10000 + 500).toFixed(2)}`;
                  person = ['张经理', '李红', '王主管', '赵敏', '刘总'][index];
                } else if (mode.includes('analysis') || mode.includes('mgr-') || mode.includes('perf') || mode.includes('rank')) {
                  field1 = ['当月营收汇总', '大客户订单量TOP10', '物流线路延误率', '仓库日均出库件数', '客服日均结单量'][index];
                  typeText = ['¥ 1,284,500.00', '18,290 单', '1.24%', '42,500 件', '124 单/人'][index];
                  infoText = ['同比增长 12.5% ↗', '环比下降 2.1% ↘', '表现平稳', '峰值上升 8.4% ↗', '人效达标'][index];
                  const colors = ['text-green-500', 'text-red-500', 'text-gray-500', 'text-green-500', 'text-green-500'];
                  infoText = <span className={colors[index]}>{infoText}</span> as any;
                  person = '系统自动生成';
                } else if (mode.includes('web-') || mode.includes('wechat-')) {
                  field1 = ['系统放假通知', '国际物流线路最新报价', '首页轮播Banner-1', '微信关注自动回复词', '新手发货指南'][index];
                  typeText = ['已发布/置顶', '已发布/常规', '已发布/首页', '已启用/微信', '已发布/帮助中心'][index];
                  infoText = ['阅读量: 12,450', '阅读量: 8,211', '点击率: 8.5%', '触达: 45,190次', '阅读量: 5,420'][index];
                  person = ['运营部-小李', '市场部-王明', '设计-张杰', '运营部-小李', '客服-陈芳'][index];
                } else if (mode.includes('tk-')) {
                  field1 = `TK-202605${10 + index}-${Math.floor(Math.random()*1000)}`;
                  typeText = ['财务充值/待处理', '运单异常/处理中', '仓储报备/已完成', '退件处理/处理中', '理赔申请/待处理'][index];
                  infoText = `处理进度 ${[0, 50, 100, 30, 0][index]}%`;
                  person = ['客服-小王', '物流-老张', '仓管-赵四', '客服-小李', '财务-王姐'][index];
                } else if (mode.includes('shop-')) {
                  field1 = ['官方旗舰店 (Shopee)', '北美主账号 (Amazon)', '东南亚店群 (Lazada)', '独立站一号 (Shopify)', '俄罗斯区 (AliExpress)'][index];
                  typeText = index % 2 === 0 ? '🟢 API已授权' : '🟠 授权即将过期';
                  infoText = `日均约: ${(Math.random()*1000 + 100).toFixed(0)}单`;
                  person = '店长-李明';
                } else if (mode.includes('sys-') || mode.includes('api-') || mode.includes('-set') || mode.includes('-account') || mode.includes('list') || mode.includes('role') || mode.includes('admin-')) {
                  if (mode.includes('log')) {
                    field1 = ['sys_admin 登录系统', 'fin_manager 导出报表', 'wh_staff 修改库存', 'cron_job 清理缓存', 'cs_lead 审核退款'][index];
                    typeText = ['INFO', 'INFO', 'WARN', 'INFO', 'INFO'][index];
                    infoText = `IP: 192.168.1.${100 + index} / ${['Firefox', 'Chrome', 'Safari', 'System', 'Edge'][index]}`;
                    person = field1.split(' ')[0];
                  } else {
                    field1 = ['系统并发限制阈值', 'FedEx API Key配置', 'SF-Express 面单格式', '新用户注册默认等级', '汇率自动更新接口'][index];
                    typeText = ['已开启', '已连接', '正常', 'V1 普通客户', '正常 (每小时)'][index];
                    infoText = ['Max=5000', '到期: 2027年', '类型: 100x100mm', '权限: 基础', 'Source: 中行'][index];
                    person = 'admin';
                  }
                }

                return (
                <tr key={item} className="hover:bg-[#f5f7fa] transition-colors">
                  <td className="px-3 py-3 border-r border-gray-200">
                    <div className="flex items-center justify-center gap-1">
                      <input type="checkbox" /> {index + 1}
                    </div>
                  </td>
                  <td className="px-3 py-3 border-r border-gray-200 text-blue-600 cursor-pointer">{field1}</td>
                  <td className="px-3 py-3 border-r border-gray-200">{typeText}</td>
                  <td className="px-3 py-3 border-r border-gray-200 text-gray-500">{infoText}</td>
                  <td className="px-3 py-3 border-r border-gray-200">{person}</td>
                  <td className="px-3 py-3 border-r border-gray-200 text-gray-500">2026-05-{10+index} 10:00:00</td>
                  <td className="px-3 py-3 border-r border-gray-200">
                    <button className="text-blue-500 hover:text-blue-700 mr-2">[详情]</button>
                    {!mode.includes('log') && <button className="text-blue-500 hover:text-blue-700">[修改]</button>}
                  </td>
                </tr>
              )})}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="w-full flex items-center justify-end px-4 py-2 bg-white border-t border-gray-100 absolute bottom-0 left-0 right-0 h-14">
          <div className="flex items-center gap-2 text-[12px] text-gray-600">
            <span>总计 5 个记录分为 1 页当前第 1 页，每页</span>
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
        共执行 3 个查询，用时 {(Math.random() * 0.05).toFixed(6)} 秒，Gzip 已禁用，内存占用 {(4.2 + Math.random() * 0.2).toFixed(3)} MB
      </div>
    </div>
  );
}
