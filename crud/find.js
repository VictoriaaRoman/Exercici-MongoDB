require('../connection');

const Assignatura = require('../models/Assignatura');

const searchAlumne = async () => {
    // search all products
    const alumne = await Assignatura.find({});
    
    console.log(alumne)
};

searchAlumne();