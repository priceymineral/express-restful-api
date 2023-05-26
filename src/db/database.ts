import * as dotenv from "dotenv";
dotenv.config();
import { DataSource } from "typeorm";
import { Review } from "../modules/app/review/review.model";
import { Listing } from "../modules/app/listing/listing.model";
import { Neighborhood } from "../modules/app/neighborhood/neighborhood.model";
import { User } from "../modules/app/user/user.model";

const AppDataSource = new DataSource({
  type: "postgres",
  port: 5432,
  host: process.env.POSTGRES_HOST,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  synchronize: true,
  entities: [Review, Listing, Neighborhood, User],
});

export default AppDataSource;
