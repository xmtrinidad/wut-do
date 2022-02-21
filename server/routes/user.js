const router = require('express').Router();
const sql = require('mssql');
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

router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    return res.status(200).json({ success: true, username });
  } catch (err) {
    console.error(err);
  }
});

router.get('/user-deets', async (req, res) => {
  try {
    const user = req.session.user;
    if (!user) {
      return res.status(200).json({ username: false });
    } else {
      return res.status(200).json({ username: user });
    }
  } catch (err) {
    console.error(err);
  }
  console.log(req.session);
});

router.get('/users', async (req, res) => {
  try {
    // console.log(sqlConfig);
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
