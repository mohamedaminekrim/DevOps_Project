const Sequelize = require('sequelize');

const dbConfig = {
  host: 'localhost',
  username: 'root',
  password: 'eXitvoid',
  database: 'devopsproject',
};

const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
  host: dbConfig.host,
  dialect: 'mysql',
});

// Test the database connection
sequelize
  .authenticate()
  .then(() => {
    console.log('Connected to the MySQL server');
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });

module.exports = sequelize;
