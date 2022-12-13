import { Module } from '@nestjs/common';
import { AssortmentService } from './assortment.service';
import { AssortmentController } from './assortment.controller';

@Module({
  providers: [AssortmentService],
  controllers: [AssortmentController]
})
export class AssortmentModule {}
