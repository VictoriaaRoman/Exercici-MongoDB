require('../connection');

const Assignatura = require('../models/Assignatura');

const someFunction = async () => {

    const EA = new Assignatura({
        name: 'EA',
        teacher: 'Toni Oller i Roc Meseguer',
        credits: '12'
    });
    await EA.save();

    const MXS = new Assignatura({
        name: 'MXS',
        teacher: 'Eduard',
        credits: '6'
    });
    await MXS.save();

    const CSF = new Assignatura({
        name: 'CSF',
        teacher: 'Juan Sanchez',
        credits: '6'
    });
    await CSF.save();


    const assignatura = await Assignatura.find({name: 'EA'});
    console.log(assignatura)

};

someFunction();