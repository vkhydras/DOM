const addtask = document.getElementById('add-task')
const taskContainer = document.getElementById('task-container')
const inputTask = document.getElementById('input-task')

addtask.addEventListener('click',function(){
    let task = document.createElement('div')
    task.classList.add('task')

    let li = document.createElement('li')
    li.innerText = `${inputTask.value}`
    task.append(li)

    let checkBtn = document.createElement('button')
    checkBtn.innerHTML = "✓"
    checkBtn.classList.add('checkTask')
    task.append(checkBtn)

    let delBtn = document.createElement('button')
    delBtn.innerHTML = "🗑"
    delBtn.classList.add('deleteTask')
    task.append(delBtn)

    if(inputTask.value === ""){
        alert("please enter text")
    } else{
        taskContainer.appendChild(task)
    }
    checkBtn.addEventListener('click',function(){
        checkBtn.parentElement.style.textDecoration = 'line-through'
    })
    delBtn.addEventListener('click',function(e){
        let target = e.target
        target.parentElement.remove()
    })
})