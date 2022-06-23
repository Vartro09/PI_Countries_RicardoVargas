import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { fetchCountries, filterByContinent, orderAz, orderPopulationDown, orderPopulationUp, orderZa, getActivities, filterByActivities } from '../../store/actions';
import './filteredBar.css';


export const FilteredBar = ( ) => {
    const dispatch = useDispatch();
    const countries = useSelector( state => state.filteredCountries);
    const arrayActivities = useSelector( state => state.arrayActivities);

    const [activities, setActivities] = useState([]) 

    useEffect(() => {
        dispatch(getActivities())
        dispatch(filterByActivities(activities))
    }, [dispatch, activities])


    const handleAz = () => {
        dispatch(orderAz());
    }

    const handleZa = () => {
        dispatch(orderZa());
    }

    const handlePopulationDown = () => {
        dispatch(orderPopulationDown());
    }

    const handlePopulationUp = () => {
        dispatch(orderPopulationUp());
    }

    const reset = () => {
        dispatch(fetchCountries());
    }

    const onContinentChange = (e) => {
        let continent = e.target.value;
        if (e.target.value === 'Filter by continent') {
            dispatch(fetchCountries());
        } else {
            dispatch(filterByContinent(continent));
        }
    }

    function handleActivities(e) {
        if(e.target.value !== 'Seleccionar' && !activities.includes(e.target.value)){
            setActivities([...activities, e.target.value])
        }
    }


  return (
    <div className='filteredBar_container'>
        <div className='order_container'>
            <h4 className='txtOrder'>Order |</h4>

            <h3 className='typeOrder'>Alphabetic:</h3>
            <button className='button_sort' onClick={handleAz}></button>
            <button className='button_sort2' onClick={handleZa}></button>
            
            <h3 className='typeOrder'>Population:</h3>
            <button className='button_down' onClick={handlePopulationDown}></button>
            <button className='button_up' onClick={handlePopulationUp}></button>

            <h3 className='typeOrder'>Reset:</h3>
            <button className='button_reset' onClick={reset}></button>
        </div>

        <div className='filtered_inputs_container'>
            <div className='filtered_input_continent'>
                <select className='input_continent' onChange={(e) => onContinentChange(e)}>
                    <option value='Filter by continent'>Filter by continent</option>
                    <option>Africa</option>
                    <option>Antarctica</option>
                    <option>Europe</option>
                    <option>Oceania</option>
                    <option>North America</option>
                    <option>South America</option>
                </select>
                {/* <input className='input_activity' placeholder='Search by continent'/> */}
                <button className='button_continent'></button>
            </div>
            <div className='filtered_input_activity'>
            <select
                    className='input_continent'
                    onChange={e => handleActivities(e)}
                >
                    <option>Filter by activity</option>
                    {
                    //  arrayActivities && arrayActivities.map( a => {
                    //         console.log(a)
                    //         return(
                                
                    //             <option key={a.id} value={a.name} > {a.name} </option> 
                    //         )
                    //     })
                    }
                </select>

                <button className='button_activity'></button>
            </div>
        </div>
    </div>
  )
}
