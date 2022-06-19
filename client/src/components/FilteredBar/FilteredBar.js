import React from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { fetchCountries, orderAz, orderZa } from '../../store/actions';
import './filteredBar.css';



export const FilteredBar = ( ) => {
    const dispatch = useDispatch();
    const countries = useSelector( state => state.filteredCountries);

    // const [activity, setActivity] = useState([]);
    // const [ orderA, setOrderA ] = useState('');

    // useEffect( () => {
    //     dispatch(getActivities());
    //     dispatch(searchActivities(activity));
    // }, [dispatch, activity]);


    const handleAz = () => {
        dispatch(orderAz());
    }

    const handleZa = () => {
        dispatch(orderZa());
    }

    const reset = () => {
        dispatch(fetchCountries());
    }

    // const handleActivities = (e) => {
    //     if(e.target.value !== 'Filter by activity' && !activity.includes(e.target.value)){
    //         setActivity([...activity, e.target.value])
    //     }
    // }






  return (
    <div className='filteredBar_container'>
        <div className='order_container'>
            <h4 className='txtOrder'>Order |</h4>

            <h3 className='typeOrder'>Alphabetic:</h3>
            <button className='button_sort' onClick={handleAz}></button>
            <button className='button_sort2' onClick={handleZa}></button>
            
            <h3 className='typeOrder'>Population:</h3>
            <button className='button_down'></button>
            <button className='button_up'></button>

            <h3 className='typeOrder'>Reset:</h3>
            <button className='button_reset' onClick={reset}></button>
        </div>

        <div className='filtered_inputs_container'>
            <div className='filtered_input_continent'>
                <input className='input_activity' placeholder='Search by activity'/>
                <button className='button_continent'></button>
            </div>
            <div className='filtered_input_activity'>
            <select
                    className='input_continent'
                    // onChange={e => handleActivities(e)}
                >
                    <option>Filter by activity</option>
                    {/* {
                        arrayActivities.map( a => {
                            return(
                                <option key={a.name} value={a.name} > {a.name} </option>
                            )
                        })
                    } */}
                </select>

                <button className='button_activity'></button>
            </div>
        </div>
    </div>
  )
}
