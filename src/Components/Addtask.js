import { useState } from 'react'
import { useDispatch } from "react-redux";
import { addTask } from '../JS/Actions/actions';

const AddTask = (props)=>{
    const dispatch = useDispatch();
    const [task, setTask] = useState('')
    
   
    return (
        <div>
            <div className="todo">
                <input type="text" name="task" id="task" onChange={e => setTask(e.target.value)} placeholder="Add task .."/>
                <button className="add-btn" onClick={() => dispatch(addTask(task))}> Add </button>
            </div>
        </div>
    )


}
export default AddTask;