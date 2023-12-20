import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class FactoryDetail {
  @PrimaryGeneratedColumn()
  id: number;

  @Column() 
  usingUnit: string;

  @Column({ type: 'date' })
  startDate: Date;

  @Column({ type: 'date' })
  endDate: Date;

  @Column()
  usageKW: number;

  @Column()
  usageCost: number;

  @Column()
  discountedPrice: boolean;
}