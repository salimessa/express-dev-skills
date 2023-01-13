const skills = [
    {id: 135892, skill: 'Javascript', master: true},
    {id: 151819, skill: 'Learn Node', master: false},
    {id: 101112, skill: 'HTML', master: true}
];
  
module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
};

function getAll() {
    return skills;
}

function getOne(id) {
  
    id = parseInt(id);
    
    return skills.find(skill => skill.id === id);
}

function create(skill) {
    skill.id = Date.now() % 1000000
    skill.master = false
    skills.push(skill)
}

function deleteOne(id) {
    id = parseInt(id)
    const idx = skills.findIndex(skill => skill.id === id)
    skills.splice(idx, 1)
}