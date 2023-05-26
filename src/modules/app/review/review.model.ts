import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Neighborhood } from "../neighborhood/neighborhood.model";
import { User } from "../user/user.model";

@Entity("reviews")
export class Review extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  date!: Date;

  @Column()
  full_text!: string;

  @Column()
  likes!: number;

  @Column()
  community!: boolean;

  @Column()
  commute!: boolean;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;

  @ManyToOne(() => Neighborhood, (neighborhood) => neighborhood.reviews)
  @JoinColumn({ name: "neighborhood_id" })
  neighborhood!: Neighborhood;

  @ManyToOne(() => User, (user) => user.reviews)
  @JoinColumn({ name: "user_id" })
  user!: User;
}
