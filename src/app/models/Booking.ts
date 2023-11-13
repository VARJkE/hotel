export class Booking {
    constructor(
        public id: number,
        public roomId: number,
        public roomTypeId: number,
        public checkInDate: Date,
        public checkOutDate: Date,
        public guestFullName: string,
        public guestEmail: string,
        public guestPhoneNumber: number,
        public guestsNumber: number,
        public addDateTime: Date
    ) {}
}
