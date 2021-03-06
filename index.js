var Connection = require('tedious').Connection;

// Create connection to database
var config = {
  server: '127.0.0.1',
  options: {
      instanceName: 'SQLEXPRESS',
      database: 'SampleDB',
      encrypt: true
  },
  authentication: {
      type: "default",
      options: {
        userName: "sa",
        password: "1"
      }
  }
}
var connection = new Connection(config);

// Attempt to connect and execute queries if connection goes through
connection.on('connect', function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected');
  }
});