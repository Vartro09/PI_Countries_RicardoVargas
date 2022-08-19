import { Route, useLocation, Routes } from 'react-router-dom';
import './App.css';
import { HomePage } from './components/HomePage/HomePage';
import { LandingPage } from './components/LandingPage/LandingPage';
import { NavBar } from '../src/components/NavBar/NavBar'
import { AddActivity } from './components/AddActivity/AddActivity';
import { SearchName } from './components/SearchName/SearchName';
import { CountryDetail } from './components/CountryDetail/CountryDetail';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchCountries } from './store/actions';
import { RenderActivities } from './components/RenderActivities';



function App() {
  let location = useLocation();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCountries());
 }, [dispatch]);

  return (
    <div className="App">
      {location.pathname !== '/' && <NavBar />}
      <Routes>
        <Route exact path='/' element={<LandingPage />} />
        <Route exact path='/home' element={<HomePage />} />
        <Route exact path='/country/:id' element={<CountryDetail />} />
        <Route exact path='/search/:name' element={<SearchName />} />
        <Route exact path='/activities' element={<RenderActivities />} />
        <Route exact path='/create' element={<AddActivity />} /> 
      </Routes>
    </div>
  );
}

export default App;
