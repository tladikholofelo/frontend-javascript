// task_5/js/main.ts

// MajorCredits interface with a brand property to uniquely identify it
interface MajorCredits {
    credits: number;
    brand: "major";  // Unique brand to identify MajorCredits type
  }
  
  // MinorCredits interface with a brand property to uniquely identify it
  interface MinorCredits {
    credits: number;
    brand: "minor";  // Unique brand to identify MinorCredits type
  }
  
  // Function to sum MajorCredits and return a MajorCredits type
  function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    const totalCredits = subject1.credits + subject2.credits;
    return { credits: totalCredits, brand: "major" };  // Return MajorCredits with brand
  }
  
  // Function to sum MinorCredits and return a MinorCredits type
  function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    const totalCredits = subject1.credits + subject2.credits;
    return { credits: totalCredits, brand: "minor" };  // Return MinorCredits with brand
  }
  
  // Example usage of the sum functions
  const subject1Major: MajorCredits = { credits: 5, brand: "major" };
  const subject2Major: MajorCredits = { credits: 3, brand: "major" };
  
  const majorTotal = sumMajorCredits(subject1Major, subject2Major);
  console.log(`Total Major Credits: ${majorTotal.credits}`);  // Total Major Credits: 8
  
  const subject1Minor: MinorCredits = { credits: 2, brand: "minor" };
  const subject2Minor: MinorCredits = { credits: 4, brand: "minor" };
  
  const minorTotal = sumMinorCredits(subject1Minor, subject2Minor);
  console.log(`Total Minor Credits: ${minorTotal.credits}`);  // Total Minor Credits: 6
  