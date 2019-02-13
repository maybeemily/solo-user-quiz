const soupDisplay = document.getElementById('soup-result');

const soupResult = window.localStorage.getItem('finalResult');

soupDisplay.textContent = soupResult;