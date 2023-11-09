import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { BookingsComponent } from './components/bookings/bookings.component';
import { BookingsDetailsComponent } from './components/bookings-details/bookings-details.component';

const routes: Routes = [
  { path: '', component: AdminDashboardComponent,
      children: [
        { path: 'home', component: HomeComponent},
        { path: 'bookings', component: BookingsComponent},
        { path: 'bookings/details/:id', component: BookingsDetailsComponent},
        { path: '', redirectTo: 'home', pathMatch: 'full'}
      ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
