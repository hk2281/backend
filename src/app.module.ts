import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  DB_DATABASE,
  DB_HOST,
  DB_PASSWORD,
  DB_PORT,
  DB_USER,
} from './config/constants';
import { AssortmentModule } from './assortment/assortment.module';
import { ProviderModule } from './provider/provider.module';
import { CategoryModule } from './category/category.module';
import { ShopModule } from './shop/shop.module';
import { WorkerModule } from './worker/worker.module';
import { AssortmentShopModule } from './assortment-shop/assortment-shop.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get<string>(DB_HOST),
        port: +configService.get<number>(DB_PORT),
        username: configService.get<string>(DB_USER),
        password: configService.get<string>(DB_PASSWORD),
        database: configService.get<string>(DB_DATABASE),
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: false,
        logging: true,
      }),
      inject: [ConfigService],
    }),
    AssortmentModule,
    ProviderModule,
    CategoryModule,
    ShopModule,
    WorkerModule,
    AssortmentShopModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
