import AppDataSource from "./config/database";

AppDataSource.initialize()
  .then(() => console.log ("✅ Connected to database."))
  .catch((err)=> console.log("❌ Failed to connect to database.", err))