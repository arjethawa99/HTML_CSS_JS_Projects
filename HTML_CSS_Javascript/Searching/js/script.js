const accessKey = "v8n5CuHsJGus5OWBfwEmFLdOdEc2Ae49gKCmIYFZfHg";

let search_input = document.getElementById("search-input");
let formElement = document.querySelector("form");
let resultSearch = document.querySelector(".search-results");
let show_more = document.getElementById("show-btn");

let inpVal = "", counter = 1;


async function searchData() {
    inpVal = search_input.value;
    let url = `https://api.unsplash.com/search/photos?page=${counter}&query=${inpVal}&client_id=${accessKey}`

    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = async function () {
        if (this.readyState == 4 && this.status == 200) {
            // console.log(this.response)
            let tempParam = await JSON.parse(this.response)
            populationData(tempParam)
        }
    }
    xhr.open("GET", url, true);
    xhr.send()
}

formElement.addEventListener("submit", function (event) {
    event.preventDefault();
    counter = 1;
    searchData();
});

show_more.addEventListener("click", function () {
    searchData();
});

const populationData = (params) => {
    if (counter === 1 && search_input.value != "") {
        resultSearch.innerHTML = "";
    }
    let results = params.results;
    results.map((res) => {
        const imgContainer = document.createElement('div');
        imgContainer.classList.add("search-result");
        const image = document.createElement('img');
        image.src = res.urls.small;
        image.alt = res.alt_description;
        const imgLink = document.createElement('a');
        imgLink.href = res.links.html;
        imgLink.target = "_blank";
        imgLink.textContent = res.alt_description;


        imgContainer.appendChild(image);
        imgContainer.appendChild(imgLink);
        resultSearch.appendChild(imgContainer)


    })
    counter++
    show_more.style.display = counter > 1 ? "block" : 'none';
}


