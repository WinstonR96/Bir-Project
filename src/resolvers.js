export default {
  Query: {
    allCourses: async (parent, args, { Course }) => {
      const courses = await Course.find().where('state').equals(1)
      return courses.map(x => {
        x._id = x._id.toString()
        return x
      })
    },

    CourseById: async (parent, args, { Course }) => {
      const course = await Course.find({ "_id": args.id, "state": 1 })
      return course

    },

    allStudent: async (parent, args, { Student }) => {
      const students = await Student.find().where('state').equals(1)
      return students.map(x => {
        x._id = x._id.toString()
        return x
      })
    },

    StudentById: async (parent, args, { Student }) => {
      const student = await Student.find({ "_id": args.id, "state": 1 })
      console.log(student)
      return student

    },


    allTeacher: async (parent, args, { Teacher }) => {
      const teachers = await Teacher.find().where('state').equals(1)
      return teachers.map(x => {
        x._id = x._id.toString()
        return x
      })
    },

    TeacherById: async (parent, args, { Teacher }) => {
      const teacher = await Teacher.find({ "_id": args.id, "state": 1 })
      return teacher
    }
  },

  Mutation: {
    createCourse: async (parent, args, { Course }) => {
      const course = await new Course(args).save()
      course._id = course._id.toString()
      return course
    },

    createStudent: async (parent, args, { Student }) => {
      const student = await new Student(args).save()
      student._id = student._id.toString()
      return student
    },

    UpdateStudent: async (parent, args, { Student }) => {
      const student = await Student.findByIdAndUpdate(args.id, { nombre: args.nombre, apellido: args.apellido })
      return student
    },

    DeleteStudent: async (parent, args, { Student }) => {
      const state = {
        state: -1
      }
      const student = await Student.findByIdAndUpdate(args.id, { $set: state })
      return student
    },

    createTeacher: async (parent, args, { Teacher }) => {
      const teacher = await new Teacher(args).save()
      teacher._id = teacher._id.toString()
      return teacher
    },

    UpdateTeacher: async (parent, args, { Teacher }) => {
      const teacher = await Teacher.findByIdAndUpdate(args.id, { nombre: args.nombre, apellido: args.apellido, salario: args.salario, area: args.area})
      return teacher
    },

    DeleteTeacher: async (parent, args, { Teacher }) => {
      const state = {
        state: -1
      }
      const student = await Teacher.findByIdAndUpdate(args.id, { $set: state })
      return student
    }

  }
}