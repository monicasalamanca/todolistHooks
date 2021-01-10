import './App.css';
import Main from './components/Main';
import Todos from './components/Todos';
import TodoReducers from './components/TodoReducers';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TodoReducers />
      </header>
    </div>
  );
}

export default App;
