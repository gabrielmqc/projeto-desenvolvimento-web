const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', () => {
    console.log ('Add Task button clicked');
    const taskText = taskInput.value.trim();
    //teste
    console.log ('Task text:', taskText);
    if (taskText !== '') {
        const listItem = document.createElement('li');
        //<li></li>
        const taskSpan = document.createElement('span');
        //<span></span>
        const deleteBtn = document.createElement('button');
        //<button></button>
        taskSpan.textContent = taskText;
        //<span>Teste</span>
        deleteBtn.textContent = 'Excluir';
        //<button>Excluir</button>
        deleteBtn.addEventListener('click', () => {
            taskList.removeChild(listItem);
        });

        listItem.appendChild(taskSpan);
        listItem.appendChild(deleteBtn);
        //<li><span>Teste</span><button>Excluir</button></li>
        taskList.appendChild(listItem);
    }
    taskInput.value = '';
})
