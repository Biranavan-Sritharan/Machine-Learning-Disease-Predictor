//csv data once here, imports libs here

//https://www.cmihealth.com/blogs/news/what-your-blood-glucose-test-results-mean-cmi-health-blog

var age = 0; //global?
var finalResultPercentage = 1;
var diabetes;
let banana = 0;

var noDisease = 1; //temp value given

//form submission, also give better function name
function foo() {
    age = document.getElementById("age").value;
    glucose = document.getElementById("glucose").value;
    pregnancies = document.getElementById("pregnancies").value;
    bloodPressure = document.getElementById("blood-pressure").value;
    SkinThickness = document.getElementById("skin-thickness").value;
    insulin = document.getElementById("insulin").value;
    bmi = document.getElementById("bmi").value;
    pedigree = document.getElementById("pedigree").value;
    //console.log("age:" + age);
    abc(age, glucose, pregnancies, bloodPressure, SkinThickness, insulin, bmi, pedigree);
    
    //basically gets final values and mults by 100 to give percentage and also rounded to 2dp and then converted to a string so that a % sign can be appended onto it
    document.getElementById("output").innerText = (( finalResultPercentage).toFixed(2)).toString() + "%";
    document.getElementById("age_output").innerText = ((ageGivenThatDisease * 100).toFixed(2)).toString() + "%";
    document.getElementById("preg_output").innerText = (( pregnantGivenThatDisease * 100).toFixed(2)).toString() + "%";
    document.getElementById("glucose_output").innerText = (( glucoseGivenThatDisease * 100).toFixed(2)).toString() + "%";
    document.getElementById("bp_output").innerText = (( bloodpressureGivenThatDisease * 100).toFixed(2)).toString() + "%";
    document.getElementById("st_output").innerText = (( SkinThicknessGivenThatDisease * 100).toFixed(2)).toString() + "%";
    document.getElementById("insulin_output").innerText = (( InsulinGivenThatDisease * 100).toFixed(2)).toString() + "%";
    document.getElementById("bmi_output").innerText = (( BMIGivenThatDisease * 100 ).toFixed(2)).toString() + "%";
    document.getElementById("pedigree_output").innerText = (( pedigreeGivenThatDisease * 100).toFixed(2)).toString() + "%";


    //age = age + 5; //pritns 55, also globall??
    //foo2();

      //perhaps this is outside foo, and inside another func. and has finalResult passed in via param??

}

