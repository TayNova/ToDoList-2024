let maxNumberIdTask = 2


document.getElementById('add-btn').onclick = addNewTask;

document.addEventListener('keydown', check)
function check(ev) {
    if (ev.key === 'Enter') {
        addNewTask();
    }

}

function markDone (elem) {
    let labelElem = document.querySelector(`[for="${elem.id}"]`);
    if (elem.checked){
        labelElem.style.textDecoration = 'line-through';
    } else {
        labelElem.style.textDecoration=`none`;
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
        
        const listElem = document.getElementById('ListTask');


        const newTaskElem = document.createElement('li');
        newTaskElem.innerHTML = `
        <div class="item-task">
        <input class="chbox-to-change" id="chbox-task-${maxNumberIdTask}" name="chbox-task-${maxNumberIdTask}" type="checkbox" onchange="markDone(this)">
        <label for="chbox-task-${maxNumberIdTask}">${taskName}</label>
        </div>`;

        listElem.prepend(newTaskElem);
    }

    taskNameElem.value = '';

}