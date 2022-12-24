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
exports.AssortmentService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const assortment_entity_1 = require("./assortment.entity");
const assortment_repository_1 = require("./assortment.repository");
let AssortmentService = class AssortmentService {
    constructor(assortmentRepository) {
        this.assortmentRepository = assortmentRepository;
    }
    async getAll() {
        const list = await this.assortmentRepository.find();
        if (!list.length) {
            throw new common_1.NotFoundException({ message: 'list of accortment empty' });
        }
        return list;
    }
    async findById(id) {
        const assortment_item = await this.assortmentRepository.findOneBy({
            id: id,
        });
        if (!assortment_item) {
            throw new common_1.NotFoundException({ message: 'assortment item not exist' });
        }
        return assortment_item;
    }
    async findByItemName(item) {
        const assortment_item = await this.assortmentRepository.findOneBy({
            item: item,
        });
        return assortment_item ? assortment_item : null;
    }
    async findByPrice(price) {
        const assortment_item = await this.assortmentRepository.findOneBy({
            price: price,
        });
        return assortment_item ? assortment_item : null;
    }
    async create(dto) {
        const assortment_item = this.assortmentRepository.create(dto);
        await this.assortmentRepository.save(assortment_item);
        return { message: `Assortment item ${assortment_item.item} save` };
    }
    async update(id, dto) {
        const assortment_item = await this.findById(id);
        dto.item
            ? (assortment_item.item = dto.item)
            : (assortment_item.item = assortment_item.item);
        dto.price
            ? (assortment_item.price = dto.price)
            : (assortment_item.price = assortment_item.price);
        dto.provider
            ? (assortment_item.provider = dto.provider)
            : (assortment_item.provider = assortment_item.provider);
        dto.category
            ? (assortment_item.category = dto.category)
            : (assortment_item.category = assortment_item.category);
        await this.assortmentRepository.save(assortment_item);
        return { message: `assortment item ${assortment_item.item} update` };
    }
    async delete(id) {
        const assortment_item = await this.findById(id);
        await this.assortmentRepository.delete(assortment_item);
        return { message: `assotrment item ${assortment_item.item} delete` };
    }
};
AssortmentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(assortment_entity_1.AssortmentEntity)),
    __metadata("design:paramtypes", [assortment_repository_1.AssortmentRepository])
], AssortmentService);
exports.AssortmentService = AssortmentService;
//# sourceMappingURL=assortment.service.js.map