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
import { ShopDto } from './dto/shop.dto';
import { ShopService } from './shop.service';

@Controller('shop')
export class ShopController {
  constructor(private readonly shopServise: ShopService) {}

  @Get()
  async getAll() {
    return await this.shopServise.getAll();
  }
  @Get('createAssShop')
  async getAllAssShop() {
    return await this.shopServise.getAllAssShop();
  }
  @Get(':id')
  async getOne(@Param('id', ParseIntPipe) id: number) {
    return await this.shopServise.findById(id);
  }
  @Post('/createAssShop')
  async createAssShop(
    @Body() createAssShop: { assortmentId: number; shopId: number },
  ) {
    await this.shopServise.createAssShop(createAssShop);
  }
  @Post()
  async create(@Body() dto: ShopDto) {
    return await this.shopServise.create(dto);
  }

  @Put(':id')
  async update(@Param('id', ParseIntPipe) id: number, @Body() dto: ShopDto) {
    return await this.shopServise.update(id, dto);
  }
  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    return await this.shopServise.delete(id);
  }
}
