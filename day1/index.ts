import { CALORIES_OF_ELVES, TEST_INPUT } from "./input";

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
// puzzle answer: 75622.



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
// puzzle answer: 213159.
