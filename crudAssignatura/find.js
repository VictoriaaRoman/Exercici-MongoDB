require('../connection');

const Assignatura = require('../models/Assignatura');

const searchAssignatura = async () => {
    // search all products
    const assignatura = await Assignatura.find({});
    
    console.log(assignatura)
};

searchAssignatura();