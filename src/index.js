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

//Comment

mongoose.connect(process.env.DATABASECONECTION, { useNewUrlParser: true, useFindAndModify:false })
  .then( () => {
    console.log("BD Conectado")
  })
  .catch(err => console.log(err))

  




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