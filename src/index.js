const name = document.getElementById('name');
const nameForm = document.getElementById('name-form');

nameForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const userName = {
        name: name.value
    };

    const serialize = JSON.stringify(userName);

    window.localStorage.setItem('userName', serialize);

    window.location = 'quiz.html';

});