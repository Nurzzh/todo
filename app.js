const input = document.querySelector(".input")
const container = document.querySelector(".container")
const addToDo = document.querySelector(".add-todo")
const add = document.querySelector('#push')
const create = document.querySelector(".create-todo")
const allBtn = document.querySelector("#all")
const activeBtn = document.querySelector("#active")
const completedBtn = document.querySelector("#completed")
const clearCompletedBtn = document.querySelector("#clear-completed") 

const toDos = [
    {
        title:"Read a book",
        completed:false,
    },
    {
        title:"Go to gym",
        completed:false
    }
]
addToDo.innerHTML = ''
add.addEventListener('click', () => {
    let objToSave = {
        title:create.value,
        completed:false
    }
    toDos.push(objToSave)   
    displayTasks(toDos)
})


function displayTasks(todos) {
    addToDo.innerHTML = ''
    for(let i=0; i < todos.length; i++){ 
     
        const elem = todos[i]; 
         
        addToDo.innerHTML+=     
            ` 
            <div class = 'toDo'> 
            <div class="checkbox-wrapper-11">
            <input class=checkbox id="02-11" ${elem.completed ? 'checked' : ''} type="checkbox" name="r" value="2">
            <label for="02-11"><p>${elem.title}</p></label>
            </div>
            </div> 
            `
    }

    const inputs = document.querySelectorAll('.checkbox')
    inputs.forEach((item, index) => {
        item.addEventListener('change', (e) => {
            toDos[index].completed = e.target.checked
        })
        console.log(toDos)
    })
}



allBtn.addEventListener('click', () => {
const filterAll = () => {
        displayTasks(toDos);
}
filterAll()
})
  

completedBtn.addEventListener('click',()=>{
const filterCompleted = () => {
const completedTodos = toDos.filter(toDos => toDos.completed);
displayTasks(completedTodos);
}
filterCompleted()
})

activeBtn.addEventListener('click',()=>{
const filterActive = () => {
const activeTodos = toDos.filter(toDos => !toDos.completed);
displayTasks(activeTodos);
}
filterActive()
})

clearCompletedBtn.addEventListener('click',()=>{
    displayTasks(activeTodos)
})

const clearCompleted = () => {
    const activeTodos = toDos.filter(todo => !todo.completed);

    toDos = activeTodos;
}
displayTasks(toDos)


