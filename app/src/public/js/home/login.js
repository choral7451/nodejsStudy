"use strict";

const id = document.querySelector('#id'),
    psword = document.querySelector('#password'),
    loginBtn = document.querySelector('button')

loginBtn.addEventListener('click', login);

// 에로우함수 사용시 결과가 다르다
function login()  {
    const req = {
        id : id.value,
        psword : psword.value 
    };

    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    })
        .then((res) => res.json())
        .then((res) => {
            if(res.success) {
                location.href = "/";
            } else {
                alert(res.msg); 
            }
        })
        .catch((err) => {
            console.log(new Error("로그인 중 에러 발생"));
        });
}

    