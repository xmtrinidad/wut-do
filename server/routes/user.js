const router = require('express').Router();

router.get('/', async (req, res) => {
  res.status(200).json({ success: true, msg: 'user route werk' });
});

router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log(username, password);
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

module.exports = router;
