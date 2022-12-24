import { CategoryEntity } from 'src/category/category.entity';
import { ProviderEntity } from 'src/provider/provider.entity';
import { ShopEntity } from 'src/shop/shop.entity';
export declare class AssortmentEntity {
    id: number;
    item: string;
    price: number;
    provider: ProviderEntity;
    category: CategoryEntity;
    shops?: ShopEntity[];
}
