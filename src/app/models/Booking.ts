export class Booking {
    id: number;
    roomId: number;
    checkInDate: Date;
    checkOutDate: Date;
    guestFullName: string;
    guestEmail: string;
    guestPhoneNumber: number;
    guestsNumber: number;

    constructor(id: number, roomId: number, checkInDate: Date, checkOutDate: Date, guestFullName: string, guestEmail: string, guestPhoneNumber: number, guestsNumber: number) {
        this.id = id,
        this.roomId = roomId,
        this.checkInDate = checkInDate,
        this.checkOutDate = checkOutDate,
        this.guestFullName = guestFullName,
        this.guestEmail = guestEmail,
        this.guestPhoneNumber = guestPhoneNumber,
        this.guestsNumber = guestsNumber
    }
}

