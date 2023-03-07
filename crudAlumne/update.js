require('../connection');

const Alumne = require('../models/Alumne');

const someFunction = async () => {
    const alumne = await Alumne.findOne({name: 'Maria'});
    alumne.name = 'Marta';
    await alumne.save();
    console.log(alumne);
};

const otherFunction = async () => {
    const alumne = await Alumne.findOneAndUpdate({name: 'Maria'}, {
        name: 'Monica'
    }, {new: true});
    console.log(alumne);
};

// someFunction();
otherFunction();