/*  

let url_selector = 0;

funciton foo () {  //this is current one we have rn
  ///prev. code
  url_selector = 1;
}

function foo_other_disease () {  //this fucntion triggered from other html webpage
  ///
   return url_selector = 2;

}

let url = '';
if url_selctor == 1 {
  let url = 'https://raw.githubusercontent.com/Biranavan-Sritharan/Disease-Prediction-Webpage/main/diabetes.csv';
} elif url_sector == 2 {
  let url = 'other github csv file link'
}

*/

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
    //mroe or less another catch, can be shortned down or removed to no effect but doesnt hurt
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.text();
  })
  .then(x => {
    csvData = "" + x;  //x is param that takes in parseCSV data and does soemthing with promise
  });

  
  //this function called in function foo
  function abc(age , glucose, pregnancies, bloodPressure, SkinThickness, insulin, bmi, pedigree) {
    console.log("csvdata log" + csvData);
    const dataArray = parseCSV(csvData);  //this adds csv to array dataArray //could possibly be shortened down but thats for later by calling just data
    console.log("this si the dataarray thiny here this one: " + dataArray);
    
    ////////////////////////////////////////////////////////////////here

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
        c = dataArray[i].Glucose;  //stuff like glucose needs a range tho
        d = dataArray[i].Pregnancies;
        e = dataArray[i].BloodPressure;
        f = dataArray[i].SkinThickness;
        g = dataArray[i].Insulin;
        h = dataArray[i].BMI;  //make bmi lowercase???, it went diff colour for some reason
        j = dataArray[i].DiabetesPedigreeFunction; //var name j and NOT i
        
        //total no. of disease being present
        if (b == "1") {
          diseaseIsPresent += 1;
        }

        //no. disease NOT being present
        if (b == "0") {
          noDisease += 1;  //expand on this later
        }

        //no. age and disease being present
        if (a == age && b == "1") {   //here "31" need to be changed to age var and then final output needs to be displayed on html page
            diseaseAndAge += 1;
        }

        //no. of glucose and D being present
        if (c == glucose && b == "1") {
          diseaseAndGlucose += 1;
        }

        //no. preg and D is present
        if (d == pregnancies && b == "1") {
          diseaseAndPregnant += 1;
        }

        //no. bloodpressure and D is present
        if (e == bloodPressure && b == "1") {
          diseaseAndBloodPressure += 1;
        }

        //no. skin thickness and D is present
        if (f == SkinThickness && b == "1") {
          diseaseAndSkinThickness += 1;
        }

        //no. insulin and D is present
        if (g == insulin && b == "1") {
          diseaseAndInsulin += 1;
        }

        //no. bmi and D is present
        if (h == bmi && b == "1") {
          diseaseAndBMI += 1;
        }

        //no. pedigree and D is present
        if (j == pedigree && b == "1") {
          diseaseAndPedigree += 1;
        }

        /* DISEASE NOT PRESENT AND OTHER VARIABLE */

        //no. age and disease not being present
        if (a == age && b == "0") {   //here "31" need to be changed to age var and then final output needs to be displayed on html page
          NOdiseaseAndAge += 1;
        }

        //no. of glucose and D not being present
        if (c == glucose && b == "0") {
          NOdiseaseAndGlucose += 1;
        }

        //no. preg and D is not present
        if (d == pregnancies && b == "0") {
          NOdiseaseAndPregnant += 1;
        }

        //no. bloodpressure and D is not present
        if (e == bloodPressure && b == "0") {
          NOdiseaseAndBloodPressure += 1;
        }

        //no. skin thickness and D is not present
        if (f == SkinThickness && b == "0") {
          NOdiseaseAndSkinThickness += 1;
        }

        //no. insulin and D is not present
        if (g == insulin && b == "0") {
          NOdiseaseAndInsulin += 1;
        }

        //no. bmi and D is not present
        if (h == bmi && b == "0") {
          NOdiseaseAndBMI += 1;
        }

        //no. pedigree and D is not present
        if (j == pedigree && b == "0") {
          NOdiseaseAndPedigree += 1;
        }

    }

    console.log("outcome no:" + diseaseIsPresent);
    console.log(diseaseIsPresent);
    console.log("disease present at certain age no: " + diseaseAndAge);

    //Disease is PRESENT
    ageGivenThatDisease = diseaseAndAge/diseaseIsPresent || 1;    //P(age | D)
    glucoseGivenThatDisease = diseaseAndGlucose / diseaseIsPresent || 1; //P(glucose | D)
    pregnantGivenThatDisease = diseaseAndPregnant / diseaseIsPresent || 1; //P(pregnant | D)
    bloodpressureGivenThatDisease = diseaseAndBloodPressure / diseaseIsPresent || 1; // P(bloodpressure | D)
    SkinThicknessGivenThatDisease = diseaseAndSkinThickness / diseaseIsPresent || 1; // P(SkinThickness | D)
    InsulinGivenThatDisease = diseaseAndInsulin / diseaseIsPresent || 1; // P(Insulin | D)
    BMIGivenThatDisease = diseaseAndBMI / diseaseIsPresent || 1; // P(BMI | D)
    pedigreeGivenThatDisease = diseaseAndPedigree / diseaseIsPresent || 1; //P (pedigree | D)


    /*
    //Disease NOT present
    ageGivenNOdisease = NOdiseaseAndAge / noDisease; //P(age | !D)
    glucoseGivenNOdisease = NOdiseaseAndGlucose / noDisease; //P(glucose | !D)
    pregnantGivenNOdisease = NOdiseaseAndPregnant / noDisease;//P(pregnant | !D)
    bloodPressureGivenNOdisease = NOdiseaseAndBloodPressure / noDisease;//P(bloodpressure | !D)
    skinThicknessGivenNOdisease = NOdiseaseAndSkinThickness / noDisease;//P(skinthickness | !D)
    insulinGivenNOdisease = NOdiseaseAndInsulin / noDisease;//P(insulin | !D)
    BMIGivenNOdisease = NOdiseaseAndBMI / noDisease;//P(bmi | !D)
    pedigreeGivenNOdisease = NOdiseaseAndPedigree / noDisease;//P(pedigree | !D)
    */



    //test thingy, disease not present
    ageGivenNOdisease = diseaseAndAge / noDisease; //P(age | !D)
    glucoseGivenNOdisease = diseaseAndGlucose / noDisease; //P(glucose | !D)
    pregnantGivenNOdisease = diseaseAndPregnant / noDisease;//P(pregnant | !D)
    bloodPressureGivenNOdisease = diseaseAndBloodPressure / noDisease;//P(bloodpressure | !D)
    skinThicknessGivenNOdisease = diseaseAndSkinThickness / noDisease;//P(skinthickness | !D)
    insulinGivenNOdisease = diseaseAndInsulin / noDisease;//P(insulin | !D)
    BMIGivenNOdisease = diseaseAndBMI / noDisease;//P(bmi | !D)
    pedigreeGivenNOdisease = diseaseAndPedigree / noDisease;//P(pedigree | !D)

    /*
    checkIfZeroArray = [ageGivenNOdisease , glucoseGivenNOdisease , pregnantGivenNOdisease , bloodPressureGivenNOdisease , skinThicknessGivenNOdisease , insulinGivenNOdisease , BMIGivenNOdisease , pedigreeGivenNOdisease];

    
    //this is to stop any divsions occuring where it is divided by 0
    //VARIABLE ITSELF NOT UPDATING :(, only array being updated
    let testCount = 0
    for (let i = 0 ; i < checkIfZeroArray.length ; i++) {
      if (checkIfZeroArray[i] == 0) {
        checkIfZeroArray[i] = 1;
        testCount += 1;
        console.log("updated value: " + checkIfZeroArray[i] + " test count: " + testCount);
      }
    }
    */

    //FIND A WAY TO LOOP THIS, stops divding by zero, same done with || 1 for disease present variables
    if (ageGivenNOdisease == 0) ageGivenNOdisease = 1; // instead of a bunch of if statements, for loop makes it easier?
    if (glucoseGivenNOdisease == 0) glucoseGivenNOdisease = 1;
    if (pregnantGivenNOdisease == 0) pregnantGivenNOdisease = 1;
    if (bloodPressureGivenNOdisease == 0) bloodPressureGivenNOdisease = 1;
    if (skinThicknessGivenNOdisease == 0) skinThicknessGivenNOdisease = 1;
    if (insulinGivenNOdisease == 0) insulinGivenNOdisease = 1;
    if (BMIGivenNOdisease == 0) BMIGivenNOdisease = 1;
    if (pedigreeGivenNOdisease == 0) pedigreeGivenNOdisease = 1;


    probOfDisease = ageGivenThatDisease * glucoseGivenThatDisease * pregnantGivenThatDisease * bloodpressureGivenThatDisease * SkinThicknessGivenThatDisease * InsulinGivenThatDisease * BMIGivenThatDisease * pedigreeGivenThatDisease; //P(D), this si all the probs multiplied to each other, more to follow....
    probofNOdisease = ageGivenNOdisease * glucoseGivenNOdisease * pregnantGivenNOdisease * bloodPressureGivenNOdisease * skinThicknessGivenNOdisease * insulinGivenNOdisease * BMIGivenNOdisease * pedigreeGivenNOdisease; //P(!D)
    console.log("probofDisease: " + probOfDisease + " and probofNODISEASE: " + probofNOdisease);


    finalResult = probOfDisease / (probOfDisease + probofNOdisease);   //P(D | ...) = P(D) / (P(D) + P(!D))
    finalResultPercentage = finalResult * 100;  

    //console.log("prob value thingy" + ageGivenThatDisease);
    
  }
  
  ////////////////////////

  /*
  
  ok so basically if value_count == 0

  foo() {
  
  }

  basically in short words kinda, if the agegiventhis var is 0 or like has no instances found in array, then do an if statement in foo() function 
  where if that variable is 0 then its in that contrubtions thingy it says 0?

  or pass in none or null for 0 values or something?

  */ 

  ///////////////////////

  //.then(csvData => {
    // makes csv into an array
    



  //replace require n taht with this code
  //also understand wtf is goin on 'ere
  





