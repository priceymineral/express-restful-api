import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
} from "typeorm";
import { Review } from "../review/review.model";

@Entity("users")
export class User extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  name!: string;

  @Column()
  type!: string;

  @Column()
  dog_owner!: boolean;

  @Column()
  parent!: boolean;

  @OneToMany(() => Review, (review) => review.user)
  reviews!: Review[];
}
