if(!localStorage.getItem('initiate')){
    localStorage.setItem('initiate', true);


    let default_todo = {
        name:'default',
        description:'This is a default ToDo for sample',
        tasks: []
    };

    

    let default_task_1 = {description:'Sample task description 1', priority:'mid-priority', date:new Date()};
    let default_task_2 = {description:'Sample task description 2', priority:'completed', date:new Date()};
    let default_task_3 = {description:'Sample task description 3', priority:'high-priority', date:new Date()};
    let default_task_4 = {description:'Sample task description 4', priority:'low-priority', date:new Date()};
    default_todo.tasks.push(default_task_1, default_task_2, default_task_3, default_task_4);
    
    console.log([default_task_1, default_task_2, default_task_3, default_task_4]);
    console.log(default_todo);
    localStorage.setItem('all_todo', JSON.stringify([default_todo]));
};

const manageTodo = (() => {
    let _createTodo = (name, description) => {
        let todo = {name, description, tasks:[]};
        let allTodo = JSON.parse(localStorage.getItem('all_todo'));
        allTodo.push(todo);
        localStorage.all_todo = JSON.stringify(allTodo);
        let id = allTodo.length-1;
        return id;
    };

    let _editTodo = (id, name, description) => {
        let allTodo = JSON.parse(localStorage.getItem("all_todo"));
        allTodo[id].name = name;
        allTodo[id].description = description;
        localStorage.all_todo = JSON.stringify(allTodo);
    };
    let _deleteTodo = id => {
        let allTodo = JSON.parse(localStorage.all_todo);
        allTodo.splice(id, 1);
        localStorage.all_todo = JSON.stringify(allTodo);

        return allTodo.length;
    };
    
    let newTodo = (form) => {
        let name = form.elements["name"].value;
        let description = form.elements["description"].value;
        let id = _createTodo(name, description);

        current.updateId(id);
    }

    let editTodo = (form, id) => {
        let name = form.elements["name"].value;
        let description = form.elements["description"].value;
        _editTodo(id, name, description);

        current.updateId(id);
    }

    let deleteTodo = id => {
        let todo_length = _deleteTodo(id);
        if(todo_length){
            current.updateId(0);
        }else{
            current.updateId(null);
        };
    }

    return {newTodo, editTodo, deleteTodo};
})();





export default manageTodo;