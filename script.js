// Coding Challenge 1 //

//BMI = mass / height ** 2 = mass / (height * height)

// TEST DATA 1 //
// Marks BMI 
const mark1 = {
    weight: 78,
    height: 1.69
}

const markBMI1 = mark1.weight / mark1.height ** 2;
console.log(`Marks BMI is: ${markBMI1}`);

// Johns BMI
const john1 = {
    weight: 92,
    height: 1.95
}

const johnBMI1 = john1.weight / john1.height ** 2;
console.log(`Johns BMI is: ${johnBMI1}`);

const higherBMI1 = () => {
    if(markBMI1 > johnBMI1) {
        console.log('Mark has a higher BMI');
    } else {
        console.log('John has a higher BMI');
    }
};

higherBMI1();
// shows that mark has a higher bmi when comparing mark1 and john 1
// TEST DATA 1 //

// TEST DATA 2 //
const mark2 = {
    weight: 95,
    height: 1.88
} 

const markBMI2 = mark2.weight / mark2.height ** 2;
console.log(`Test 2 Marks BMI is: ${markBMI2}`);

const john2 = {
    weight: 85,
    height: 1.76
} 

const johnBMI2 = john2.weight / john2.height ** 2;
console.log(`Test 2 Johns BMI is: ${johnBMI2}`);

const lessCodeBmi = (markBmi, johnBmi) => {
    if(markBmi > johnBmi) {
        console.log('Mark has a higher BMI');
    } else {
        console.log('John has a higher BMI');
    }
};

lessCodeBmi(markBMI2, johnBMI2);
lessCodeBmi(markBMI1, johnBMI1);
// This version I made a function that takes in two arguments so you can do the same thing twice nullifying the purpose of the previous bmi test.

