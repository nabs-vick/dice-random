let randomNum;
// const min = 50;
// const max = 100;

// randomNum = Math.floor(Math.random() * (max - min) + min);
// console.log(randomNum);
const btn = document.getElementById("btn");
const value = document.getElementById("value");
const min = 1;
const max = 6;

btn.onclick = function(){
    randomNum = Math.floor(Math.random() * max) + min;
    value.textContent = randomNum;
}

