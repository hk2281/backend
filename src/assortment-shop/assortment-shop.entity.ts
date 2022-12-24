import { AssortmentEntity } from 'src/assortment/assortment.entity';
import { ShopEntity } from 'src/shop/shop.entity';
import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity({ name: 'assortment_shop' })
export class AssortmentShop {
  @PrimaryColumn({ name: 'assortmentId' })
  assortmentId: number;
  @PrimaryColumn({ name: 'shopId' })
  shopId: number;

  @ManyToOne(() => AssortmentEntity, (assortment) => assortment.shops, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'assortmentId', referencedColumnName: 'id' }])
  assortments: AssortmentEntity[];

  @ManyToOne(() => ShopEntity, (shop) => shop.assortments, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'shopId', referencedColumnName: 'id' }])
  shops: ShopEntity[];
}
