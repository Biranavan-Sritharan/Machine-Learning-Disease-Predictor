//for csv table
const fs = require("fs");
const csv = require('csvtojson');
const { Parser } = require('json2csv');

var age = 0; //global?
var finalResultPercentage = 1;
var diabetes;

var noDisease = 1; //temp value given

//form submission, also give better function name
function foo() {
    age = document.getElementById("age").value;
    
    document.getElementById("output").innerText = finalResultPercentage;

    //age = age + 5; //pritns 55, also globall??
    //foo2();

      //perhaps this is outside foo, and inside another func. and has finalResult passed in via param??

}


(async () => {

    const diabetes = await csv().fromFile("diabetes.csv");
    //JSON.stringify(diabetes, null, 2);
    //console.log(JSON.stringify(diabetes, null, 2)); //print table as array

    //diabetes.forEach(record => console.log(record)); //prints every data thingy normally
    //console.log(diabetes); //displays data poorly



    //checks table for where disease is present, total no. of ppl with disease (in this case diabetes)
    //can prolly make this more efficent and intergrate this if block into for loop below

    var diseaseIsPresent = 0
    for (let i = 0 ; i < diabetes.length ; i++) {
        b = diabetes[i].Outcome
        if (b == "1") {
            diseaseIsPresent += 1;
            
        }
    }
    
    console.log("ppl with disease: " + diseaseIsPresent);

    //
    var diseaseAndAge = 0;
    var agecounter = 0;
    for (let i = 0 ; i < diabetes.length ; i++) {
        a = diabetes[i].Age;
        b = diabetes[i].Outcome;
        c = diabetes[i].Glucose;  //stuff like glucose needs a range tho
        d = diabetes[i].Pregnancies;
        e = diabetes[i].BloodPressure;
        f = diabetes[i].SkinThickness;
        g = diabetes[i].Insulin;
        h = diabetes[i].BMI;
        j = diabetes[i].DiabetesPedigreeFunction; //var name j and NOT i
        if (a == age && b == "1") {   //here "31" need to be changed to age var and then final output needs to be displayed on html page
            diseaseAndAge += 1;
           
        }
        if(a == "35") {
            agecounter += 1;
        }

    }
    console.log("age: " + agecounter)
    console.log("disease present at certain age no: " + diseaseAndAge);


    ageGivenThatDisease = diseaseAndAge/diseaseIsPresent;    //P(age | D)
    probOfDisease = ageGivenThatDisease  //P(D), this si all the probs multiplied to each other, more to follow....
    finalResult = probOfDisease / (probOfDisease + noDisease)   //P(D | ...) = P(D) / (P(D) + P(!D))
    finalResultPercentage = finalResult * 100  

    console.log("prob value thingy" + ageGivenThatDisease);

    

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /* the code that made it all work 

    var count = 0
    for (i = 0 ; i < diabetes.length ; i++) {
        a = diabetes[i].Age
        if (a == "50") {
            count += 1;
            console.log(a);
            
        }
    }
    console.log(count)
    */

/*
    for (i = 0; i < diabetes.length ; i++) {
        if (a == "31") { //replace 31 with age var from form
            //count = count + 1; //no let/var needed????
            //console.log(count);
            console.log(diabetes[i].Age);
        }
    } //keeps count of number of ppl at age entered by user
/*
    for (i = 0; i > diabetes.length ; i++) {
        if (diabetes[i].Outcome == 1) {
            count_1 += 1;
            console.log(count_1);

        }
    } //no of ppl with disease
*/

}) ();




