const keyStorage = `keyTask`;
let myTaskList = [];
let maxNumberIdTask =1;

let storageData = localStorage.getItem(keyStorage);
if (storageData != null) {

    myTaskList = JSON.parse(localStorage.getItem(keyStorage));

    maxNumberIdTask = myTaskList
        .map(x => x.id)
        .reduce((a, b) => Math.max(a, b), -Infinity);

}



if (myTaskList.length > 0) {
    myTaskList.forEach(x => renderTask(x))
}

function renderTask(task) {


    const listElem = document.getElementById('ListTask');


    const newTaskElem = document.createElement('li');
    newTaskElem.innerHTML = `
    <div class="item-task">
        <input class="chbox-to-change" id="chbox-task-${task.id}" name="chbox-task-${task.id}" type="checkbox" onchange="markDone(this)">
        <label for="chbox-task-${task.id}">${task.title}</label>
    </div>`;

    listElem.prepend(newTaskElem);

}



document.getElementById('add-btn').onclick = addNewTask;

document.addEventListener('keydown', check)
function check(ev) {
    if (ev.key === 'Enter') {
        addNewTask();
    }

}

function markDone(elem) {
    let labelElem = document.querySelector(`[for="${elem.id}"]`);
    if (elem.checked) {
        labelElem.style.textDecoration = 'line-through';
    } else {
        labelElem.style.textDecoration = `none`;
    }
}

document.getElementById('ListTask').onmouseover = showActions
function showActions(ev) {
    const btn = document.createElement('button')
    btn.innerText = 'Удалить'
    ev.target.append(btn)
}

document.getElementById('ListTask').onmouseout = hideActions
function hideActions(ev) {
    document.getElementsByTagName
    const btn = ev.target.getElementsByTagName('button').item(0)
    btn.parentNode.removeChild(btn)
}



function addNewTask() {
    const taskNameElem = document.getElementById('taskinp');
    const taskName = taskNameElem.value.trim();

    if (taskName) {
        maxNumberIdTask++;
        let newTask = {
            id: maxNumberIdTask,
            title: taskName
        };

        myTaskList.push(newTask);
        renderTask(newTask);
        localStorage.setItem(keyStorage, JSON.stringify(myTaskList));

    }

    taskNameElem.value = '';

}