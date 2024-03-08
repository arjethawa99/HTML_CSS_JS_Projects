const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialCharAry = ["=", "%", "-", "+", "*", "/"];
var emptyStr = "";

buttons.forEach((subElement) => {
    subElement.addEventListener("click", (e) => {
        calculator(e.target.dataset.value);
    })
})

const calculator = (param) => {
    // console.log(param)
    if (param === "=" && emptyStr !== "") {
        emptyStr = eval(emptyStr.replace("%","/100"))
    }else if (param === "AC") {
        emptyStr = "";
    }else if(param === "DEL"){
        emptyStr = emptyStr.toString().slice(0,-1);
    }else{
        if (param === "" && specialCharAry.includes(param)) {
            return;
        }
        emptyStr+=param;
    }
    display.value = emptyStr;
};