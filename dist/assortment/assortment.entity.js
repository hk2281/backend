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
exports.AssortmentEntity = void 0;
const category_entity_1 = require("../category/category.entity");
const provider_entity_1 = require("../provider/provider.entity");
const shop_entity_1 = require("../shop/shop.entity");
const typeorm_1 = require("typeorm");
let AssortmentEntity = class AssortmentEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], AssortmentEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 30, nullable: false }),
    __metadata("design:type", String)
], AssortmentEntity.prototype, "item", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], AssortmentEntity.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => provider_entity_1.ProviderEntity, (provider) => provider.assortments, { nullable: false, eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'providerid' }),
    __metadata("design:type", provider_entity_1.ProviderEntity)
], AssortmentEntity.prototype, "provider", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => category_entity_1.CategoryEntity, (category) => category.assortment_category, { nullable: false, eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'categoryid' }),
    __metadata("design:type", category_entity_1.CategoryEntity)
], AssortmentEntity.prototype, "category", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => shop_entity_1.ShopEntity, (shop) => shop.assortments, {
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION',
    }),
    __metadata("design:type", Array)
], AssortmentEntity.prototype, "shops", void 0);
AssortmentEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'assortment' })
], AssortmentEntity);
exports.AssortmentEntity = AssortmentEntity;
//# sourceMappingURL=assortment.entity.js.map