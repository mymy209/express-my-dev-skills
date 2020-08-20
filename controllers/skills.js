const MySkill = require('../models/skill');

module.exports = {
    index, 
    show, 
    new: newSkill, 
    create, 
    edit, 
    update, 
    delete: deleteSkill
}

function index(req, res) {
    res.render('skills/index', {
        skills: MySkill.getAll()
    });
}

function show(req, res) {
    res.render('skills/show', {
        skill: MySkill.getOne(req.params.id), 
        skillId: req.params.id
    });
}
function newSkill(req, res) {
    res.render('skills/new')
}

function create(req, res) {
    MySkill.create(req.body);
    res.redirect('/skills');
}

function edit(req, res) {
    const skill = MySkill.getOne(req.params.id); 
    res.render('skills/edit', {skill});
}

function update(req, res) {
    req.body.learned = !!req.body.learned;
    MySkill.update(req.params.id, req.body);
    res.redirect('/skills');
}

function deleteSkill(req, res) {
    MySkill.deleteOne(req.params.id); 
    res.redirect('/skills');
}