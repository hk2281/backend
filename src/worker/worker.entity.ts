import { ShopEntity } from 'src/shop/shop.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'worker' })
export class WorkerEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'varchar', length: 30, nullable: false })
  firstName: string;
  @Column({ type: 'varchar', length: 30, nullable: false })
  lastName: string;
  @Column({ type: 'varchar', length: 30, nullable: false })
  positionRole: string;
  @Column({ type: 'varchar', length: 12, nullable: true })
  contact: string;
  @ManyToOne(() => ShopEntity, (shop: ShopEntity) => shop.worker, {
    nullable: false,
    eager: true,
  })
  @JoinColumn({ name: 'providerid' })
  shop: ShopEntity;
}
