// Import the Sequelize library
const Sequelize = require("sequelize");

// Load environment variables from a .env file
require("dotenv").config();

// Create a Sequelize instance
const sequelize = process.env.JAWSDB_URL
  // If JAWSDB_URL is set, use it to connect to the database
  ? new Sequelize(process.env.JAWSDB_URL)
  // Otherwise, use the DB_NAME, DB_USER, and DB_PW environment variables to connect to the database
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      // Set the host to "localhost" (i.e., the local machine)
      host: "localhost",
      // Set the dialect to "mysql" (i.e., MySQL database)
      dialect: "mysql",
      // Set options for the dialect
      dialectOptions: {
        // Enable decimal numbers in the database
        decimalNumbers: true,
      },
    });

// Export the Sequelize instance
module.exports = sequelize;