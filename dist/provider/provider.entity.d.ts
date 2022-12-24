import { AssortmentEntity } from 'src/assortment/assortment.entity';
export declare class ProviderEntity {
    id: number;
    name: string;
    contact: string;
    country: string;
    assortments: AssortmentEntity[];
}
