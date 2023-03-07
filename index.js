// /Applications/mongodb-macos-x86_64-6.0.4/bin/mongod --dbpath data/db
require('./connection');

// using the model 
const Alumne = require('./models/Alumne');

// creating a new document base on the model
const alumneDoc = new Alumne({
    name: 'Pere',
    year: 2002,
    curs: '3B'
});

console.log('created alumne', alumneDoc)

alumneDoc.save();

console.log('2222created alumne', alumneDoc)

// saving the created document
/*Alumne.save((err, document) => {
    if (err) console.log(err);
    console.log('saved:', document);
});*/