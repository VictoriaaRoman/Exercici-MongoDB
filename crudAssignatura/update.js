require('../connection');

const Assignatura = require('../models/Assignatura');

const someFunction = async () => {
    const assignatura = await Assignatura.findOne({name: 'EA'});
    assignatura.name = 'XT';
    await assignatura.save();
    console.log(assignatura);
};

const otherFunction = async () => {
    const assignatura = await Assignatura.findOneAndUpdate({name: 'MXS'}, {
        name: 'SAI'
    }, {new: true});
    console.log(assignatura);
};

// someFunction();
otherFunction();