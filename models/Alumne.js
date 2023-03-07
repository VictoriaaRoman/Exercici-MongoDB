const { Schema, model } = require('mongoose');

// https://mongoosejs.com/docs/schematypes.html
const alumneSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    year: Number,
    curs: String
});

module.exports = model('Alumne', alumneSchema);