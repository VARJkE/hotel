import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { RoomsComponent } from './components/rooms/rooms.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ContactComponent } from './components/contact/contact.component';
import { MainComponent } from './components/main/main.component';
import { RoomDetailsComponent } from './components/room-details/room-details.component';
import { BookingRoomComponent } from './components/booking-room/booking-room.component';
import { AvailableRoomsComponent } from './components/available-rooms/available-rooms.component';

const routes: Routes = [
    { path: 'main', title: 'Main', component: MainComponent},
    { path: 'about', title: 'About Us', component: AboutComponent},
    { path: 'rooms', title: 'Our Rooms', component: RoomsComponent},
    { path: 'gallery', title: 'Rooms Gallery', component: GalleryComponent},
    { path: 'contact', title: 'Contact Us', component: ContactComponent},
    { path: 'room/details', title: 'Room Details', component: RoomDetailsComponent},
    { path: 'rooms/booking', title: 'Booking', component: BookingRoomComponent},
    { path: 'rooms/available', title: 'Available Rooms', component: AvailableRoomsComponent},
    

    { path: '', redirectTo: '/main', pathMatch: 'full'},
    { path: '**', component: MainComponent },

];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {

}