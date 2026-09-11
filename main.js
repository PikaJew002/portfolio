import './style.css';

let yearsExperience = document.querySelector('#years-experience');
let currentDate = new Date();
let startDate = new Date('2020-09-15');
let yearsDiff = currentDate.getFullYear() - startDate.getFullYear();
yearsExperience.textContent = yearsDiff;