import React from 'react';
import './filteredBar.css';

export const FilteredBar = () => {
  return (
    <div className='filteredBar_container'>
        <div className='order_container'>
            <h4>Order by:</h4>
            <button className='button_sort'></button>
            <button className='button_decline'></button>
        </div>

        <div className='filtered_inputs_container'>
            <div className='filtered_input_continent'>
                <input className='input_continent' placeholder='Search by continent'/>
                <button className='button_continent'></button>
            </div>
            <div className='filtered_input_activity'>
                <input className='input_activity' placeholder='Search by activity'/>
                <button className='button_activity'></button>
            </div>
        </div>
    </div>
  )
}
