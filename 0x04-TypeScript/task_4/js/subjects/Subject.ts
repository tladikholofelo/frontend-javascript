// task_4/js/subjects/Subject.ts

// Declare the Subjects namespace
namespace Subjects {
    // Subject class with a teacher of type Teacher
    export class Subject {
      teacher: Teacher;
  
      constructor(teacher: Teacher) {
        this.teacher = teacher;
      }
  
      // Setter method to set the teacher
      setTeacher(teacher: Teacher): void {
        this.teacher = teacher;
      }
    }
  }
  