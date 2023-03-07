require('../connection');

const Assignatura = require('../models/Assignatura');

const someFunction = async () => {
    const result = await Assignatura.deleteOne({name: 'EA'});
    //const result = await Assignatura.deleteMany({name: 'MXS'});
    //const result = await Assignatura.findByIdAndDelete('5e290e03a1def223dc11c70d');

    console.log(result);

};

someFunction();