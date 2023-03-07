const { Schema, model } = require('mongoose');

const assignaturaSchema = new Schema({
    name: String,
    teacher: String,
    credits: String
});

module.exports = new model('Assignatura', assignaturaSchema);