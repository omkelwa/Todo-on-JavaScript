let form = document.querySelector("form")
let input = document.querySelector("input")
let ul = document.querySelector("ul")
form.addEventListener("submit", saveTodo)

function saveTodo(e){
    e.preventDefault()
    let li = document.createElement("li")
    li.innerText = input.value
    li.className = "list-group-item mt-2 border"
    let delBtn = document.createElement("button")
    delBtn.className = "btn btn-danger float-end"
    delBtn.innerText = "Delete"
    li.appendChild(delBtn)
    ul.appendChild(li)
    form.reset()
    
}




ul.addEventListener("click" , deleteTodo)

function deleteTodo(e){
    
    if(e.target.className.includes("btn-danger")){
        let li = e.target.parentElement
        ul.removeChild(li)
    
    }
}


