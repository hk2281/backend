import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WorkerController } from './worker.controller';
import { WorkerEntity } from './worker.entity';
import { WorkerService } from './worker.service';

@Module({
  imports: [TypeOrmModule.forFeature([WorkerEntity])],
  providers: [WorkerService],
  controllers: [WorkerController],
})
export class WorkerModule {}
