import './App.scss';
import { ActionBox } from './components/ActionBox/ActionBox';
import { Task } from './components/Task/Task';
import { TaskList } from './components/TaskList/TaskList';
import { WorkSpace } from './components/WorkSpace/WorkSpace';

const task = {
  title: "dfksdfkj",
  body: "dsd",
  date: "Dfsdfs"
}

function App() {
  return (
    <div className="app">
      <div className='app__action-section'>
        <ActionBox />
      </div>

      <div className='app__task-section'>
        <TaskList tasks={[task, task, task, task]} />

        <WorkSpace title='' body='' />
      </div>
    </div>
  );
}

export default App;
