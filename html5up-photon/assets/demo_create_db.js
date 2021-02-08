var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "rootuser",
  password: "H3nnessy"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
