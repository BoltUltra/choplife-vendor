import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersComponent } from './orders/orders.component';
import { MenuComponent } from './menu/menu.component';
import { FoodComponent } from './food/food.component';
import { SettingsComponent } from './settings/settings.component';
import { SettlementsComponent } from './settlements/settlements.component';
import { SalesReportComponent } from './sales-report/sales-report.component';
import { PaymentComponent } from './payment/payment.component';
import { OverviewComponent } from './overview/overview.component';

const routes: Routes = [
  {
    path: '',
    component: OverviewComponent,
    title: 'Vendor Dashboard | Overview',
  },
  {
    path: 'orders',
    component: OrdersComponent,
    title: 'Vendor Dashboard | Orders',
  },
  { path: 'menu', component: MenuComponent, title: 'Vendor Dashboard | Menu' },
  { path: 'food', component: FoodComponent, title: 'Vendor Dashboard | Food' },
  {
    path: 'payment',
    component: PaymentComponent,
    title: 'Vendor Dashboard | Payment',
  },
  {
    path: 'sales-report',
    component: SalesReportComponent,
    title: 'Vendor Dashboard | Sales Report',
  },
  {
    path: 'settlements',
    component: SettlementsComponent,
    title: 'Vendor Dashboard | Settlements',
  },
  {
    path: 'settings',
    component: SettingsComponent,
    title: 'Vendor Dashboard | Settings',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
