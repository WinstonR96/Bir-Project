export default `
  type Course {
    nombre: String!
    student: Student
    teacher: Teacher
    state: Int!
  }

  type Student {
    nombre: String
    apellido: String
    state: Int!
  }

  type Teacher {
    nombre: String
    apellido: String
    salario: Int
    area: String
    state: Int!
  }

  type Query {
    allCourses: [Course!]!
    CourseById(id: String!): [Course!]!
    allStudent: [Student!]!
    StudentById(id: String!): [Student!]!
    allTeacher: [Teacher!]!
    TeacherById(id: String!): [Teacher!]!
  }
  type Mutation {
    createCourse(nombre: String!): Course!
    createStudent(nombre: String!, apellido: String!): Student!
    UpdateStudent(id: String!, nombre: String!, apellido: String!): Student!
    DeleteStudent(id: String!): Student!
    createTeacher(nombre: String!, apellido: String!, salario: Int!, area: String!): Teacher!
    UpdateTeacher(id: String!, nombre: String!, apellido: String!, salario: Int!, area: String!): Teacher!
    DeleteTeacher(id: String!): Teacher!
  }
  
`;