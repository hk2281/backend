import { ProviderDto } from './dto/provider.dto';
import { ProviderEntity } from './provider.entity';
import { ProviderRepository } from './provider.repository';
export declare class ProviderService {
    private providerRepository;
    constructor(providerRepository: ProviderRepository);
    getAll(): Promise<ProviderEntity[]>;
    findById(id: number): Promise<ProviderEntity>;
    findByName(name: string): Promise<ProviderEntity>;
    findByCounry(country: string): Promise<ProviderEntity>;
    create(dto: ProviderDto): Promise<any>;
    update(id: number, dto: ProviderDto): Promise<any>;
    delete(id: number): Promise<any>;
}
