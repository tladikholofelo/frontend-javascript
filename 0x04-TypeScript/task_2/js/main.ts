// DirectorInterface Interface
interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
  }
  
  // TeacherInterface Interface
  interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
  }
  
  // Director Class implementing DirectorInterface
  class Director implements DirectorInterface {
    workFromHome(): string {
      return "Working from home";
    }
  
    getCoffeeBreak(): string {
      return "Getting a coffee break";
    }
  
    workDirectorTasks(): string {
      return "Getting to director tasks";
    }
  }
  
  // Teacher Class implementing TeacherInterface
  class Teacher implements TeacherInterface {
    workFromHome(): string {
      return "Cannot work from home";
    }
  
    getCoffeeBreak(): string {
      return "Cannot have a break";
    }
  
    workTeacherTasks(): string {
      return "Getting to work";
    }
  }
  
  // Function to create an employee based on salary
  function createEmployee(salary: number | string): Director | Teacher {
    if (typeof salary === "number" && salary < 500) {
      return new Teacher();  // Salary less than 500 returns a Teacher
    } else {
      return new Director();  // Otherwise, returns a Director
    }
  }
  
  // String Literal Type for Subjects
  type Subjects = "Math" | "History";
  
  // Function teachClass
  function teachClass(todayClass: Subjects): string {
    if (todayClass === "Math") {
      return "Teaching Math";
    } else if (todayClass === "History") {
      return "Teaching History";
    } else {
      throw new Error("Invalid class");
    }
  }
  
  // Example usages:
  
  // Testing createEmployee function
  console.log(createEmployee(200));    // Should print: Teacher
  console.log(createEmployee(1000));   // Should print: Director
  console.log(createEmployee('$500')); // Should print: Director
  
  // Testing teachClass function
  console.log(teachClass('Math'));     // Should print: "Teaching Math"
  console.log(teachClass('History')); // Should print: "Teaching History"
  