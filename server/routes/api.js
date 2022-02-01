const router = require('express').Router();

router.use('/', async (req, res) => {
  res.status(200).json({ success: true });
});

module.exports = router;
