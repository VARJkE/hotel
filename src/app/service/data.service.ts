import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Room } from '../models/Room';
import { RoomType } from '../models/RoomType';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  API_URL: string = 'http://localhost:3000';

  getAvailableRooms(): Observable<Array<Room>>{
   return this.httpClient.request<Array<Room>>('GET', this.API_URL + '/availableRooms')
  }

  getRoomTypes(): Observable<Array<RoomType>>{
    return this.httpClient.request<Array<RoomType>>('GET', this.API_URL + '/roomTypes')
  }

  getRoomDetails(roomId: number): Observable<RoomType> {
    // Implement the logic to fetch room details by ID here
    return this.httpClient.request<RoomType>('GET', this.API_URL + `/roomTypes/${roomId}`)
    
  }

  getBookingDetails(): Observable<Array<any>>{
    return this.httpClient.request<Array<any>>('GET',  this.API_URL + '/bookingData')
  }

  postBookingData(data: any): Observable<any>{
    let httpHeader = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.httpClient.post(this.API_URL + '/bookingData', data, httpHeader)
  };

}
