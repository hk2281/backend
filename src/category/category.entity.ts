import { AssortmentEntity } from 'src/assortment/assortment.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'category' })
export class CategoryEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'varchar', length: 30, nullable: false })
  cat_title: string;
  @OneToMany(() => AssortmentEntity, (assortmet) => assortmet.category, {
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  })
  assortment_category: AssortmentEntity[];
}
