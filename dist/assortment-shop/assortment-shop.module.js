"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssortmentShopModule = void 0;
const common_1 = require("@nestjs/common");
const assortment_shop_service_1 = require("./assortment-shop.service");
const assortment_shop_controller_1 = require("./assortment-shop.controller");
let AssortmentShopModule = class AssortmentShopModule {
};
AssortmentShopModule = __decorate([
    (0, common_1.Module)({
        providers: [assortment_shop_service_1.AssortmentShopService],
        controllers: [assortment_shop_controller_1.AssortmentShopController],
    })
], AssortmentShopModule);
exports.AssortmentShopModule = AssortmentShopModule;
//# sourceMappingURL=assortment-shop.module.js.map