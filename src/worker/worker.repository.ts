import { EntityRepository, Repository } from 'typeorm';
import { WorkerEntity } from './worker.entity';

@EntityRepository(WorkerEntity)
export class WorkerRepository extends Repository<WorkerEntity> {}
