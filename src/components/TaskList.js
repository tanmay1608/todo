import TaskItem from "./TaskItem";

const TaskList = ({ todoList, deleteTask, updateTask,checkButton }) => {
  return (
    <div id="task-list">
      {todoList.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          updateTask={updateTask}
          checkButton={checkButton}
        />
      ))}
    </div>
  );
};

export default TaskList;