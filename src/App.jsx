import './App.css'
import Counter from './features/counter/Counter';
import Todolist from './features/todolist/Todolist';

function App() {
  return (
  <div>
    <h1 className="border border-2 m-2 p-2">React Component</h1>
    <Counter></Counter>
    <Todolist></Todolist>
  </div>
  );
}

export default App
