import { Entity, Column, PrimaryGeneratedColumn, OneToOne  } from 'typeorm';
import { FactoryDetail } from 'src/factoryDetail/entities/factoryDetail.entity';

@Entity()
export class FactoryList {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  factoryName: string;

  @Column({ type: 'date' })
  membershipDate: Date;

  @Column({ type: 'date' })
  membershipEndDate: Date;

  @Column()
  employeeCount: number;

  @Column()
  freeMember: boolean;

  @OneToOne(() => FactoryDetail, { cascade: true })
  factoryDetail: FactoryDetail;
}