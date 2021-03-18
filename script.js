let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () =>
{
    let target = Math.floor(Math.random(10));
    return target;
}

const compareGuesses = (humanGuess, computerGuess, target) =>
{
    let humanResult = Math.abs(target - humanGuess);
    let computerResult = Math.abs(target - computerGuess);

    if (humanResult > computerResult)
    {
        return false;
    }
    else
    {
        return true;
    }
}

const updateScore = (winner) =>
{
    if (winner === 'human')
    {
        humanScore++;
    }
    else
    {
        computerScore++;
    }
}

const advanceRound = () =>
{
    currentRoundNumber++;
}