//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
var diseaseIsPresent = 0
    for (let i = 0 ; i < dataArray.length ; i++) {
        b = dataArray[i].Outcome
        if (b == "1") {
            diseaseIsPresent += 1;
            
        }
    }
    
    console.log("ppl with disease: " + diseaseIsPresent);

    //
    var diseaseAndAge = 0
    for (let i = 0 ; i < dataArray.length ; i++) {
        a = dataArray[i].Age;
        b = dataArray[i].Outcome;
        c = dataArray[i].Glucose;  //stuff like glucose needs a range tho
        d = dataArray[i].Pregnancies;
        e = dataArray[i].BloodPressure;
        f = dataArray[i].SkinThickness;
        g = dataArray[i].Insulin;
        h = dataArray[i].BMI;  //make bmi lowercase???, it went diff colour for some reason
        j = dataArray[i].DiabetesPedigreeFunction; //var name j and NOT i
        if (a == "31" && b == "1") {   //here "31" need to be changed to age var and then final output needs to be displayed on html page
            diseaseAndAge += 1;
           
        }

    }
    console.log("disease present at certain age no: " + diseaseAndAge);


    ageGivenThatDisease = diseaseAndAge/diseaseIsPresent;    //P(age | D)
    probOfDisease = ageGivenThatDisease  //P(D), this si all the probs multiplied to each other, more to follow....
    finalResult = probOfDisease / (probOfDisease + noDisease)   //P(D | ...) = P(D) / (P(D) + P(!D))
    finalResultPercentage = finalResult * 100  

    console.log("prob value thingy" + ageGivenThatDisease);

    */

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/* NEW DISEASE */

//ok this has been seperated from other code
