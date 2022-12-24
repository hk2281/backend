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
exports.ProviderService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const provider_entity_1 = require("./provider.entity");
const provider_repository_1 = require("./provider.repository");
let ProviderService = class ProviderService {
    constructor(providerRepository) {
        this.providerRepository = providerRepository;
    }
    async getAll() {
        const list = await this.providerRepository.find();
        if (!list.length) {
            throw new common_1.NotFoundException({ message: 'list is empty' });
        }
        return list;
    }
    async findById(id) {
        const provider = await this.providerRepository.findOneBy({
            id: id,
        });
        if (!provider) {
            throw new common_1.NotFoundException({ message: 'provider not exist' });
        }
        return provider;
    }
    async findByName(name) {
        const provider = await this.providerRepository.findOneBy({
            name: name,
        });
        return provider ? provider : null;
    }
    async findByCounry(country) {
        const provider = await this.providerRepository.findOneBy({
            country: country,
        });
        return provider ? provider : null;
    }
    async create(dto) {
        const provider = this.providerRepository.create(dto);
        await this.providerRepository.save(provider);
        return { message: `provider ${provider.name} save` };
    }
    async update(id, dto) {
        const provider = await this.findById(id);
        dto.name ? (provider.name = dto.name) : (provider.name = provider.name);
        dto.contact ? (provider.contact = dto.contact) : (provider.contact = provider.contact);
        dto.country ? (provider.country = dto.country) : (provider.country = provider.country);
        await this.providerRepository.save(provider);
        return { message: `provider ${provider.name} update` };
    }
    async delete(id) {
        const provider = await this.findById(id);
        await this.providerRepository.delete(provider);
        return { message: `provider ${provider.name} delete` };
    }
};
ProviderService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(provider_entity_1.ProviderEntity)),
    __metadata("design:paramtypes", [provider_repository_1.ProviderRepository])
], ProviderService);
exports.ProviderService = ProviderService;
//# sourceMappingURL=provider.service.js.map