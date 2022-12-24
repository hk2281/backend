import { AssortmentEntity } from 'src/assortment/assortment.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'provider' })
export class ProviderEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'varchar', length: 30, nullable: false, unique: true })
  name: string;
  @Column({ type: 'varchar', length: 60, nullable: true })
  contact: string;
  @Column({ type: 'varchar', length: 30, nullable: true })
  country: string;
  @OneToMany(() => AssortmentEntity, (assortment) => assortment.provider, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  assortments: AssortmentEntity[];
}
