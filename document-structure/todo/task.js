const input = document.querySelector(".tasks__input")
const btn = document.querySelector(".tasks__add")
const list = document.querySelector(".tasks__list")

function AddElementAtList() {
    list.insertAdjacentHTML("afterBegin", `                    
        <div class="task">
            <div class="task__title">${input.value}</div>
            <a href="#" class="task__remove">&times;</a>
        </div>`)
    input.value = "";
}

btn.addEventListener("click", (e) => {
    e.preventDefault()
    if(input.value.trim()) {
        AddElementAtList()
    }  else {
        alert("Ошибка! Введите название новой задачи")
    }
})

list.addEventListener("click", (event) => {
    if(event.target.classList.contains("task__remove")) {
        event.preventDefault()
        event.target.closest(".task").remove()
    }
})

input.addEventListener("keyup", (event) => {
    event.preventDefault();
    if(input.value.trim() && e.key === "Enter") {
        AddElementAtList()
    }
})

