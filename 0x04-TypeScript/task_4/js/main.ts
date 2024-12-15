// Importing necessary classes and interfaces from the Subjects namespace
import { Cpp } from './subjects/Cpp';
import { Java } from './subjects/Java';
import { React } from './subjects/React';
import { Teacher } from './subjects/Teacher';

// Create a Teacher object with experienceTeachingC = 10
const cTeacher: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  experienceTeachingC: 10,  // experienceTeachingC for C++ subject
};

// Create and export constants for each subject (Cpp, Java, React)
export const cpp = new Cpp();
export const java = new Java();
export const react = new React();

// C++ Subject
console.log("C++:");
cpp.setTeacher(cTeacher); // Setting cTeacher as the teacher for Cpp subject
console.log(cpp.getRequirements()); // Print the requirements for Cpp
console.log(cpp.getAvailableTeacher()); // Print the available teacher for Cpp

// Java Subject
console.log("\nJava:");
java.setTeacher(cTeacher); // Setting cTeacher as the teacher for Java subject
console.log(java.getRequirements()); // Print the requirements for Java
console.log(java.getAvailableTeacher()); // Print the available teacher for Java

// React Subject
console.log("\nReact:");
react.setTeacher(cTeacher); // Setting cTeacher as the teacher for React subject
console.log(react.getRequirements()); // Print the requirements for React
console.log(react.getAvailableTeacher()); // Print the available teacher for React
