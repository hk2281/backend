import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AssortmentEntity } from './assortment.entity';
import { AssortmentRepository } from './assortment.repository';
import { AssortmentDto } from './dto/assortment.dto';

@Injectable()
export class AssortmentService {
  constructor(
    @InjectRepository(AssortmentEntity)
    private assortmentRepository: AssortmentRepository,
  ) {}

  async getAll(): Promise<AssortmentEntity[]> {
    const list = await this.assortmentRepository.find();
    if (!list.length) {
      throw new NotFoundException({ message: 'list of accortment empty' });
    }
    return list;
  }
  async findById(id: number): Promise<AssortmentEntity> {
    const assortment_item = await this.assortmentRepository.findOneBy({
      id: id,
    });
    if (!assortment_item) {
      throw new NotFoundException({ message: 'assortment item not exist' });
    }
    return assortment_item;
  }
  async findByItemName(item: string): Promise<AssortmentEntity> {
    const assortment_item = await this.assortmentRepository.findOneBy({
      item: item,
    });
    return assortment_item ? assortment_item : null;
  }
  async findByPrice(price: number): Promise<AssortmentEntity> {
    const assortment_item = await this.assortmentRepository.findOneBy({
      price: price,
    });
    return assortment_item ? assortment_item : null;
  }
  // async findByItemProvider(
  //   providers: ProviderEntity,
  // ): Promise<AssortmentEntity> {
  //   const assortment_item = await this.assortmentRepository.findOneBy({
  //     providers: providers,
  //   });
  //   if (!assortment_item) {
  //     throw new NotFoundException({
  //       message: `item with provider ${providers.name} not exist`,
  //     });
  //   }
  //   return assortment_item ? assortment_item : null;
  // }
  async create(dto: AssortmentDto): Promise<any> {
    const assortment_item = this.assortmentRepository.create(dto);
    await this.assortmentRepository.save(assortment_item);
    return { message: `Assortment item ${assortment_item.item} save` };
  }
  async update(id: number, dto: AssortmentDto): Promise<any> {
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
  async delete(id: number): Promise<any> {
    const assortment_item = await this.findById(id);
    await this.assortmentRepository.delete(assortment_item);
    return { message: `assotrment item ${assortment_item.item} delete` };
  }
}
