/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Sidebar } from './components/Sidebar';
import { TopNav } from './components/TopNav';
import { StatCards } from './components/StatCards';
import { ActionSection } from './components/ActionSection';
import { DashboardContent } from './components/DashboardContent';
import { MaterialAdd } from './views/MaterialAdd';
import { AddProductSingle } from './views/AddProductSingle';
import { BulkImportProduct } from './views/BulkImportProduct';
import { ProductManagement } from './views/ProductManagement';
import { DistributionManagement } from './views/DistributionManagement';
import { CategoryManagement } from './views/CategoryManagement';
import { ProhibitedManagement } from './views/ProhibitedManagement';
import { HSCodeManagement } from './views/HSCodeManagement';
import { AddOrder } from './views/AddOrder';
import { OrderList } from './views/OrderList';
import { PendingConfirmationOrders } from './views/PendingConfirmationOrders';
import { OverseasPendingInWarehouse } from './views/OverseasPendingInWarehouse';
import { OverseasInWarehouse } from './views/OverseasInWarehouse';
import { ConfirmationFailedOrders } from './views/ConfirmationFailedOrders';
import { OrderRecycleBin } from './views/OrderRecycleBin';
import { AddReturnOrder } from './views/AddReturnOrder';
import { AddDropshipOrder } from './views/AddDropshipOrder';
import { ReturnOrderList } from './views/ReturnOrderList';
import { ReturnPendingConfirmation } from './views/ReturnPendingConfirmation';
import { ReturnOverseasPendingInWarehouse } from './views/ReturnOverseasPendingInWarehouse';
import { ReturnOverseasInWarehouse } from './views/ReturnOverseasInWarehouse';
import { ReturnConfirmationFailed } from './views/ReturnConfirmationFailed';
import { ReturnOrderRecycleBin } from './views/ReturnOrderRecycleBin';
import { DropshipOrderList } from './views/DropshipOrderList';
import { TrackManagement } from './views/TrackManagement';
import { InventoryManagement } from './views/InventoryManagement';
import { MaterialManagement } from './views/MaterialManagement';
import { AnonList } from './views/AnonList';
import { DropshipPendingShelf } from './views/DropshipPendingShelf';
import { TransitPendingShelf } from './views/TransitPendingShelf';
import { InboundReport } from './views/InboundReport';
import { OutboundReport } from './views/OutboundReport';
import { SkuInOutReport } from './views/SkuInOutReport';
import { SortingPortManagement } from './views/SortingPortManagement';
import { SortingFlow } from './views/SortingFlow';
import { SortingStatus } from './views/SortingStatus';
import { WarehouseListConfig } from './views/WarehouseListConfig';
import { FBAWarehouse } from './views/FBAWarehouse';
import { ShelfAdd } from './views/ShelfAdd';
import { ShelfMgmt } from './views/ShelfMgmt';
import { WhUsageRate } from './views/WhUsageRate';
import { ShelfVacancyRate } from './views/ShelfVacancyRate';
import { BillingManagement } from './views/BillingManagement';
import { DeliveryBilling } from './views/DeliveryBilling';
import { OtherBilling } from './views/OtherBilling';
import { ClientSettlement } from './views/ClientSettlement';
import { CompanySettlement } from './views/CompanySettlement';
import { RechargeManagement } from './views/RechargeManagement';
import { FinancialReports } from './views/FinancialReports';
import { AgentSettlement } from './views/AgentSettlement';
import { PriceManagement } from './views/PriceManagement';
import { GenericView } from './views/GenericView';
import { ChevronRight, Home } from 'lucide-react';

