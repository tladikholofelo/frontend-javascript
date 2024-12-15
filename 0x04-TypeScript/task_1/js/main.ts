// Teacher Interface
interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  location: string;
  yearsOfExperience?: number;  // Optional attribute
  [key: string]: any;  // Allows adding additional attributes dynamically
}

// Directors Interface extending Teacher
interface Directors extends Teacher {
  numberOfReports: number;  // Required attribute specific to Directors
}

// Example of a Director object
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

// Interface for the printTeacher function
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Function implementation
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName[0]}. ${lastName}`;
}

// Example usage of printTeacher function
console.log(printTeacher("John", "Doe")); // Should print: "J. Doe"

// Interface for the StudentClass constructor
interface StudentClassConstructor {
  new(firstName: string, lastName: string): StudentClass;
}

// Interface for the StudentClass
interface StudentClass {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

// Class implementation for StudentClass
class StudentClass implements StudentClass {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// Example usage
const student1 = new StudentClass("John", "Doe");
console.log(student1.workOnHomework());  // Should print: "Currently working"
console.log(student1.displayName());    // Should print: "John"
