"use strict"
let select = document.querySelector("#select");
let allData = [];

function getData(searchKey) {
    let myRequest = new XMLHttpRequest();
    myRequest.open('GET', `https://forkify-api.herokuapp.com/api/search?q=${searchKey}`);
    myRequest.send();
    myRequest.addEventListener("readystatechange", function () {
        if (this.readyState == 4 && myRequest.status == 200) {

            let { recipes: allData } = JSON.parse(myRequest.response);
            console.log(allData);
            display(allData);
        }
    })
}
getData("pizza");
function display(data) {
    let cartona = ``;
    for (let i = 0; i < data.length; i++) {
        cartona += `
         <div class="col-md-4 ">
         <div class="inner">
       <img src="${data[i].image_url}" alt="" class="img-size mb-1">
       <h6>${data[i].title}</h6>
       <a href="${data[i].publisher_url}" target="_blank" >publisher_url</a>
   </div>
   </div>`
    }
    document.querySelector("#item").innerHTML = cartona;
}


select.addEventListener("change", function (e) {
    getData(e.target.value);
})