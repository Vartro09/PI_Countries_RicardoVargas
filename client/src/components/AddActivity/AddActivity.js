import React, { useState } from 'react';
import { fetchCountries, postActivity } from '../../store/actions';
import { useDispatch, useSelector } from 'react-redux';
import validate from './validators';
import { useNavigate } from 'react-router-dom';
import './AddActivity.css';


export const AddActivity = () => {
  const dispatch = useDispatch();

  const arrayCountries = useSelector(state => state.filteredCountries);

  const navigate = useNavigate();

  let countriesList = arrayCountries.map(country => {
    return({
        name:country.name,
        img: country.img
    })
  });


  const [selected, setSelected] = useState("");
  const [errors, setErrors] = useState({firstTry: true});
  const [activity, setActivity] = useState({
    name: '',
    difficulty: '',
    duration: '',
    season: '',
    countries: []
  });


  const handleChange = (e) => {
    setActivity({
      ...activity,
      [e.target.name]: e.target.value
  });
  if(!errors.firstTry){
      setErrors(validate({
          ...activity,
          [e.target.name]: e.target.value
      }))
  }
  }

  const handleSeasons = (e) => {
    if(e.target.value !== 'Seleccionar' && !activity.season.includes(e.target.value)){
      setActivity({
          ...activity,
          season: e.target.value
      })
      if(!errors.firstTry){
      setErrors(validate({
          ...activity,
          season: e.target.value
      }))
      }
   }
  }

  const handleCountries = (e) => {
    if(e.target.value !== 'Seleccionar' && !activity.countries.includes(e.target.value)){
        setActivity({
            ...activity,
            countries: [...activity.countries, e.target.value]
        })
        if(!errors.firstTry){
        setErrors(validate({
            ...activity,
            countries: [...activity.countries, e.target.value]
        }))
        }
      }
    }

  const deleteCountry = (e) => {
      setActivity({
          ...activity,
          countries: activity.countries.filter(country => country !== e.target.value)
      })
      if(!errors.firstTry){
          setErrors(validate({
              ...activity,
              countries: activity.countries.filter(country => country !== e.target.value)
          }))
      }
  }

  const handleCheckErrors = (e) => {
        e.preventDefault();
        setErrors(validate({
            ...activity,
            [e.target.name]: e.target.value,
            countries: [...activity.countries, e.target.value]
        }))
        handleSubmit(e)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
        if(activity.name && activity.difficulty && activity.duration && activity.season && activity.countries.length >= 1){
        dispatch(postActivity(activity));
        alert('Actividad creada exitosamente');
        setActivity({
                name: '',
                difficulty: '',
                duration: '',
                season: '',
                countries: []
            });
        errors.firstTry = false
        navigate('/home')
        }
        if(errors.firstTry){
            alert('Completar los campos correspondientes')
        }
  }

  return (
    <div className='activity_page'>
      <div className='activity_page_content'>
          <h1 className='title_activity'>Would you like add an activity?</h1>
          <div  className='formContent'>
            <form className='form' onSubmit={e => handleSubmit(e)}>
              <div className='divForm'>
                <label className='txtLabel'>Activity Name</label>
                <input
                  type='text'
                  name='name'
                  value={activity.name}
                  onChange={e => handleChange(e)}
                />
              </div>

              <div className='divForm'>
                <label className='txtLabel'>Difficulty 1 to 5</label>
                <input
                  type='text'
                  name='difficulty'
                  value={activity.difficulty}
                  onChange={e => handleChange(e)}
                />
              </div>

              <div className='divForm'>
                <label className='txtLabel'>Duration Format: 24hs</label>
                <input
                  type='text'
                  name='duration'
                  value={activity.duration}
                  onChange={e => handleChange(e)}
                />
              </div>

              <div className='divForm'>
                <h3 className='txtLabel'>Season</h3>
                <select onChange={e => handleSeasons(e)}>
                  <option>Select</option>
                  <option value='Spring'>Spring</option>
                  <option value='Summer'>Summer</option>
                  <option value='Fall'>Fall</option>
                  <option value='Winter'>Winter</option>
                </select>
              </div>


              <div>
                  <div className='divForm'>
                      <h3 className='txtLabel'>Countries</h3>
                      <select value={selected} onChange={e => [handleCountries(e), setSelected(e)]}>
                          <option>Select Country</option>
                          {countriesList?.map(country => {
                              return(
                                  <option key={country.name}>
                                      {country.name}
                                  </option>
                              )
                          })}
                      </select> 
                  </div>
                      {/* {errors.countries && (<p>{errors.countries}</p>)} */}
                  <div className="displayCountries">
                      {activity.countries.map((country) => {
                          return(
                              <div className="eachCountry" key={country}>
                                  <p className="countryName">{country}</p>
                                  <button className="closeButton" onClick={e => {deleteCountry(e)}} value={country}>X</button>
                              </div>
                          )
                      })}
                  </div>
                  <button onClick={e => handleCheckErrors(e)}>Add Activity</button>
              </div>

            </form>
          </div>

      </div>
    </div>
  )
}
