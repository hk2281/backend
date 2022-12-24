import { CategoryService } from './category.service';
import { CategoryDto } from './dto/category.dto';
export declare class CategoryController {
    private readonly categoryServise;
    constructor(categoryServise: CategoryService);
    getAll(): Promise<import("./category.entity").CategoryEntity[]>;
    getOne(id: number): Promise<import("./category.entity").CategoryEntity>;
    create(dto: CategoryDto): Promise<any>;
    update(id: number, dto: CategoryDto): Promise<any>;
    delete(id: number): Promise<any>;
}
