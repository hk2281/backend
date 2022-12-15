import { ProviderEntity } from 'src/provider/provider.entity';
import {
  Column,
  Entity,
  JoinColumn,
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
}
