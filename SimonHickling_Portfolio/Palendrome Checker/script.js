const button = document.getElementById('color-change');
const body = document.getElementById('outer-box');
const result = document.getElementById('result');
const button1 = document.getElementById('check-btn');
const getInput = document.getElementById('text-input');
let isError = false;



//this is the palindrome checker//button is now working AND checking for palendrome AND removed whitespaces AND is not case sensitive.

function checkResult() {

    const inputValue = getInput.value.toLowerCase();
    const cleanInput = inputValue.replace(/[^\w]|_/g, '');
    const ansRevserse = [...cleanInput].reverse().join("");

    if (inputValue ===''){
        alert('"Please input a value"');
        result.classList.remove('hide');
        result.innerText = 'Please enter something!'
    }

    if (cleanInput === ansRevserse) {
    result.classList.remove('hide');
    result.innerText = `"${getInput.value}" is a palindrome!`;
 
    }
    else {
        result.classList.remove('hide');
        result.innerText = `"${inputValue}" is not a palindrome!`; 
     
    }

};

button1.onclick = checkResult;







