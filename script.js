// Coding Challenge 1 //

/*Mark and John are trying to compare their BMI (Body Mass Index), which is 
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg 
and height in meter).

Your tasks:
1. Store Mark's and John's mass and height in variables

2. Calculate both their BMIs using the formula (you can even implement both 
versions)

3. Create a Boolean variable 'markHigherBMI' containing information about 
whether Mark has a higher BMI than John.

Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 
m tall 
*/

// TEST DATA 1 //
// Marks BMI 
const mark1 = {
    weight: 78,
    height: 1.69
}

const markBMI1 = mark1.weight / mark1.height ** 2;
console.log(`Test 1 Marks BMI is: ${markBMI1}`);

// Johns BMI
const john1 = {
    weight: 92,
    height: 1.95
}

const johnBMI1 = john1.weight / john1.height ** 2;
console.log(`Test 1 Johns BMI is: ${johnBMI1}`);

const higherBMI1 = () => {
    if (markBMI1 > johnBMI1) {
        console.log('Mark has a higher BMI');
    } else {
        console.log('John has a higher BMI');
    }
};

higherBMI1();
// shows that mark has a higher bmi when comparing mark1 and john 1
// TEST DATA 1 //

// Coding Challenge 2 //

/*Use the BMI example from Challenge #1, and the code you already wrote, and 
improve it.
Your tasks:

1. Print a nice output to the console, saying who has the higher BMI. The message 
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"

2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"

Hint: Use an if/else statement �
*/

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
    if (markBmi > johnBmi) {
        console.log(`Marks BMI (${markBmi}) is higher than Johns.`);
    } else {
        console.log(`Johns BMI (${johnBmi}) is higher than Marks.`);
    }
};

lessCodeBmi(markBMI2, johnBMI2);
console.log('Test data 2')
lessCodeBmi(markBMI1, johnBMI1);
console.log('Test data 1')
// This version I made a function that takes in two arguments so you can do the same thing twice nullifying the purpose of the previous bmi test.

// Coding Challenge #3 //

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each 
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:

1. Calculate the average score for each team, using the test data below

2. Compare the team's average scores to determine the winner of the competition, 
and print it to the console. Don't forget that there can be a draw, so test for that 
as well (draw means they have the same average score)

3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a 
team only wins if it has a higher score than the other team, and the same time a 
score of at least 100 points. Hint: Use a logical operator to test for minimum 
score, as well as multiple else-if blocks �

4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when 
both teams have the same score and both have a score greater or equal 100 
points. Otherwise, no team wins the trophy

Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
*/

// Part 1 Show Average Scores //
const dolphinsAverage = (96 + 108 + 89) / 3;
const koalasAverage = (88 + 91 + 110) / 3;

// Part 2 Calculate winner and log to the console. //
const averageWinner = () => {
    if (dolphinsAverage > koalasAverage) {
        console.log(`Dolphins have the higher average score of ${dolphinsAverage}`)
    } else if (koalasAverage > dolphinsAverage) {
        console.log(`Koalas have the higher average score of ${koalasAverage}`);
    } else {
        console.log('They tied with the same average score.')
    }
}

averageWinner();

// BONUS 1

const dolphinsScore = 97 + 112 + 101;
const koalasScore = 109 + 95 + 123;

const calcAverage = (score) => {
    const avg = score / 3;
    return avg;
}

const dolphAvg = calcAverage(dolphinsScore);
console.log(dolphAvg);

const koaAvg = calcAverage(koalasScore);
console.log(koaAvg);

if (dolphAvg >= 100 && koaAvg >= 100) {
    if (dolphAvg > koaAvg) {
        console.log(`Dolphins win: ${dolphAvg}.`);
    } else if (koaAvg > dolphAvg) {
        console.log(`Koalas win: ${koaAvg}`);
    } else {
        console.log('They tied!');
    }
} else {
    console.log("Competitor(s) didn't score over 100.")
}

// I created a function to calculate the average scores. 
// Then I created an if block to define that both avg scores were greater than or equal to 100. If so it goes into the comparison between the PASSED scores over 100.
// Otherwise it says they both didn't score high enough.


