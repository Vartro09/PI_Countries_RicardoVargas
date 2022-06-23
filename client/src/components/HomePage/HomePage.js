import React, { useState } from 'react';
import { useSelector } from 'react-redux';
// import { orderAz } from '../../store/actions';
import { Countries } from '../Countries/Countries';
// import { fetchCountries } from '../../store/actions';
import { FilteredBar } from '../FilteredBar/FilteredBar';
import { Pagination } from '../Pagination/Pagination';
import { SocialBar } from '../SocialBar/SocialBar';
import './HomePage.css';


export const HomePage = ( ) => {
  // const dispatch = useDispatch();
  const countries = useSelector(state => state.filteredCountries);
  const ordenado = useSelector(state => state.ordenado);

  if (ordenado) {
    console.log(ordenado)
  }

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage ] = useState(8);


  //  useEffect(() => {
  //     dispatch(orderAz());
  //  }, [dispatch]);

   const indexOfLastItem = currentPage * itemsPerPage;
   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
   const currentItems = countries.slice(indexOfFirstItem, indexOfLastItem);
   
   return (

    <div className="home_page">
      <div>
        <SocialBar />
      </div>
      <div>
        <FilteredBar  />
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

