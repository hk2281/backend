import { Module } from '@nestjs/common';
import { AssortmentShopService } from './assortment-shop.service';
import { AssortmentShopController } from './assortment-shop.controller';

@Module({
  providers: [AssortmentShopService],
  controllers: [AssortmentShopController],
})
export class AssortmentShopModule {}
