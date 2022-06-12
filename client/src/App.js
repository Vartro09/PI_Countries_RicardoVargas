import { Route, useLocation, Routes } from 'react-router-dom';
import './App.css';
import { HomePage } from './components/HomePage/HomePage';
import { LandingPage } from './components/LandingPage/LandingPage';
import { NavBar } from '../src/components/NavBar/NavBar'
import { AddActivity } from './components/AddActivity/AddActivity';
import { SearchName } from './components/SearchName/SearchName';
import { CountryDetail } from './components/CountryDetail/CountryDetail';


function App() {
  let location = useLocation();
  return (
    <div className="App">
      {location.pathname !== '/' && <NavBar />}
      <Routes>
        <Route exact path='/' element={<LandingPage />} />
        <Route exact path='/home' element={<HomePage />} />
        <Route exact path='/country/:id' element={<CountryDetail />} />
        <Route exact path='/search/:name' element={<SearchName />} />
        <Route exact path='/create' element={<AddActivity />} /> 
      </Routes>
    </div>
  );
}

export default App;
