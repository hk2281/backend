import { AssortmentEntity } from './assortment.entity';
import { AssortmentRepository } from './assortment.repository';
import { AssortmentDto } from './dto/assortment.dto';
export declare class AssortmentService {
    private assortmentRepository;
    constructor(assortmentRepository: AssortmentRepository);
    getAll(): Promise<AssortmentEntity[]>;
    findById(id: number): Promise<AssortmentEntity>;
    findByItemName(item: string): Promise<AssortmentEntity>;
    findByPrice(price: number): Promise<AssortmentEntity>;
    create(dto: AssortmentDto): Promise<any>;
    update(id: number, dto: AssortmentDto): Promise<any>;
    delete(id: number): Promise<any>;
}
