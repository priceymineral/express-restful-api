import express, { Application, Express, Request, Response } from "express";
import Database from "./db/database_sequelize";

class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.routes();
    this.databaseSync();
  }

  protected routes(): void {
    this.app.route("/").get((req: Request, res: Response) => {
      res.send("Hello Tamagi Pan! 💛");
    });
  }

  protected databaseSync(): void {
    const db = new Database();
    db.sequelize?.sync();
    // db.sequelize?.sync({ force: true });
  }
}

const port: number = 3000;
const app = new App().app;

app.listen(port, () => {
  console.log(`✅ Server listening on port ${port}.`);
});
