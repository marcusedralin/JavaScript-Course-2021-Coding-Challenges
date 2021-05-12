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
// const mark1 = {
//     weight: 78,
//     height: 1.69
// }

// const markBMI1 = mark1.weight / mark1.height ** 2;
// console.log(`Test 1 Marks BMI is: ${markBMI1}`);

// // Johns BMI
// const john1 = {
//     weight: 92,
//     height: 1.95
// }

// const johnBMI1 = john1.weight / john1.height ** 2;
// console.log(`Test 1 Johns BMI is: ${johnBMI1}`);

// const higherBMI1 = () => {
//     if (markBMI1 > johnBMI1) {
//         console.log('Mark has a higher BMI');
//     } else {
//         console.log('John has a higher BMI');
//     }
// };

// higherBMI1();
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
// const mark2 = {
//     weight: 95,
//     height: 1.88
// }

// const markBMI2 = mark2.weight / mark2.height ** 2;
// console.log(`Test 2 Marks BMI is: ${markBMI2}`);

// const john2 = {
//     weight: 85,
//     height: 1.76
// }

// const johnBMI2 = john2.weight / john2.height ** 2;
// console.log(`Test 2 Johns BMI is: ${johnBMI2}`);

// const lessCodeBmi = (markBmi, johnBmi) => {
//     if (markBmi > johnBmi) {
//         console.log(`Marks BMI (${markBmi}) is higher than Johns.`);
//     } else {
//         console.log(`Johns BMI (${johnBmi}) is higher than Marks.`);
//     }
// };

// lessCodeBmi(markBMI2, johnBMI2);
// console.log('Test data 2')
// lessCodeBmi(markBMI1, johnBMI1);
// console.log('Test data 1')
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
// const dolphinsAverage = (96 + 108 + 89) / 3;
// const koalasAverage = (88 + 91 + 110) / 3;

// // Part 2 Calculate winner and log to the console. //
// const averageWinner = () => {
//     if (dolphinsAverage > koalasAverage) {
//         console.log(`Dolphins have the higher average score of ${dolphinsAverage}`)
//     } else if (koalasAverage > dolphinsAverage) {
//         console.log(`Koalas have the higher average score of ${koalasAverage}`);
//     } else {
//         console.log('They tied with the same average score.')
//     }
// }

// averageWinner();

// // BONUS 1

// const dolphinsScore = 97 + 112 + 101;
// const koalasScore = 109 + 95 + 123;

// const calcAverage = (score) => {
//     const avg = score / 3;
//     return avg;
// }

// const dolphAvg = calcAverage(dolphinsScore);
// console.log(dolphAvg);

// const koaAvg = calcAverage(koalasScore);
// console.log(koaAvg);

// if (dolphAvg >= 100 && koaAvg >= 100) {
//     if (dolphAvg > koaAvg) {
//         console.log(`Dolphins win: ${dolphAvg}.`);
//     } else if (koaAvg > dolphAvg) {
//         console.log(`Koalas win: ${koaAvg}`);
//     } else {
//         console.log('They tied!');
//     }
// } else {
//     console.log("Competitor(s) didn't score over 100.")
// }

// I created a function to calculate the average scores. 
// Then I created an if block to define that both avg scores were greater than or equal to 100. If so it goes into the comparison between the PASSED scores over 100.
// Otherwise it says they both didn't score high enough.

// Coding Challenge #4 //

/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

Your tasks:

1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement � (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary 
operator!)

2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value 316.25”

Test data:

§ Data 1: Test for bill values 275, 40 and 430

Hints:
§ To calculate 20% of a value, simply multiply it by 20/100 = 0.2
§ Value X is between 50 and 300, if it's >= 50 && <= 300 �
*/
// const bill = 430;
// const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// console.log(`The bill is: $${bill}, the tip was: $${tip} and the total was: $${bill + tip}`);

// JS Fundamentals Part 2 //
// Coding Challenges //

// Coding Challenge #1 //

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!

Your tasks:

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores

2. Use the function to calculate the average for both teams

3. Create a function 'checkWinner' that takes the average score of each team 
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner 
to the console, together with the victory points, according to the rule above. 
Example: "Koalas win (30 vs. 13)"

4. Use the 'checkWinner' function to determine the winner for both Data 1 and Data 2

5. Ignore draws this time

Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

Hints:
§ To calculate average of 3 values, add them all together and divide by 3
§ To check if number A is at least double number B, check for A >= 2 * B. 
Apply this to the team's average scores
*/

function addScores(a, b, c) {
    const totalScores = a + b + c;
    return totalScores;
}

// const dolphinsScores = 44 + 23 + 71;
const dolphinsScores = addScores(85, 54, 41);
// const koalasScores = 65 + 54 + 49;
const koalasScores = addScores(23, 34, 27);

const calcAverage = (scores) => scores / 3;

const dolphAvg = calcAverage(dolphinsScores);
const koaAvg = calcAverage(koalasScores);

function checkWinner(dolphAvg, koaAvg) {
    if (dolphAvg >= 2 * koaAvg) {
        console.log(`Dolphins win (${dolphAvg} vs. ${koaAvg})`);
    } else if (koaAvg >= 2 * dolphAvg) {
        console.log(`Koalas win (${koaAvg} vs. ${dolphAvg})`);
    } else {
        console.log('No one wins...')
    }
}

checkWinner(dolphAvg, koaAvg);

