import { WorkerEntity } from 'src/worker/worker.entity';

export class ShopDto {
  shopName?: string;
  shopAddress?: string;
  worker?: WorkerEntity;
  assortment?: number;
}
