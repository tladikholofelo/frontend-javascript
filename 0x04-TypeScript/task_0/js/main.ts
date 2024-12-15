interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }
  
  const student1: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    location: "New York"
  };
  
  const student2: Student = {
    firstName: "Jane",
    lastName: "Smith",
    age: 22,
    location: "Los Angeles"
  };
  
  const studentsList: Student[] = [student1, student2];
  
  // Function to render the table
  function renderTable(students: Student[]): void {
    const table = document.createElement("table");
    const tableHeader = document.createElement("thead");
    const headerRow = document.createElement("tr");
    const headerFirstName = document.createElement("th");
    const headerLocation = document.createElement("th");
    headerFirstName.textContent = "First Name";
    headerLocation.textContent = "Location";
    
    headerRow.appendChild(headerFirstName);
    headerRow.appendChild(headerLocation);
    tableHeader.appendChild(headerRow);
    table.appendChild(tableHeader);
    
    const tableBody = document.createElement("tbody");
    students.forEach((student) => {
      const row = document.createElement("tr");
      const firstNameCell = document.createElement("td");
      const locationCell = document.createElement("td");
      firstNameCell.textContent = student.firstName;
      locationCell.textContent = student.location;
      row.appendChild(firstNameCell);
      row.appendChild(locationCell);
      tableBody.appendChild(row);
    });
  
    table.appendChild(tableBody);
    document.body.appendChild(table);
  }
  
  // Call the function to render the table with students
  renderTable(studentsList);
  