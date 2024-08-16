var age = 0; //global?
//let counter = 0;

//form submission, also give better function name
function foo2() {
  age = document.getElementById("age").value;
  gender = document.getElementById("gender").value;
  ethnicity = document.getElementById("ethnicity").value;
  bmi = document.getElementById("bmi").value;
  smoking = document.getElementById("smoking").value;
  family = document.getElementById("family").value;
  alcohol = document.getElementById("alcohol").value;
  physical = document.getElementById("physical").value;
  stroke = document.getElementById("stroke").value;

  console.log("ALC: " + alcohol + " and type: " + typeof(alcohol))
  //age.toString();
  //console.log("gnder valie b4: " + gender)
  console.log("dsfsdf "+ ethnicity)
  
  
  //gender value assignemnt, can be simplified by just changing html value instead
  if (gender == "male") {
    gender = 0;
  } else {
    gender = 1;
  }
  //console.log("gender vlaue new: " + gender)
  disease_2(age,gender,ethnicity,bmi,smoking,family,alcohol,physical,stroke);
    
  //basically gets final values and mults by 100 to give percentage and also rounded to 2dp and then converted to a string so that a % sign can be appended onto it
  document.getElementById("ooutput").innerText = finalResultPercentage;

}


//github url from repository for chronic kidney disease
url = 'https://raw.githubusercontent.com/Biranavan-Sritharan/Disease-Prediction-Webpage/main/parkinsons_disease_data.csv'

