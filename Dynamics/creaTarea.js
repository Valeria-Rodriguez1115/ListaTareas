const botonAñade = document.getElementById("añadir");
const botonElimina = document.getElementById("eliminar")
const contenedor = document.getElementById("contenedor");
botonAñade.addEventListener("click", () =>
{
    const nuevaTarea = document.createElement("div");
    nuevaTarea.classList.add("tarea");
    nuevaTarea.textContent = "Nueva tarea";
    contenedor.appendChild(nuevaTarea);
});

botonElimina.addEventListener("click", () =>
{
    const tareas = document.getElementsByClassName("tarea");
    if (tareas.length > 0)
    {
        contenedor.removeChild(tareas[tareas.length - 1]);
    }
});
