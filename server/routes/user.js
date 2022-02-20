const router = require('express').Router();

router.get('/', async (req, res) => {
  res.status(200).json({ success: true, msg: 'user route werk' });
});

router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const { data, error } = await supabase.from('Users').select('username, password').match({ username, password });
    console.log(data);
    console.log(error);
    if (data.length === 1) {
      req.session.user = username;
      return res.status(200).json({ success: true, username });
    } else if (data.length === 0) {
      return res.json({ success: false, msg: 'no user' });
    }
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
