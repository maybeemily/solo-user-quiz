import userColor from '../../src/color/color-results.js';

const test = QUnit.test;
QUnit.module('color test');


let scorecard = null;
QUnit.testStart(function(){
    scorecard = { tomato: 0, potatoLeek: 0, minestrone: 0, chowder: 0 };
});

test('if user chooses red, add 3 to tomato and 1 to minestrone', function(assert) {
    userColor('red', scorecard);
    assert.deepEqual(scorecard, { tomato: 3, potatoLeek: 0, minestrone: 1, chowder: 0 });
});

test('if user chooses yellow, add 3 to chowder and 1 to potatoleek', function(assert) {
    userColor('yellow', scorecard);
    assert.deepEqual(scorecard, { tomato: 0, potatoLeek: 1, minestrone: 0, chowder: 3 });
});

test('if user chooses brown, add 3 to potatoLeek and 1 to chowder', function(assert) {
    userColor('brown', scorecard);
    assert.deepEqual(scorecard, { tomato: 0, potatoLeek: 3, minestrone: 0, chowder: 1 });
});

test('if user chooses technicolor, add 3 to minestrone', function(assert) {
    userColor('technicolor', scorecard);
    assert.deepEqual(scorecard, { tomato: 0, potatoLeek: 0, minestrone: 3, chowder: 0 });
});