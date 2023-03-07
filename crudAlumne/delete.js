require('../connection');

const Alumne = require('../models/Alumne');

const someFunction = async () => {
    const result = await Alumne.deleteOne({name: 'Juan'});
    //const result = await Alumne.deleteMany({name: 'Laura'});
    //const result = await Alumne.findByIdAndDelete('5e290e03a1def223dc11c70d');
    

    console.log(result);

};

someFunction();