const mongoose = require('mongoose')
const Schema = mongoose.Schema

const SchemaTeacher = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nombre:String,
    apellido:String,
    salario: Number,
    area:String,
    created: { 
        type: Date,
        default: Date.now
    }
})

var teacher  = mongoose.model('teacher',SchemaTeacher)

module.exports = teacher

