import './App.css';
import Counter from './components/Counter/counter';
import Holder from './components/Holder/holder';
import StateComponent from './components/StateComponent/stateComponent';
import ListComponent from './components/ListComponent/listComponent';
import UsersList from './components/UsersList/usersList';


const arr = [
  {
      id: 0,
      value: 123
  },
  {
      id: 1,
      value: 534
  },
  {
      id: 2,
      value: 56
  },
  {
      id: 3,
      value: 423
  },
  {
      id: 4,
      value: 67
  },
]
   /*   <UsersList users={users} />
      <ListComponent  items={arr} />
      <StateComponent name="111" />
*/
const users = ["Ivan", "Alex", "Nik", "Jon"];

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
