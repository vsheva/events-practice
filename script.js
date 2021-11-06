let button = document.querySelector('#btn')
let text = document.querySelector('#text')
let square = document.querySelector('#square')
let circle = document.querySelector('#circle')
let range = document.querySelector('#range')
let span = document.querySelector('#range-span')


let logger = function () {
    square.style.background = text.value;
}

button.addEventListener('click', logger);


range.addEventListener('input', function () {
    span.textContent = range.value;
    circle.setAttribute("style", `width: ${range.value}%; height: ${range.value}%`)


})


document.querySelector("#e_btn").setAttribute("style", "display: none")































// let list = document.querySelector("ul");
// let allList = document.querySelectorAll("li")
// let btn = document.querySelector("button")
//
// let logger = function () {
//
//     let newListItem = document.createElement("li")
//     let text = document.querySelector("#cd");
//     newListItem.innerHTML = text.value
//     list.append(newListItem)
// }
//
//
// btn.addEventListener("click", logger)
//
//
