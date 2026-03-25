const but = document.getElementById("add-task");

but.addEventListener("click", addTarea);

function addTarea() {
    const task = document.getElementById("inp-task");

    const din = document.getElementById("tasks");
    const html = ``;

    if (task.value !== "") {
        
        html = `<li>${tarea}</li>`;
        din.innerHTML += html;
        
        let todolist = JSON.parse(localStorage.getItem("tasks")) || [];
        todolist.push(task.value);

        localStorage.setItem("todolist", JSON.stringify(todolist));
        task.value = "";
    } else {
        alert("Porfavor ingrese una tarea.")
    }

}