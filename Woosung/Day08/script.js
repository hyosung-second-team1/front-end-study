const screenNum = document.querySelector('.screen');
const nums = document.querySelectorAll('.num');
const operations = document.querySelectorAll('.operation');
const compute = document.querySelector('.compute');
const reset = document.querySelector('.reset');

let operand1 = 0;
let operand2 = 0;
let operator = '';

nums.forEach(num => {
    num.addEventListener('click', ()=>{
        if(screenNum.textContent === '0'){
            screenNum.textContent = '';
        }
        screenNum.textContent += num.textContent;
        if(operator === ''){
            operand1 = Number(screenNum.textContent);
        }else{
            operand2 = Number(screenNum.textContent);
        }
    })
})

operations.forEach(operation=>{
    operation.addEventListener('click', ()=>{
        operator = operation.textContent;
        screenNum.textContent = 0;
    })
})

compute.addEventListener('click', ()=>{
        let result = 0;
        if(operator === '%'){
            result = operand1 % operand2;
        }
        if(operator === '/'){
            result = operand1 / operand2;
        }
        if(operator === '*'){
            result = operand1 * operand2;    
        }
        if(operator === '-'){
            result = operand1 - operand2;
        }
        if(operator === '+'){
            result = operand1 + operand2;
        }
        screenNum.textContent = result;
        operand1 = 0;
        operand2 = 0;
        operator = '';

})

reset.addEventListener('click', ()=>{
    operand1 = 0;
    operand2 = 0;
    operator = '';
    screenNum.textContent = 0;
})