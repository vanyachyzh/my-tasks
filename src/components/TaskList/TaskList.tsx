import { TaskInfo } from "../../types/TaskInfo";
import { Task } from "../Task/Task";
import './TaskList.scss'

type Props = {
  tasks: TaskInfo[]
}

export const TaskList: React.FC<Props> = ({ tasks }) => (
  <ul className="tasks">
    {tasks.map(task => (
      <li
        key={task.date}
        className="tasks__item"
      >
        <Task task={task} />
      </li>
    ))}
  </ul>
);