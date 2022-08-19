import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getActivities   } from '../store/actions';


export const RenderActivities = () => {
    const dispatch = useDispatch();
    const arrayActivities = useSelector( state => state.arrayActivities);

    useEffect(() => {
        dispatch(getActivities());
    }, [dispatch])

  return (
    <div>
        {
            Array.isArray(arrayActivities) ? arrayActivities.map( a => {
                return( 
                    <h1 key={a.id} value={a.name} > {a.name} </h1> 
                )
            }) : null
        } 
    </div>
  )
}
