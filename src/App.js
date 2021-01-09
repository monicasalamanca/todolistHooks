import './App.css';
import Main from './components/Main';
import Todos from './components/Todos';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Todos />
      </header>
    </div>
  );
}

export default App;
