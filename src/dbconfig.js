const mysql = require('mysql');

const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: 'eXitvoid',
  database: 'devopsproject',
  authSwitchHandler: function ({pluginName, pluginData}, cb) {
    if (pluginName === 'mysql_clear_password') {
      // Bypass authentication plugin
      cb(null, Buffer.from([0]));
    }
  }
};

const connection = mysql.createConnection(dbConfig);

connection.connect(function(err) {
  if (err) throw err;
  console.log('Connected to the MySQL server');
});

module.exports = connection;
