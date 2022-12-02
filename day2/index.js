/* 
A Y
B X
C Z
This strategy guide predicts and recommends the following:

In the first round, your opponent will choose Rock (A), and you should choose Paper (Y). This ends in a win for you with a score of 8 (2 because you chose Paper + 6 because you won).
In the second round, your opponent will choose Paper (B), and you should choose Rock (X). This ends in a loss for you with a score of 1 (1 + 0).
The third round is a draw with both players choosing Scissors, giving you a score of 3 + 3 = 6.
In this example, if you were to follow the strategy guide, you would get a total score of 15 (8 + 1 + 6).

Part I: What would your total score be if everything goes exactly according to your strategy guide?

-----------------------------------------------------------------

"Anyway, the second column says how the round needs to end: X means you need to lose, Y means you need to end the round in a draw, and Z means you need to win. Good luck!"

The total score is still calculated in the same way, but now you need to figure out what shape to choose so the round ends as indicated. The example above now goes like this:

In the first round, your opponent will choose Rock (A), and you need the round to end in a draw (Y), so you also choose Rock. This gives you a score of 1 + 3 = 4.
In the second round, your opponent will choose Paper (B), and you choose Rock so you lose (X) with a score of 1 + 0 = 1.
In the third round, you will defeat your opponent's Scissors with Rock for a score of 1 + 6 = 7.
Now that you're correctly decrypting the ultra top secret strategy guide, you would get a total score of 12.

Part II: Following the Elf's instructions for the second column, what would your total score be if everything goes exactly according to your strategy guide?
*/

const { CHOICES, TEST_INPUT } = require("./input");

const player1 = new Map();
const player2 = new Map();

player1.set("A", "Rock");
player1.set("B", "Paper");
player1.set("C", "Scissors");

player2.set("X", "Rock");
player2.set("Y", "Paper");
player2.set("Z", "Scissors");

function parseInput(str) {
  const choices = str.split(/\r?\n/).map((item) => item.split(" "));
  return choices;
}

function scoreOfChoice(choice) {
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

function resultOfRound(choice1, choice2) {
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

function findMyScore(player) {
  const choices = parseInput(CHOICES);
  const results = choices.map((item) => resultOfRound(player1.get(item[0]), player2.get(item[1])));
  const myScore = results.reduce((acc, item) => acc + item[player], 0);
  console.log(results, myScore);
  return myScore;
}

findMyScore(1);

//part 2
const roundStatus = new Map();

roundStatus.set("X", "lose");
roundStatus.set("Y", "draw");
roundStatus.set("Z", "win");


function resultOfRound2(choice1, outcome) {
    let score = 0;
    if(outcome === "draw") {
        score = scoreOfChoice(choice1) + 3;
    }
    if(outcome === "win") {
        switch(choice1){
            case "Rock":
               score =  scoreOfChoice("Paper") + 6;
                break;
            case "Paper":
                score =  scoreOfChoice("Scissors") + 6;
                break;
            case "Scissors":
                score =  scoreOfChoice("Rock") + 6;
                break;
        }
    }
    if(outcome === "lose") {
        switch(choice1){
            case "Rock":
               score =  scoreOfChoice("Scissors");
                break;
            case "Paper":
                score =  scoreOfChoice("Rock");
                break;
            case "Scissors":
                score =  scoreOfChoice("Paper");
                break;
        }
    }
    return score;
}

function findMyScore2() {
    const choices = parseInput(CHOICES);
    const results = choices.map((item) => resultOfRound2(player1.get(item[0]), roundStatus.get(item[1])));
    const myScore = results.reduce((acc, currentValue) => acc + currentValue, 0);
    console.log(results, myScore);
    return myScore;
  }

findMyScore2();
