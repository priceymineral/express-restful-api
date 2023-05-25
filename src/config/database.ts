import * as dotenv from "dotenv";
dotenv.config();
import { DataSource } from "typeorm";

const AppDataSource = new DataSource({
    type: 'postgres',
    port: 5432,
    host: process.env.POSTGRES_HOST,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
})

export default AppDataSource;