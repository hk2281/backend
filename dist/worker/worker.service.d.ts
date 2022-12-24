import { WorkerDto } from './dto/worker.dto';
import { WorkerEntity } from './worker.entity';
import { WorkerRepository } from './worker.repository';
export declare class WorkerService {
    private workerRepository;
    constructor(workerRepository: WorkerRepository);
    getAll(): Promise<WorkerEntity[]>;
    findById(id: number): Promise<WorkerEntity>;
    findByName(lastName: string): Promise<WorkerEntity>;
    create(dto: WorkerDto): Promise<any>;
    update(id: number, dto: WorkerDto): Promise<any>;
    delete(id: number): Promise<any>;
}
