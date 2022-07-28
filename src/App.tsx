import React, {useState, ChangeEvent, useEffect} from 'react';
import { ITask } from './Interface';
import TodoTask from './TodoTask';

const App = () => {

const [task, setTask] = useState<string>('');
const [todoList, setTodoList] = useState<ITask[]>([]);
const [checked, setChecked] = useState<boolean>(true);
const [filteredTasks, setFilteredTasks] =useState<ITask[]>([]);

useEffect(() => {
  filterForActive();
}, [todoList])

const handleClick = (taskToComplete: number): void => {
  setTodoList(todoList.map((task) => {
    if (task.id !== taskToComplete) return task;
    return {
      ...task,
      status: !task.status
    }
  }))
}

const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
  setTask(event.target.value)
}

const addTask = (): void => {
  const newTask = {name: task, status: checked, id: Math.random()}
  setTodoList([...todoList, newTask])
  setTask('');
  console.log(todoList)
}

const deleteTask = (taskToDelete: string): void => {
  setTodoList(todoList.filter((task) => {
    return task.name !== taskToDelete
  }))
}

const filterForActive = (): void => {
  setFilteredTasks(todoList.filter((task) => task.status === true))
}

const filterForCompleted = (): void => {
  setFilteredTasks(todoList.filter((task) => task.status === false))
}

  return (
    <div>
      <div>Todos</div>
      <div className='flex'>
        <input type="text" placeholder='What needs to be done?' onChange={handleChange} value={task} onKeyPress={e => e.key === 'Enter' && addTask()}/>
      </div>
      <div>
        {filteredTasks.map((task: ITask, key: number) => <TodoTask task={task} key={key} deleteTask={deleteTask} handleClick={handleClick}/>)}
      </div>
      <button value='all'>All</button>
      <button value='active' onClick={filterForActive}>Active</button>
      <button value='completed' onClick={filterForCompleted}>Completed</button>
    </div>
  );
};

export default App;
