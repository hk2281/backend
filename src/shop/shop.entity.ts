import { AssortmentEntity } from 'src/assortment/assortment.entity';
import { WorkerEntity } from 'src/worker/worker.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'shop' })
export class ShopEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'varchar', length: 30, nullable: false })
  shopName: string;
  @Column({ type: 'varchar', length: 30, nullable: false })
  shopAddress: string;
  @OneToMany(() => WorkerEntity, (worker) => worker.shop, {
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  })
  worker: WorkerEntity;
  @ManyToMany(() => AssortmentEntity, (assortment) => assortment.shops, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinTable({
    name: 'assortment_shop',
    joinColumn: { name: 'shopId', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'assortmentId', referencedColumnName: 'id' },
  })
  assortments?: AssortmentEntity[];
}
