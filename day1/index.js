/* 
1000
2000
3000

4000

5000
6000

7000
8000
9000

10000

This list represents the Calories of the food carried by five Elves:

- The first Elf is carrying food with 1000, 2000, and 3000 Calories, a total of 6000 Calories.
- The second Elf is carrying one food item with 4000 Calories.
- The third Elf is carrying food with 5000 and 6000 Calories, a total of 11000 Calories.
- The fourth Elf is carrying food with 7000, 8000, and 9000 Calories, a total of 24000 Calories.
- The fifth Elf is carrying one food item with 10000 Calories.
In case the Elves get hungry and need extra snacks, they need to know which Elf to ask: they'd like to know how many Calories are being carried by the Elf carrying the most Calories. In the example above, this is 24000 (carried by the fourth Elf).

Part I: Find the Elf carrying the most Calories. How many total Calories is that Elf carrying? 
Part II: Find the top three Elves carrying the most Calories. How many Calories are those Elves carrying in total?
*/

const { CALORIES_OF_ELVES, TEST_INPUT } = require("./input");

function sumArray(arr) {
  return arr.reduce((a, b) => a + b, 0);
}

function findCaloriesOfEachElf(calories) {
  const caloriesOfEachElf = [];
  let tempArr = [];
  calories.split(/\r?\n/).map((item) => {
    if (item === "") {
      caloriesOfEachElf.push(sumArray(tempArr));
      tempArr = [];
    } else {
      tempArr.push(parseInt(item));
    }
  });
  caloriesOfEachElf.push(sumArray(tempArr));
  return caloriesOfEachElf;
}

//part 1
function findMostCalories(totalCalories) {
  const totalCaloriesOfEachElf = findCaloriesOfEachElf(totalCalories);
  const mostCalories = Math.max(...totalCaloriesOfEachElf);
  console.log(mostCalories);
  return mostCalories;
}

findMostCalories(CALORIES_OF_ELVES);

//part 2
function findTotalCaloriesOfTopThree(totalCalories) {
  const totalCaloriesOfEachElf = findCaloriesOfEachElf(totalCalories);
  const topThreeCalories = [...totalCaloriesOfEachElf]
    .sort((a, b) => a - b)
    .slice(-3);
  console.log(sumArray(topThreeCalories));
  return sumArray(topThreeCalories);
}

findTotalCaloriesOfTopThree(CALORIES_OF_ELVES);
