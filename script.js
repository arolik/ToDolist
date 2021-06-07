/*	
&#128473;*/
 /* &#x2716;  крестик */
let btnWithTask = document.querySelector('#btn-task');
let btnAddTask = document.querySelector('#btn-add-task');
let lists = document.querySelector('#lists');
let btnCheckTask = document.querySelector('#checkTask');
let btnTaskComplete = document.querySelector('#taskComplete');

btnAddTask.addEventListener('click', createTask);


function createTask(){
    let task = btnWithTask.value;
    btnWithTask.value = '';
    createBodyOfTask(task);
}

function createBodyOfTask(target){
    let div = document.createElement('div');
    createFieldForTask(div, target);
    createCheckCompleteTask(div);
    createDeleteTask(div);
    
    div.classList.add('task');
    lists.appendChild(div);
}

function createFieldForTask(parent, task){
    let p = document.createElement('p');
    p.innerText = task;
    parent.appendChild(p);
}
function createCheckCompleteTask(parent){
    let input = document.createElement('input');
    input.type = 'checkbox';
    input.addEventListener('click', checkTask);
    parent.appendChild(input);
}
function createDeleteTask(parent){
    let span = document.createElement('span');
    span.innerHTML = '&#x2716;';
    span.addEventListener('click', deleteTask);
    parent.appendChild(span);
}

function checkTask(){
    let parent  = this.closest('.task');
    if(this.checked == true){
        parent.classList.add('hideTask');
    } else {
        parent.classList.remove('hideTask');
    }
}

function deleteTask(){
    let mainParent = this.closest('.lists');
    let parent  = this.closest('.task');
    mainParent.removeChild(parent);
}














