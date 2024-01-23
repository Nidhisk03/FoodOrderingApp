import React, { useState, useEffect } from 'react';

const useReastaurant = (resId) =>{
     const [menu, setmenu] = useState(null);
     useEffect(() => {
        fetchData();
      }, []);

      
  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.145923&lng=79.08762999999999&restaurantId=" + resId + "&catalog_qa=undefined&submitAction=ENTER");

    const json = await data.json();
    
    setmenu(json.data);
  }

    return menu;
}

export default useReastaurant;