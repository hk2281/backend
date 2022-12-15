import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShopController } from './shop.controller';
import { ShopEntity } from './shop.entity';
import { ShopService } from './shop.service';

@Module({
  imports: [TypeOrmModule.forFeature([ShopEntity])],
  providers: [ShopService],
  controllers: [ShopController],
})
export class ShopModule {}
