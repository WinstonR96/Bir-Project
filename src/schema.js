export default `
  type Course {
    nombre: String!
    student: Student
    teacher: Teacher
  }

  type Student {
    nombre: String
    apellido: String
  }

  type Teacher {
    nombre: String
    apellido: String
    salario: Int
    area: String
  }

  type Query {
    allCourses: [Course!]!
    allStudent: [Student!]!
  }
  type Mutation {
    createCourse(nombre: String!): Course!
    createStudent(nombre: String!, apellido: String!): Student!
    UpdateStudent(id: String!, nombre: String!, apellido: String!): Student!
  }
  
`;