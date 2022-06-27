import React, { useState } from 'react';
import { fetchCountries, postActivity } from '../../store/actions';
import { useDispatch, useSelector } from 'react-redux';
import validate from './validators';
import { useNavigate } from 'react-router-dom';
import './AddActivity.css';


export const AddActivity = () => {
  const dispatch = useDispatch();

  const arrayCountries = useSelector(state => state.countries);

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
    if(e.target.value !== 'Select' && !activity.season.includes(e.target.value)){
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
    if(e.target.value !== 'Select' && !activity.countries.includes(e.target.value)){
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
        alert('The activity has been created successfully');
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
            alert('Complete the required fields')
        }
  }

  return (
    <div className='activity_page'>
      <div className='activity_page_content'>
          <h1 className='title_activity'>Would you like add an activity?</h1>
          <div  className='formContent'>
            <form className='form' onSubmit={e => handleSubmit(e)}>
              <div className='divForm'>
                <div className='divLabel'>
                  <label className='txtLabel'>Activity Name</label>
                  <input
                    type='text'
                    name='name'
                    value={activity.name}
                    onChange={e => handleChange(e)}
                    autoComplete='off'
                  />
                </div>
                {errors.name && (<p className='errorMessage'>{errors.name}</p>)}
              </div>

              <div className='divForm'>
                <div className='divLabel'>
                  <label className='txtLabel'>Difficulty 1 to 5</label>
                  <input
                    type='text'
                    name='difficulty'
                    value={activity.difficulty}
                    onChange={e => handleChange(e)}
                    autoComplete='off'
                  />
                </div>
                {errors.difficulty && (<p className='errorMessage'>{errors.difficulty}</p>)}
              </div>

              <div className='divForm'>
                <div className='divLabel'>
                  <label className='txtLabel'>Duration Format: 24hs</label>
                  <input
                    type='text'
                    name='duration'
                    value={activity.duration}
                    onChange={e => handleChange(e)}
                    autoComplete='off'
                  />
                </div>
                {errors.duration && (<p className='errorMessage'>{errors.duration}</p>)}
              </div>

              <div className='divForm'>
                <div className='divLabel'>
                  <h3 className='txtLabel'>Season</h3>
                  <select onChange={e => handleSeasons(e)}>
                    <option>Select</option>
                    <option value='Spring'>Spring</option>
                    <option value='Summer'>Summer</option>
                    <option value='Fall'>Fall</option>
                    <option value='Winter'>Winter</option>
                  </select>
                </div>
                {errors.season && (<p className='errorMessage'>{errors.season}</p>)}
                
              </div>

              <div>
                  <div className='divForm'>
                    <div className='divLabel'>
                      <h3 className='txtLabel'>Countries</h3>
                      <select value={selected} onChange={e => [handleCountries(e), setSelected(e)]}>
                          <option>Select</option>
                          {countriesList?.map(country => {
                              return(
                                  <option key={country.name}>
                                      {country.name}
                                  </option>
                              )
                          })}
                      </select> 
                      
                    </div>
                    {errors.countries && (<p className='errorMessage'>{errors.countries}</p>)}
                  </div>
                  <div className="displayCountries">
                      {activity.countries.map((country) => {
                          return(
                              <div className="countryDiv" key={country}>
                                  <p className="countryName">{country}</p>
                                  <button className="closeButton" onClick={e => {deleteCountry(e)}} value={country}>X</button>
                              </div>
                          )
                      })}
                  </div>
                  <div>
                  { errors.name || 
                    errors.activity || 
                    errors.duration || 
                    errors.season || 
                    errors.countries ?
                    <button  disabled className='btnAddActivity' >Add Activity</button>
                    :<button className='btnAddActivity' onClick={e => handleCheckErrors(e)}>Add Activity</button>}
                    </div>
              </div>

            </form>
          </div>

      </div>
    </div>
  )
}
