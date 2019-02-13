function vegLevelScore(veggieLevel, scorecard) {
    if(veggieLevel <= 3) {
        scorecard.tomato += 1;
        scorecard.chowder += 3;
    }
    else if(veggieLevel > 3 && veggieLevel <= 5) {
        scorecard.tomato += 1;
        scorecard.potatoLeek += 1;
        scorecard.minestrone += 1;
    }
    else if(veggieLevel > 5 && veggieLevel <= 8) {
        scorecard.tomato += 1;
        scorecard.potatoLeek += 1;
        scorecard.minestrone += 2;
    }
    else if(veggieLevel > 8 && veggieLevel <= 10) {
        scorecard.minestrone += 3;
    }
}   

export default vegLevelScore;