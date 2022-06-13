import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import { countryDetails } from '../../store/actions';
import './CountryDetail.css'

export const CountryDetail = () => {
    const dispatch = useDispatch();
    const country = useSelector(state => state.country);
    const { name, img, continent, capital, subregion, area, population, activities } = country
    const { id } = useParams();

    useEffect( () => {
        dispatch(countryDetails(id));
    }, [dispatch, id])

  return (
    <div className='main_container'>
        <div className='countryDetail_container' >
            <div>
                <NavLink className='navLink_back' to={'/home'}>
                    <h2 className='navLink_back'>Back</h2>
                </NavLink>  
            </div>
            <div>
                <img className="detailImg" src={img} alt={name} /> 
                
                <div className='div_container'>   
                    <h2 className='title_Details'>Name:</h2>
                    <h2 className='txt_Details'>{ name }</h2>
                </div>
                <div className='div_container'>
                    <h2 className='title_Details'>Continent:</h2>
                    <h2 className='txt_Details'>{ continent }</h2>
                </div>
                <div className='div_container'>
                    <h2 className='title_Details'>Capital:</h2>
                    <h2 className='txt_Details'>{ capital }</h2>
                </div>
                <div className='div_container'>
                    <h2 className='title_Details'>Subregion:</h2>
                    <h2 className='txt_Details'>{ subregion }</h2>
                </div>
                <div className='div_container'>
                    <h2 className='title_Details'>Area:</h2>
                    <h2 className='txt_Details'>{ area }</h2>
                </div>
                <div className='div_container'>
                    <h2 className='title_Details'>Population:</h2>
                    <h2 className='txt_Details'>{ population }</h2>
                </div>
                <div className='div_container_activities'>
                    <h2 className='title_Details'>Activities:</h2>    
                    {
                        activities && activities.map( (a, index) => {
                            return( 
                                <h2 key={index} > {a.name} </h2>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </div>
  )
}
