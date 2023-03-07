require('../connection');

const Alumne = require('../models/Alumne');

const someFunction = async () => {

    const juan = new Alumne({
        name: 'Juan',
        year: 2001,
        curse: '3B'
    });
    await juan.save();

    const pepe = new Alumne({
        name: 'Pepe',
        year: 1999,
        curse: '3A'
    });
    await pepe.save();

    const laura = new Product({
        name: 'Laura',
        year: 2002,
        curse: '2A'
    })
    await laura.save();


    const alumne = await Alumne.find({name: 'Laura'});
    console.log(alumne)

};

someFunction();