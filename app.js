let date = new Date();
let yearChanger = document.querySelector("#yearChanger");
yearChanger.innerHTML = date.getFullYear();

let passwordBox = document.getElementById("password");
let length = 16;
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCase = "abcdefghijklmnopqrstuvwxyz"
let number = "0123456789"
let symbol = "$@!$%^&*_=+/"

let allChars = upperCase + lowerCase + number + symbol;

function createPassword(){
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];
    password += number[Math.floor(Math.random() * number.length)];

    while(length > password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordBox.value = password
}
let copied = document.querySelector("#copied")

function copyPassword(){
    passwordBox.select();
    document.execCommand("copy")
    setTimeout(
        function(){
            passwordBox.value = "";
            copied.innerText = "copied";
        }, 1000
    )
}

