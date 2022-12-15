import { WorkerEntity } from 'src/worker/worker.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

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
}
