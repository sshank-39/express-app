import express from 'express';
import { Sequelize, Dialect } from 'sequelize'; // Import Sequelize

const dialect: Dialect = 'mssql';

// const app = express();

// app.get('/hello', (req, res) => {
//   res.status(200).send('Hello world!');
// })

// // Start the server
// const port = 8080;
// app.listen(port, () => {
//   console.log(`Server listening on port ${port}`);
// });

// const config = {
//   server: process.env["db_server"],
//   port: process.env["db_port"],
//   database: process.env["db_database"],
//   authentication: {
//       type: 'azure-active-directory-msi-vm'
//   },
//   options: {
//       encrypt: true
//   }
// }

const config = {
  dialect: dialect, // Use the correct Sequelize dialect for Microsoft SQL Server
  host: 'testdb-263139.database.windows.net',
  database: 'test-db-263139',
  port: 1433,
  dialectOptions: {
    authentication: {
      type: 'azure-active-directory-msi-vm', 
      options: {
        msiClientId: '01e4b376-6689-4d8e-b2a6-bf46198b1861', // Replace with your Service Principal's client ID 
      },
    },
  },
  // dialectOptions: {
  //   options: {
  //     authentication: {
  //       type: 'azure-active-directory-msi-vm',
  //       // options: {
  //       //   msiIdentityClientId: '01e4b376-6689-4d8e-b2a6-bf46198b1861',
  //       // },
  //     },
  //     encrypt: true
  //   },
  // },
};

const sequelize = new Sequelize(config);

// Test the connection
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });
