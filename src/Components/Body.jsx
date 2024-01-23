import React, { useState, useEffect } from 'react'
import ReastaurantCard from './ReastaurantCard';
import Background from './Background';
import { Link } from 'react-router-dom';
import useOnline from '../utils/useOnline';


const Body = () => {

  const [search, setSearch] = useState("");
  const [list, setlist] = useState([]);
  const [filterListres, setfilterList] = useState([]);

console.log(list);

  useEffect(() => {
    fetchData();

  }, []);

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.145923&lng=79.08762999999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
   
    setlist(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    setfilterList(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
  }


  const onelineStatus = useOnline();
  if(onelineStatus === false) return <h1>
    You are offline
  </h1>



  return list.length === 0 ? <Background /> : (
    <div className='body'>

      <div className="input-container">

        <input className='inputTag' value={search} onChange={(e) => {
          setSearch(e.target.value);
          console.log(search);
        }} />

        <button className='input-btn' style={{marginTop:"30px"}} onClick={() => {
          const newlist = list.filter((res) => res.info.name.toLowerCase().includes(search.toLowerCase())
          );

          setfilterList(newlist);
        }}>


          Search
        </button>

        <div className='search'>
          <button className='search_btn'
            onClick={() => {
              const filterList = list.filter((res) => res.info.avgRating > 4.3);
              
              setfilterList(filterList);

            }}

          >Top Rated Reastaurant</button>

        </div>
      </div>
 <div className='res-container'>
        {filterListres.map((restaurant) => (

          <Link
            key={restaurant.info.id}
            to={"/reastaurant/" + restaurant.info.id}
            style={{ textDecoration: 'none' }}
          >
            <ReastaurantCard resData={restaurant} />
          </Link>

        ))}

      </div>

    </div>
  )
}

export default Body;
