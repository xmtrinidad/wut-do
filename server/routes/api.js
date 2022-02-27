const router = require('express').Router();

router.get('/', async (req, res) => {
  res.status(200).json({ success: true });
});

router.post('/login', async (req, res) => {
  console.log(req.body);
  return res.status(200).json({ success: true });
});

router.post('/createWutDo', async (req, res) => {
  
});

module.exports = router;
