import { useDispatch} from "react-redux";
import { editTask } from '../JS/Actions/actions';


const Task = ({ task }) => {
  
  const dispatch = useDispatch();
  
  return (
   <div>
      <input
                type="checkbox"
                checked={task.isDone}
                onChange={ (id) =>dispatch(editTask(task.id))}
              />
      <span>
      {task.description} 
            
      </span>
      </div>
  );
};

export default Task;
