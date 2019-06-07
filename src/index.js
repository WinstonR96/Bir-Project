require('dotenv').config()
import express from 'express';
import mongoose from 'mongoose';
import Course from './models/course'
import Teacher from './models/teacher'
import Student from './models/student'
import typeDefs from './schema';
import resolvers from './resolvers';
import { ApolloServer } from 'apollo-server-express';


var app = express()



mongoose.connect(process.env.DATABASECONECTION, { useNewUrlParser: true })
  .then(function () {
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

    //FILTRANDO ESTUDIANTE POR CURSO
    const listaCurso = Course.findById("5cfab14e315e8596fc7f93fb")
      .then((listaCurso) => {
        console.log(listaCurso.student)
        const estudiante = Student.findById(listaCurso.student)
          .then((estudiante) => {
            console.log(estudiante)
          })
          .catch((err) => console.error(err))
      })
      .catch((err) => console.error(err))


  })
  .catch(err => console.log(err))

  console.log("Filtrando")
  const filtrando = Course.find({student:{_id:"5cfab14e315e8596fc7f93fa"}})
  .then((filtrando) => console.log(filtrando))
  .catch((err) => console.error(err))




app.set('port', process.env.PORT || 3000)

const SERVER = new ApolloServer({
  typeDefs,
  resolvers,
  context: {
    Teacher,
    Student,
    Course
  },
  introspection: true,
  playground: true,
  playground: {
      endpoint: `http://localhost:3000/graphql`,
      settings: {
          'editor.theme': 'dark'
      }
  }
})

SERVER.applyMiddleware({
  app
})



// start the server
app.listen(app.get('port'), () => {
  console.log('server on port', app.get('port'));
});