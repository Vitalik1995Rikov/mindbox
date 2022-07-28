import React, {useState} from 'react';
import { ITask } from './Interface';

const App = () => {

const [task, setTask] = useState<string>('');
const [todoList, setTodoList] = useState<ITask[]>([]);

  return (
    <div>
      <div>Todos</div>
      <div className='flex'>
        <input type="text" placeholder='What needs to be done?'/>
        <button>Add</button>
      </div>
    </div>
  );
};

export default App;
