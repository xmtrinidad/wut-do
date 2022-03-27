const router = require('express').Router();
const sql = require('mssql');

router.get('/', async (req, res) => {
  res.status(200).json({ success: true });
});

router.post('/login', async (req, res) => {
  console.log(req.body);
  return res.status(200).json({ success: true });
});

router.post('/createWutDo', async (req, res) => {
  console.log('create wut do works');
  const data = req.body.data;

  const wutdoInsertQuery = await sql.query`
    INSERT INTO wutdo (userId, title, description)
    VALUES ('1', ${data.wutdoTitle}, ${data.description});`
});

module.exports = router;
