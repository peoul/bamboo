//In server.ts, we  can import config and express app

import { testConnection } from '#config/database.js';
import { initializeDatabase } from '#database/init.js';
import app from './app'
import config from './config/environment'



async function startServer() {

  try {
    await testConnection(),
    await initializeDatabase();

    app.listen(config.port, ()=> {
      console.log("Server is running on port:", config.port)
    });
  } catch(error) {
    console.error(error);
    process.exit(1)
  }

}

startServer()