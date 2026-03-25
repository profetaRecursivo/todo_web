const but = document.getElementById("add-task");

but.addEventListener("click", addTarea);

document.DOM

function cargarTarea() {

}

function addTarea() {
    const task = document.getElementById("inp-task");

    const din = document.getElementById("tasks");

    if (task.value !== "") {
        
        const html = `
            <li>
                <div class="added-task">
                    <div class="description-container">
                        <input type="checkbox">
                        <span>${task.value}</span>
                    </div>
                    <div class="action-buttons">
                        <button class="action-task edit">Edit</button>
                        <button class="action-task delete">Delete</button>
                    </div>
                </div>
            </li>
        `;
        din.innerHTML += html;
        
        let todolist = JSON.parse(localStorage.getItem("tasks")) || [];
        todolist.push(task.value);

        localStorage.setItem("todolist", JSON.stringify(todolist));
        task.value = "";
    } else {
        alert("Porfavor ingrese una tarea.")
    }

}