// dependencies
require('dotenv').config();
const express = require('express');
const massive = require('massive');
const session = require('express-session');
// variables
const app = express();
const {SERVER_PORT, SESSION_SECRET, CONNECTION_STRING} = process.env;
const auth = require('./controllers/authControl.js')
// **top-level middleware**
// this is where we execute some prebuilt code from our express or express-session packages for every request that comes through
// think of this as a middleman or a filter that facilitates your endpoints
// **BODY PARSER**
// this particular top level middleware translates the body coming in from any request into usable code for our endpoints.
// without this we woudn't be able to use req.body
app.use(express.json());
//**SESSION MIDDLEWARE**
//this middleware looks at the cookie that comes in from each request (stored in the browser) and either sets up a session if one
// doesn't exist already or updates/verifies an existing session. Like all middleware, this is executed for each request
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24
    }
}));

// **CONNECT TO DB**
// by invoking massive, we connect our server to our postgreSQL database on heroku and use express (app.set('db', db)) to set up
// a reference to our db throughout our project
massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then( db => {
    app.set('db', db)
    console.log('Hey! Connected to db')
});
//**ENDPOINTS**
// this is where we will write our endpoints
// auth endpoints
app.post('/auth/register', auth.register);
app.post('/auth/login', auth.login);
app.post('/auth/logout', auth.logout);
app.get('/auth/user', auth.getUser);
// listen
app.listen(SERVER_PORT, () => console.log(`Get out of my swamp! ${SERVER_PORT}`));