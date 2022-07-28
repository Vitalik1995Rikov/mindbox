import React, {useState, ChangeEvent} from 'react';
import { ITask } from './Interface';
import TodoTask from './TodoTask';

const App = () => {

const [task, setTask] = useState<string>('');
const [todoList, setTodoList] = useState<ITask[]>([]);


const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
  setTask(event.target.value)
}

const addTask = (): void => {
  const newTask = {name: task}
  setTodoList([...todoList, newTask])
  setTask('');
}

  return (
    <div>
      <div>Todos</div>
      <div className='flex'>
        <input type="text" placeholder='What needs to be done?' onChange={handleChange}/>
        <button onClick={addTask}>Add</button>
      </div>
      <div>
        {todoList.map((task: ITask) => <TodoTask task={task}/>)}
      </div>
    </div>
  );
};

export default App;
