let weight = 60;
let height = 1.52;

let bmi = weight / (height*height);

let minimumNormalWeight = 18.5;
let maximumNormalWeight = 24.9;
let newWeight, minimumWeightNeedToIncrease, minimumWeightNeedToDecrease;


if(bmi < 18.5){
    bmi = minimumNormalWeight;
    newWeight = bmi * (height*height);
    minimumWeightNeedToIncrease = newWeight - weight;
    console.log("Underweight and need to increase: " + minimumWeightNeedToIncrease + " kilogram");
} else if (bmi >= 18.5 && bmi <= 24.9){
    console.log("Normal weight and bmi is: ", bmi + " no need to increase or decrease kilogram");
} else if (bmi >= 25){
    bmi = maximumNormalWeight;
    newWeight = bmi * (height*height);
    minimumWeightNeedToDecrease = weight - newWeight;
    console.log("Overweight and need to decrease: ", minimumWeightNeedToDecrease + " kilogram");
}