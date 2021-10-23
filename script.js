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
    circle.setAttribute("style", `width: ${range.value}%; height: ${range.value}%` )

    //circle.style.width = range.value + "%"
    //circle.style.height = range.value + "%"

})


document.querySelector("#e_btn").setAttribute("style", "display: none")
