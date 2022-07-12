
import './App.css';
import Todos from './Components/Todos';

function App() {
  return (
    <div className="App">
      <h1 className=' text-3xl my-10 font-bold'>React-Redux Fetch API</h1>
      <Todos></Todos>
    </div>
  );
}

export default App;

// 1.install packages (npm install redux react-redux axios redux-thunk)
// 2.define constants
// 3.async action creator
//4.reducer
//5.create store
//6. provide store for react
