import { CategoryEntity } from './category.entity';
import { CategoryRepository } from './category.repository';
import { CategoryDto } from './dto/category.dto';
export declare class CategoryService {
    private categoryRepository;
    constructor(categoryRepository: CategoryRepository);
    getAll(): Promise<CategoryEntity[]>;
    findById(id: number): Promise<CategoryEntity>;
    create(dto: CategoryDto): Promise<any>;
    update(id: number, dto: CategoryDto): Promise<any>;
    delete(id: number): Promise<any>;
}
