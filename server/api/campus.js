var router = require('express').Router();
const db = require('../../db')

const Campuses = db.model("Campus");
const Students = db.model("Student");

router.get('/', (req, res, next) => {
    Campuses.findAll({})
    .then(campusArr => {
      res.json(campusArr);
    })
    .catch(next);
})

router.get('/:id', (req, res, next) => {
  Campuses.findOne({
    where: { id: req.params.id }
  })
  .then(student => {
    res.json(student);
  })
  .catch(next)
})

router.post('/', (req, res, next) => {
  if (!req.body.name) {
      res.sendStatus(500)
      return;
  }
  Campuses.findOrCreate({ where: {name: req.body.name, image: req.body.image} })
  .then(campus => {
    res.status(201).json(campus);
  })
  .catch(next);
})

router.put('/:id', (req, res, next) => {
  Campuses.findOne({ where: { id: req.params.id } })
  .then(user => {
    user.update(req.body)
    res.status(200).json(user);
  })
  .catch(next);
})

router.delete('/:id', (req, res, next) => {
  Campuses.findOne({ where: { id: req.params.id } })
  .then(user => {
    user.destroy(req.body)
    res.status(200).json(user);
  })
  .catch(next);
})


module.exports = router;