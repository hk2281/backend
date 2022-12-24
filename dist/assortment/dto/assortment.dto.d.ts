import { CategoryEntity } from 'src/category/category.entity';
import { ProviderEntity } from 'src/provider/provider.entity';
export declare class AssortmentDto {
    item?: string;
    price?: number;
    provider?: ProviderEntity;
    category?: CategoryEntity;
}
