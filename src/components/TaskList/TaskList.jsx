import { useSelector } from "react-redux";
import css from "./TaskList.module.css";
import { Task } from "../Task/Task";
import { selectVisibleTasks } from "../../redux/tasksSlice";
import { selectStatusFilter } from "../../redux/filterSlice";

const getVisibleTasks = (tasks, statusFilter) => {
  switch (statusFilter) {
    case "active":
      return tasks.filter((task) => !task.completed);
    case "completed":
      return tasks.filter((task) => task.completed);
    default:
      return tasks;
  }
};

export const TaskList = () => {
  const tasks = useSelector(selectVisibleTasks);
  const statusFilter = useSelector(selectStatusFilter);

  const visibleTasks = getVisibleTasks(tasks, statusFilter);

  return (
    <ul className={css.list}>
      {visibleTasks.map((task) => (
        <li className={css.listItem} key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};
