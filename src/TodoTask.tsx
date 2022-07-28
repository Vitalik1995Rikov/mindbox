import React from "react";
import { ITask } from "./Interface";

interface Props {
    task: ITask,
    deleteTask(taskToDelete: string): void,
    handleClick(taskToComplete: number): void
}

const TodoTask = ({task, deleteTask, handleClick}: Props) => {


    return (
        <div>
            <span onClick={() => handleClick}>{task.status ? 'v' : 'o'}</span>
            <div className={task.status ? "line-through": "no-underline"}>
                {task.name}
            </div>
            <div onClick={() => {deleteTask(task.name)}}>
                <span>delete</span>
            </div>
        </div>
    )
}

export default TodoTask;