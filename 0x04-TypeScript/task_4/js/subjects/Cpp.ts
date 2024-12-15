// task_4/js/subjects/Cpp.ts

// Declare the Subjects namespace to merge with the Teacher interface
namespace Subjects {
    // Declaration merging to add experienceTeachingC to the Teacher interface
    export interface Teacher {
      experienceTeachingC?: number;
    }
  
    // Cpp class extends from Subject
    export class Cpp extends Subject {
      constructor(teacher: Teacher) {
        super(teacher);
      }
  
      // Method to return the list of requirements for C++
      getRequirements(): string {
        return "Here is the list of requirements for Cpp";
      }
  
      // Method to return the available teacher for Cpp based on experience
      getAvailableTeacher(): string {
        if (this.teacher.experienceTeachingC === undefined || this.teacher.experienceTeachingC <= 0) {
          return "No available teacher";
        }
        return `Available Teacher: ${this.teacher.firstName}`;
      }
    }
  }
  