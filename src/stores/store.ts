import { defineStore } from 'pinia'

export type Course = {
  SubName: string
  Scode: string
  sdescription: string,
  stime1: number,
  stime2: number,
  tname: string,
}

export const usecourseStore = defineStore('courseState', {
    // arrow function recommended for full type inference
    state: () => {
      return {
        // all these properties will have their type inferred automatically
        courses: <any>[]
      }
    },
    getters: {
      getCourses: (state) => state.courses
    },
    actions: {
        pushState(course: any) {
           this.$state.courses.push(course)
        }
    }
  })