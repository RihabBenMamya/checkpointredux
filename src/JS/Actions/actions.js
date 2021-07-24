let id =1;
export const addTask = newTask =>  {
    return {
    type: 'ADD_TASK',
    payload: {
        id: ++id,
        description : newTask,
        isDone: false
    }
}};

  export const editTask = taskId => ({
    type: 'EDIT_TASK',
    payload: { 
        taskId
    }
  });
export const setFilter = filter => ({ 
    type: 'SET_FILTER', 
    payload: { filter } 
});