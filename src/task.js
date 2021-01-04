const manageTask = (() => {
    let _addTask = (form, id) => {
        let description = form.elements["description"].value;
        let date = form.elements["date"].value;
        let priority = form.elements["priority"].value;

        let task = {description, date, priority}

        let all_todo = JSON.parse(localStorage.all_todo);
        all_todo[id].tasks.push(task);

        localStorage.all_todo = JSON.stringify(all_todo);
    };
    let _editTask = (form, id) => {
        let description = form.elements["description"].value;
        let date = form.elements["date"].value;
        let priority = form.elements["priority"].value;

        let all_todo = JSON.parse(localStorage.all_todo);
        let task = all_todo[localStorage.currentId].tasks[id]

        task.description = description;
        task.date = date;
        task.priority = priority;

        localStorage.all_todo = JSON.stringify(all_todo);
    };
    let _deleteTask = id => {
        let all_todo = JSON.parse(localStorage.all_todo);
        all_todo[localStorage.currentId].tasks.splice(id, 1);

        localStorage.all_todo = JSON.stringify(all_todo);
    };

    let addTask = (form, id) => {
        _addTask(form, id);
    };
    let editTask = (form, id) => {
        _editTask(form, id);
    };
    let deleteTask = id => {
        _deleteTask(id);
    }
    return {addTask, editTask, deleteTask};
})();

export default manageTask;