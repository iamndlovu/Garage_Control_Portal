const router = require('express').Router();
let Log = require('../../models/Log.model');

router.route('/').get(async (req, res) => {
  try {
    const logs = await Log.find().sort({ createdAt: -1 });
    res.json(logs);
  } catch (err) {
    res.status(400).json('Error: ' + err);
  }
});

module.exports = router;
