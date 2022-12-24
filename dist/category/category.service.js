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
exports.CategoryService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const category_entity_1 = require("./category.entity");
const category_repository_1 = require("./category.repository");
let CategoryService = class CategoryService {
    constructor(categoryRepository) {
        this.categoryRepository = categoryRepository;
    }
    async getAll() {
        const list = await this.categoryRepository.find();
        if (!list.length) {
            throw new common_1.NotFoundException({ message: 'list is empty' });
        }
        return list;
    }
    async findById(id) {
        const category = await this.categoryRepository.findOneBy({
            id: id,
        });
        if (!category) {
            throw new common_1.NotFoundException({ message: `category with ${id} not exist` });
        }
        return category;
    }
    async create(dto) {
        const category = this.categoryRepository.create(dto);
        await this.categoryRepository.save(category);
        return { message: `category ${category.cat_title} save` };
    }
    async update(id, dto) {
        const category = await this.findById(id);
        dto.cat_title
            ? (category.cat_title = dto.cat_title)
            : (category.cat_title = category.cat_title);
        await this.categoryRepository.save(category);
        return { message: `category ${category.cat_title} update` };
    }
    async delete(id) {
        const category = await this.findById(id);
        await this.categoryRepository.delete(category);
        return { message: `category ${category.cat_title} delete` };
    }
};
CategoryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(category_entity_1.CategoryEntity)),
    __metadata("design:paramtypes", [category_repository_1.CategoryRepository])
], CategoryService);
exports.CategoryService = CategoryService;
//# sourceMappingURL=category.service.js.map