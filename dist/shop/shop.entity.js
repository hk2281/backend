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
exports.ShopEntity = void 0;
const assortment_entity_1 = require("../assortment/assortment.entity");
const worker_entity_1 = require("../worker/worker.entity");
const typeorm_1 = require("typeorm");
let ShopEntity = class ShopEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ShopEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 30, nullable: false }),
    __metadata("design:type", String)
], ShopEntity.prototype, "shopName", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 30, nullable: false }),
    __metadata("design:type", String)
], ShopEntity.prototype, "shopAddress", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => worker_entity_1.WorkerEntity, (worker) => worker.shop, {
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
    }),
    __metadata("design:type", worker_entity_1.WorkerEntity)
], ShopEntity.prototype, "worker", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => assortment_entity_1.AssortmentEntity, (assortment) => assortment.shops, {
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION',
    }),
    (0, typeorm_1.JoinTable)({
        name: 'assortment_shop',
        joinColumn: { name: 'shopId', referencedColumnName: 'id' },
        inverseJoinColumn: { name: 'assortmentId', referencedColumnName: 'id' },
    }),
    __metadata("design:type", Array)
], ShopEntity.prototype, "assortments", void 0);
ShopEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'shop' })
], ShopEntity);
exports.ShopEntity = ShopEntity;
//# sourceMappingURL=shop.entity.js.map