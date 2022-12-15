import { CategoryEntity } from 'src/category/category.entity';
import { ProviderEntity } from 'src/provider/provider.entity';

export class AssortmentDto {
  item?: string;
  price?: number;
  provider?: ProviderEntity;
  category?: CategoryEntity;
}
