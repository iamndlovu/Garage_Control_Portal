const router = require('express').Router();
let Variables = require('../../models/Variable.model');

router.route('/').get(async (req, res) => {
  try {
    const variables = await Variables.find().sort({ createdAt: -1 });
    res.json(variables);
  } catch (err) {
    res.status(400).json('Error: ' + err);
  }
});

router.route('/:id').get((req, res) => {
  Variables.findById(req.params.id)
    .then(variables => {
      if (variables) res.json(variables);
      else {
        res.status(400).json('Error: Object not found');
      }
    })
    .catch(err => res.status(400).json(`Error: ${err}`));
});

router.route('/add').post((req, res) => {
  const { status, temp, hum, co2, dust } = req.body;

  let variables = {
    status,
    temp,
    hum,
    co2,
    dust,
  };

  const newVariables = new Variables(variables);

  newVariables
    .save()
    .then(() => res.json(newVariables))
    .catch(err => res.status(400).json(`Error ${err}`));
});

router.route('/:id').delete((req, res) => {
  Variables.findByIdAndDelete(req.params.id)
    .then(() => res.json('Category deleted'))
    .catch(err => res.status(400).json(`Error: ${err}`));
});

module.exports = router;
