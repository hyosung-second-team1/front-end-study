// JAVASCRIPT PROMISE
// 상품이 작업 완료되면 핸드폰 번호로 연락 주세요~ : promise
// resolve : 성공한 경우
// reject : 실패한 경우

const pr = new Promise((resolve, reject)=>[
    // 3초가 걸리도록
    setTimeout(() => {
        reject(new Eroor('error...'))
    }, 3000)
]);

// then을 이용해서 result, reject
pr.then(
    function(result){},
    function(err){}
);

// 위의 코드를 catch 이용해서 바꿀 수 있음
// catch로 명확하게 구분하는 것이 가독성 측면에서 좋음
pr.then(
    function(result){}
).catch(
    function(err){}
    // finally는 result이든 err이든 사용
).finally(
    function(){
        console.log('완료');
    }
)

// 총 3개의 상품 주문
const f1 = (callback) => {
    setTimeout(function(){
        console.log("1번 주문 완료");
        callback();
    },1000);
};

const f2 = (callback)=>{
    setTimeout(function(){
        console.log("2번 주문 완료");
        callback();
    }, 3000);
};

const f3 = (callback)=>{
    setTimeout(function(){
        console.log("3번 주문 완료");
        callback();
    }, 2000);
};

console.log('시작')
f1(function(){
    f2(function(){
        f3(function(){
            console.log('끝');
        });
    });
});

// -----------------------------------
const p1 = (message)=>{
    console.log(message);
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res('1번 주문 완료');
        }, 3000);
    });
};

const p2 = (message)=>{
    console.log(message);
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res('2번 주문 완료');
        }, 3000);
    });
};

const p3 = (message)=>{
    console.log(message);
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res('3번 주문 완료');
        }, 2000);
    });
};

console.log('시작');
p1()
.then((res)=>f2(res))
.then((res) => f3(res))
.then((res)=> console.log(res))
.catch(console.log)
.finally(()=>{
    console.log('끝');
}) 

// promise.all
// 3개의 작업이 모두 완료되어야 then 실행
Promise.all([f1(), f2(), f3()])
.then(res=>{
    console.log(res);
});

// promise.race
// 말 그대로 경주
// 하나라도 먼저 완료되면 끝냄.
Promise.race([f1(), f2(), f3()]).then((res)=>{
    console.log(res);
    console.timeEnd("x");
});

// ----------------------------------
// async
// async는 항상 promise를 반환
async function getName(){
    return "Mike";
    // 함수 내부에서 예외가 발생하면 reject상태 promise 반환
    throw new Error("error...");
}

getName().then((name)=>{
console.log(name);}
);

getName().catch((err)=>{
    console.log(err);}
);

// await
// await는 async 안에서만 사용 가능
function getName(name){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(name);
        }, 1000);
    });
}

// 1초 후에 Mike가 찍힘
// getName의 값을 기다렸다가 출력해줌
async function showName(){
    const result = await getName('Mike');
    console.log(result);
}

const k1 = (message)=>{
    console.log(message);
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res('1번 주문 완료');
        }, 3000);
    });
};

const k2 = (message)=>{
    console.log(message);
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res('2번 주문 완료');
        }, 3000);
    });
};

const k3 = (message)=>{
    console.log(message);
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res('3번 주문 완료');
        }, 2000);
    });
};

console.log("시작");
// promise then보다 가독성이 좋다.
async function order(){
    const result1 = await f1();
    const result2 = await f2(result1);
    const result3 = await f3(result2);
    console.log(result3);
    console.log("종료");
}

order();








