"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssortmentShop = void 0;
const assortment_entity_1 = require("../assortment/assortment.entity");
const shop_entity_1 = require("../shop/shop.entity");
const typeorm_1 = require("typeorm");
let AssortmentShop = class AssortmentShop {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)({ name: 'assortmentId' }),
    __metadata("design:type", Number)
], AssortmentShop.prototype, "assortmentId", void 0);
__decorate([
    (0, typeorm_1.PrimaryColumn)({ name: 'shopId' }),
    __metadata("design:type", Number)
], AssortmentShop.prototype, "shopId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => assortment_entity_1.AssortmentEntity, (assortment) => assortment.shops, {
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION',
    }),
    (0, typeorm_1.JoinColumn)([{ name: 'assortmentId', referencedColumnName: 'id' }]),
    __metadata("design:type", Array)
], AssortmentShop.prototype, "assortments", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => shop_entity_1.ShopEntity, (shop) => shop.assortments, {
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION',
    }),
    (0, typeorm_1.JoinColumn)([{ name: 'shopId', referencedColumnName: 'id' }]),
    __metadata("design:type", Array)
], AssortmentShop.prototype, "shops", void 0);
AssortmentShop = __decorate([
    (0, typeorm_1.Entity)({ name: 'assortment_shop' })
], AssortmentShop);
exports.AssortmentShop = AssortmentShop;
//# sourceMappingURL=assortment-shop.entity.js.map