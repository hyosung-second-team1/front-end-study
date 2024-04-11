const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');

buttons.forEach((item) =>{
    item.onclick = () =>{
        if (item.classList.contains('btn-number')) {
            if (display.innerText.length < 15) {
                display.innerText += item.innerText;
            }
        }
        else if (item.id == 'clear') {
            display.innerText = '';
        } else if (item.id == 'backspace') {
            let string = display.innerText.toString();
            display.innerText = string.substr(0, string.length-1);
        } else if (display.innerText != '' && item.id == 'equal') {
            // display.innerText = eval(display.innerText);
            // 계산 결과를 표시하기 전에 문자열로 변환해 자릿수 제한두기
            let result = eval(display.innerText);
            result = result.toString().substring(0, 15); // 최대 15자리
            display.innerText = parseFloat(result);
        } else if (display.innerText == '' && item.id == 'equal') {
            display.innerText = 'Empty!';
            setTimeout(() => (display.innerText = ''), 2000);
        } else {
            display.innerText += item.id;
        }
    }
})

// const themeToggleBtn = document.querySelector('.theme-toggler');
// const calculator = document.querySelector('.calculator');
// const toggleIcon = document.querySelector('.toggler-icon');
// let isDark = true;
// themeToggleBtn.onclick = () => {
//     calculator.classList.toggle('dark');
//     themeToggleBtn.classList.toggle('active');
//     isDark = !isDark
// }

