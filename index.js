require('./connection');

// using the model 
const alumne = require('./models/Alumne');

// creating a new document base on the model
const alumne = new Alumne({
    name: 'Maria',
    year: 2002,
    curse: '3B'
});

console.log('created alumne', alumne)

// saving the created document
product.save((err, document) => {
    if (err) console.log(err);
    console.log('saved:', document);
});