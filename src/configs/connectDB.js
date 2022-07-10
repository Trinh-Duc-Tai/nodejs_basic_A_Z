// get the client
// import mysql from 'mysql2';
// create the connection to database
// const connection = mysql.createConnection({
    //     host: 'localhost',
    //     user: 'root',
    //     database: 'nodejsbasic'
    // });
    
    // const connection = await mysql.createConnection({host:'localhost', user: 'root', database: 'nodejsbasic'});
const mysql = require('mysql2/promise');

console.log("Creating connection pool...")
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database:'nodejsbasic'
})


// simple query
// connection.query(
//     'SELECT * FROM `users` ',
//     // function (err, results, fields) {
//     //     console.log(">>> check mysql")
//     //     console.log(results); // results contains rows returned by server
//     //     // let rows = results.map((row) => { return row})      //bỏ được cái Text Row hiện lên
//     //     console.log(results[0]); 
//     // }
// );

// export default connection;
export default pool;