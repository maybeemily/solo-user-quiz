import smoothnessLevel from '../../src/smoothness/smoothness-results.js';
const test = QUnit.test;

QUnit.module('smoothness test');

//Soup choices: tomato, potato leek, minestrone, chowder



let scorecard = null;
QUnit.testStart(function(){
    scorecard = { tomato: 0, potatoLeek: 0, minestrone: 0, chowder: 0 };
});

test('if user chooses pureed, increment tomato by 1', function(assert) {
    smoothnessLevel('pureed', scorecard);
    assert.deepEqual(scorecard, { tomato: 1, potatoLeek: 0, minestrone: 0, chowder: 0 });
});

test('if user chooses chunky, increment chowder by 1', function(assert) {
    smoothnessLevel('chunky', scorecard);
    assert.deepEqual(scorecard, { tomato: 0, potatoLeek: 0, minestrone: 0, chowder: 1 });
});

test('if user chooses kinda rough, increment minestrone by 1', function(assert) {
    smoothnessLevel('rough', scorecard);
    assert.deepEqual(scorecard, { tomato: 0, potatoLeek: 0, minestrone: 1, chowder: 0 });
});

test('if user chooses mashed, increment potatoLeek by 1', function(assert) {
    smoothnessLevel('mashed', scorecard);
    assert.deepEqual(scorecard, { tomato: 0, potatoLeek: 1, minestrone: 0, chowder: 0 });
});