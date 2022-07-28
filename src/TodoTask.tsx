import React from "react";
import { ITask } from "./Interface";

interface Props {
    task: ITask,
    deleteTask(taskToDelete: string): void
}

const TodoTask = ({task, deleteTask}: Props) => {

    return (
        <div>
            <div onClick={() => {deleteTask(task.name)}}>
                <input type="checkbox" />
            </div>
            <div className={true ? "line-through": "no-underline"}>
                {task.name}
            </div>
        </div>
    )
}

export default TodoTask;