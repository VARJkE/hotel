export class RoomType {
    id: number;
    title: string;
    price: number;
    desc: string;
    services: string[]

    constructor(id: number, title: string, price: number, desc: string, services: string[]) {
        this.id = id,
        this.title = title,
        this.price = price,
        this.desc = desc,
        this.services = services
    }
}