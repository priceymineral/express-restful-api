import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from "typeorm";
import { Listing } from "../listing/listing.model";
import { Review } from "../review/review.model";

@Entity("neighborhoods")
export class Neighborhood extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  name!: string;

  @Column({ default: 0, type: "float" })
  dog_friendly!: number;

  @Column({ default: 0, type: "float" })
  grocery_stores!: number;

  @Column({ default: 0, type: "float" })
  neighbors_friendly!: number;

  @Column({ default: 0, type: "float" })
  parking_easy!: number;

  @Column({ default: 0, type: "float" })
  yard!: number;

  @Column({ default: 0, type: "float" })
  community_events!: number;

  @Column({ default: 0, type: "float" })
  sidewalks!: number;

  @Column({ default: 0, type: "float" })
  walk_night!: number;

  @Column({ default: 0, type: "float" })
  five_years!: number;

  @Column({ default: 0, type: "float" })
  kids_outside!: number;

  @Column({ default: 0, type: "float" })
  car!: number;

  @Column({ default: 0, type: "float" })
  restaurants!: number;

  @Column({ default: 0, type: "float" })
  streets!: number;

  @Column({ default: 0, type: "float" })
  holiday!: number;

  @Column({ default: 0, type: "float" })
  quiet!: number;

  @Column({ default: 0, type: "float" })
  wildlife!: number;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;

  @OneToMany(() => Listing, (listing) => listing.neighborhood)
  listings!: Listing[];

  @OneToMany(() => Review, (review) => review.neighborhood)
  reviews!: Review[];
}
