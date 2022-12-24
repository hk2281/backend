import { ProviderDto } from './dto/provider.dto';
import { ProviderService } from './provider.service';
export declare class ProviderController {
    private readonly providerServise;
    constructor(providerServise: ProviderService);
    getAll(): Promise<import("./provider.entity").ProviderEntity[]>;
    getOne(id: number): Promise<import("./provider.entity").ProviderEntity>;
    create(dto: ProviderDto): Promise<any>;
    update(id: number, dto: ProviderDto): Promise<any>;
    delete(id: number): Promise<any>;
}
