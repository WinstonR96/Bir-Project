const mongoose = require('mongoose')
const Schema = mongoose.Schema

const SchemaStudent = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nombre:String,
    apellido:String,
    created: { 
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('student',SchemaStudent)

