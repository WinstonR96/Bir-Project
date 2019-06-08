const mongoose = require('mongoose')
const Schema = mongoose.Schema

const SchemaTeacher = new Schema({
    nombre:String,
    apellido:String,
    salario: Number,
    area:String,
    created: { 
        type: Date,
        default: Date.now
    }
})

const Teacher  = mongoose.model('teacher',SchemaTeacher)

module.exports = Teacher

