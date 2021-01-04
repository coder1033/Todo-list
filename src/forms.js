const manageForm = (()=>{
    let _addTodo = () => {
        let _html = `<div id="show-form">
                        <form action="">
                            <h1>Add Todo</h1>
                            <div>
                                <label>Name</label><br>
                                <input placeholder="Enter name" type="text" name="name" required minlength="4" maxlength="20" oninput="validate.validateEmpty(this)">
                            </div>
                            <div>
                                <label>Description</label><br>
                                <input placeholder="Enter description" type="text" name="description" required minlength="4" maxlength="100" oninput="validate.validateEmpty(this)">
                            </div>
                            <input type="submit" value="Add" name="submit" onclick="manageTodo.newTodo(this.form)">
                            <button type="button" name="cancel" onclick="manageForm.cancelForm()">Cancel</button>
                        </form>
                    </div>`;
        document.getElementById('insert').innerHTML = _html;
    };
    let _editTodo = (id, name, description) => {
        let _html = `<div id="show-form">
                    <form action="">
                        <h1>Edit Todo</h1>
                        <div>
                            <label>Name</label><br>
                            <input value=${name} type="text" name="name" required minlength="4" maxlength="20" oninput="validate.validateEmpty(this)">
                        </div>
                        <div>
                            <label>Description</label><br>
                            <input value="${description}" type="text" name="description" required minlength="4" maxlength="100" oninput="validate.validateEmpty(this)">
                        </div>
                        <input type="submit" value="Add" name="submit" onclick="manageTodo.editTodo(this.form, ${id})">
                        <button type="button" name="cancel" onclick="manageForm.cancelForm()">Cancel</button>
                    </form>
                </div>`;
        document.getElementById('insert').innerHTML = _html;
    };
    let _deleteTodo = id => {
        let _html = `<div id="show-form">
                    <form action="">
                        <h1>Delete Todo</h1>
                        <div>
                            <label>Are you sure you want to delete this ToDo</label><br>
                            <input type="submit" value="Yes" name="" onclick="manageTodo.deleteTodo(${id})">
                            <button type="button" name="No" onclick="manageForm.cancelForm()">Cancel</button>
                        </div>
                    </form>
                </div>`;
        document.getElementById('insert').innerHTML = _html;
    };
    let _addTask = id => {
        let _html = `<div id="show-form">
                    <form action="">
                        <h1>Add Task</h1>
                        <div>
                            <label>Task</label><br>
                            <input placeholder="Enter task" type="text" name="description" required minlength="5" maxlength="100" oninput="validate.validateEmpty(this)">
                        </div>
                        <div>
                            <label>Due Time</label><br>
                            <input type="date" name="date" required>
                        </div>
                        <div>
                            <label>Priority</label><br>
                            <input type="radio" id="hp" name="priority" value="high-priority" required>
                            <label for="hp">high</label>
                            <input type="radio" id="mp" name="priority" value="mid-priority" required>
                            <label for="mp">mid</label>
                            <input type="radio" id="lp" name="priority" value="low-priority" required>
                            <label for="lp">low</label>
                        </div>
                        <input type="submit" value="Add" name="" onclick="manageTask.addTask(this.form, ${id})">
                        <button type="button" name="cancel" onclick="manageForm.cancelForm()">Cancel</button>
                    </form>
                </div>`;
        document.getElementById('insert').innerHTML = _html;
    };
    let _editTask = (id, description, date) => {
        let _html = `<div id="show-form">
                    <form action="">
                        <h1>Edit Task</h1>
                        <div>
                            <label>Task</label><br>
                            <input value="${description}" type="text" name="description" required minlength="5" maxlength="100" oninput="validate.validateEmpty(this)">
                        </div>
                        <div>
                            <label>Due Time</label><br>
                            <input value="${date}" type="date" name="date" required>
                        </div>
                        <div>
                            <input type="radio" id="hp" name="priority" value="high-priority" required>
                            <label for="hp">high-priority</label>
                            <input type="radio" id="mp" name="priority" value="mid-priority" required>
                            <label for="mp">mid-priority</label>
                            <input type="radio" id="lp" name="priority" value="low-priority" required>
                            <label for="lp">low-priority</label>
                        </div>
                        <input type="submit" value="Add" name="" onclick="manageTask.editTask(this.form, ${id})">
                        <button type="button" name="cancel" onclick="manageForm.cancelForm()">Cancel</button>
                    </form>
                </div>`;
        document.getElementById('insert').innerHTML = _html;
    };
    let _deleteTask = id => {
        let _html = `<div id="show-form">
                    <form action="">
                        <h1>Delete Task</h1>
                        <div>
                            <label>Are you sure you want to delete this Task</label><br>
                            <input type="submit" value="Yes" name="" onclick="manageTask.deleteTask(${id})">
                            <button type="button" name="No" onclick="manageForm.cancelForm()">No</button>
                        </div>
                    </form>
                </div>`;
        document.getElementById('insert').innerHTML = _html;
    };
    let _cancelForm = () => {
        document.getElementById('insert').innerHTML = '';
    };

    
    let addTodo = () => {
        _addTodo();
    };
    let editTodo = (id, name, description) => {
        _editTodo(id, name, description);
    };
    let deleteTodo = id => {
        _deleteTodo(id);
    };
    let addTask = id => {
        _addTask(id);
    };
    let editTask = (id, description, date) => {
        _editTask(id, description, date);
    };
    let deleteTask = id => {
        _deleteTask(id);
    };
    let cancelForm = () => {
        _cancelForm();
    };

    return {addTodo, editTodo, deleteTodo, addTask, editTask, deleteTask, cancelForm};
})();
export default manageForm;