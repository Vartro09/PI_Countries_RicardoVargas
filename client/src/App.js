import { Route, useLocation, Routes } from 'react-router-dom';
import './App.css';
import { HomePage } from './components/HomePage/HomePage';
import { LandingPage } from './components/LandingPage/LandingPage';
import { NavBar } from '../src/components/NavBar/NavBar'
import { DetailsPage } from './components/DetailsPage/DetailsPage';
import { SearchBar } from './components/SearchBar/SearchBar';
import { AddActivity } from './components/AddActivity/AddActivity';


function App() {
  let location = useLocation();
  return (
    <div className="App">
      {location.pathname !== '/' && <NavBar />}
      <Routes>
        <Route exact path='/' element={<LandingPage />} />
        <Route exact path='/home' element={<HomePage />} />
        <Route exact path='/country/:id' element={<DetailsPage />} />
        <Route exact path='/search/:name' element={<SearchBar />} />
        <Route exact path='/create' element={<AddActivity />} /> 
      </Routes>
    </div>
  );
}

export default App;
