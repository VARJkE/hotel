import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingRoomComponent } from './booking-room.component';

describe('BookingRoomComponent', () => {
  let component: BookingRoomComponent;
  let fixture: ComponentFixture<BookingRoomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookingRoomComponent]
    });
    fixture = TestBed.createComponent(BookingRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
