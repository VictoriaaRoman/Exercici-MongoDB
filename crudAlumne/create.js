require('../connection');

const Alumne = require('../models/Alumne');

const someFunction = async () => {

    const juan = new Alumne({
        name: 'Juan',
        year: 2001,
        curs: '3B'
    });
    await juan.save();

    const pepe = new Alumne({
        name: 'Pepe',
        year: 1999,
        curs: '3A'
    });
    await pepe.save();

    const laura = new Alumne({
        name: 'Laura',
        year: 2002,
        curs: '2A'
    })
    await laura.save();


    const alumne = await Alumne.find({name: 'Laura'});
    console.log(alumne)

};

someFunction();