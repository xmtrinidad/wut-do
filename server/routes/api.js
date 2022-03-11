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
  res.status(200).json({ success: true });
});

router.post('/login', async (req, res) => {
  console.log(req.body);
  return res.status(200).json({ success: true });
});

router.post('/createWutDo', async (req, res) => {
  console.log('create wut do works');
  console.log(req.session);
  console.log(req.body);
  const { user } = req.session;
  const { title, description } = req.body;
  try {
    await sql.connect(sqlConfig);
    const getUser = await sql.query`SELECT [userId]
    FROM [WutDoDb].[dbo].[users] where username = ${req.session.user}`;
    console.log(getUser.recordset[0].userId);
    const { userId } = getUser.recordset[0];
    const insert = await sql.query`INSERT INTO [WutDoDb].[dbo].[wutdo] ([userId]
    ,[title]
    ,[description]) VALUES (${userId}, ${title}, ${description})`;
    const returnTodos = await sql.query`SELECT * FROM [WutDoDb].[dbo].[wutdo] WHERE [userId] = ${userId}`;
    const json = returnTodos.recordset;
    console.log(json);
    return res.status(200).json({ success: true, todos: json });
  } catch (err) {
    console.error(err);
    res.status(400).json({ success: false });
  }
  // if (req.session.user) {
  //   await
  // }
});

module.exports = router;
