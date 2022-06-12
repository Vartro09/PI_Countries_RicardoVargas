import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Countries } from '../Countries/Countries';
import { fetchCountries } from '../../store/actions';
import { FilteredBar } from '../FilteredBar/FilteredBar';
import { Pagination } from '../Pagination/Pagination';
import './HomePage.css';



export const HomePage = () => {
  const dispatch = useDispatch();
  const countries = useSelector(state => state.countries);
  const [currentPage, setCurrentPage] = useState(1);
   const [itemsPerPage ] = useState(8);

   useEffect(() => {
      dispatch(fetchCountries());
   }, [dispatch]);

   const indexOfLastItem = currentPage * itemsPerPage;
   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
   const currentItems = countries.slice(indexOfFirstItem, indexOfLastItem)

   return (

    <div className="home_page">
      <div>
        <FilteredBar />
      </div>
      <div>
        <Countries countries={currentItems} />
      </div>
      <div>
        <Pagination countries={countries} itemsPerPage={itemsPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage} />
      </div>
    </div>
  )
}
