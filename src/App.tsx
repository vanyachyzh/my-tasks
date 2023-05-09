import './App.scss';
import { ActionBox } from './components/ActionBox/ActionBox';
import { Task } from './components/ActionBox/Task/Task';

const task = {
  title: "dfksdfkj",
  body: "dsd",
  date: "Dfsdfs"
}

function App() {
  return (
    <div className="app">
      <ActionBox />
      <Task task={task}/>
    </div>
  );
}

export default App;
