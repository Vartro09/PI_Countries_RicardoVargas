import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Countries } from '../Countries/Countries';
import { FilteredBar } from '../FilteredBar/FilteredBar';
import { Pagination } from '../Pagination/Pagination';
import { SocialBar } from '../SocialBar/SocialBar';
import { Spinner } from '../Spinner/Spinner';
import './HomePage.css';


export const HomePage = ( ) => {

  // const countries = useSelector(state => state.countries);
  const countries = useSelector(state => state.filteredCountries);
  const ordenado = useSelector(state => state.ordenado);

  if (ordenado) {
    console.log(ordenado)
  }


  let [spinner, setSpinner] = useState(false);

  const switchSpinner = () => {
    setTimeout(() => {
      setSpinner(spinner = true)
    }, 1000)
  }

  switchSpinner();


  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage ] = useState(10);



   const indexOfLastItem = currentPage * itemsPerPage;
   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
   const currentItems = countries.slice(indexOfFirstItem, indexOfLastItem);
   
   return (

    <div className="home_page">
        
      <div className='animate animate__fadeInLeft'>
        <SocialBar />
      </div>

      <div>
        <FilteredBar  />
      </div>
      <div>
        { spinner ?  <Countries countries={currentItems} /> : <Spinner /> }
      </div>
      <div>
        <Pagination countries={countries} itemsPerPage={itemsPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage} />
      </div>
    </div>
  )
}

