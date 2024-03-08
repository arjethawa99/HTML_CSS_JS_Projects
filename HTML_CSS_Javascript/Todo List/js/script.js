let input = document.getElementById("input-text");
let task = document.querySelector(".result-container");

document.getElementById("addtaske").addEventListener("click", function () {
    if (input.value == "") {
        alert("Please Enter Task")
    } else {
        //FOR ADD
        let ulElem = document.createElement("ul");
        ulElem.innerHTML = `${input.value}<i class="fa-solid fa-trash"></i>`
        task.appendChild(ulElem);
        input.value = "";

        //FOR DELETE
        ulElem.querySelector("i").addEventListener("click", function () {
            ulElem.remove();
        })
    }
});

