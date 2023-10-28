export class RoomType {
    id: number;
    title: string;
    price: number;
    services: string[]

    constructor(id: number, title: string, price: number, services: string[]) {
        this.id = id,
        this.title = title,
        this.price = price,
        this.services = services
    }
}