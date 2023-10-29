export class Booking {
    id: number;
    roomId: number;
    checkInDate: Date;
    checkOutDate: Date;
    guestFullName: string;
    guestEmail: string;
    guestPhone: number;

    constructor(id: number, roomId: number, checkInDate: Date, checkOutDate: Date, guestFullName: string, guestEmail: string, guestPhone: number) {
        this.id = id,
        this.roomId = roomId,
        this.checkInDate = checkInDate,
        this.checkOutDate = checkOutDate,
        this.guestFullName = guestFullName,
        this.guestEmail = guestEmail,
        this.guestPhone = guestPhone
    }
}

