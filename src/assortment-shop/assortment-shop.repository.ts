import { EntityRepository, Repository } from 'typeorm';
import { AssortmentShop } from './assortment-shop.entity';

@EntityRepository(AssortmentShop)
export class AssortmentShopRepository extends Repository<AssortmentShop> {}
