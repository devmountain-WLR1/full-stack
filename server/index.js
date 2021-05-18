// dependencies
require('dotenv').config();
const express = require('express');
const massive = require('massive');
const session = require('express-session');
// variables
const app = express();
const {SERVER_PORT, SESSION_SECRET, CONNECTION_STRING} = process.env;
// top-level middleware
app.use(express.json());
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24
    }
}))

// connect to db
massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then( db => {
    app.set('db', db)
    console.log('Hey! Connected to db')
})
//endpoints


// listen
app.listen(SERVER_PORT, () => console.log(`Get out of my swamp! ${SERVER_PORT}`))