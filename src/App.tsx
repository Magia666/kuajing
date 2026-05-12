/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, useParams } from 'react-router-dom';
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
import { CustomerList } from './views/CustomerList';
import { GenericView } from './views/GenericView';
import { ManagerMonthlyReport } from './views/ManagerMonthlyReport';

function Dashboard() {
  return (
    <div className="flex flex-col gap-4 overflow-auto p-4 w-full h-full">
      <StatCards />
      <ActionSection />
      <DashboardContent />
    </div>
  );
}

function ViewSwitcher() {
  const { viewId } = useParams();
  const activeItemId = viewId || 'dashboard';

  let content = null;

  if (activeItemId === 'single-add') content = <AddProductSingle />;
  else if (activeItemId === 'material-add') content = <MaterialAdd />;
  else if (activeItemId === 'bulk-import') content = <BulkImportProduct />;
  else if (['pending-review', 'product-list', 'disabled-products', 'rejected-products'].includes(activeItemId)) content = <ProductManagement mode={activeItemId as any} />;
  else if (['pending-dist', 'dist-list', 'dist-apply'].includes(activeItemId)) content = <DistributionManagement mode={activeItemId as any} />;
  else if (activeItemId === 'category-management') content = <CategoryManagement />;
  else if (activeItemId === 'prohibited-items') content = <ProhibitedManagement />;
  else if (activeItemId === 'hs-codes') content = <HSCodeManagement />;
  else if (activeItemId === 'order-add') content = <AddOrder />;
  else if (activeItemId === 'all-orders') content = <OrderList />;
  else if (activeItemId === 'pending-confirm') content = <PendingConfirmationOrders />;
  else if (activeItemId === 'pending-warehouse') content = <OverseasPendingInWarehouse />;
  else if (activeItemId === 'in-warehouse') content = <OverseasInWarehouse />;
  else if (activeItemId === 'failed-confirm') content = <ConfirmationFailedOrders />;
  else if (activeItemId === 'order-recycle') content = <OrderRecycleBin />;
  else if (activeItemId === 'return-order-add') content = <AddReturnOrder />;
  else if (activeItemId === 'add-dropship-order') content = <AddDropshipOrder />;
  else if (activeItemId === 'return-order-list') content = <ReturnOrderList />;
  else if (activeItemId === 'ret-pending') content = <ReturnPendingConfirmation />;
  else if (activeItemId === 'ret-wh-pending') content = <ReturnOverseasPendingInWarehouse />;
  else if (activeItemId === 'ret-wh-done') content = <ReturnOverseasInWarehouse />;
  else if (activeItemId === 'ret-failed') content = <ReturnConfirmationFailed />;
  else if (activeItemId === 'ret-recycle') content = <ReturnOrderRecycleBin />;
  else if (['ds-all', 'ds-pending', 'ds-pack', 'ds-oos', 'ds-ship', 'ds-waiting', 'ds-signed', 'ds-deleted'].includes(activeItemId)) content = <DropshipOrderList mode={activeItemId as any} />;
  else if (['track-rules', 'track-orders', 'track-sign', 'track-delivery-err', 'track-timeout-err', 'track-analysis'].includes(activeItemId)) content = <TrackManagement mode={activeItemId as any} />;
  else if (['inv-query', 'owner-dist-inv', 'cust-dist-inv', 'inv-query-combo', 'inv-age-analysis', 'inv-detail', 'inv-warning', 'inv-transit', 'inv-history-shelf', 'pending-off-shelf', 'done-off-shelf'].includes(activeItemId)) content = <InventoryManagement mode={activeItemId as any} />;
  else if (activeItemId === 'ds-pending-shelf') content = <DropshipPendingShelf />;
  else if (activeItemId === 'transit-pending-shelf') content = <TransitPendingShelf />;
  else if (activeItemId === 'wh-in-report') content = <InboundReport />;
  else if (activeItemId === 'wh-out-report') content = <OutboundReport />;
  else if (activeItemId === 'sku-io-report') content = <SkuInOutReport />;
  else if (activeItemId === 'sorting-ports') content = <SortingPortManagement />;
  else if (activeItemId === 'sorting-flow') content = <SortingFlow />;
  else if (activeItemId === 'sorting-status') content = <SortingStatus />;
  else if (activeItemId === 'wh-list-config') content = <WarehouseListConfig />;
  else if (activeItemId === 'fba-wh') content = <FBAWarehouse />;
  else if (activeItemId === 'shelf-add') content = <ShelfAdd />;
  else if (activeItemId === 'shelf-mgmt') content = <ShelfMgmt />;
  else if (activeItemId === 'wh-usage-rate') content = <WhUsageRate />;
  else if (activeItemId === 'shelf-vacancy-rate') content = <ShelfVacancyRate />;
  else if (['material-list', 'material-record'].includes(activeItemId)) content = <MaterialManagement mode={activeItemId as any} />;
  else if (activeItemId === 'orders-anon-list') content = <AnonList />;
  else if (['inbound-price-review', 'inbound-pending-bill', 'inbound-balance-bill', 'inbound-write-off-bill', 'inbound-done-bill', 'del-write-off-bill', 'del-balance-bill', 'del-done-bill'].includes(activeItemId)) content = <BillingManagement mode={activeItemId as any} />;
  else if (['del-price-review', 'del-pending-bill', 'del-dist-bill'].includes(activeItemId)) content = <DeliveryBilling mode={activeItemId as any} />;
  else if (['del-misc-payable', 'del-srv-order', 'del-storage-bill', 'del-cost-settlement'].includes(activeItemId)) content = <OtherBilling mode={activeItemId as any} />;
  else if (['cust-uncollected', 'cust-collected', 'cust-bill-mgmt', 'cust-recharge-sum'].includes(activeItemId)) content = <ClientSettlement mode={activeItemId as any} />;
  else if (['corp-daily-flow', 'corp-monthly-flow', 'corp-wh-flow', 'corp-agent-flow', 'corp-cust-balance'].includes(activeItemId)) content = <CompanySettlement mode={activeItemId as any} />;
  else if (['recharge-new', 'recharge-list', 'recharge-done', 'recharge-detail', 'recharge-method'].includes(activeItemId)) content = <RechargeManagement mode={activeItemId as any} />;
  else if (['report-sale-detail', 'report-sale-sum', 'report-inbound', 'report-delivery'].includes(activeItemId)) content = <FinancialReports mode={activeItemId as any} />;
  else if (['agent-fee-entry', 'agent-fee-list', 'agent-pending-bill', 'agent-write-off-bill', 'agent-done-bill', 'agent-shipping-check'].includes(activeItemId)) content = <AgentSettlement mode={activeItemId as any} />;
  else if (['price-currency', 'price-zones', 'price-list', 'price-void', 'price-delivery-zone', 'price-remote-zone'].includes(activeItemId)) content = <PriceManagement mode={activeItemId as any} />;
  else if (activeItemId === 'cust-list') content = <CustomerList />;
  else if (activeItemId === 'mgr-monthly') content = <ManagerMonthlyReport />;
  else if ([ 'cust-logout', 'cust-account', 'cust-add', 'cust-import', 'h-arrears', 'h-sleeping', 'h-quality', 'h-recharge-rank', 'h-rules', 'tk-add', 'tk-all', 'tk-pending', 'tk-processing', 'tk-completed', 'tk-abnormal', 'shop-list', 'shop-order-check', 'vip-mgmt', 'login-logs', 'login-overview', 'mgr-daily', 'fin-analysis', 'wh-analysis', 'wh-fin-overview', 'io-analysis', 'order-analysis', 'cust-order-rank', 'sales-perf', 'cs-perf', 'cust-analysis', 'web-news', 'web-ads', 'wechat-follow', 'wechat-menu', 'wechat-auto', 'web-site-settings', 'web-mobile-site', 'web-friend-links', 'web-navbar-settings', 'admin-log', 'admin-list', 'admin-role', 'sys-delivery', 'type-set', 'express-set', 'country-list', 'region-list', 'cust-ann-remind', 'reg-protocol', 'corp-ann-remind', 'api-list', 'api-recv-log', 'api-req-log', 'ups-account', 'fedex-account', 'usps-account', 'ca-post-account', 'sf-local-account', 'ship-code-set', 'handheld-print-process', 'handheld-print-history', 'price-vas', 'price-customs' ].includes(activeItemId)) content = <GenericView mode={activeItemId} />;
  else content = <Dashboard />;

  return (
    <div className={`w-full flex-1 flex flex-col min-h-0 ${['single-add', 'material-add', 'bulk-import'].includes(activeItemId) || activeItemId === 'dashboard' ? 'overflow-auto p-3' : ''}`}>
      {content}
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex h-screen overflow-hidden bg-[#f0f2f5]">
        <main className="flex-1 flex flex-col overflow-hidden bg-[#f0f2f5] min-h-0">
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/:viewId" element={<ViewSwitcher />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
