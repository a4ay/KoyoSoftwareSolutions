var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "devswfu_tts",
    password: "Dev@Arif@12345",
    database: "devswfu_tts"
});
  
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

const sql = "select * from admin"
// query
// con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Result: " + result[0].name);
// });

con.query("SELECT email, name, password FROM admin", function (err, result, fields) {
    if (err) throw err;
    // console.log(fields);
    // console.log(fields[0]);
    result.map(a => console.log(a));
});


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

/*
// update data
const sqlUpdate = "UPDATE admin SET name = 'Tawi Tech Solutions' WHERE email = 'admin@tts.com'";
con.query(sqlUpdate, function (err, result) {
    if (err) throw err;
    console.log(result.affectedRows + " record(s) updated");
});
*/