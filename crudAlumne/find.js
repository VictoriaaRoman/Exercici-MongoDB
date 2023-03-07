require('../connection');

const Alumne = require('../models/Alumne');

const searchAlumne = async () => {
    // search all products
    const alumne = await Alumne.find({});
    
    console.log(alumne)
};

searchAlumne();