const router = require('express').Router();
const sql = require('mssql');
const bcrypt = require('bcrypt');
const saltRounds = 10;
require('dotenv').config();

const sqlConfig = {
  user: process.env.db_user,
  password: process.env.db_password,
  database: process.env.db_db,
  server: 'database',
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000
  },
  options: {
    trustServerCertificate: true // change to true for local dev / self-signed certs
  }
};

router.get('/', async (req, res) => {
  res.status(200).json({ success: true, msg: 'user route werk' });
});

router.post('/register', async (req, res) => {
  try {
    await sql.connect(sqlConfig);
    const { username, password } = req.body;
    const userMustBeUnique = await sql.query`SELECT * FROM [WutDoDB].[dbo].[users] WHERE username = ${username}`;
    if (userMustBeUnique.recordset.length) {
      return res.json({ success: false, msg: 'username must be unique' });
    }
    const hashPassword = bcrypt.genSalt(saltRounds, (err, salt) => {
      bcrypt.hash(password, salt, async (err, hash) => {
        if (err) {
          console.error(err);
          return;
        }
        const insertNewUser =
          await sql.query`INSERT INTO [WutDoDB].[dbo].[users] (username, password) VALUES (${username}, ${hash})`;
        console.log(insertNewUser);
        if (insertNewUser.rowsAffected) {
          return res.status(200).json({ success: true, msg: 'new user created' });
        } else {
          return res.status(400).json({ success: false, msg: 'something went wrong' });
        }
      });
    });
  } catch (err) {
    console.error(err);
    return res.status(400).json({ error: err });
  }
});

router.post('/login', async (req, res) => {
  try {
    await sql.connect(sqlConfig);
    const { username, password } = req.body;
    const checkForUser = await sql.query`SELECT * FROM [WutDoDB].[dbo].[users] WHERE username = ${username}`;
    if (checkForUser.recordset.length) {
      const comparePassword = await bcrypt.compare(password, checkForUser.recordset[0].password);
      if (comparePassword) {
        req.session.user = username;
        return res.status(200).json({ success: true, username });
      } else {
        return res.status(401).json({ success: false, msg: 'incorrect username or password' });
      }
    }
  } catch (err) {
    console.error(err);
  }
});

router.get('/user-deets', async (req, res) => {
  try {
    const user = req.session.user;
    if (!user) {
      return res.status(307).json({ success: false, msg: 'you are not logged in' });
    } else {
      return res.status(200).json({ success: true, username: user });
    }
  } catch (err) {
    console.error(err);
  }
  console.log(req.session);
});

router.get('/users', async (req, res) => {
  try {
    console.log(sqlConfig);
    await sql.connect(sqlConfig);
    // const connectionString = await sql.connect('Server=database,1433;Database=WutDoDB;User Id=SA;Password=Testing1122');
    // console.log(connectionString);
    const users = await sql.query`SELECT * FROM [WutDoDB].[dbo].[users]`;
    console.log(users);
    return res.status(200).json({ success: true, users: users.recordset });
  } catch (err) {
    console.error(err);
    return res.status(400).json({ error: err });
  }
});

module.exports = router;
