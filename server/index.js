const cors = require('cors');
const express = require('express');
const mysql = require('mysql');

const app = express();

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST_IP,
    port: 3306,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
});

app.use(cors());

app.listen(process.env.REACT_APP_SERVER_PORT, () => {
    console.log(`YYYYYYYYYYYYYY App server now listening on port ${process.env.REACT_APP_SERVER_PORT}`);
});

app.get('/test', (req, res) => {
    const table = req.query;
    const params = req.params;
    console.log("table = " + JSON.stringify(table,null, 2));
    pool.query(`insert into sample values (0, 'webby')`)
    pool.query(`select * from ${table.table}`, (err, results) => {
	if (err) {
	    return res.send(err);
	} else {
	    return res.send(results);
	}
    });
});
