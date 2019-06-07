const express = require('express')
const course = require('./models/course')
const teacher = require('./models/teacher')
const student = require('./models/student')
const mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect(process.env.DATABASECONECTION,{useNewUrlParser: true})
  .then(function(){
      console.log("BD Conectado")
      var TeacherObject = new teacher{
        
      };
  })
  .catch(err => console.log(err))


var app = express()



app.listen(process.env.PORT, function(){
    
    console.log("Corriendo en puerto: ", process.env.PORT)
})