import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { AdminRoutingModule } from './admin-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { BookingsComponent } from './components/bookings/bookings.component';
import { BookingsDetailsComponent } from './components/bookings-details/bookings-details.component';
import { AsideComponent } from './components/aside/aside.component';
import { RoomsComponent } from './components/rooms/rooms.component';
import { MatPaginatorModule } from '@angular/material/paginator';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AdminDashboardComponent,
    BookingsComponent,
    BookingsDetailsComponent,
    AsideComponent,
    RoomsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatDialogModule,
    MatPaginatorModule
  ]
})
export class AdminModule { }
