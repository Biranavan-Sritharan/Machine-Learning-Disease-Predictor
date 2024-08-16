//github url from repository
const url = 'https://raw.githubusercontent.com/Biranavan-Sritharan/Disease-Prediction-Webpage/main/diabetes.csv';

// Function to parse CSV data into an array of objects
const parseCSV = csv => {
  // Split the CSV text into rows
  const rows = csv.trim().split('\n');
  
  // Get headers from the first row
  const headers = rows[0].split(',');
  
  // Initialize an array to store the data
  const data = [];
  
  // Process each row after the header
  for (let i = 1; i < rows.length; i++) {
    // Split row into comma-separated values
    const values = rows[i].split(',');
    
    // Create an object combining headers with corresponding values
    const entry = {};
    headers.forEach((header, index) => {
      entry[header] = values[index];
    });
    
    // Push the object into the data array
    data.push(entry);
  }
  
  return data;
};


// Using fetch to retrieve the CSV file
fetch(url)
  .then(response => {
    //mroe or less another catch, can be shortned down
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    // Return the response text which is a promise as well
    return response.text();
  })
  .then(csvData => {
    // makes csv into an array
    const dataArray = parseCSV(csvData);
    
    // prints csv as array with column specfied etc etc...
    console.log(dataArray[2].Age); //////////////////////////////////////////////////////////////here
    
  })
  .catch(error => {
    // catch can be removed if needed
    console.error('Error fetching the CSV file:', error);
  });



  //replace require n taht with this code
  //also understand wtf is goin on 'ere
  
