require('../connection');

const Assignatura = require('../models/Assignatura');

const someFunction = async () => {
    const newAssignatura = await Assignatura.findOne({name: 'MSX'});
    const otherAssignatura= await Assignatura.findOne({name: 'CSF'});
    
    console.log(newAssignatura)
    console.log(otherAssignatura)
};

someFunction();