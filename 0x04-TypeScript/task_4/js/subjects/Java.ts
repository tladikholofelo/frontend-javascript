// task_4/js/subjects/Java.ts

// Declare the Subjects namespace to merge with the Teacher interface
namespace Subjects {
    // Declaration merging to add experienceTeachingJava to the Teacher interface
    export interface Teacher {
      experienceTeachingJava?: number;
    }
  
    // Java class extends from Subject
    export class Java extends Subject {
      constructor(teacher: Teacher) {
        super(teacher);
      }
  
      // Method to return the list of requirements for Java
      getRequirements(): string {
        return "Here is the list of requirements for Java";
      }
  
      // Method to return the available teacher for Java based on experience
      getAvailableTeacher(): string {
        if (this.teacher.experienceTeachingJava === undefined || this.teacher.experienceTeachingJava <= 0) {
          return "No available teacher";
        }
        return `Available Teacher: ${this.teacher.firstName}`;
      }
    }
  }
  