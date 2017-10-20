var router = require('express').Router();
const db = require('../../db')

const Campuses = db.model("Campus");
const Students = db.model("Student");

router.get('/', (req, res, next) => {
    Students.findAll({ include: [Campuses]})
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
  var student = req.body
  if (!student.name || !student.email || !student.CampusId) {
      res.sendStatus(500)
      return;
  }
  Students.create({ name: student.name, email: student.email, CampusId: student.CampusId })
  .then(user => {
    res.status(200).json(user);
  })
  .catch(next);
})

router.put('/:id', (req, res, next) => {
  Students.findOne({ where: { id: req.params.id } })
  .then(user => {
    user.update(req.body)
    res.status(201).json(user);
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