// this function bascially formats csv
function parseCSV (csv) {
  //csv sepearted into rows
  const rows = csv.trim().split('\n');
  
  //headers made from first row
  const headers = rows[0].split(',');
  console.log("headers: " + headers);  //used in testing to see if headers are correctly retrieved
  
  //creates array to store data in
  const data = [];
  console.log("this is data array "+ data)
  
  // Process each row after the header
  for (let i = 1; i < rows.length; i++) {  //odd it iteratoes form i=1 originally, its cause header doesnt't count, haha just realised XD
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
  function disease_2(age,gender,ethnicity,bmi,smoking,family,alcohol,physical,stroke) {

    let diseasePresent = 0;
    let nodiseasePresent = 0;

    let ageAndDisease = 0;
    let genderAndDisease = 0;
    let ethnicityAndDisease = 0;
    let bmiAndDisease = 0;
    let smokingAndDisease = 0;
    let familyAndDisease = 0;
    let alcoholAndDisease = 0;
    let physicalAndDisease = 0;
    let strokeAndDisease = 0;

    let ageAndNoDisease = 0;
    let genderAndNoDisease = 0;
    let ethnicityAndNoDisease = 0;
    let bmiAndNoDisease = 0;
    let smokingAndNoDisease = 0;
    let familyAndNoDisease = 0;
    let alcoholAndNoDisease = 0;
    let physicalAndNoDisease = 0;
    let strokeAndNoDisease = 0;

    console.log("csvdata log" + csvData); //so here is just csv file loaded up, NOT in array yet
    const dataArray = parseCSV(csvData);  //this acc makes the csv file into an array
    console.log("datArray array: " +dataArray);
    
    ////////////////////////////////////////////////////////////////here

    //variables for disease being PRESENT

    for (let i = 0 ; i < dataArray.length ; i++) {
        a = dataArray[i].Age; // 20-90                  // ((()))) /365).toFixed(0)).toString()
        b = dataArray[i].Gender; //0 male, 1 female
        c = dataArray[i].Ethnicity; //0: Caucasian , 1: African American , 2: Asian , 3: Other
        d = Math.round(dataArray[i].BMI); //15-40
        //console.log(d)
        e = dataArray[i].Smoking; //low, medium, high
        f = dataArray[i].FamilyHistoryKidneyDisease; //y or n
        g = Math.round(dataArray[i].AlcoholConsumption); //low, medium, high //0-20
        h = Math.round(dataArray[i].PhysicalActivity); //low, medium, high  //0-10
        j = dataArray[i].Stroke; //y or n
        h = dataArray[i].Diagnosis; 

        //console.log("a value: " + a)
        //console.log("age: " + age)

        if (h == 1) {
          diseasePresent += 1;
        }

        if (h == 0) {
          nodiseasePresent += 1;
        }

        //Disease present alongside value given

        if (a == age && h == 1) {
          ageAndDisease += 1;
        } else if (a == age && h == 0) {
          ageAndNoDisease += 1;
        }
        
        if (b == gender && h == 1) {
          genderAndDisease += 1;
        } else if (b == gender && h == 0) {
          genderAndNoDisease += 1;
        }

        if (c == ethnicity && h == 1) {
          ethnicityAndDisease += 1;
        } else if (c == ethnicity && h == 0) {
          ethnicityAndNoDisease += 1;
        }

        //bmi section counter                    ADD IN 36+ AS WELLL!!!!!
        if (bmi == 15 && h == 1) {
          for (let z = bmi; z >= 0 ; z--) {
            if (d == z) {
              bmiAndDisease += 1;
            }
          }
        } else if (bmi == 15 && h == 0) {
          for (let z = bmi; z >= 0 ; z--) {
            if (d == z) {
              bmiAndNoDisease += 1;
            }
          }
        }
        
        if (bmi == 25 && h == 1) {
          for (let z = bmi; z >= 16 ; z-- ) {
            if (d == z) {
              bmiAndDisease += 1;
            }
          }
        } else if (bmi == 25 && h == 0) {
          for (let z = bmi; z >= 16 ; z-- ) {
            if (d == z) {
              bmiAndNoDisease += 1;
            }
          }
        }

        if (bmi == 35 && h == 1) {
          for (let z = bmi; z >= 26 ; z-- ) {
            if (d == z) {
              bmiAndDisease += 1;
            }
          }
        } else if (bmi == 35 && h == 0) {
          for (let z = bmi; z >= 26 ; z-- ) {
            if (d == z) {
              bmiAndNoDisease += 1;
            }
          }
        }

        if (bmi == 36 && h == 1) {
            for (let z = bmi; z >= 35 ; z-- ) {
              if (d == z) {
                bmiAndDisease += 1;
              }
            }
          }
  
          if (bmi == 36 && h == 0) {
            for (let z = bmi; z >= 35 ; z-- ) {
              if (d == z) {
                bmiAndNoDisease += 1;
              }
            }
          }

        //Smoking section
        //smoking present and disease present
        if (e == smoking && smoking == 1 && h == 1) {
          smokingAndDisease += 1;
        } else if (e == smoking && smoking == 1 && h == 0) {
          smokingAndNoDisease += 1;
        }

        //smoking NOT present and disease present
        if (e == smoking && smoking == 0 && h == 1) {  //can probably do just e == 0 or e ==1????
          smokingAndDisease += 1;
        } else if (e == smoking && smoking == 0 && h == 0) {  //can probably do just e == 0 or e ==1????
          smokingAndNoDisease += 1;
        }

        //Family history section
        //family history present and disease present
        if (f == family && family == 1 && h == 1) {
          familyAndDisease += 1;
        } else if (f == family && family == 1 && h == 0) {
          familyAndNoDisease += 1;
        } 

        //family history  NOT present and disease present
        if (f == family && family == 0 && h == 1) {
          familyAndDisease += 1;  //diffrent variable needed here? but should be fine to reuse this old variable
        } else if (f == family && family == 0 && h == 0) {
          familyAndNoDisease += 1;  //diffrent variable needed here? but should be fine to reuse this old variable
        } 

        //Alcohol Consumption section
        if (alcohol == 6 && h == 1) {
          for(let z = alcohol; z >= 0; z--) {
            if (g == z) {
              alcoholAndDisease += 1;
            }
          }
        } else if (alcohol == 6 && h == 0) {
          for(let z = alcohol; z >= 0; z--) {
            if (g == z) {
              alcoholAndNoDisease += 1;
            }
          }
        }

        if (alcohol == 13 && h == 1) {
          for(let z = alcohol; z >= 7; z--) {
            if (g == z) {
              alcoholAndDisease += 1;
            }
          }
        } else if (alcohol == 13 && h == 0) {
          for(let z = alcohol; z >= 7; z--) {
            if (g == z) {
              alcoholAndNoDisease += 1;
            }
          }
        }

        if (alcohol == 20 && h == 1) {
          for(let z = alcohol; z >= 14; z--) {
            if (g == z) {
              alcoholAndDisease += 1;
            }
          }
        } else if (alcohol == 20 && h == 0) {
          for(let z = alcohol; z >= 14; z--) {
            if (g == z) {
              alcoholAndNoDisease += 1;
            }
          }
        }

        //Physical Fitness Section
        if (physical == 3 && h == 1) {
          for(let z = physical; z >= 0; z--) {
            if (h == z) {
              physicalAndDisease += 1;
            }
          }
        }

        if (physical == 3 && h == 0) {
          for(let z = physical; z >= 0; z--) {
            if (h == z) {
              physicalAndNoDisease += 1;
            }
          }
        }

        if (physical == 6 && h == 1) {  //no actual data here so we could technically rmeove this, but on assumption taht dataset expanded upon, we can leave this in
          for(let z = physical; z >= 4; z--) {
            if (h == z) {
              physicalAndDisease += 1;
            }
          }
        }

        if (physical == 6 && h == 0) {  //no actual data here so we could technically rmeove this, but on assumption taht dataset expanded upon, we can leave this in
          for(let z = physical; z >= 4; z--) {
            if (h == z) {
              physicalAndNoDisease += 1;
            }
          }
        }

        if (physical == 10 && h == 1) {
          for(let z = physical; z >= 7; z--) {
            if (h == z) {
              physicalAndDisease += 1;
            }
          }
        }

        if (physical == 10 && h == 0) {
          for(let z = physical; z >= 7; z--) {
            if (h == z) {
              physicalAndNoDisease += 1;
            }
          }
        }

        //Statins section
        //statins present and disease present
        if (j == stroke && stroke == 1 && h == 1) {
            strokeAndDisease += 1;
        } 

        if (j == stroke && stroke == 1 && h == 0) {
            strokeAndNoDisease += 1;
        } 

        //statins NOT present and disease present
        if (j == stroke && stroke == 0 && h == 1) {
            strokeAndDisease += 1;  //diffrent variable needed here? but should be fine to reuse this old variable
        } 

        if (j == stroke && stroke == 0 && h == 0) {
            strokeAndNoDisease += 1;  //diffrent variable needed here? but should be fine to reuse this old variable
        } 
    }

    //Disease NOT present alongside value given

    //Naive Bayes Calculation

    //Disease is PRESENT
    let ageGivenThatDisease = ageAndDisease/diseasePresent || 1; //P(age | D)
    let genderGivenThatDisease = genderAndDisease/diseasePresent || 1; //P(gender | D)
    let ethnicityGivenThatDisease = ethnicityAndDisease/diseasePresent || 1; //P(ethnicity | D)
    let BMIGivenThatDisease = bmiAndDisease/diseasePresent || 1; //P(BMI | D)
    let smokingGivenThatDisease = smokingAndDisease/diseasePresent || 1; //P(smoking | D)
    let familyGivenThatDisease = familyAndDisease/diseasePresent || 1; //P(family history | D)
    let alcoholGivenThatDisease = alcoholAndDisease/diseasePresent || 1; //P(alcohol | D)
    let physicalGivenThatDisease = physicalAndDisease/diseasePresent || 1; //P(physical | D)
    let strokeGivenThatDisease = strokeAndDisease/diseasePresent || 1; //P(statin | D)

    //Disease is NOT PRESENT
    let ageGivenThatNoDisease = ageAndNoDisease/nodiseasePresent || 1; //P(age | D)
    let genderGivenThatNoDisease = genderAndNoDisease/nodiseasePresent || 1; //P(gender | D)
    let ethnicityGivenThatNoDisease = ethnicityAndNoDisease/nodiseasePresent || 1; //P(ethnicity | D)
    let BMIGivenThatNoDisease = bmiAndNoDisease/nodiseasePresent || 1; //P(BMI | D)
    let smokingGivenThatNoDisease = smokingAndNoDisease/nodiseasePresent || 1; //P(smoking | D)
    let familyGivenThatNoDisease = familyAndNoDisease/nodiseasePresent || 1; //P(family history | D)
    let alcoholGivenThatNoDisease = alcoholAndNoDisease/nodiseasePresent || 1; //P(alcohol | D)
    let physicalGivenThatNoDisease = physicalAndNoDisease/nodiseasePresent || 1; //P(physical | D)
    let strokeGivenThatNoDisease = strokeAndNoDisease/nodiseasePresent || 1; //P(statin | D)


    //P(D) and P(!D)
    let probOfDisease = ageGivenThatDisease * genderGivenThatDisease * ethnicityGivenThatDisease * BMIGivenThatDisease * smokingGivenThatDisease * familyGivenThatDisease * alcoholGivenThatDisease * physicalGivenThatDisease * strokeGivenThatDisease //P(D)
    let probofNOdisease = ageGivenThatNoDisease * genderGivenThatNoDisease * ethnicityGivenThatNoDisease * BMIGivenThatNoDisease * smokingGivenThatNoDisease * familyGivenThatNoDisease * alcoholGivenThatNoDisease * physicalGivenThatNoDisease * strokeGivenThatNoDisease; //P(!D)

    console.log("disease: " + probOfDisease + " NO disease " + probofNOdisease)
    finalResult = probOfDisease / (probOfDisease + probofNOdisease);   //P(D | ...) = P(D) / (P(D) + P(!D))

    console.log("new count for phy present count: " + alcoholAndDisease)
    //console.log(gender)
    finalResultPercentage = finalResult * 100;  

    //console.log("prob value thingy" + ageGivenThatDisease);
    
  }
