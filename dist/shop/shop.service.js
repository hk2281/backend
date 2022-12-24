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
exports.ShopService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const assortment_shop_entity_1 = require("../assortment-shop/assortment-shop.entity");
const assortment_shop_repository_1 = require("../assortment-shop/assortment-shop.repository");
const shop_entity_1 = require("./shop.entity");
const shop_repository_1 = require("./shop.repository");
let ShopService = class ShopService {
    constructor(shopRepository, assortmentShopRepository) {
        this.shopRepository = shopRepository;
        this.assortmentShopRepository = assortmentShopRepository;
    }
    async getAll() {
        const list = await this.shopRepository.find();
        if (!list.length) {
            throw new common_1.NotFoundException({ message: 'list is empty' });
        }
        return list;
    }
    async getAllAssShop() {
        const list = await this.assortmentShopRepository.find();
        if (!list.length) {
            throw new common_1.NotFoundException({ message: 'list is empty' });
        }
        return list;
    }
    async findById(id) {
        const shop = await this.shopRepository.findOneBy({
            id: id,
        });
        if (!shop) {
            throw new common_1.NotFoundException({ message: `shop with ${id} not exist` });
        }
        return shop;
    }
    async findByName(shopName) {
        const provider = await this.shopRepository.findOneBy({
            shopName: shopName,
        });
        return provider ? provider : null;
    }
    async create(dto) {
        const shop = this.shopRepository.create(dto);
        await this.shopRepository.save(shop);
        return {
            message: `shop ${shop.shopName} save`,
        };
    }
    async createAssShop(createAssShop) {
        const shop = await this.shopRepository.findOne({
            where: { id: createAssShop.shopId },
        });
        if (!shop) {
            throw new common_1.NotFoundException({ message: 'list is empty' });
        }
        await this.assortmentShopRepository.save(createAssShop);
    }
    async update(id, dto) {
        const shop = await this.findById(id);
        dto.shopName
            ? (shop.shopName = dto.shopName)
            : (shop.shopName = shop.shopName);
        dto.shopName
            ? (shop.shopAddress = dto.shopAddress)
            : (shop.shopAddress = shop.shopAddress);
        await this.shopRepository.save(shop);
        return { message: `shop ${shop.shopName} update` };
    }
    async delete(id) {
        const shop = await this.findById(id);
        await this.shopRepository.delete(shop);
        return { message: `provider ${shop.shopName} delete` };
    }
};
ShopService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(shop_entity_1.ShopEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(assortment_shop_entity_1.AssortmentShop)),
    __metadata("design:paramtypes", [shop_repository_1.ShopRepository,
        assortment_shop_repository_1.AssortmentShopRepository])
], ShopService);
exports.ShopService = ShopService;
//# sourceMappingURL=shop.service.js.map