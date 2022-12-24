import { ShopDto } from './dto/shop.dto';
import { ShopService } from './shop.service';
export declare class ShopController {
    private readonly shopServise;
    constructor(shopServise: ShopService);
    getAll(): Promise<import("./shop.entity").ShopEntity[]>;
    getAllAssShop(): Promise<import("../assortment-shop/assortment-shop.entity").AssortmentShop[]>;
    getOne(id: number): Promise<import("./shop.entity").ShopEntity>;
    createAssShop(createAssShop: {
        assortmentId: number;
        shopId: number;
    }): Promise<void>;
    create(dto: ShopDto): Promise<any>;
    update(id: number, dto: ShopDto): Promise<any>;
    delete(id: number): Promise<any>;
}
