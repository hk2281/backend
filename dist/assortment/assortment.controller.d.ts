import { AssortmentService } from './assortment.service';
import { AssortmentDto } from './dto/assortment.dto';
export declare class AssortmentController {
    private readonly assortmentServise;
    constructor(assortmentServise: AssortmentService);
    getAll(): Promise<import("./assortment.entity").AssortmentEntity[]>;
    getOne(id: number): Promise<import("./assortment.entity").AssortmentEntity>;
    create(dto: AssortmentDto): Promise<any>;
    update(id: number, dto: AssortmentDto): Promise<any>;
    delete(id: number): Promise<any>;
}
