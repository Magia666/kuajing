import React, { useState } from 'react';
import { 
  Menu, 
  ChevronLeft, 
  PlusCircle, 
  Package, 
  LayoutGrid, 
  Layers, 
  ShieldAlert, 
  FileText,
  ChevronRight,
  ChevronDown,
  PlusSquare,
  Truck,
  PackageSearch,
  Archive,
  FileX,
  Trash2,
  RotateCcw,
  ShoppingBag,
  Navigation,
  UserX,
  Warehouse,
  Settings2,
  Wallet,
  Receipt,
  CreditCard,
  Coins,
  History,
  Users,
  UserMinus,
  Bell,
  UserPlus,
  Brain,
  Sparkles,
  Zap,
  Monitor,
  Image,
  Star,
  BookOpen,
  Layout,
  Settings,
  ShieldCheck,
  Globe2,
  Map,
  ClipboardType,
  MessageSquare,
  Store,
  BarChart3,
  BarChart,
  MessageCircle,
  Smartphone,
  Link,
  Newspaper,
  Megaphone
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

interface SubMenuItem {
  id: string;
  label: string;
}

interface SidebarItem {
  id: string;
  label: string;
  icon: React.ElementType;
  subItems?: SubMenuItem[];
}

const NEBULA_ITEMS: SidebarItem[] = [
  { 
    id: 'add-product', 
    label: '添加产品', 
    icon: PlusCircle,
    subItems: [
      { id: 'single-add', label: '单个添加产品' },
      { id: 'bulk-import', label: '批量导入产品' },
    ]
  },
  { 
    id: 'product-management', 
    label: '产品管理', 
    icon: Package,
    subItems: [
      { id: 'pending-review', label: '待审核产品' },
      { id: 'product-list', label: '产品列表' },
      { id: 'disabled-products', label: '停用产品' },
      { id: 'rejected-products', label: '审核不通过产品' },
    ]
  },
  { 
    id: 'distribution-management', 
    label: '分销管理', 
    icon: LayoutGrid,
    subItems: [
      { id: 'pending-dist', label: '待审核分销' },
      { id: 'dist-list', label: '分销产品列表' },
      { id: 'dist-apply', label: '客户分销申请' },
    ]
  },
  { 
    id: 'category-management', 
    label: '分类管理', 
    icon: Layers,
  },
  { 
    id: 'prohibited-items', 
    label: '禁运品管理', 
    icon: ShieldAlert,
  },
  { 
    id: 'hs-codes', 
    label: '海关编码管理', 
    icon: FileText,
  },
];

const TRACE_ITEMS: SidebarItem[] = [
  {
    id: 'order-add',
    label: '添加订单',
    icon: PlusSquare,
  },
  {
    id: 'head-leg',
    label: '头程订单',
    icon: Truck,
    subItems: [
      { id: 'all-orders', label: '全部订单' },
      { id: 'pending-confirm', label: '待确认订单' }
    ]
  },
  {
    id: 'pending-warehouse',
    label: '海外待入库',
    icon: PackageSearch,
  },
  {
    id: 'in-warehouse',
    label: '海外已入库',
    icon: Archive,
  },
  {
    id: 'failed-confirm',
    label: '确认未通过',
    icon: FileX,
  },
  {
    id: 'order-recycle',
    label: '订单回收站',
    icon: Trash2,
  }
];

const ORDERS_ITEMS: SidebarItem[] = [
  {
    id: 'orders-add-group',
    label: '添加订单',
    icon: PlusSquare,
    subItems: [
      { id: 'return-order-add', label: '添加退货订单' },
      { id: 'add-dropship-order', label: '添加代发发货' },
    ]
  },
  {
    id: 'orders-return-group',
    label: '退货订单',
    icon: RotateCcw,
    subItems: [
      { id: 'return-order-list', label: '全部订单' },
      { id: 'ret-pending', label: '待确认订单' },
      { id: 'ret-wh-pending', label: '海外仓待入库' },
      { id: 'ret-wh-done', label: '海外仓已入库' },
      { id: 'ret-failed', label: '确认未通过' },
      { id: 'ret-recycle', label: '回收站' },
    ]
  },
  {
    id: 'orders-dropship-group',
    label: '代发订单',
    icon: ShoppingBag,
    subItems: [
      { id: 'ds-all', label: '全部订单' },
      { id: 'ds-pending', label: '待确认订单' },
      { id: 'ds-pack', label: '待打包订单' },
      { id: 'ds-oos', label: '缺货中订单' },
      { id: 'ds-ship', label: '待发货订单' },
      { id: 'ds-waiting', label: '待签收订单' },
      { id: 'ds-signed', label: '已签收订单' },
      { id: 'ds-deleted', label: '已删除订单' },
    ]
  },
  {
    id: 'orders-track-group',
    label: '轨迹管理',
    icon: Navigation,
    subItems: [
      { id: 'track-rules', label: '规则管理' },
      { id: 'track-orders', label: '订单列表' },
      { id: 'track-sign', label: '签收订单' },
      { id: 'track-delivery-err', label: '投递异常' },
      { id: 'track-timeout-err', label: '超时异常' },
      { id: 'track-analysis', label: '轨迹数据分析' },
    ]
  },
  {
    id: 'orders-anon-list',
    label: '匿名列表',
    icon: UserX,
  }
];

const INVENTORY_ITEMS: SidebarItem[] = [
  {
    id: 'inventory-mgmt-group',
    label: '库存管理',
    icon: Warehouse,
    subItems: [
      { id: 'inv-query', label: '库存查询' },
      { id: 'owner-dist-inv', label: '货主分销库存' },
      { id: 'cust-dist-inv', label: '客户分销库存' },
      { id: 'inv-query-combo', label: '库存查询(组合)' },
      { id: 'inv-age-analysis', label: '库龄分析' },
      { id: 'inv-detail', label: '库存明细' },
      { id: 'inv-warning', label: '库存预警' },
      { id: 'inv-transit', label: '途中明细' },
      { id: 'inv-history-shelf', label: '历史货架' },
    ]
  },
  {
    id: 'material-mgmt-group',
    label: '物料管理',
    icon: Package,
    subItems: [
      { id: 'material-add', label: '添加物料' },
      { id: 'material-list', label: '物料列表' },
      { id: 'material-record', label: '物料记录' },
    ]
  },
  {
    id: 'off-shelf-group',
    label: '下架管理',
    icon: ChevronDown, // Placeholder for off-shelf
    subItems: [
      { id: 'pending-off-shelf', label: '待下架列表' },
      { id: 'done-off-shelf', label: '已下架列表' },
    ]
  },
  {
    id: 'on-shelf-group',
    label: '上架管理',
    icon: ChevronRight, // Placeholder for on-shelf
    subItems: [
      { id: 'ds-pending-shelf', label: '代发待上架' },
      { id: 'transit-pending-shelf', label: '中转待上架' },
    ]
  },
  {
    id: 'wh-reports-group',
    label: '仓库报表',
    icon: FileText,
    subItems: [
      { id: 'wh-in-report', label: '仓库入库报表' },
      { id: 'wh-out-report', label: '仓库出货报表' },
      { id: 'sku-io-report', label: 'SKU出入库报表' },
    ]
  },
  {
    id: 'sorting-equip-group',
    label: '分拣设备',
    icon: Layers,
    subItems: [
      { id: 'sorting-ports', label: '分拣口列表' },
      { id: 'sorting-flow', label: '分拣口流水' },
      { id: 'sorting-status', label: '分拣口状态' },
    ]
  },
  {
    id: 'wh-config-group',
    label: '仓库配置',
    icon: Settings2,
    subItems: [
      { id: 'wh-list-config', label: '仓库列表' },
      { id: 'fba-wh', label: 'FBA仓库' },
      { id: 'shelf-add', label: '添加货架' },
      { id: 'shelf-mgmt', label: '货架管理' },
      { id: 'wh-usage-rate', label: '仓库使用率' },
      { id: 'shelf-vacancy-rate', label: '货架空置率' },
    ]
  }
];

const FINANCE_ITEMS: SidebarItem[] = [
  {
    id: 'fin-inbound-group',
    label: '入库结算',
    icon: FileText,
    subItems: [
      { id: 'inbound-price-review', label: '入库价格复核' },
      { id: 'inbound-pending-bill', label: '入库待出账单' },
      { id: 'inbound-balance-bill', label: '待结余账单' },
      { id: 'inbound-write-off-bill', label: '待销账账单' },
      { id: 'inbound-done-bill', label: '已销账账单' },
    ]
  },
  {
    id: 'fin-delivery-group',
    label: '派送结算',
    icon: Truck,
    subItems: [
      { id: 'del-price-review', label: '派送价格复核' },
      { id: 'del-pending-bill', label: '派送待出账单' },
      { id: 'del-dist-bill', label: '代发分销账单' },
      { id: 'del-balance-bill', label: '待结余账单' },
      { id: 'del-write-off-bill', label: '待销账账单' },
      { id: 'del-done-bill', label: '已销账账单' },
      { id: 'del-misc-payable', label: '待付杂项' },
      { id: 'del-srv-order', label: '服务订单' },
      { id: 'del-storage-bill', label: '仓储费账单' },
      { id: 'del-cost-settlement', label: '成本结算' },
    ]
  },
  {
    id: 'fin-cust-group',
    label: '客户结算',
    icon: Users,
    subItems: [
      { id: 'cust-uncollected', label: '客户未收汇总' },
      { id: 'cust-collected', label: '客户已收汇总' },
      { id: 'cust-bill-mgmt', label: '客户账单管理' },
      { id: 'cust-recharge-sum', label: '客户充值汇总' },
    ]
  },
  {
    id: 'fin-corp-group',
    label: '公司结算',
    icon: LayoutGrid,
    subItems: [
      { id: 'corp-daily-flow', label: '日收支流水' },
      { id: 'corp-monthly-flow', label: '月收支流水' },
      { id: 'corp-wh-flow', label: '仓库收支流水' },
      { id: 'corp-agent-flow', label: '代理结算流水' },
      { id: 'corp-cust-balance', label: '客户余额查询' },
    ]
  },
  {
    id: 'fin-recharge-group',
    label: '充值管理',
    icon: Wallet,
    subItems: [
      { id: 'recharge-new', label: '新增待充值' },
      { id: 'recharge-list', label: '待充值列表' },
      { id: 'recharge-done', label: '已充值列表' },
      { id: 'recharge-detail', label: '账户明细' },
      { id: 'recharge-method', label: '汇款方式' },
    ]
  },
  {
    id: 'fin-report-group',
    label: '财务报表',
    icon: FileText,
    subItems: [
      { id: 'report-sale-detail', label: '销售明细' },
      { id: 'report-sale-sum', label: '销售汇总' },
      { id: 'report-inbound', label: '入库报表' },
      { id: 'report-delivery', label: '派送报表' },
    ]
  },
  {
    id: 'fin-agent-group',
    label: '代理结算',
    icon: UserPlus,
    subItems: [
      { id: 'agent-fee-entry', label: '代理费用录入' },
      { id: 'agent-fee-list', label: '代理费用列表' },
      { id: 'agent-pending-bill', label: '代理待出账单' },
      { id: 'agent-write-off-bill', label: '代理待销账单' },
      { id: 'agent-done-bill', label: '代理已销账单' },
      { id: 'agent-shipping-check', label: '代理运费核对' },
    ]
  },
  {
    id: 'fin-price-group',
    label: '报价管理',
    icon: ClipboardType,
    subItems: [
      { id: 'price-currency', label: '币种管理' },
      { id: 'price-zones', label: '分区设置' },
      { id: 'price-list', label: '报价列表' },
      { id: 'price-void', label: '作废报价' },
      { id: 'price-delivery-zone', label: '派送分区' },
      { id: 'price-remote-zone', label: '偏远分区' },
      { id: 'price-vas', label: '增值服务' },
      { id: 'price-customs', label: '清关航代' },
    ]
  }
];

const CUSTOMER_ITEMS: SidebarItem[] = [
  {
    id: 'cust-mgmt-group',
    label: '客户管理',
    icon: Users,
    subItems: [
      { id: 'cust-list', label: '客户列表' },
      { id: 'cust-logout', label: '注销客户' },
      { id: 'cust-account', label: '客户账号' },
      { id: 'cust-add', label: '添加客户' },
      { id: 'cust-import', label: '导入客户' },
    ]
  },
  {
    id: 'cust-hierarchy-group',
    label: '客户层级',
    icon: Layers,
    subItems: [
      { id: 'h-arrears', label: '欠费客户' },
      { id: 'h-sleeping', label: '沉睡客户' },
      { id: 'h-quality', label: '优质客户' },
      { id: 'h-recharge-rank', label: '充值排行' },
      { id: 'h-rules', label: '层级规则' },
    ]
  },
  {
    id: 'ticket-mgmt-group',
    label: '工单管理',
    icon: MessageSquare,
    subItems: [
      { id: 'tk-add', label: '添加工单' },
      { id: 'tk-all', label: '全部工单' },
      { id: 'tk-pending', label: '待处理工单' },
      { id: 'tk-processing', label: '处理中工单' },
      { id: 'tk-completed', label: '已完成工单' },
      { id: 'tk-abnormal', label: '异常工单' },
    ]
  },
  {
    id: 'shop-mgmt-group',
    label: '店铺管理',
    icon: Store,
    subItems: [
      { id: 'shop-list', label: '店铺管理' },
      { id: 'shop-order-check', label: '订单排查' },
    ]
  },
  {
    id: 'vip-mgmt',
    label: 'VIP管理',
    icon: Star,
  },
  {
    id: 'login-logs',
    label: '登录日志',
    icon: History,
  },
  {
    id: 'login-overview',
    label: '登录概况',
    icon: BarChart3,
  }
];

const AI_ITEMS: SidebarItem[] = [
  { id: 'mgr-monthly', label: '经理每月报表', icon: FileText },
  { id: 'mgr-daily', label: '经理每日报表', icon: FileText },
  { id: 'fin-analysis', label: '财务概况分析', icon: BarChart3 },
  { id: 'wh-analysis', label: '仓库概况分析', icon: BarChart3 },
  { id: 'wh-fin-overview', label: '仓库财务概况', icon: BarChart3 },
  { id: 'io-analysis', label: '收支统计分析', icon: BarChart3 },
  { id: 'order-analysis', label: '订单统计分析', icon: BarChart },
  { id: 'cust-order-rank', label: '客户订单排行', icon: BarChart },
  { id: 'sales-perf', label: '销售绩效统计', icon: BarChart },
  { id: 'cs-perf', label: '客服绩效统计', icon: BarChart },
  { id: 'cust-analysis', label: '客户统计分析', icon: BarChart },
];

const WEB_ITEMS: SidebarItem[] = [
  {
    id: 'web-news',
    label: '资讯管理',
    icon: Newspaper,
  },
  {
    id: 'web-ads',
    label: '广告设置',
    icon: Megaphone,
  },
  {
    id: 'web-wechat-group',
    label: '微信设置',
    icon: MessageCircle,
    subItems: [
      { id: 'wechat-follow', label: '关注回复' },
      { id: 'wechat-menu', label: '自定义菜单' },
      { id: 'wechat-auto', label: '自动回复' },
    ]
  },
  {
    id: 'web-site-settings',
    label: '网站设置',
    icon: Settings,
  },
  {
    id: 'web-mobile-site',
    label: '手机网站',
    icon: Smartphone,
  },
  {
    id: 'web-friend-links',
    label: '友情链接',
    icon: Link,
  },
  {
    id: 'web-navbar-settings',
    label: '导航栏设置',
    icon: Layout,
  }
];

const SYSTEM_ITEMS: SidebarItem[] = [
  {
    id: 'sys-admin-group',
    label: '管理员',
    icon: UserPlus,
    subItems: [
      { id: 'admin-log', label: '管理员日志' },
      { id: 'admin-list', label: '管理员列表' },
      { id: 'admin-role', label: '角色管理' },
    ]
  },
  {
    id: 'sys-delivery',
    label: '配送管理',
    icon: Truck,
  },
  {
    id: 'sys-base-group',
    label: '常规设置',
    icon: Settings,
    subItems: [
      { id: 'type-set', label: '类型设置' },
      { id: 'express-set', label: '发货快递' },
      { id: 'country-list', label: '国家列表' },
      { id: 'region-list', label: '地区列表' },
      { id: 'cust-ann-remind', label: '客户公告提醒' },
      { id: 'reg-protocol', label: '用户注册协议' },
      { id: 'corp-ann-remind', label: '公司公告提醒' },
    ]
  },
  {
    id: 'sys-api-group',
    label: 'API管理',
    icon: Zap,
    subItems: [
      { id: 'api-list', label: 'API列表' },
      { id: 'api-recv-log', label: 'API接收日志' },
      { id: 'api-req-log', label: 'API请求日志' },
      { id: 'ups-account', label: 'Ups账户设置' },
      { id: 'fedex-account', label: 'Fedex账户设置' },
      { id: 'usps-account', label: 'USPS账号设置' },
      { id: 'ca-post-account', label: '加拿大邮政账户' },
      { id: 'sf-local-account', label: '顺丰本土账户' },
      { id: 'ship-code-set', label: '发货编码设置' },
    ]
  },
  {
    id: 'handheld-print-process',
    label: '手持打印进程',
    icon: Monitor,
  },
  {
    id: 'handheld-print-history',
    label: '手持打印历史',
    icon: History,
  }
];

export const ALL_SIDEBAR_ITEMS = [
  ...NEBULA_ITEMS,
  ...ORDERS_ITEMS,
  ...INVENTORY_ITEMS,
  ...FINANCE_ITEMS,
  ...CUSTOMER_ITEMS,
  ...WEB_ITEMS,
  ...SYSTEM_ITEMS
];

interface SidebarProps {
  activeModuleId: string;
  activeItemId: string;
  setActiveItemId: (id: string, label?: string) => void;
}

export function Sidebar({ activeModuleId, activeItemId, setActiveItemId }: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [expandedItems, setExpandedItems] = useState<string[]>(['product-management', 'head-leg', 'orders-dropship-group', 'inventory-mgmt-group', 'fin-inbound-group', 'cust-mgmt-group', 'ai-mgmt-group', 'web-home-group', 'sys-conf-group', 'on-shelf-group', 'wh-reports-group', 'sorting-equip-group']);

  const sidebarItems = 
    activeModuleId === 'trace' ? TRACE_ITEMS : 
    activeModuleId === 'orders' ? ORDERS_ITEMS : 
    activeModuleId === 'inventory' ? INVENTORY_ITEMS :
    activeModuleId === 'finance' ? FINANCE_ITEMS :
    activeModuleId === 'customer' ? CUSTOMER_ITEMS :
    activeModuleId === 'ai' ? AI_ITEMS :
    activeModuleId === 'web' ? WEB_ITEMS :
    activeModuleId === 'system' ? SYSTEM_ITEMS :
    NEBULA_ITEMS;

  const handleItemClick = (item: SidebarItem) => {

    if (item.subItems && item.subItems.length > 0) {
      if (isCollapsed) {
        setIsCollapsed(false);
        setExpandedItems([item.id]);
      } else {
        setExpandedItems(prev => 
          prev.includes(item.id) ? prev.filter(id => id !== item.id) : [...prev, item.id]
        );
      }
    } else {
      setActiveItemId(item.id);
    }
  };

  return (
    <div 
      className={cn(
        "bg-[#001529] text-white flex flex-col h-full transition-all duration-300 border-r border-[#001529] z-50 shadow-xl",
        isCollapsed ? "w-16" : "w-64"
      )}
    >
      <div className="h-10 flex items-center justify-center border-b border-gray-700/30">
        <button 
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="hover:bg-blue-600/20 p-1.5 rounded transition-colors text-gray-400 hover:text-white"
        >
          {isCollapsed ? <Menu size={18} /> : <ChevronLeft size={18} />}
        </button>
      </div>

      <nav className="flex-1 mt-2 overflow-y-auto overflow-x-hidden custom-scrollbar">
        {sidebarItems.map((item) => {
          const isExpanded = expandedItems.includes(item.id);
          const hasActiveChild = item.subItems?.some(sub => sub.id === activeItemId);
          const isActive = activeItemId === item.id;

          return (
            <div key={item.id} className="mb-0.5">
              <button
                onClick={() => {
                  if (item.subItems) {
                    handleItemClick(item);
                  } else {
                    setActiveItemId(item.id, item.label);
                  }
                }}
                className={cn(
                  "w-full flex items-center px-4 py-3 text-sm transition-all relative group",
                  (hasActiveChild || isActive) ? "bg-blue-600/10 text-white" : "text-gray-400 hover:text-white hover:bg-white/5",
                  isActive && "bg-blue-600"
                )}
              >
                <item.icon size={18} className={cn("min-w-[18px] transition-colors", (hasActiveChild || isActive) ? "text-white" : "")} />
                {!isCollapsed && (
                  <>
                    <span className="ml-3 truncate flex-1 text-left">{item.label}</span>
                    {item.subItems && (
                      <ChevronDown 
                        size={14} 
                        className={cn(
                          "ml-auto opacity-50 transition-transform duration-200",
                          isExpanded ? "rotate-180" : ""
                        )} 
                      />
                    )}
                  </>
                )}
              </button>

              <AnimatePresence initial={false}>
                {!isCollapsed && isExpanded && item.subItems && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    className="overflow-hidden bg-[#000c17]"
                  >
                    {item.subItems.map((sub) => (
                      <button
                        key={sub.id}
                        onClick={() => setActiveItemId(sub.id, sub.label)}
                        className={cn(
                          "w-full flex items-center pl-11 pr-4 py-2 text-xs transition-colors relative",
                          activeItemId === sub.id 
                            ? "bg-blue-600 text-white" 
                            : "text-gray-400 hover:text-white hover:bg-white/5"
                        )}
                      >
                        <span className="truncate">{sub.label}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </nav>
    </div>
  );
}
