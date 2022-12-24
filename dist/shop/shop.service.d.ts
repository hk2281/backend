import { AssortmentShop } from 'src/assortment-shop/assortment-shop.entity';
import { AssortmentShopRepository } from 'src/assortment-shop/assortment-shop.repository';
import { ShopDto } from './dto/shop.dto';
import { ShopEntity } from './shop.entity';
import { ShopRepository } from './shop.repository';
export declare class ShopService {
    private shopRepository;
    private assortmentShopRepository;
    constructor(shopRepository: ShopRepository, assortmentShopRepository: AssortmentShopRepository);
    getAll(): Promise<ShopEntity[]>;
    getAllAssShop(): Promise<AssortmentShop[]>;
    findById(id: number): Promise<ShopEntity>;
    findByName(shopName: string): Promise<ShopEntity>;
    create(dto: ShopDto): Promise<any>;
    createAssShop(createAssShop: {
        assortmentId: number;
        shopId: number;
    }): Promise<any>;
    update(id: number, dto: ShopDto): Promise<any>;
    delete(id: number): Promise<any>;
}