export default function App() {
  const [activeModuleId, setActiveModuleId] = React.useState('nebula');
  const [activeItemId, setActiveItemId] = React.useState('dashboard');
  const [openTabs, setOpenTabs] = React.useState<{id: string, label: string}[]>([{ id: 'dashboard', label: '首页' }]);

  const handleSetTab = (id: string, label?: string) => {
    setActiveItemId(id);
    if (!openTabs.find(t => t.id === id)) {
      setOpenTabs([...openTabs, { id, label: label || id }]);
    }
  };

  const closeTab = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    const newTabs = openTabs.filter(t => t.id !== id);
    if (newTabs.length === 0) {
      newTabs.push({ id: 'dashboard', label: '首页' });
    }
    setOpenTabs(newTabs);
    if (activeItemId === id) {
      setActiveItemId(newTabs[newTabs.length - 1].id);
    }
  };

  return (
    <div className="flex h-screen overflow-hidden bg-[#f0f2f5]">
      {/* Sidebar - depends on active module */}
      <Sidebar 
        activeModuleId={activeModuleId} 
        activeItemId={activeItemId} 
        setActiveItemId={handleSetTab} 
      />

      {/* Main Container */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Header Navigation */}
        <TopNav activeModuleId={activeModuleId} setActiveModuleId={setActiveModuleId} />

        {/* Main Content Area */}
        <main className="flex-1 flex flex-col overflow-hidden bg-[#f0f2f5] min-h-0">
          {/* Tabs row */}
          <div className="h-10 shrink-0 bg-white border-b border-gray-100 flex items-center px-2 gap-1 text-xs">
            {openTabs.map((tab) => (
              <div
                key={tab.id}
                onClick={() => setActiveItemId(tab.id)}
                className={`group flex items-center gap-2 px-3 py-1.5 h-8 border rounded-sm cursor-pointer select-none transition-colors max-w-[150px]
                  ${activeItemId === tab.id 
                    ? 'bg-blue-50 border-blue-200 text-blue-600' 
                    : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'
                  }`}
                title={tab.label}
              >
                <div className={`w-1.5 h-1.5 rounded-full ${activeItemId === tab.id ? 'bg-blue-500' : 'bg-gray-300'}`}></div>
                <span className="truncate">{tab.label}</span>
                {tab.id !== 'dashboard' && (
                  <button 
                    onClick={(e) => closeTab(e, tab.id)}
                    className={`ml-1 flex-shrink-0 p-0.5 rounded text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-gray-200 hover:text-gray-700
                      ${activeItemId === tab.id ? 'opacity-100 hover:bg-blue-200' : ''}`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Actual Dashboard Body */}
          <div className={`w-full flex-1 flex flex-col min-h-0 ${['single-add', 'material-add', 'bulk-import'].includes(activeItemId) || activeItemId === 'dashboard' ? 'overflow-auto p-4' : ''}`}>
            {activeItemId === 'single-add' ? (
              <AddProductSingle />
            ) : activeItemId === 'material-add' ? (
              <MaterialAdd />
            ) : activeItemId === 'bulk-import' ? (
              <BulkImportProduct />
            ) : ['pending-review', 'product-list', 'disabled-products', 'rejected-products'].includes(activeItemId) ? (
              <ProductManagement mode={activeItemId as any} />
            ) : ['pending-dist', 'dist-list', 'dist-apply'].includes(activeItemId) ? (
              <DistributionManagement mode={activeItemId as any} />
            ) : activeItemId === 'category-management' ? (
              <CategoryManagement />
            ) : activeItemId === 'prohibited-items' ? (
              <ProhibitedManagement />
            ) : activeItemId === 'hs-codes' ? (
              <HSCodeManagement />
            ) : activeItemId === 'order-add' ? (
              <AddOrder />
            ) : activeItemId === 'all-orders' ? (
              <OrderList />
            ) : activeItemId === 'pending-confirm' ? (
              <PendingConfirmationOrders />
            ) : activeItemId === 'pending-warehouse' ? (
              <OverseasPendingInWarehouse />
            ) : activeItemId === 'in-warehouse' ? (
              <OverseasInWarehouse />
            ) : activeItemId === 'failed-confirm' ? (
              <ConfirmationFailedOrders />
            ) : activeItemId === 'order-recycle' ? (
              <OrderRecycleBin />
            ) : activeItemId === 'return-order-add' ? (
              <AddReturnOrder />
            ) : activeItemId === 'add-dropship-order' ? (
              <AddDropshipOrder />
            ) : activeItemId === 'return-order-list' ? (
              <ReturnOrderList />
            ) : activeItemId === 'ret-pending' ? (
              <ReturnPendingConfirmation />
            ) : activeItemId === 'ret-wh-pending' ? (
              <ReturnOverseasPendingInWarehouse />
            ) : activeItemId === 'ret-wh-done' ? (
              <ReturnOverseasInWarehouse />
            ) : activeItemId === 'ret-failed' ? (
              <ReturnConfirmationFailed />
            ) : activeItemId === 'ret-recycle' ? (
              <ReturnOrderRecycleBin />
            ) : ['ds-all', 'ds-pending', 'ds-pack', 'ds-oos', 'ds-ship', 'ds-waiting', 'ds-signed', 'ds-deleted'].includes(activeItemId) ? (
              <DropshipOrderList mode={activeItemId as any} />
            ) : ['track-rules', 'track-orders', 'track-sign', 'track-delivery-err', 'track-timeout-err', 'track-analysis'].includes(activeItemId) ? (
              <TrackManagement mode={activeItemId as any} />
            ) : ['inv-query', 'owner-dist-inv', 'cust-dist-inv', 'inv-query-combo', 'inv-age-analysis', 'inv-detail', 'inv-warning', 'inv-transit', 'inv-history-shelf', 'pending-off-shelf', 'done-off-shelf'].includes(activeItemId) ? (
              <InventoryManagement mode={activeItemId as any} />
            ) : activeItemId === 'ds-pending-shelf' ? (
              <DropshipPendingShelf />
            ) : activeItemId === 'transit-pending-shelf' ? (
              <TransitPendingShelf />
            ) : activeItemId === 'wh-in-report' ? (
              <InboundReport />
            ) : activeItemId === 'wh-out-report' ? (
              <OutboundReport />
            ) : activeItemId === 'sku-io-report' ? (
              <SkuInOutReport />
            ) : activeItemId === 'sorting-ports' ? (
              <SortingPortManagement />
            ) : activeItemId === 'sorting-flow' ? (
              <SortingFlow />
            ) : activeItemId === 'sorting-status' ? (
              <SortingStatus />
            ) : activeItemId === 'wh-list-config' ? (
              <WarehouseListConfig />
            ) : activeItemId === 'fba-wh' ? (
              <FBAWarehouse />
            ) : activeItemId === 'shelf-add' ? (
              <ShelfAdd />
            ) : activeItemId === 'shelf-mgmt' ? (
              <ShelfMgmt />
            ) : activeItemId === 'wh-usage-rate' ? (
              <WhUsageRate />
            ) : activeItemId === 'shelf-vacancy-rate' ? (
              <ShelfVacancyRate />
            ) : ['material-list', 'material-record'].includes(activeItemId) ? (
              <MaterialManagement mode={activeItemId as any} />
            ) : activeItemId === 'orders-anon-list' ? (
              <AnonList />
            ) : ['inbound-price-review', 'inbound-pending-bill', 'inbound-balance-bill', 'inbound-write-off-bill', 'inbound-done-bill', 'del-write-off-bill', 'del-balance-bill', 'del-done-bill'].includes(activeItemId) ? (
              <BillingManagement mode={activeItemId as any} />
            ) : ['del-price-review', 'del-pending-bill', 'del-dist-bill'].includes(activeItemId) ? (
              <DeliveryBilling mode={activeItemId as any} />
            ) : ['del-misc-payable', 'del-srv-order', 'del-storage-bill', 'del-cost-settlement'].includes(activeItemId) ? (
              <OtherBilling mode={activeItemId as any} />
            ) : ['cust-uncollected', 'cust-collected', 'cust-bill-mgmt', 'cust-recharge-sum'].includes(activeItemId) ? (
              <ClientSettlement mode={activeItemId as any} />
            ) : ['corp-daily-flow', 'corp-monthly-flow', 'corp-wh-flow', 'corp-agent-flow', 'corp-cust-balance'].includes(activeItemId) ? (
              <CompanySettlement mode={activeItemId as any} />
            ) : ['recharge-new', 'recharge-list', 'recharge-done', 'recharge-detail', 'recharge-method'].includes(activeItemId) ? (
              <RechargeManagement mode={activeItemId as any} />
            ) : ['report-sale-detail', 'report-sale-sum', 'report-inbound', 'report-delivery'].includes(activeItemId) ? (
              <FinancialReports mode={activeItemId as any} />
            ) : ['agent-fee-entry', 'agent-fee-list', 'agent-pending-bill', 'agent-write-off-bill', 'agent-done-bill', 'agent-shipping-check'].includes(activeItemId) ? (
              <AgentSettlement mode={activeItemId as any} />
            ) : ['price-currency', 'price-zones', 'price-list', 'price-void', 'price-delivery-zone', 'price-remote-zone'].includes(activeItemId) ? (
              <PriceManagement mode={activeItemId as any} />
            ) : [
              'cust-list', 'cust-logout', 'cust-account', 'cust-add', 'cust-import',
              'h-arrears', 'h-sleeping', 'h-quality', 'h-recharge-rank', 'h-rules',
              'tk-add', 'tk-all', 'tk-pending', 'tk-processing', 'tk-completed', 'tk-abnormal',
              'shop-list', 'shop-order-check', 'vip-mgmt',
              'login-logs', 'login-overview',
              'mgr-monthly', 'mgr-daily', 'fin-analysis', 'wh-analysis', 'wh-fin-overview', 'io-analysis', 'order-analysis', 'cust-order-rank', 'sales-perf', 'cs-perf', 'cust-analysis',
              'web-news', 'web-ads', 'wechat-follow', 'wechat-menu', 'wechat-auto', 'web-site-settings', 'web-mobile-site', 'web-friend-links', 'web-navbar-settings',
              'admin-log', 'admin-list', 'admin-role', 'sys-delivery', 'type-set', 'express-set', 'country-list', 'region-list', 'cust-ann-remind', 'reg-protocol', 'corp-ann-remind',
              'api-list', 'api-recv-log', 'api-req-log', 'ups-account', 'fedex-account', 'usps-account', 'ca-post-account', 'sf-local-account', 'ship-code-set', 'handheld-print-process', 'handheld-print-history',
              'price-vas', 'price-customs'
            ].includes(activeItemId) ? (
              <GenericView mode={activeItemId} />
            ) : (
              <div className="flex flex-col gap-4 overflow-auto p-4 w-full h-full">
                {/* Row 1: KPI Stat Cards */}
                <StatCards />

                {/* Row 2: Search & Quick Actions */}
                <ActionSection />

                {/* Row 3 & 4: Charts, Status & Work Order List */}
                <DashboardContent />
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
