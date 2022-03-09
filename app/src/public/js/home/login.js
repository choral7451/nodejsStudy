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
}

    