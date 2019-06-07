const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const SchemaCourse = new Schema({
    _id: Schema.Types.ObjectId,
    nombre:String,
    student: { type: Schema.Types.ObjectId, ref: "Student" },
    teacher: {type: Schema.Types.ObjectId, ref: "Teacher"},
    created: { 
        type: Date,
        default: Date.now
    }
})

const Course = mongoose.model('course', SchemaCourse)

module.exports = Course