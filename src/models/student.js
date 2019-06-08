const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const SchemaStudent = new Schema({
    nombre:String,
    apellido:String,
    created: { 
        type: Date,
        default: Date.now
    },
    state: {
        type: Number,
        default: 1
    }
})

const Student = mongoose.model('student', SchemaStudent);

module.exports = Student

