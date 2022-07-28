import React, { useState } from "react";
import { ITask } from "./Interface";

interface Props {
    task: ITask
}

const TodoTask = ({task}: Props) => {

const [checkbox, setCheckbox] = useState<boolean>(false);

const handleClick = (): void => {
    setCheckbox(!checkbox)
}

    return (
        <div>
            <div onClick={handleClick}>
                <input type="checkbox" />
            </div>
            <div className={checkbox ? "line-through": "no-underline"}>
                {task.name}
            </div>
        </div>
    )
}

export default TodoTask;