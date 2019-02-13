import vegLevelScore from '../../src/vegetables/vegetable-results.js';
const test = QUnit.test;

QUnit.module('veg level test');

//Soup choices: tomato, potato leek, minestrone, chowder



let scorecard = null;
QUnit.testStart(function(){
    scorecard = { tomato: 0, potatoLeek: 0, minestrone: 0, chowder: 0 };
});

test('if veg level is <= 3, increment chowder by 3 and tomato by 1', function(assert) {
    vegLevelScore('2', scorecard);
    assert.deepEqual(scorecard, { tomato: 1, potatoLeek: 0, minestrone: 0, chowder: 3 });
});

test('if veg level is greater than 3 but <=5, increment tomato, minestrone, and potatoleek by 1', function(assert) {
    vegLevelScore('4', scorecard);
    assert.deepEqual(scorecard, { tomato: 1, potatoLeek: 1, minestrone: 1, chowder: 0 });
});

test('if veg level is greater than 5 but <= 8, increment tomato and potatoLeek by 1, and minestrone by 2', function(assert) {
    vegLevelScore('6', scorecard);
    assert.deepEqual(scorecard, { tomato: 1, potatoLeek: 1, minestrone: 2, chowder: 0 });
});

test('if veg level is between 8 and 10, increase minestrone by 3', function(assert) {
    vegLevelScore('9', scorecard);
    assert.deepEqual(scorecard, { tomato: 0, potatoLeek: 0, minestrone: 3, chowder: 0 });
});