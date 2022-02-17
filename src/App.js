import './App.css';
import Counter from './components/Counter/counter';
import Holder from './components/Holder/holder';

function App() {
  return (
    <div className="App">
      <Holder>
        <Counter />
        <Counter />
        <Counter />
        <Counter />
        <Counter />
        <Counter />
        <Counter />
        <Counter />
        <Counter />
        <Counter />
        <Counter />
      </Holder>
    </div>
  );
}

export default App;
