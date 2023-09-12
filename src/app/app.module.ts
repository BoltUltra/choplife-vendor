import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrdersComponent } from './orders/orders.component';
import { MenuComponent } from './menu/menu.component';
import { FoodComponent } from './food/food.component';
import { PaymentComponent } from './payment/payment.component';
import { SalesReportComponent } from './sales-report/sales-report.component';
import { SettlementsComponent } from './settlements/settlements.component';
import { SettingsComponent } from './settings/settings.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { OverviewComponent } from './overview/overview.component';
import { HeaderComponent } from './header/header.component';
import { SidebarService } from 'src/lib/sidebar.service';
import { DataTablesModule } from 'angular-datatables';
// import { ChartsModule } from 'ng2-charts';
// import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    OrdersComponent,
    MenuComponent,
    FoodComponent,
    PaymentComponent,
    SalesReportComponent,
    SettlementsComponent,
    SettingsComponent,
    OverviewComponent,
    HeaderComponent,
  ],
  imports: [BrowserModule, AppRoutingModule,DataTablesModule],
  providers: [SidebarService],
  bootstrap: [AppComponent],
})
export class AppModule {}
