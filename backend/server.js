// server.js (or main file)
import dotenv from 'dotenv';
dotenv.config({ path: './config.env' }); // Adjust the path if using `config.env`

import app from './app.js';
import { dbConnection } from './database/dbConnection.js';

const PORT = process.env.PORT || 3000;

// Call the database connection
dbConnection();

app.listen(PORT, () => {
  console.log(`SERVER HAS STARTED AT PORT ${PORT}`);
});
