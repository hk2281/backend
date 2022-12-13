import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
