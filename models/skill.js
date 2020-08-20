const mySkills = [
    {id: 1, skill: 'JavaScript', learned: true}, 
    {id: 2, skill: 'HTML', learned: true}, 
    {id: 3, skill: 'CSS', learned: true}, 
    {id: 4, skill: 'Python', learned: false}, 
    {id: 5, skill: 'Ruby', learned: false}
]

module.exports = {
    getAll, 
    getOne, 
    create, 
    update, 
    deleteOne
}

function getAll(){
    return mySkills; 
}

function getOne(id) {
    return mySkills.find(skill => parseInt(id) === skill.id);
}

function create(skill) {
    skill.id = mySkills.length + 1; 
    skill.learned = false; 
    mySkills.push(skill);
}

function update(id, updatedSkill) {
    const skill = mySkills.find(s => s.id === parseInt(id));
    Object.assign(skill, updatedSkill);
}

function deleteOne(id) {
    const idx = mySkills.findIndex(skill => skill.id === parseInt(id));
    mySkills.splice(idx, 1);
}