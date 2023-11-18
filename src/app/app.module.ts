import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { RoomsComponent } from './components/rooms/rooms.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ContactComponent } from './components/contact/contact.component';
import { MainComponent } from './components/main/main.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AvailableRoomsComponent } from './components/available-rooms/available-rooms.component';
import { AppRoutingModule } from './app-routing.module';
import { RoomDetailsComponent } from './components/room-details/room-details.component';
import { BookingRoomComponent } from './components/booking-room/booking-room.component';
import {DatePipe} from '@angular/common';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { LoginComponent } from './components/login/login.component';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    RoomsComponent,
    GalleryComponent,
    ContactComponent,
    MainComponent,
    AvailableRoomsComponent,
    RoomDetailsComponent,
    BookingRoomComponent,
    LoginComponent,
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatSelectModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    NgxGalleryModule,
    MatProgressSpinnerModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
