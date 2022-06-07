import './App.css';
import { Countries } from './components/Countries';
import { FilteredBar } from './components/FilteredBar';
import { NavBar } from './components/NavBar';


function App() {
  return (
    <div className="App">
      <NavBar />
      <FilteredBar />
      <Countries />
    </div>
  );
}

export default App;
