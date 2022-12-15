import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ShopDto } from './dto/shop.dto';
import { ShopEntity } from './shop.entity';
import { ShopRepository } from './shop.repository';

@Injectable()
export class ShopService {
  constructor(
    @InjectRepository(ShopEntity)
    private shopRepository: ShopRepository,
  ) {}

  async getAll(): Promise<ShopEntity[]> {
    const list = await this.shopRepository.find();
    if (!list.length) {
      throw new NotFoundException({ message: 'list is empty' });
    }
    return list;
  }
  async findById(id: number): Promise<ShopEntity> {
    const shop = await this.shopRepository.findOneBy({
      id: id,
    });
    if (!shop) {
      throw new NotFoundException({ message: `shop with ${id} not exist` });
    }
    return shop;
  }
  async findByName(shopName: string): Promise<ShopEntity> {
    const provider = await this.shopRepository.findOneBy({
      shopName: shopName,
    });
    return provider ? provider : null;
  }
  async create(dto: ShopDto): Promise<any> {
    const shop = this.shopRepository.create(dto);
    await this.shopRepository.save(shop);
    return { message: `provider ${shop.shopName} save` };
  }
  async update(id: number, dto: ShopDto): Promise<any> {
    const shop = await this.findById(id);
    dto.shopName
      ? (shop.shopName = dto.shopName)
      : (shop.shopName = shop.shopName);
    dto.shopName
      ? (shop.shopAddress = dto.shopAddress)
      : (shop.shopAddress = shop.shopAddress);
  }
  async delete(id: number): Promise<any> {
    const shop = await this.findById(id);
    await this.shopRepository.delete(shop);
    return { message: `provider ${shop.shopName} delete` };
  }
}
