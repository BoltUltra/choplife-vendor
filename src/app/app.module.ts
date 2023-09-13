import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
import { SettlementsTableComponent } from './settlements-table/settlements-table.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { PagesComponent } from './settings/pages/pages.component';
import { FoodListTableComponent } from './food-list-table/food-list-table.component';

import { DataTablesModule } from 'angular-datatables';
import { PaymentTableComponent } from './payment/payment-table/payment-table.component';
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
    SettlementsTableComponent,
    LoginComponent,
    PagesComponent,
<<<<<<< HEAD
    PaymentTableComponent,
=======
    FoodListTableComponent,
>>>>>>> dd3bb11b66fa7ec47f2895d0b352869617706bfe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
