import { TEST_INPUT, PAIRS } from "./input"

function parsePairs(pairs: string) {
    return pairs.split(/\r?\n/).map((item) => item.split(",").map((pair) => pair.split("-").map(Number)));;
}

function findPairs() {
    let counter = 0;
    const pairs = parsePairs(PAIRS);
    pairs.map(([arr1, arr2]) => {
        if ((arr1[0] <= arr2[0] && arr1[1] >= arr2[1]) || (arr1[0] >= arr2[0] && arr1[1] <= arr2[1])) {
            counter++;
        }
    })
    console.log(counter);
    return counter;
}

findPairs();
// puzzle answer: 475

// Part II
function findPairs2() {
    let counter = 0;
    const pairs = parsePairs(PAIRS);
    pairs.map(([arr1, arr2]) => {
        if ((arr1[0] <= arr2[0] && arr1[1] >= arr2[1]) || (arr1[0] >= arr2[0] && arr1[1] <= arr2[1]) || (arr1[1] >= arr2[0] && arr1[1] <= arr2[1]) || (arr1[0] >= arr2[0] && arr1[0] <= arr2[1])) {
            counter++;
        }
    })
    console.log(counter);
    return counter;
}

findPairs2();
// puzzle answer: 825