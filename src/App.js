import AddTask from './Components/Addtask';
import ListTask from './Components/ListTask';
import Filter from './Components/Filter';
import './App.css';

function App() {
  return (
    <div className="App">
      <span className="title"> ToDo Application</span>
      <br />
      
      <AddTask/>
      <Filter/>
      <ListTask/>
    </div>
  );
}

export default App;
