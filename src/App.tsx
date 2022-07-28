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

const deleteTask = (taskToDelete: string): void => {
  setTodoList(todoList.filter((task) => {
    return task.name !== taskToDelete
  }))
}

  return (
    <div>
      <div>Todos</div>
      <div className='flex'>
        <input type="text" placeholder='What needs to be done?' onChange={handleChange} value={task} onKeyPress={e => e.key === 'Enter' && addTask()}/>
      </div>
      <div>
        {todoList.map((task: ITask, key: number) => <TodoTask task={task} key={key} deleteTask={deleteTask}/>)}
      </div>
    </div>
  );
};

export default App;
