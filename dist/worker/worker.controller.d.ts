import { ProviderDto as WorkerDto } from 'src/provider/dto/provider.dto';
import { WorkerService } from './worker.service';
export declare class WorkerController {
    private readonly workerServise;
    constructor(workerServise: WorkerService);
    getAll(): Promise<import("./worker.entity").WorkerEntity[]>;
    getOne(id: number): Promise<import("./worker.entity").WorkerEntity>;
    create(dto: WorkerDto): Promise<any>;
    update(id: number, dto: WorkerDto): Promise<any>;
    delete(id: number): Promise<any>;
}
