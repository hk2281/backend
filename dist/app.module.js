"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const constants_1 = require("./config/constants");
const assortment_module_1 = require("./assortment/assortment.module");
const provider_module_1 = require("./provider/provider.module");
const category_module_1 = require("./category/category.module");
const shop_module_1 = require("./shop/shop.module");
const worker_module_1 = require("./worker/worker.module");
const assortment_shop_module_1 = require("./assortment-shop/assortment-shop.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                envFilePath: '.env',
                isGlobal: true,
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_1.ConfigModule],
                useFactory: (configService) => ({
                    type: 'mysql',
                    host: configService.get(constants_1.DB_HOST),
                    port: +configService.get(constants_1.DB_PORT),
                    username: configService.get(constants_1.DB_USER),
                    password: configService.get(constants_1.DB_PASSWORD),
                    database: configService.get(constants_1.DB_DATABASE),
                    entities: [__dirname + '/**/*.entity{.ts,.js}'],
                    synchronize: false,
                    logging: true,
                }),
                inject: [config_1.ConfigService],
            }),
            assortment_module_1.AssortmentModule,
            provider_module_1.ProviderModule,
            category_module_1.CategoryModule,
            shop_module_1.ShopModule,
            worker_module_1.WorkerModule,
            assortment_shop_module_1.AssortmentShopModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map