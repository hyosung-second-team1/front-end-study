const numberBtnArr = document.querySelectorAll(".btn-num");
const calculateBtnArr = document.querySelectorAll(".btn-cal");
const resultBtnArr = document.querySelectorAll(".btn-result");
const resultInput = document.querySelector(".result-input");
let firstNum = "";
let secondNum = "";
let result = 0;
let operator;

// 연산자 객체
const calculate = {
  "+": () => {
    return Number(firstNum) + Number(secondNum);
  },
  "-": () => {
    return Number(firstNum) - Number(secondNum);
  },
  "*": () => {
    return Number(firstNum) * Number(secondNum);
  },
  "/": () => {
    return Number(firstNum) / Number(secondNum);
  },
};

// 숫자 버튼 event
numberBtnArr.forEach((numberBtn) => {
  numberBtn.addEventListener("click", (event) => {
    if (!operator) {
      // operator에 값이 없다면 firstNum에 담기
      firstNum += event.target.textContent;
      resultInput.value = firstNum;
    } else {
      // operator에 값이 있다면 secondNum에 담기
      secondNum += event.target.textContent;
      resultInput.value = secondNum;
    }
  });
});

// 연산자 버튼 event
calculateBtnArr.forEach((calculateBtn) => {
  calculateBtn.addEventListener("click", (event) => {
    console.log(event.target.textContent);
    if (firstNum) {
      // firstNum에 값이 있다면 연산자 저장
      operator = event.target.textContent;
    } else {
      // 아니라면 예외
      alert("숫자를 먼저 입력하쇼");
    }
  });
});

// AC / Enter 버튼 event
resultBtnArr.forEach((resultBtn) => {
  resultBtn.addEventListener("click", (event) => {
    if (event.target.textContent === "AC") {
      // 모든 요소 초기화
      firstNum = "";
      secondNum = "";
      result = 0;
      operator = "";
      resultInput.value = "";
    }
    if (event.target.textContent === "=") {
      if (secondNum && operator) {
        // secondNum , operator에 값이 있다면 연산자 적용해 계산
        result = calculate[operator]();
        resultInput.value = result;
        firstNum = result;
        secondNum = "";
        operator = "";
      } else {
        // secondNum에 값이 없다면 예외
        alert("잘못된 입력값입니다. 입력값을 확인해주세용");
      }
    }
  });
});
