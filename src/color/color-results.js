function userColor(color, scorecard) {
    if(color === 'red') {
        scorecard.tomato += 3;
        scorecard.minestrone += 1;
    }
    else if(color === 'yellow') {
        scorecard.potatoLeek += 1;
        scorecard.chowder += 3;
    }
    else if(color === 'brown') {
        scorecard.potatoLeek += 3;
        scorecard.chowder += 1;
    }
    else if(color === 'technicolor') {
        scorecard.minestrone += 3;
    }
}

export default userColor;