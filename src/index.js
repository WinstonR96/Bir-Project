const express = require('express')
const Course = require('./models/course')
const Teacher = require('./models/teacher')
const Student = require('./models/student')
const mongoose = require('mongoose')
require('dotenv').config()

var app = express()



mongoose.connect(process.env.DATABASECONECTION,{useNewUrlParser: true})
  .then(function(){
      console.log("BD Conectado")
      // const teacherObj = {
      //   _id: new mongoose.Types.ObjectId(),
      //   nombre: "Winston",
      //   apellido: "Junior",
      //   salario:"100",
      //   area:"Software"
      // }

      // const docente = new Teacher(teacherObj)
      // docente.save().then(()=> console.log("Se guardo")).catch((err)=>console.error(err))
      // const studentObj = {
      //   _id:new mongoose.Types.ObjectId(),
      //   nombre: "Walter",
      //   apellido:"Samuel"
      // }

      // const estudiante = new Student(studentObj)
      // estudiante.save().then(()=> console.log("Se guardo")).catch((err)=>console.error(err))
      // const courseObj = {
      //   _id:new mongoose.Types.ObjectId(),
      //   student: studentObj._id,
      //   teacher: teacherObj._id
      // }
      // const curso = new Course(courseObj)
      // curso.save().then(()=> console.log("Se guardo")).catch((err)=>console.error(err))

      const listaCurso = Course.find()
            .then((listaCurso) => console.log(listaCurso))
            .catch((err) => console.error(err))
      
      
  })
  .catch(err => console.log(err))




app.set('port', process.env.PORT || 3000)



app.listen(app.get('port'), function(){
    
    console.log("Corriendo en puerto: ", app.get('port'))
})