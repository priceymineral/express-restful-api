import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity('reviews')
export class Review extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    user_id: number;

    @Column()
    neighborhood_id: number;

    @Column()
    date: Date;

    @Column()
    full_text: string;  

    @Column()
    likes: number;

    @Column()
    community: boolean;

    @Column()
    commute: boolean;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

}
