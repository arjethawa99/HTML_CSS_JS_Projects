let generatebtn = document.querySelector(".meme-generator .generat-meme-btn");
let memeImg = document.querySelector(".meme-generator img");
let memeTitle = document.querySelector(".meme-generator .meme-title");
let memeAuthor = document.querySelector(".meme-generator .meme-author");


generatebtn.addEventListener("click", () => {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let temp = JSON.parse(this.response);
            population(temp.url, temp.title, temp.author);
        }
    }
    xhr.open("GET", 'https://meme-api.com/gimme/wholesomememes', true);
    xhr.send();
})

function population(resImg, resTitle, resAuthor) {
    memeImg.setAttribute("src", resImg);
    memeTitle.innerHTML = resTitle;
    memeAuthor.innerText = "Meme By:-" + resAuthor;
}