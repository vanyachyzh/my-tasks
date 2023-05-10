import { TaskInfo } from "../../types/TaskInfo";
import './Task.scss';

type Props = {
  task: TaskInfo,
}

export const Task: React.FC<Props> = ({ task }) => {
  return (
    <button className="task">
      <span className="task__title">{task.title}</span>

      <div className="task__extra">
        <span className="task__date">{task.date}</span>
        <span className="task__body">{task.body}</span>
      </div>
    </button>
  )
};