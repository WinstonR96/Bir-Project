const mongoose = require('mongoose')
const Schema = mongoose.Schema

const SchemaCourse = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nombre:String,
    teacher:String,
    student: { type: mongoose.Schema.Types.ObjectId, ref: "student" },
    teacher: {type: mongoose.Schema.Types.ObjectId, ref: "teacher"},
    created: { 
        type: Date,
        default: Date.now
    }
})

module.exports  = mongoose.model('course',SchemaCourse)
