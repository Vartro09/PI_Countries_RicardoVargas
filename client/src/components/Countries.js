import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Country from './Country';
import { fetchCountries } from '../store/actions';
import './countries.css';

// const renderData = (countries) => {
//   let countries = useSelector( (state) => state.countries );
//   return (
//     countries.map( c =>  {
//       return  <Country name={c.name} img={c.img} key={c.id} continent={c.continent} />
//     })
//   )
// }

export const Countries = () => {
   let countries = useSelector( (state) => state.countries );
   let dispatch = useDispatch();

   const [currentPage, setCurrentPage] = useState(1);
   const [itemsPerPage, setItemsPerPage] = useState(8);

   const [pageNumberLimits, setPageNumberLimits] = useState(5);
   const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
   const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);


   const pages = [];
   for (let i = 1; i < Math.ceil(countries.length/itemsPerPage); i++) {
     pages.push(i)
   }

   const indexOfLastItem = currentPage * itemsPerPage;
   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
   //const currentItems = countries.slice(indexOfFirstItem, indexOfLastItem);

   const handleClick = (e) => {
     setCurrentPage(Number(e.target.id));
   }

   const renderPageNumbers = pages.map( (number) => {

    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      
      return (
        <li 
          key={ number } 
          id={ number } 
          onClick={handleClick}
          className={currentPage === number ? "active" : null }
        >
          {number}
        </li>
      )

    } else {
      return null
    }

   });

   useEffect( () => {
    dispatch(fetchCountries());
   }, []);

   const handleNextBtn = () => {
     setCurrentPage(currentPage+1);

     if (currentPage+1 > maxPageNumberLimit) {
       setMaxPageNumberLimit(maxPageNumberLimit+pageNumberLimits);
       setMinPageNumberLimit(minPageNumberLimit+pageNumberLimits);

     }
   }

   const handlePrevBtn = () => {
    setCurrentPage(currentPage-1);

    if ((currentPage-1) % pageNumberLimits == 0) {
      setMaxPageNumberLimit(maxPageNumberLimit-pageNumberLimits);
      setMinPageNumberLimit(minPageNumberLimit-pageNumberLimits);

    }
  }

  let pageIncrementBtn = null;
  if (pages.length > maxPageNumberLimit) {
    pageIncrementBtn = <li onClick={ handleNextBtn}  >...</li>
  }

  let pageDecrementBtn = null;
  if (minPageNumberLimit >= 1) {
    pageDecrementBtn = <li onClick={ handlePrevBtn } >...</li>
  }

   //console.log(countries);
  return (
    <div>
      <div className='countries_container'>

          {
              countries.map( c =>  {
                return  <Country name={c.name} img={c.img} key={c.id} continent={c.continent} />
              }).slice(indexOfFirstItem, indexOfLastItem)
          }

          <ul className='pageNumbers'>
            <li>
              <button 
                onClick={handlePrevBtn} 
                disabled={currentPage === pages[0] ? true : false} 
              >
                Prev
              </button>
            </li>

            { pageDecrementBtn }
            { renderPageNumbers }
            { pageIncrementBtn }

            <li>
              <button 
                onClick={handleNextBtn} 
                disabled={currentPage === pages[pages.length-1] ? true : false} 
              >
                Next
              </button>
            </li>

          </ul>
      </div>
    </div>
  )
}
