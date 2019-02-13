import finalScore from '../../src/scorecard/scorecard.js';

const test = QUnit.test;
QUnit.module('scorecard test');



test('if tomato has the most points, return tomato', function(assert) {
    let result = finalScore({ tomato: 1, potatoLeek: 0, minestrone: 0, chowder: 0 });
    assert.equal(result, 'Hooray! You are TOMATO SOUP!');
});

test('if potatoLeek has the most points, return potatoLeek', function(assert) {
    let result = finalScore({ tomato: 0, potatoLeek: 1, minestrone: 0, chowder: 0 });
    assert.equal(result, 'Congratulations! You\'re a nice bowl of Potato Leek soup!');
});

test('if minestrone has the most points, return minestrone', function(assert) {
    let result = finalScore({ tomato: 0, potatoLeek: 0, minestrone: 1, chowder: 0 });
    assert.equal(result, 'So fancy! You are Minestrone!');
});