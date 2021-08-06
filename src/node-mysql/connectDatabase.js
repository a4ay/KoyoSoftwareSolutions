var mysql = require('mysql');

const connectDatabase = mysql.createConnection({
    host: "localhost",
    user: "devswfu_tts",
    password: "Dev@Arif@12345",
    database: "devswfu_tts"
});
  
connectDatabase.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});



/*
// query
const sql = "select * from admin"
con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Result: " + result);
});
*/

/*
// insert
const sqlInsert = "INSERT INTO admin (email, name, password) VALUES ('admin@tts.com', 'Tawi Tech', 'Tts123')";
con.query(sqlInsert, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
});
*/


/*
// insert multiple
var sqlInserts = "INSERT INTO customers (name, address) VALUES ?";
var values = [
    ['John', 'Highway 71'],
    ['Peter', 'Lowstreet 4'],
    ['Viola', 'Sideway 1633']
];
con.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
});
*/