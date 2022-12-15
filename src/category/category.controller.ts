import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryDto } from './dto/category.dto';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryServise: CategoryService) {}

  @Get()
  async getAll() {
    return await this.categoryServise.getAll();
  }
  @Get(':id')
  async getOne(@Param('id', ParseIntPipe) id: number) {
    return await this.categoryServise.findById(id);
  }
  @Post()
  async create(@Body() dto: CategoryDto) {
    return await this.categoryServise.create(dto);
  }
  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: CategoryDto,
  ) {
    return await this.categoryServise.update(id, dto);
  }
  @Delete('id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    return await this.categoryServise.delete(id);
  }
}
