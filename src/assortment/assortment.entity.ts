import { ProviderEntity } from 'src/provider/provider.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
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
  @ManyToMany((type) => ProviderEntity)
  @JoinTable()
  providers: ProviderEntity[];
}
