import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
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
    <div>
        <div className='countrieDetail_container' key={id}>
            <div>
                <div>
                    <img className="detailImg" src={img} alt={name} /> 
                </div>
                <div>
                    <h2>{ name }</h2>
                    <h2>{ continent }</h2>
                </div>
            </div>
            <div>
                <h2>{ capital }</h2>
                <h2>{ subregion }</h2>
                <h2>{ area }</h2>
                <h2>{ population }</h2>
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
  )
}
