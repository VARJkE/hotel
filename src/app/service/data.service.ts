import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Room } from '../models/Room';
import { RoomType } from '../models/RoomType';
import { Booking } from '../models/Booking';
import { Rate } from '../models/Rate';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  bookingDetails!: Booking;
  
  rooms: Room[] = [];

  constructor(private httpClient: HttpClient) { 

  }

  API_URL: string = 'http://localhost:3000';
  NBG_API: string = 'https://nbg.gov.ge/gw/api/ct/monetarypolicy/currencies/ka/json/?'

  getAvailableRooms(): Observable<Array<Room>>{
   return this.httpClient.request<Array<Room>>('GET', this.API_URL + '/availableRooms')
  }

  getRoomTypes(): Observable<Array<RoomType>>{
    return this.httpClient.request<Array<RoomType>>('GET', this.API_URL + '/roomTypes')
  }

  getRoomDetails(roomId: number): Observable<RoomType> {
    return this.httpClient.request<RoomType>('GET', this.API_URL + `/roomTypes/${roomId}`)
    
  }

  getBookingDetails(): Observable<Array<any>>{
    return this.httpClient.request<Array<any>>('GET',  this.API_URL + '/bookingData')
  }

  postBookingData(data: Booking): Observable<Booking>{
    let httpHeader = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.httpClient.post<Booking>(this.API_URL + '/bookingData', data, httpHeader)
  };

  getRateFromNbg(): Observable<Array<Rate>> {
    const today = new Date();
    let todayDate = today.toISOString().split('T')[0];
    return this.httpClient.request<Array<Rate>>('GET', this.NBG_API + `currencies=USD&date=${todayDate}`)
  }

  

}
