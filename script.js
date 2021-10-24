let list = document.querySelector("ul");
let allList = document.querySelectorAll("li")
let btn = document.querySelector("button")

let logger = function () {

    let newListItem = document.createElement("li")
    let text = document.querySelector("#cd");
    newListItem.innerHTML = text.value
    list.append(newListItem)
}


btn.addEventListener("click", logger)





