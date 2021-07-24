import { useSelector } from 'react-redux'
import Task from './Task'
const ListTask = (filteredTodos) => {
    const VISIBILITY_FILTERS = {
        ALL: "all",
        COMPLETED: "completed",
        INCOMPLETE: "incomplete"
      };
    const alltask = useSelector((state) => state.tasks)
    const visibilityFilter = useSelector(state => state.visibilityFilter);
    const todos =
    visibilityFilter === VISIBILITY_FILTERS.ALL
      ? alltask
      : visibilityFilter === VISIBILITY_FILTERS.COMPLETED
      ? alltask.filter(todo => todo.isDone)
      : alltask.filter(todo => !todo.isDone);

    return (
        
        <div>
            <ul>
          {todos.map((item)=>
          <Task key={item.id} task={item}/>)}
          </ul>
        </div>
    )
}

export default ListTask