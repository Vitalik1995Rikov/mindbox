import React, {useState} from 'react';

const App = () => {

const [task, setTask] = useState<string>('');
const [todoList, setTodoList] = useState([]);

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
