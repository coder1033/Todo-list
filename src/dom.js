import {differenceInCalendarDays} from "date-fns";

const manageDom = (() => {
    let _updateNavbar = (todo, id) => {
        if(!todo){
            return;
        }
        let button = document.createElement('button');
        
        button.textContent = todo.name;
        button.setAttribute("onclick", `manageDom.showTodo(${id})`);
        
        let li = document.createElement('li');
        li.appendChild(button);

        let nav = document.querySelector("#navbar");
        nav.firstElementChild.appendChild(li);
    };

    let _updateTodoHeading = id => {
        let allTodo = JSON.parse(localStorage.getItem('all_todo'));
        let todo = allTodo[id];
        let h2 = document.querySelector("#showcase h2");
        h2.childNodes[0].textContent = todo.name;
        h2.childNodes[1].textContent = " (" + todo.description + ")";
        h2.childNodes[2].setAttribute("onclick", `manageForm.editTodo(${id}, "${todo.name}", "${todo.description}")`);
    };

    let _removeTasks = () => {
        let section = document.querySelector("#showcase");
        if(section.firstElementChild !== section.lastElementChild){
            section.removeChild(section.lastElementChild);
        }
    }
    let _removeNavbar = () => {
        let ul = document.querySelector("#navbar ul");
        while(ul.children.length!==1){
            ul.removeChild(ul.lastElementChild);
        }
    }
    let _updateAddTaskDeleteTodo = id => {
        let div = document.querySelector("#addTask-deleteTodo");
        div.children[0].setAttribute("onclick", `manageForm.deleteTodo(${id})`);
        div.children[1].setAttribute("onclick", `manageForm.addTask(${id})`);
    };

    let _updateTask = (task, id) => {
        let today = new Date();
        let due_date = new Date(task.date);
        let diff = differenceInCalendarDays(due_date, today);
        
        let section = document.querySelector("#showcase");
        if(section.firstElementChild == section.lastElementChild){
            section.appendChild(document.createElement("div"));
        }
        let div = section.children[1];

        let task_div = document.createElement("div");
        if(diff>0){
            task_div.className = task.priority;
        }else{
            task_div.className = "completed";
        };
        let task_div_textNode = document.createTextNode(task.description);
        
        let task_div_button_1 = document.createElement("button");
        task_div_button_1.className = "edit-delete-button";
        task_div_button_1.setAttribute("onclick", `manageForm.deleteTask(${id})`);
        task_div_button_1.textContent = "delete";

        let task_div_button_2 = document.createElement("button");
        task_div_button_2.className = "edit-delete-button";
        task_div_button_2.setAttribute("onclick", `manageForm.editTask(${id}, "${task.description}", "${task.date}")`);
        task_div_button_2.textContent = "edit";

        let task_div_div = document.createElement("div");
        let task_div_div_small = document.createElement("small");
        if(diff>0){
            task_div_div_small.textContent = `${diff} days left`;
        }else{
            task_div_div_small.textContent = `${Math.abs(diff)} days before`;
        }

        task_div_div.appendChild(task_div_div_small);

        task_div.appendChild(task_div_textNode);
        task_div.appendChild(task_div_button_1);
        task_div.appendChild(task_div_button_2);
        task_div.appendChild(task_div_div);

        div.appendChild(task_div);
    };
    

    let currentContent = (id) => {
        _updateTodoHeading(id);
        _updateAddTaskDeleteTodo(id);
    };
    let currentNavbar = () => {
        _removeNavbar();
        let _all_todo = JSON.parse(localStorage.all_todo)
        _all_todo.forEach(_updateNavbar);
    };
    let currentTasks = (id) => {
        _removeTasks();
        let _all_todo = JSON.parse(localStorage.all_todo);
        _all_todo[id].tasks.forEach(_updateTask);
    };
    let showTodo = id => {
        localStorage.currentId = id;
        currentContent(id);
        currentTasks(id);
    };
    return {currentContent, currentNavbar, currentTasks, showTodo};
})();


export default manageDom;