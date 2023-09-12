const { gql } =  require('apollo-server-express');

const typeDefs = gql`
    type Teacher {
        _id: ID!
        name: String!
        email: String!
        subject: String!
        students: [Student]
    }
    
    type Student {
        _id: ID!
        name: String!
        grades: [Grade]
    }
    
    type Parent {
        _id: ID!
        name: String!
        email: String!
        students: [Student]
    }

    type Grade {
        _id: ID!
        value: Int!
    }
  

    type Mutation {
        createParent(input: ParentInput!): Parent
        updateParent(input: ParentUpdateInput!): Parent

        createStudent(input: StudentInput!): Student
        updateStudent(inputL StudentUpdateInput!): Student

        createTeacher(input: TeacherInput!): Teacher
        updateTeacher(input: TeacherUpdateInput!): Teacher

        createGrade(input: GradeInput!): Grade
        updateGrade(input: GradeUpdateInput!): Grade
    }

    type Query {
        parentStudent: [Student]
        parentStudentTeachers: [Teacher]
        parentStudentGrades: [Grade]

        teacherStudent: [Student]
        teacherStudentParents: [Parent]
        teacherStudentGrades: [Grade]
    }



`;



module.export = typeDefs;