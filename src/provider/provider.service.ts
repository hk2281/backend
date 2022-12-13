import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProviderDto } from './dto/provider.dto';
import { ProviderEntity } from './provider.entity';
import { ProviderRepository } from './provider.repository';

@Injectable()
export class ProviderService {
  constructor(
    @InjectRepository(ProviderEntity)
    private providerRepository: ProviderRepository,
  ) {}

  async getAll(): Promise<ProviderEntity[]> {
    const list = await this.providerRepository.find();
    if (!list.length) {
      throw new NotFoundException({ message: 'list is empty' });
    }
    return list;
  }
  async findById(id: number): Promise<ProviderEntity> {
    const provider = await this.providerRepository.findOneBy({
      id: id,
    });
    if (!provider) {
      throw new NotFoundException({ message: 'provider not exist' });
    }
    return provider;
  }
  async findByName(name: string): Promise<ProviderEntity> {
    const provider = await this.providerRepository.findOneBy({
      name: name,
    });
    return provider ? provider : null;
  }
  async findByCounry(country: string): Promise<ProviderEntity> {
    const provider = await this.providerRepository.findOneBy({
      country: country,
    });
    return provider ? provider : null;
  }
  async create(dto: ProviderDto): Promise<any> {
    const provider = this.providerRepository.create(dto);
    await this.providerRepository.save(provider);
    return { message: `provider ${provider.name} save` };
  }
  async update(id: number, dto: ProviderDto): Promise<any> {
    const provider = await this.findById(id);
    dto.name ? (provider.name = dto.name) : (provider.name = provider.name);
    // eslint-disable-next-line prettier/prettier
    dto.contact ? (provider.contact = dto.contact) : (provider.contact = provider.contact);
    // eslint-disable-next-line prettier/prettier
    dto.country ? (provider.country = dto.country) : (provider.country = provider.country);
    await this.providerRepository.save(provider);
    return { message: `provider ${provider.name} update` };
  }
  async delete(id: number): Promise<any> {
    const provider = await this.findById(id);
    await this.providerRepository.delete(provider);
    return { message: `provider ${provider.name} delete` };
  }
}
