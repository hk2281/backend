import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AssortmentShop } from 'src/assortment-shop/assortment-shop.entity';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { AssortmentEntity } from 'src/assortment/assortment.entity';
import { ShopController } from './shop.controller';
import { ShopEntity } from './shop.entity';
import { ShopService } from './shop.service';

@Module({
  imports: [TypeOrmModule.forFeature([ShopEntity, AssortmentShop])],
  providers: [ShopService],
  controllers: [ShopController],
})
export class ShopModule {}
