import React from "react";
import { ITask } from "./Interface";

interface Props {
    task: ITask
}

const TodoTask = ({task}: Props) => {
    return (
        <div>
            <div>
                <input type="checkbox" />
            </div>
            <div>
                {task.name}
            </div>
        </div>
    )
}

export default TodoTask;