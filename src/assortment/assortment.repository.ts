import { EntityRepository, Repository } from 'typeorm';
import { AssortmentEntity } from './assortment.entity';
@EntityRepository(AssortmentEntity)
export class AssortmentRepository extends Repository<AssortmentEntity> {}
