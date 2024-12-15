// task_4/js/subjects/React.ts

// Declare the Subjects namespace to merge with the Teacher interface
namespace Subjects {
    // Declaration merging to add experienceTeachingReact to the Teacher interface
    export interface Teacher {
      experienceTeachingReact?: number;
    }
  
    // React class extends from Subject
    export class React extends Subject {
      constructor(teacher: Teacher) {
        super(teacher);
      }
  
      // Method to return the list of requirements for React
      getRequirements(): string {
        return "Here is the list of requirements for React";
      }
  
      // Method to return the available teacher for React based on experience
      getAvailableTeacher(): string {
        if (this.teacher.experienceTeachingReact === undefined || this.teacher.experienceTeachingReact <= 0) {
          return "No available teacher";
        }
        return `Available Teacher: ${this.teacher.firstName}`;
      }
    }
  }
  