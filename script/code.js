//Variables
let weightInput = document.querySelector(".weight-input");
let heightInput = document.querySelector(".height-input");
let calculateButton = document.querySelector(".calculate");
let result = document.querySelector(".result");
let statement = document.querySelector(".result-statement");
let BMI, height, weight;

//Calculation
calculateButton.addEventListener("click", ()=>{
    
    height = heightInput.value;
    weight = weightInput.value;
    BMI = weight/(height**2); 
    result.innerText = BMI.toFixed(2);

    if(BMI < 18.5){
        statement.innerText = "You are underweight!";    
    }else if((BMI > 18.5) && (BMI <= 24.9)){
        statement.innerText = "You are normal weight!";
    }else if((BMI >= 25) && (BMI <= 29.9 )){
        statement.innerText = "You are overweight!";
    }else{
        statement.innerText = "You are obese!";
    }
});
