const router = require('express').Router();
let Variables = require('../../models/Variable.model');
let Log = require('../../models/Log.model');

router.route('/').get(async (req, res) => {
  try {
    const variables = await Variables.find().sort({ createdAt: -1 });
    const currentVar = variables[0];
    res.json(currentVar.status);
  } catch (err) {
    res.status(400).json('Error: ' + err);
  }
});

router.route('/open/:id').get(async (req, res) => {
  const user = req.params.id;

  try {
    const variables = await Variables.find().sort({ createdAt: -1 });
    let currentVar = variables[0];
    currentVar.status = 1;
    currentVar.save();

    const newLog = new Log({ user });
    newLog.save().then(() => res.json(currentVar));
  } catch (err) {
    res.status(400).json('Error: ' + err);
  }
});

router.route('/close').get(async (req, res) => {
  try {
    const variables = await Variables.find().sort({ createdAt: -1 });
    let currentVar = variables[0];
    currentVar.status = 0;
    currentVar.save();
    res.json(currentVar);
  } catch (err) {
    res.status(400).json('Error: ' + err);
  }
});

module.exports = router;
