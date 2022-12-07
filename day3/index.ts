import { RUCKSACKS, TEST_INPUT } from "./input"

function parseRucksacks(rucksacks: string) {
  return rucksacks.split(/\r?\n/)
    .map((item) => [
      item.substring(0, item.length / 2),
      item.substring(item.length / 2, item.length),
    ]);
}

function findPriority(letter: string) {
  let priority = 1;
  const code = letter.charCodeAt(0);
  if (code >= 97 && code <= 122) {
    priority = (code % 97) + 1;
  }
  if (code >= 65 && code <= 90) {
    priority = (code % 65) + 27;
  }
  return priority;
}

function findSumOfPriorities() {
  let commonItems: Array<string> = [];
  const rucksacks = parseRucksacks(RUCKSACKS);
  rucksacks.map(([s1, s2]) => {
    for (let i=0; i < s1.length; i++) {
      if (s2.includes(s1[i])) {
        commonItems.push(s1[i]);
        s1 = s1.replaceAll(s1[i], "");
        s2 = s2.replaceAll(s1[i], "");
      }
    }
  });
  const sumOfPriorities = commonItems.reduce(
    (acc, currentValue) => acc + findPriority(currentValue),
    0
  );
  console.log(sumOfPriorities);
  return sumOfPriorities;
}

findSumOfPriorities();
// puzzle answer: 7811


// Part II
function sliceIntoChunks(arr:Array<string>, chunkSize:number) {
  const res = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    const chunk = arr.slice(i, i + chunkSize);
    res.push(chunk);
  }
  return res;
}

function parseRucksacks2(rucksacks: string, chunkSize: number) {
  return sliceIntoChunks(rucksacks.split(/\r?\n/).map((item) => item), chunkSize);
}

function findSumOfPriorities2() {
  let commonItems: Array<string>  = [];
  const rucksacks = parseRucksacks2(RUCKSACKS, 3);
  rucksacks.map(([s1, s2, s3]) => {
    for (let i=0; i < s1.length; i++) {
      if (s2.includes(s1[i]) && s3.includes(s1[i])) {
        commonItems.push(s1[i]);
        s1 = s1.replaceAll(s1[i], "");
        s2 = s2.replaceAll(s1[i], "");
        s3 = s3.replaceAll(s1[i], "");
      }
    }
  });
  const sumOfPriorities = commonItems.reduce(
    (acc, currentValue) => acc + findPriority(currentValue),
    0
  );
  console.log(sumOfPriorities);
  return sumOfPriorities;
}

findSumOfPriorities2();
// puzzle answer: 2639
