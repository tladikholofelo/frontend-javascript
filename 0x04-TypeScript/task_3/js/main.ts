// task_3/js/main.ts

/// <reference path="crud.d.ts" />

// Import the types from interface.ts
import { RowID, RowElement } from "./interface";

// Import everything from crud.js
import * as CRUD from "./crud";

// Create a row object of type RowElement
const row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva"
};

// Insert the row into the database and capture the new row ID
const newRowID: RowID = CRUD.insertRow(row); // This returns a random row ID
console.log(`New Row ID: ${newRowID}`);  // For testing purposes

// Create an updated row with an age field
const updatedRow: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
  age: 23
};

// Update the row in the database using the previously inserted row ID
CRUD.updateRow(newRowID, updatedRow);

// Delete the row using the row ID
CRUD.deleteRow(newRowID);
