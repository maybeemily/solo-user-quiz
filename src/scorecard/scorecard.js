function finalScore(scorecard){
    let tomato = scorecard.tomato;
    let potatoLeek = scorecard.potatoLeek;
    let minestrone = scorecard.minestrone;
    let chowder = scorecard.chowder;

    if(tomato > potatoLeek 
        && tomato > minestrone 
        && tomato > chowder) {
        return 'Hooray! You are TOMATO SOUP!';
    }
    if(potatoLeek > minestrone
        && potatoLeek > chowder) {
        return 'Congratulations! You\'re a nice bowl of Potato Leek soup!';
    }
    if(minestrone > chowder) {
        return 'So fancy! You are Minestrone!';
    }
    else {
        return 'Delicious! Nutritious! You are any and all kinds of Chowder!';
    }

}

export default finalScore;