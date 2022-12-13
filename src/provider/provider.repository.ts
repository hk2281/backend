import { EntityRepository, Repository } from 'typeorm';
import { ProviderEntity } from './provider.entity';

@EntityRepository(ProviderEntity)
export class ProviderRepository extends Repository<ProviderEntity> {}
