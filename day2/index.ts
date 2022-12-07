import { CHOICES, TEST_INPUT } from "./input";

const player1 = new Map();
const player2 = new Map();

player1.set("A", "Rock");
player1.set("B", "Paper");
player1.set("C", "Scissors");

player2.set("X", "Rock");
player2.set("Y", "Paper");
player2.set("Z", "Scissors");

function parseChoices(choices: string) {
  return choices.split(/\r?\n/).map((item) => item.split(" "));
}

function scoreOfChoice(choice: string) {
  let score = 0;
  if (choice === "Rock") {
    score = 1;
  } else if (choice === "Paper") {
    score = 2;
  } else if (choice === "Scissors") {
    score = 3;
  } else score = 0;
  return score;
}

function resultOfRound(choice1: string, choice2: string) {
  let score1 = scoreOfChoice(choice1);
  let score2 = scoreOfChoice(choice2);

  if (choice1 === choice2) {
    return [score1 + 3, score2 + 3];
  } else {
    if (choice1 === "Rock") {
      choice2 === "Scissors" ? score1 += 6 : score2 += 6;
    }
    if (choice1 === "Scissors") {
      choice2 === "Paper" ? score1 += 6 : score2 += 6;
    }
    if (choice1 === "Paper") {
      choice2 === "Rock" ? score1 += 6 : score2 += 6;
    }
    return [score1, score2];
  }
}

function findMyScore(player: number) {
  const choices = parseChoices(CHOICES);
  const results = choices.map((item) => resultOfRound(player1.get(item[0]), player2.get(item[1])));
  const myScore = results.reduce((acc, item) => acc + item[player], 0);
  console.log(myScore);
  return myScore;
}

findMyScore(1);
// puzzle answer: 10718


//part 2
const roundStatus = new Map();

roundStatus.set("X", "lose");
roundStatus.set("Y", "draw");
roundStatus.set("Z", "win");


function resultOfRound2(choice: string, outcome: string) {
  let score = 0;
  if (outcome === "draw") {
    score = scoreOfChoice(choice) + 3;
  }
  if (outcome === "win") {
    switch (choice) {
      case "Rock":
        score = scoreOfChoice("Paper") + 6;
        break;
      case "Paper":
        score = scoreOfChoice("Scissors") + 6;
        break;
      case "Scissors":
        score = scoreOfChoice("Rock") + 6;
        break;
    }
  }
  if (outcome === "lose") {
    switch (choice) {
      case "Rock":
        score = scoreOfChoice("Scissors");
        break;
      case "Paper":
        score = scoreOfChoice("Rock");
        break;
      case "Scissors":
        score = scoreOfChoice("Paper");
        break;
    }
  }
  return score;
}

function findMyScore2() {
  const choices = parseChoices(CHOICES);
  const results = choices.map((item) => resultOfRound2(player1.get(item[0]), roundStatus.get(item[1])));
  const myScore = results.reduce((acc, currentValue) => acc + currentValue, 0);
  console.log(myScore);
  return myScore;
}

findMyScore2();
// puzzle answer: 14652
