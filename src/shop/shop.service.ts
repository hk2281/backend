import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { find } from 'rxjs';
import { AssortmentShop } from 'src/assortment-shop/assortment-shop.entity';
import { AssortmentShopRepository } from 'src/assortment-shop/assortment-shop.repository';
import { ShopDto } from './dto/shop.dto';
import { ShopEntity } from './shop.entity';
import { ShopRepository } from './shop.repository';

@Injectable()
export class ShopService {
  constructor(
    @InjectRepository(ShopEntity)
    private shopRepository: ShopRepository,
    @InjectRepository(AssortmentShop)
    private assortmentShopRepository: AssortmentShopRepository,
  ) {}

  async getAll(): Promise<ShopEntity[]> {
    const list = await this.shopRepository.find();
    if (!list.length) {
      throw new NotFoundException({ message: 'list is empty' });
    }
    return list;
  }
  async getAllAssShop(): Promise<AssortmentShop[]> {
    const list = await this.assortmentShopRepository.find();
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
    return {
      message: `shop ${shop.shopName} save`,
    };
  }
  async createAssShop(createAssShop: {
    assortmentId: number;
    shopId: number;
  }): Promise<any> {
    const shop = await this.shopRepository.findOne({
      where: { id: createAssShop.shopId },
    });
    if (!shop) {
      throw new NotFoundException({ message: 'list is empty' });
    }
    await this.assortmentShopRepository.save(createAssShop);
  }
  async update(id: number, dto: ShopDto): Promise<any> {
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
  async delete(id: number): Promise<any> {
    const shop = await this.findById(id);
    await this.shopRepository.delete(shop);
    return { message: `provider ${shop.shopName} delete` };
  }
}
