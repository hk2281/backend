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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssortmentController = void 0;
const common_1 = require("@nestjs/common");
const assortment_service_1 = require("./assortment.service");
const assortment_dto_1 = require("./dto/assortment.dto");
let AssortmentController = class AssortmentController {
    constructor(assortmentServise) {
        this.assortmentServise = assortmentServise;
    }
    async getAll() {
        return await this.assortmentServise.getAll();
    }
    async getOne(id) {
        return await this.assortmentServise.findById(id);
    }
    async create(dto) {
        return await this.assortmentServise.create(dto);
    }
    async update(id, dto) {
        return await this.assortmentServise.update(id, dto);
    }
    async delete(id) {
        return await this.assortmentServise.delete(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AssortmentController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AssortmentController.prototype, "getOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [assortment_dto_1.AssortmentDto]),
    __metadata("design:returntype", Promise)
], AssortmentController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, assortment_dto_1.AssortmentDto]),
    __metadata("design:returntype", Promise)
], AssortmentController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AssortmentController.prototype, "delete", null);
AssortmentController = __decorate([
    (0, common_1.Controller)('assortment'),
    __metadata("design:paramtypes", [assortment_service_1.AssortmentService])
], AssortmentController);
exports.AssortmentController = AssortmentController;
//# sourceMappingURL=assortment.controller.js.map