var age = 0;
var finalResultPercentage = 1;
var diabetes;

var noDisease = 1;

//Form submission function from HTML
function submission() {
    age = document.getElementById("age").value;
    glucose = document.getElementById("glucose").value;
    pregnancies = document.getElementById("pregnancies").value;
    bloodPressure = document.getElementById("blood-pressure").value;
    SkinThickness = document.getElementById("skin-thickness").value;
    insulin = document.getElementById("insulin").value;
    bmi = document.getElementById("bmi").value;
    pedigree = document.getElementById("pedigree").value; 
    iteration(age, glucose, pregnancies, bloodPressure, SkinThickness, insulin, bmi, pedigree);
    
    //output values to html page
    document.getElementById("output").innerText = (( finalResultPercentage).toFixed(2)).toString() + "%";
    document.getElementById("age_output").innerText = ((ageGivenThatDisease * 100).toFixed(2)).toString() + "%";
    document.getElementById("preg_output").innerText = (( pregnantGivenThatDisease * 100).toFixed(2)).toString() + "%";
    document.getElementById("glucose_output").innerText = (( glucoseGivenThatDisease * 100).toFixed(2)).toString() + "%";
    document.getElementById("bp_output").innerText = (( bloodpressureGivenThatDisease * 100).toFixed(2)).toString() + "%";
    document.getElementById("st_output").innerText = (( SkinThicknessGivenThatDisease * 100).toFixed(2)).toString() + "%";
    document.getElementById("insulin_output").innerText = (( InsulinGivenThatDisease * 100).toFixed(2)).toString() + "%";
    document.getElementById("bmi_output").innerText = (( BMIGivenThatDisease * 100 ).toFixed(2)).toString() + "%";
    document.getElementById("pedigree_output").innerText = (( pedigreeGivenThatDisease * 100).toFixed(2)).toString() + "%";

}

//github url from repository for diabetes
let url = 'https://raw.githubusercontent.com/Biranavan-Sritharan/Biranavan-Sritharan.github.io/main/diabetes.csv';

