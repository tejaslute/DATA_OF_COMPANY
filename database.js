var mysql = require('mysql');
const winston = require('winston');

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console()
  ]
});
var conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Coding@123',
  database: 'embedsol'
});
conn.connect(function (err) {
  if (err) throw err;
  //console.log('');
  logger.info('Database is connected successfully !')
});
module.exports = conn;