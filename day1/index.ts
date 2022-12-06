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

Part I: Find the Elf carrying the most Calories. How many total Calories is that Elf carrying? => 75622
Part II: Find the top three Elves carrying the most Calories. How many Calories are those Elves carrying in total? => 213159
*/

import  { CALORIES_OF_ELVES, TEST_INPUT } from "./input";

function sumOfCalories(arr: number[]) {
  return arr.reduce((a: number, b: number) => a + b, 0);
}

function parseCalories(calories: string) {
  const caloriesOfEachElf = [];
  let tempArr: number[] = [];
  calories.split(/\r?\n/).map((item) => {
    if (item === "") {
      caloriesOfEachElf.push(sumOfCalories(tempArr));
      tempArr = [];
    } else {
      tempArr.push(parseInt(item));
    }
  });
  caloriesOfEachElf.push(sumOfCalories(tempArr));
  return caloriesOfEachElf;
}

//part I
function findMostCalories(totalCalories: string) {
  const totalCaloriesOfEachElf = parseCalories(totalCalories);
  const mostCalories = Math.max(...totalCaloriesOfEachElf);
  console.log(mostCalories);
  return mostCalories;
}

findMostCalories(CALORIES_OF_ELVES);

//part II
function findTotalCaloriesOfTopThree(totalCalories: string) {
  const totalCaloriesOfEachElf = parseCalories(totalCalories);
  const topThreeCalories = [...totalCaloriesOfEachElf]
    .sort((a, b) => a - b)
    .slice(-3);
  console.log(sumOfCalories(topThreeCalories));
  return sumOfCalories(topThreeCalories);
}

findTotalCaloriesOfTopThree(CALORIES_OF_ELVES);
