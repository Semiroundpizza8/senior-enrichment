var router = require('express').Router();
const db = require('../../db')

const Campuses = db.model("Campus");
const Students = db.model("Student");

router.get('/', (req, res, next) => {
    Students.findAll({})
    .then(studentArr => {
      res.json(studentArr);
    })
    .catch(next);
})

router.get('/:id', (req, res, next) => {
  Students.findOne({
    where: { id: req.params.id }
  })
  .then(student => {
    res.json(student);
  })
  .catch(next)
})

router.post('/', (req, res, next) => {
  if (!req.body.name || !req.body.email || !req.body.CampusId) {
      res.sendStatus(500)
      return;
  }
  Students.findOrCreate({ where: {name: req.body.name, email: req.body.email, CampusId: req.body.CampusId} })
  .then(user => {
    res.status(201).json(user);
  })
  .catch(next);
})

router.put('/:id', (req, res, next) => {
  Students.findOne({ where: { id: req.params.id } })
  .then(user => {
    user.update(req.body)
    res.status(200).json(user);
  })
  .catch(next);
})

router.delete('/:id', (req, res, next) => {
  Students.findOne({ where: { id: req.params.id } })
  .then(user => {
    user.destroy(req.body)
    res.status(200).json(user);
  })
  .catch(next);
})

module.exports = router;