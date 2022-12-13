import { Module } from '@nestjs/common';
import { AssortmentService } from './assortment.service';
import { AssortmentController } from './assortment.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AssortmentEntity } from './assortment.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AssortmentEntity])],
  providers: [AssortmentService],
  controllers: [AssortmentController],
})
export class AssortmentModule {}
