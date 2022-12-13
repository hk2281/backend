import { ProviderEntity } from 'src/provider/provider.entity';

export class AssortmentDto {
  item?: string;
  price?: number;
  providers?: ProviderEntity[];
}
