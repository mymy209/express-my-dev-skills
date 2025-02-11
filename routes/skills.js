var express = require('express');
var router = express.Router();

const skillsCtrl = require('../controllers/skills');

router.get('/', skillsCtrl.index);
//GET /skills/new
router.get('/new', skillsCtrl.new);
router.get('/:id', skillsCtrl.show);
//POST /skills
router.post('/', skillsCtrl.create);
//GET /skills/:id/edit
router.get('/:id/edit', skillsCtrl.edit);
//PUT /skills/:id
router.put('/:id', skillsCtrl.update);
//DELETE /skills/:id
router.delete('/:id', skillsCtrl.delete);

module.exports = router;
