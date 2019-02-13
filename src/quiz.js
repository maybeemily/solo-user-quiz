import smoothnessLevel from './smoothness/smoothness-results.js';
import userColor from './color/color-results.js';
import vegLevelScore from './vegetables/vegetable-results.js';
import finalScore from './scorecard/scorecard.js';

const soupForm = document.getElementById('soup-form');
const vegLevel = document.getElementById('vegetables');
const vegLevelDisplay = document.getElementById('veg-level');
const nameDisplay = document.getElementById('user-name');

const jsonString = window.localStorage.getItem('userName');
const userName = JSON.parse(jsonString);

nameDisplay.textContent = ', ' + userName.name;

//get inputs from soup form, store in local storage, output results

vegLevel.addEventListener('change', function(event) {
    event.preventDefault();
    vegLevelDisplay.textContent = vegLevel.value;
});

soupForm.addEventListener('submit', function(){
    event.preventDefault();

    const formData = new FormData(soupForm);

    const answers = {
        smoothness: formData.get('smoothness'),
        likeVeggies: vegLevel.value,
        color: formData.get('color')
    };

    const scorecard = {
        tomato: 0,
        potatoLeek: 0,
        minestrone: 0,
        chowder: 0
    };

    smoothnessLevel(answers.smoothness, scorecard);
    vegLevelScore(answers.likeVeggies, scorecard);
    userColor(answers.color, scorecard);


    let finalResult = finalScore(scorecard);

    window.localStorage.setItem('finalResult', finalResult);

    window.location = 'results.html';
    
});