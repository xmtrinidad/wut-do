const express = require('express');
const cors = require('cors');
const session = require('express-session');
const port = process.env.PORT || 3001;
const routes = require('./routes');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(
  session({
    secret: process.env.secret,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
  })
);
app.use(routes);

app.listen(port, () => console.log(`api server running on port http://localhost:${port}`));
