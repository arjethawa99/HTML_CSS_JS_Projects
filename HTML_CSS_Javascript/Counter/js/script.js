var incre = document.getElementById("inc");
var res = document.getElementById("res");
var decre = document.getElementById("dec");

var digi = document.getElementById("digits");

incre.addEventListener("click", function () {
    let sum = digi.innerText;
    digi.innerText = ""
    digi.innerHTML = parseInt(sum) + 1;
})

res.addEventListener("click", function () {
    digi.innerHTML = "0";
})

decre.addEventListener("click", function () {
    let sum = digi.innerText;
    digi.innerText = ""
    digi.innerHTML = parseInt(sum) == 0 ? 0 : parseInt(sum) - 1;
})