import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPen, faL } from "@fortawesome/free-solid-svg-icons";

const TaskItem = ({ task, deleteTask, updateTask, checkButton }) => {

    const handleDeleteTask = (id) => {
        deleteTask(id);
    };

    const handleUpdateTask = (id) => {
        if (task.status) {
            alert("Task is completed ,you can not edit now.")
            return;
        }
        updateTask(id);
    };

    const handleCheckButton = (id, status) => {
        checkButton(id, status);
    }

    return (
        <div id="task-item">
            <p style={{ textDecoration: task.status ? "line-through" : "none" }}>{task.task}</p>

            <div id="buttonWrapper">
                <input type="checkbox" checked={task.status} onChange={() => {
                    handleCheckButton(task.id, !task.status);
                }} />
                <FontAwesomeIcon
                    className="iconClass"
                    icon={faPen}
                    onClick={() => {
                        handleUpdateTask(task.id);
                    }}
                />
                <FontAwesomeIcon
                    className="iconClass"
                    icon={faTrash}
                    onClick={() => {
                        handleDeleteTask(task.id);
                    }}
                />
            </div>
        </div>
    );
};

export default TaskItem;