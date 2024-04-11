// dom 셀렉트
const inputNumber = document.querySelector(".result-section");
const numBtns = document.querySelectorAll(".num-btn");
const comBtns = document.querySelectorAll(".com-btn");
const operBtns = document.querySelectorAll(".oper-btn");
let nowOper;
let result;


// 이벤트 추가 - 숫자 입력
numBtns.forEach(item => {
  item.addEventListener("click", () => {
    if (inputNumber.textContent == "0") {
      inputNumber.textContent = "";
    }
    inputNumber.textContent += item.textContent;
  })
});

// 이벤트 추가 - 연산 버튼
operBtns.forEach(item => {
  item.addEventListener("click", () => {
    const action = item.textContent;
    if (nowOper === undefined) {
      result = Number(inputNumber.textContent);
    } else {
      operation();
    }
    inputNumber.textContent = "0";
    nowOper = action;
  })
})

// 이벤트 추가 - 입력 완료 or 초기화
comBtns.forEach(item => {
  const action = item.textContent;
  item.addEventListener("click", () => {
    switch (action) {
      case "AC":
        inputNumber.textContent = "0";
        result = undefined;
        nowOper = undefined;
        break;
      case "Enter" :
        if (nowOper !== undefined) {
          operation();
          inputNumber.textContent = result;
          nowOper = undefined;
        }
    }
  })
})

// 함수 - 사칙연산
function operation() {
  const nowNum = Number(inputNumber.textContent);
  switch (nowOper) {
    case "+":
      result += nowNum;
      break;
    case "-":
      result -= nowNum;
      break;
    case "*":
      result *= nowNum;
      break;
    case "/":
      if (nowNum === 0) {
        alert("0으로 나누기를 진행할 수 없습니다.")
      } else {
        result /= nowNum;
      }
      break;
  }
}