import { AssortmentEntity } from 'src/assortment/assortment.entity';
import { WorkerEntity } from 'src/worker/worker.entity';
export declare class ShopEntity {
    id: number;
    shopName: string;
    shopAddress: string;
    worker: WorkerEntity;
    assortments?: AssortmentEntity[];
}
