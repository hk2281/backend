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
import { AssortmentService } from './assortment.service';
import { AssortmentDto } from './dto/assortment.dto';

@Controller('assortment')
export class AssortmentController {
  constructor(private readonly assortmentServise: AssortmentService) {}

  @Get()
  async getAll() {
    return await this.assortmentServise.getAll();
  }
  @Get(':id')
  async getOne(@Param('id', ParseIntPipe) id: number) {
    return await this.assortmentServise.findById(id);
  }
  @Post()
  async create(@Body() dto: AssortmentDto) {
    return await this.assortmentServise.create(dto);
  }
  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: AssortmentDto,
  ) {
    return await this.assortmentServise.update(id, dto);
  }
  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    return await this.assortmentServise.delete(id);
  }
}
