import { ShopEntity } from 'src/shop/shop.entity';

export class WorkerDto {
  firstName?: string;
  lastName?: string;
  positionRole?: string;
  contact?: string;
  shop?: ShopEntity;
}
