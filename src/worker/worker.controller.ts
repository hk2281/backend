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
import { ProviderDto as WorkerDto } from 'src/provider/dto/provider.dto';
import { WorkerService } from './worker.service';

@Controller('worker')
export class WorkerController {
  constructor(private readonly workerServise: WorkerService) {}

  @Get()
  async getAll() {
    return await this.workerServise.getAll();
  }
  @Get(':id')
  async getOne(@Param('id', ParseIntPipe) id: number) {
    return await this.workerServise.findById(id);
  }
  @Post()
  async create(@Body() dto: WorkerDto) {
    return await this.workerServise.create(dto);
  }
  @Put(':id')
  async update(@Param('id', ParseIntPipe) id: number, @Body() dto: WorkerDto) {
    return await this.workerServise.update(id, dto);
  }
  @Delete('id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    return await this.workerServise.delete(id);
  }
}
