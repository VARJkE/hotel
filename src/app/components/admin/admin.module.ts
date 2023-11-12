import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { BookingsComponent } from './components/bookings/bookings.component';
import { BookingsDetailsComponent } from './components/bookings-details/bookings-details.component';
import { AsideComponent } from './components/aside/aside.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AdminDashboardComponent,
    BookingsComponent,
    BookingsDetailsComponent,
    AsideComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
