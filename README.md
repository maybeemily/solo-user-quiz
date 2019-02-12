# User Quiz

Build an app that sorts the user into some kind of category. Some examples might be their ideal programming language or to which house in Hogwarts they belong. The app prompts the user for their name (and any additionally required info) and then has them take a multiple choice quiz. Each quiz question answer will give weight to one or more categories (a single answer might contribute to more than one categroy). Based on their answers to the quiz questions, the app provides a result that indicates which category the user belongs to.

## Overview

There are three main pages:

* `index.html` - user sign-in page 
* `quiz.html` - the page where the user answers the quiz questions
* `results.html` - the page where the result of the quiz are displayed

## User Sign-in Page

Prompt the user for a name and one other piece of information. The second piece of information doesn't have to be used in quiz results calculation, for example allowing the user to choose an avatar.

When the user submits their info, it should be saved to localStorage and they should be navigated to the quiz page.

## Quiz Page

The users name and info should be read from `localStorage` on load and displayed on the page (usually in the header).

The user is presented with a series of questions for which they provide answers. Make sure required questions are marked required.

When the user submits their quiz, it should be saved to localStorage and they should be navigated to the results page.

## Results Page

The users name and info should be read from `localStorage` on load and displayed on the page. Either in the header or as part of the results presentation.

The quiz answers should be read from `localStorage` and a result should be calculated (see below) and presented to the user.

The page should also provide link(s) to start over and/or retake quiz

## Calculating Result

TDD functions that calculate the user's result. For this type of quiz the general pattern is use of a "scorecard", which is an object that has a key for each of the possible results and each key's value is the current numeric score for that result. This allows breaking the problem down into three discrete parts:

1. A scoring function for each quiz question. It gets passed an answer and the scorecard, and increments the appropriate scores based on the provided answer
1. A scorecard evaluation function that examines the scorecard and returns the result with the highest score
1. A wrapper function that takes the answers, creates a new scorecard, calls each scoring function, calls the evaluation function, then returns the result.