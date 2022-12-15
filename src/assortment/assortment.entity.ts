import { CategoryEntity } from 'src/category/category.entity';
import { ProviderEntity } from 'src/provider/provider.entity';
import { ShopEntity } from 'src/shop/shop.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'assortment' })
export class AssortmentEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'varchar', length: 30, nullable: false })
  item: string;
  @Column()
  price: number;
  @ManyToOne(
    () => ProviderEntity,
    (provider: ProviderEntity) => provider.assortments,
    { nullable: false, eager: true },
  )
  @JoinColumn({ name: 'providerid' })
  provider: ProviderEntity;
  @ManyToOne(
    () => CategoryEntity,
    (category: CategoryEntity) => category.assortment_category,
    { nullable: false, eager: true },
  )
  @JoinColumn({ name: 'categoryid' })
  category: CategoryEntity;
  @ManyToMany(() => ShopEntity)
  @JoinTable()
  assortment: ShopEntity[];
}
