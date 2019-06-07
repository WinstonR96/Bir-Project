const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const SchemaStudent = new Schema({
    _id: Schema.Types.ObjectId,
    nombre:String,
    apellido:String,
    created: { 
        type: Date,
        default: Date.now
    }
})

const Student = mongoose.model('student', SchemaStudent);

module.exports = Student

