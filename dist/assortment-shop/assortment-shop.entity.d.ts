import { AssortmentEntity } from 'src/assortment/assortment.entity';
import { ShopEntity } from 'src/shop/shop.entity';
export declare class AssortmentShop {
    assortmentId: number;
    shopId: number;
    assortments: AssortmentEntity[];
    shops: ShopEntity[];
}
