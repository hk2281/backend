"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssortmentModule = void 0;
const common_1 = require("@nestjs/common");
const assortment_service_1 = require("./assortment.service");
const assortment_controller_1 = require("./assortment.controller");
const typeorm_1 = require("@nestjs/typeorm");
const assortment_entity_1 = require("./assortment.entity");
let AssortmentModule = class AssortmentModule {
};
AssortmentModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([assortment_entity_1.AssortmentEntity])],
        providers: [assortment_service_1.AssortmentService],
        controllers: [assortment_controller_1.AssortmentController],
    })
], AssortmentModule);
exports.AssortmentModule = AssortmentModule;
//# sourceMappingURL=assortment.module.js.map