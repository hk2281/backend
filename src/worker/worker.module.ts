import { Module } from '@nestjs/common';
import { WorkerService } from './worker.service';
import { WorkerController } from './worker.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WorkerEntity } from './worker.entity';

@Module({
  imports: [TypeOrmModule.forFeature([WorkerEntity])],
  providers: [WorkerService],
  controllers: [WorkerController],
})
export class WorkerModule {}
