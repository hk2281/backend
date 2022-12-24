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
exports.ProviderEntity = void 0;
const assortment_entity_1 = require("../assortment/assortment.entity");
const typeorm_1 = require("typeorm");
let ProviderEntity = class ProviderEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ProviderEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 30, nullable: false, unique: true }),
    __metadata("design:type", String)
], ProviderEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 60, nullable: true }),
    __metadata("design:type", String)
], ProviderEntity.prototype, "contact", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 30, nullable: true }),
    __metadata("design:type", String)
], ProviderEntity.prototype, "country", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => assortment_entity_1.AssortmentEntity, (assortment) => assortment.provider, {
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION',
    }),
    __metadata("design:type", Array)
], ProviderEntity.prototype, "assortments", void 0);
ProviderEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'provider' })
], ProviderEntity);
exports.ProviderEntity = ProviderEntity;
//# sourceMappingURL=provider.entity.js.map