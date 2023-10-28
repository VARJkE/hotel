import { RoomType } from "./RoomType";

export class Room {
    id: number;
    roomNumber: number;
    roomType: RoomType;
    price: RoomType;
    services: RoomType;
    isAvailable: boolean;

    constructor(id: number, roomNumber: number, roomType: RoomType, price: RoomType, services: RoomType, isAvailable: boolean) {
        this.id = id,
        this.roomNumber = roomNumber,
        this.roomType = roomType,
        this.price = price,
        this.services = services,
        this.isAvailable = isAvailable
    }
}