import React, {useState, ChangeEvent} from 'react';
import { ITask } from './Interface';

const App = () => {

const [task, setTask] = useState<string>('');
const [todoList, setTodoList] = useState<ITask[]>([]);


const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
  setTask(event.target.value)
  console.log(task)
}
  return (
    <div>
      <div>Todos</div>
      <div className='flex'>
        <input type="text" placeholder='What needs to be done?' onChange={handleChange}/>
        <button>Add</button>
      </div>
    </div>
  );
};

export default App;
