function smoothnessLevel(smoothness, scorecard) {
    if(smoothness === 'pureed') {
        scorecard.tomato += 1;
    }
    else if(smoothness === 'chunky') {
        scorecard.chowder += 1;
    }
    else if(smoothness === 'rough') {
        scorecard.minestrone += 1;
    }
    else if(smoothness === 'mashed') {
        scorecard.potatoLeek += 1;
    }
}

export default smoothnessLevel;