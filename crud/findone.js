require('../connection');

const Alumne = require('../models/Alumne');

const someFunction = async () => {
    const newAlumne = await Alumne.findOne({name: 'Juan'});
    const otherAlumne= await Alumne.findOne({name: 'Maria'});
    
    console.log(newAlumne)
    console.log(otherAlumne)
};

someFunction();