// this function bascially formats csv
function parseCSV (csv) {
  //csv sepearted into rows
  const rows = csv.trim().split('\n');
  
  //headers made from first row
  const headers = rows[0].split(',');
  //console.log(headers);  //used in testing to see if headers are correctly retrieved
  
  //creates array to store data in
  const data = [];
  //console.log("this is data array "+ data)
  
  // Process each row after the header
  for (let i = 0; i < rows.length; i++) {  //odd it iteratoes form i=1 originally
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


var csvData;

//fetch retrieves csv file from github using url
fetch(url)
  .then(response => {
    //try and catch - outputs error to console is can't connect
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.text();
  })
  .then(x => {
    csvData = "" + x;  //x is param that takes in parseCSV data and does soemthing with promise
  });

  
  //Iterates thorugh dataset
  function iteration(age , glucose, pregnancies, bloodPressure, SkinThickness, insulin, bmi, pedigree) {
    const dataArray = parseCSV(csvData);  //this adds csv to array dataArray

    //variables for disease being PRESENT
    var diseaseIsPresent = 0;
    var diseaseAndAge = 0;
    var diseaseAndGlucose = 0;
    var diseaseAndPregnant = 0;
    var diseaseAndBloodPressure = 0;
    var diseaseAndSkinThickness = 0;
    var diseaseAndInsulin = 0;
    var diseaseAndBMI = 0;
    var diseaseAndPedigree = 0;

    //var for NO DISEASE PRESENT
    var NOdiseaseAndAge = 0;
    var NOdiseaseAndGlucose = 0;
    var NOdiseaseAndPregnant = 0;
    var NOdiseaseAndBloodPressure = 0;
    var NOdiseaseAndSkinThickness = 0;
    var NOdiseaseAndInsulin = 0;
    var NOdiseaseAndBMI = 0;
    var NOdiseaseAndPedigree = 0;

    for (let i = 0 ; i < dataArray.length ; i++) {
        a = dataArray[i].Age;
        b = dataArray[i].Outcome;
        c = dataArray[i].Glucose;
        d = dataArray[i].Pregnancies;
        e = dataArray[i].BloodPressure;
        f = dataArray[i].SkinThickness;
        g = dataArray[i].Insulin;
        h = dataArray[i].BMI;
        j = dataArray[i].DiabetesPedigreeFunction;
        
        //total no. of disease being present
        if (b == 1) {
          diseaseIsPresent += 1;
        }

        //no. disease NOT being present
        if (b == 0) {
          noDisease += 1;  //expand on this later
        }

        //no. age and disease being present
        if (a == age && b == 1) { 
            diseaseAndAge += 1;
        }

        //no. of glucose and D being present
        if (c == glucose && b == 1) {
          diseaseAndGlucose += 1;
        }

        //no. preg and D is present
        if (d == pregnancies && b == 1) {
          diseaseAndPregnant += 1;
        }

        //no. bloodpressure and D is present
        if (e == bloodPressure && b == 1) {
          diseaseAndBloodPressure += 1;
        }

        //no. skin thickness and D is present
        if (f == SkinThickness && b == 1) {
          diseaseAndSkinThickness += 1;
        }

        //no. insulin and D is present
        if (g == insulin && b == 1) {
          diseaseAndInsulin += 1;
        }

        //no. bmi and D is present
        if (h == bmi && b == 1) {
          diseaseAndBMI += 1;
        }

        //no. pedigree and D is present
        if (j == pedigree && b == 1) {
          diseaseAndPedigree += 1;
        }

        /* DISEASE NOT PRESENT AND OTHER VARIABLE */

        //no. age and disease not being present
        if (a == age && b == 0) { 
          NOdiseaseAndAge += 1;
        }

        //no. of glucose and D not being present
        if (c == glucose && b == 0) {
          NOdiseaseAndGlucose += 1;
        }

        //no. preg and D is not present
        if (d == pregnancies && b == 0) {
          NOdiseaseAndPregnant += 1;
        }

        //no. bloodpressure and D is not present
        if (e == bloodPressure && b == 0) {
          NOdiseaseAndBloodPressure += 1;
        }

        //no. skin thickness and D is not present
        if (f == SkinThickness && b == 0) {
          NOdiseaseAndSkinThickness += 1;
        }

        //no. insulin and D is not present
        if (g == insulin && b == 0) {
          NOdiseaseAndInsulin += 1;
        }

        //no. bmi and D is not present
        if (h == bmi && b == 0) {
          NOdiseaseAndBMI += 1;
        }

        //no. pedigree and D is not present
        if (j == pedigree && b == 0) {
          NOdiseaseAndPedigree += 1;
        }
    }

    //Disease is PRESENT
    ageGivenThatDisease = diseaseAndAge/diseaseIsPresent || 1;    //P(age | D)
    glucoseGivenThatDisease = diseaseAndGlucose / diseaseIsPresent || 1; //P(glucose | D)
    pregnantGivenThatDisease = diseaseAndPregnant / diseaseIsPresent || 1; //P(pregnant | D)
    bloodpressureGivenThatDisease = diseaseAndBloodPressure / diseaseIsPresent || 1; // P(bloodpressure | D)
    SkinThicknessGivenThatDisease = diseaseAndSkinThickness / diseaseIsPresent || 1; // P(SkinThickness | D)
    InsulinGivenThatDisease = diseaseAndInsulin / diseaseIsPresent || 1; // P(Insulin | D)
    BMIGivenThatDisease = diseaseAndBMI / diseaseIsPresent || 1; // P(BMI | D)
    pedigreeGivenThatDisease = diseaseAndPedigree / diseaseIsPresent || 1; //P (pedigree | D)

    //test thingy, disease not present
    ageGivenNOdisease = diseaseAndAge / noDisease; //P(age | !D)
    glucoseGivenNOdisease = diseaseAndGlucose / noDisease; //P(glucose | !D)
    pregnantGivenNOdisease = diseaseAndPregnant / noDisease;//P(pregnant | !D)
    bloodPressureGivenNOdisease = diseaseAndBloodPressure / noDisease;//P(bloodpressure | !D)
    skinThicknessGivenNOdisease = diseaseAndSkinThickness / noDisease;//P(skinthickness | !D)
    insulinGivenNOdisease = diseaseAndInsulin / noDisease;//P(insulin | !D)
    BMIGivenNOdisease = diseaseAndBMI / noDisease;//P(bmi | !D)
    pedigreeGivenNOdisease = diseaseAndPedigree / noDisease;//P(pedigree | !D)

    if (ageGivenNOdisease == 0) ageGivenNOdisease = 1;
    if (glucoseGivenNOdisease == 0) glucoseGivenNOdisease = 1;
    if (pregnantGivenNOdisease == 0) pregnantGivenNOdisease = 1;
    if (bloodPressureGivenNOdisease == 0) bloodPressureGivenNOdisease = 1;
    if (skinThicknessGivenNOdisease == 0) skinThicknessGivenNOdisease = 1;
    if (insulinGivenNOdisease == 0) insulinGivenNOdisease = 1;
    if (BMIGivenNOdisease == 0) BMIGivenNOdisease = 1;
    if (pedigreeGivenNOdisease == 0) pedigreeGivenNOdisease = 1;


    probOfDisease = ageGivenThatDisease * glucoseGivenThatDisease * pregnantGivenThatDisease * bloodpressureGivenThatDisease * SkinThicknessGivenThatDisease * InsulinGivenThatDisease * BMIGivenThatDisease * pedigreeGivenThatDisease; //P(D), this si all the probs multiplied to each other, more to follow....
    probofNOdisease = ageGivenNOdisease * glucoseGivenNOdisease * pregnantGivenNOdisease * bloodPressureGivenNOdisease * skinThicknessGivenNOdisease * insulinGivenNOdisease * BMIGivenNOdisease * pedigreeGivenNOdisease; //P(!D)


    finalResult = probOfDisease / (probOfDisease + probofNOdisease);   //P(D | ...) = P(D) / (P(D) + P(!D))
    finalResultPercentage = finalResult * 100;  
    
  }
  