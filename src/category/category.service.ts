import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryEntity } from './category.entity';
import { CategoryRepository } from './category.repository';
import { CategoryDto } from './dto/category.dto';
@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(CategoryEntity)
    private categoryRepository: CategoryRepository,
  ) {}

  async getAll(): Promise<CategoryEntity[]> {
    const list = await this.categoryRepository.find();
    if (!list.length) {
      throw new NotFoundException({ message: 'list is empty' });
    }
    return list;
  }
  async findById(id: number): Promise<CategoryEntity> {
    const category = await this.categoryRepository.findOneBy({
      id: id,
    });
    if (!category) {
      throw new NotFoundException({ message: `category with ${id} not exist` });
    }
    return category;
  }
  async create(dto: CategoryDto): Promise<any> {
    const category = this.categoryRepository.create(dto);
    await this.categoryRepository.save(category);
    return { message: `category ${category.cat_title} save` };
  }
  async update(id: number, dto: CategoryDto): Promise<any> {
    const category = await this.findById(id);
    dto.cat_title
      ? (category.cat_title = dto.cat_title)
      : (category.cat_title = category.cat_title);
    // eslint-disable-next-line prettier/prettier
    return { message: `category ${category.cat_title} update` };
  }
  async delete(id: number): Promise<any> {
    const category = await this.findById(id);
    await this.categoryRepository.delete(category);
    return { message: `category ${category.cat_title} delete` };
  }
}
