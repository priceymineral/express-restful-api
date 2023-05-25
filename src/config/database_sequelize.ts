import { Sequelize } from "sequelize-typescript";  
import * as dotenv from "dotenv";
dotenv.config();

class Database {
    public sequelize: Sequelize | undefined;

    private POSTGRES_DB: string = process.env.POSTGRES_DB as string;
    private POSTGRES_HOST: string = process.env.POSTGRES_HOST as string;
    private POSTGRES_PORT: number = process.env.POSTGRES_PORT as unknown as number;
    private POSTGRES_USER: string = process.env.POSTGRES_USER as unknown as string;
    private POSTGRES_PASSWORD = process.env
        .POSTGRES_PASSWORD as unknown as string;

    constructor() {
        this.connectToPPostgreSQL();
    }

    private async connectToPPostgreSQL() { 
        this.sequelize = new Sequelize({
            database: this.POSTGRES_DB,
            username: this.POSTGRES_USER,
            password: this.POSTGRES_PASSWORD,
            host: this.POSTGRES_HOST,
            port: this.POSTGRES_PORT,
            dialect: 'postgres',
        }); 
        
        this.sequelize
        .authenticate()
        .then(() => {
            console.log('✅ Postgres connection established successfully.');
        })
        .catch((error: Error) => {    
            console.error('❌ Unable to connect to the Postgres:', error);
        });
    }
}

export default Database;