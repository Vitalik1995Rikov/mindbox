import React, { useState } from "react";
import { ITask } from "./Interface";

interface Props {
    task: ITask,
    deleteTask(taskToDelete: string): void
}

const TodoTask = ({task, deleteTask}: Props) => {

    const [checked, setChecked] = useState(true)

    const handleClick = (): void => {
        setChecked(!checked)
      }

    return (
        <div>
            <span onClick={handleClick}>{checked ? 'v' : 'o'}</span>
            <div className={checked ? "line-through": "no-underline"}>
                {task.name}
            </div>
            <div onClick={() => {deleteTask(task.name)}}>
                <input type="checkbox" />
            </div>
        </div>
    )
}

export default TodoTask;