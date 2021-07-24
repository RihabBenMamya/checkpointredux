
const initialState = {
    tasks: [
        {
            id: 1,
            description: 'my first task',
            isDone: false
        }
    ]
}
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TASK':
        return {
            ...state,
                tasks: [...state.tasks, action.payload]
            }
            case 'EDIT_TASK':
    
            return {
                ...state,
                tasks: state.tasks.map(task =>
                    task.id === action.payload
                      ? { ...task, isDone: !task.isDone }
                      : task
                  )
                }
                case 'SET_FILTER': {
                    return action.payload.filter;
                  }
            default:
        return state
    
}}

export default rootReducer