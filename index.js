const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const cors = require('cors');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Skinner1234!',
    database: 'crud_contact'
})

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/get', (req, res) => {
    const sqlGET = 'SELECT * FROM contact_db';
    db.query(sqlGET, (err, result) => {
        res.send(result);
    });
});

app.get('/', (req, res) => {
    // const sqlInsert = `INSERT INTO contact_db (name, email, contact) VALUES ('John smith', 'johnsmith@gmal.com', '123412345')`;
    // db.query(sqlInsert, (err, result) => {
    //     console.log('error', err);
    //     console.log('result', result);
    // })
    // res.send('Hello World');
})

app.listen(3001, () => {
    console.log(`Server is running on port 3001`);
});
