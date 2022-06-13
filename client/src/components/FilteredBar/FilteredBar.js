import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getActivities, searchActivities } from '../../store/actions';
import './filteredBar.css';


export const FilteredBar = () => {
    const dispatch = useDispatch();
    const arrayActivities = useSelector( state => state.arrayActivities);

    const [activity, setActivity] = useState([]);

    useEffect( () => {
        dispatch(getActivities());
        dispatch(searchActivities(activity));
    }, [dispatch, activity]);

    const handleActivities = (e) => {
        if(e.target.value !== 'Filter by activity' && !activity.includes(e.target.value)){
            setActivity([...activity, e.target.value])
        }
    }






  return (
    <div className='filteredBar_container'>
        <div className='order_container'>
            <h4>Order by:</h4>
            <button className='button_sort'></button>
            <button className='button_decline'></button>
        </div>

        <div className='filtered_inputs_container'>
            <div className='filtered_input_continent'>
                <input className='input_activity' placeholder='Search by activity'/>
                <button className='button_continent'></button>
            </div>
            <div className='filtered_input_activity'>
            <select 
                    className='input_continent' 
                    onChange={e => handleActivities(e)}    
                >
                    <option>Filter by activity</option>
                    {
                        arrayActivities.map( a => {
                            return(
                                <option key={a.name} value={a.name} > {a.name} </option>
                            )
                        })
                    }
                </select>
                
                <button className='button_activity'></button>
            </div>
        </div>
    </div>
  )
}
