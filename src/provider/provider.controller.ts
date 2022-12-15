import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
import { ProviderDto } from './dto/provider.dto';
import { ProviderService } from './provider.service';

@Controller('provider')
export class ProviderController {
  constructor(private readonly providerServise: ProviderService) {}

  @Get()
  async getAll() {
    return await this.providerServise.getAll();
  }
  @Get(':id')
  async getOne(@Param('id', ParseIntPipe) id: number) {
    return await this.providerServise.findById(id);
  }
  @Post()
  async create(@Body() dto: ProviderDto) {
    return await this.providerServise.create(dto);
  }
  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: ProviderDto,
  ) {
    return await this.providerServise.update(id, dto);
  }
  @Delete('id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    return await this.providerServise.delete(id);
  }
}
