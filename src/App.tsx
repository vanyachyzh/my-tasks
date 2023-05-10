import './App.scss';
import { ActionBox } from './components/ActionBox/ActionBox';
import { Button } from './components/Button/Button';
import { PlusIcon } from './components/Icon/Icon';
import { Task } from './components/Task/Task';
import { TaskList } from './components/TaskList/TaskList';
import { WorkSpace } from './components/WorkSpace/WorkSpace';

const task = {
  title: "Lorem hello how are you i domdfsdbfsnd",
  body: "I like this task so much",
  date: "20.30.24"
}

function App() {
  return (
    <div className="app">
      <ActionBox />

      <div className="app__task-section">
        <div className="app__task-list">
          <TaskList tasks={[task, task, task, task]} />
        </div>

        <div className="app__work-space">
          <WorkSpace />
        </div>
      </div>
    </div>
  );
}

export default App;
