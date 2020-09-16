const express = require('express');
const router = express.Router();

router.get('/current-time', (req, res) => {
  const unixTime = new Date().getTime();
  res.json({ time: unixTime });
});

module.exports = router;