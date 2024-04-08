name = "Mike";
age = 30;

// let을 통해 한번 선언된 것을 선언되지 않도록 함
let name = "Mike";

// const로 선언된 것을 바꾸려고 하면 에러를 발생
// 가급적 상수는 대문자로 표현
const PI = 3.14;

// ${} 사이에 변수를 표현하면 변수 넣어줄 수 있음
// 꼭 작은 따옴표로 작성해야함.
const message3 = 'My name is ${name}';

// 출력
console.log(message3);

// Nan
const z = name /2; 

// Boolean
const x = true;
const y = false;

console.log(name == "Mike"); // true

// typeof 연산자
// type알 수 있음 
console.log(typeof name);
// typeof null // object 객체형
// null 은 객체가 아님

const a = "나는 ";
const b = "입니다";
console.log(a+name+b); // 문자형 더할 수 있음

// Alert()
// 일방적으로 알리는 용도로 사용한다.

// prompt()
// 사용자에게 어떤 값을 입력받을 때 사용
const name2 = prompt("이름을 입력하세요.");
alert("환영합니다.");

// prompt는 default값을 설정할 수도있다.
const n = prompt("예약일을 입력하세요", "2020-01-01");

// confirm()
// 확인받을 때 사용
// alert과 다른 점은 alert은 확인 버튼만,
// confirm은 확인 + 취소
const isAdult = confirm("당신은 성인입니까?");
console.log(isAdult);

// 형변환
// prompt로 입력받은 값은 무조건 문자형
// 문자 / 문자 는 정확히 계산 -> 자동형변환 = 명시적형변환
// String(), Number(), Boolean()
const mathScore = Number(prompt("수학점수를 입력하세요"));
const KorScore = Number(propmt("국어점수를 입력하세요"));
const result = (mathScore + KorScore) / 2;

console.log(result);

// 연산자
// + - % / * 

// 비교 연산자
// < > >= <= != ==
// = 하나 쓰는 것은 할당
// == 같은가
// != 다른가
// 반환 값은 항상 boolean
console.log(10>5); // true
console.log(10 == 5); // false

console.log(1=="1") // true
console.log(1==="1") // false : 타입까지 비교 ===

// 조건문
// if 문
const age = 20;
if ( age >= 19){
    if(age == 19){
        console.log("수능 대박");
    }else{
        console.log("환영합니다.");
    }
}else{
    console.log("안녕히가세요.");
}

// 논리 연산자
// || (OR)
// && (AND)
// ! (NOT)

const name3 = "TOM";
const agetom = 10;

// OR 
if (name3 === 'TOM' || agetom > 19){
    console.log('통과');
}

// AND
if (name3 === 'TOM' && agetom > 19){
    console.log('통과');
}

// NOT
// 나이를 입력받아서 성인이 아니면 돌아가시오
const agewho = propmt("나이 입력하세요");
const isAge = agewho > 19;

if(!isAge){
    console.log('돌아가 ....');
}

// 남자이고, 이름이 Mike이거나 성인이면 통과
const gender = 'F';
const name5 = 'Jone';
const isAdult2 = true;

// 아래 코드는 AND가 우선 순위이기때문에, AND 후 or 해서 true가 나옴
if (gender === 'M' && name === 'Mike' || isAdult2){
    console.log('통과');
}else{
    console.log('돌아가 ...')
}

if (gender === 'M' && (name === 'Mike' || isAdult2)){
    console.log('통과');
}else{
    console.log('돌아가 ...')}











