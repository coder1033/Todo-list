import manageDom from "./dom.js";
import manageTodo from "./todo.js";
import manageForm from "./forms.js";
import manageTask from "./task.js";
import validate from "./validate.js";

window.manageForm = manageForm
window.manageDom = manageDom;
window.manageTodo = manageTodo;
window.manageTask = manageTask;
window.validate = validate;

const current = (()=>{
    if(!localStorage.currentId){
        localStorage.currentId = 0;
    };

    let currentContent = () => {
        if(localStorage.currentId!='null'){
            manageDom.currentContent(localStorage.currentId);
        }
    };
    let updateId = id => {
        localStorage.currentId = id;
    };
    
    let currentNavbar = () => {
        manageDom.currentNavbar();
    };

    let currentTasks = () => {
        if(localStorage.currentId!="null"){
            manageDom.currentTasks(localStorage.currentId);
        }
    }

    return {currentContent, updateId, currentNavbar, currentTasks}
})();



window.current = current;
current.currentContent();
current.currentNavbar();
current.currentTasks();


/*
Global-variables = {
    current,
    manageForm,
    manageDom,
    manageTodo,
    manageTask,
    validate
};
*/

/*
local_storage = {
    initiate,
    currentId,
    all_todo,
}
*/
