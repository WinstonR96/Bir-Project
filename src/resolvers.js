export default {
    Query: {
      allCourses: async (parent, args, { Course }) => {
        const courses = await Course.find()
        return courses.map(x => {
          x._id = x._id.toString()
          return x
        })
      },

      allStudent: async (parent, args, { Student }) => {
        const students = await Student.find()
        return students.map(x => {
          x._id = x._id.toString()
          return x
        })
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
         const student = await Student.findByIdAndUpdate(args.id,{nombre:args.nombre,apellido:args.apellido})
         return student
      }
    }
  }