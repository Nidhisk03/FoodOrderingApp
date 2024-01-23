import React from 'react'

import "./../index.css";

const ReastaurantCard = (props) => {
  
const {resData } = props;


  return (
    <div className='res-card'>
      <img alt='nothing' className='image' src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+resData.info.cloudinaryImageId} />
      <h3 style={{marginBottom:"10px"}} >{resData.info.name}</h3>
    
      <p>{resData.info.cuisines.slice(0,6).join(", ")}</p>
      <div style={{display:"flex" }}> 
      <h4>{resData.info.avgRating}⭐</h4>
      <h4>🕑 {resData.info.sla.deliveryTime} Min</h4>
      </div>
      
    </div>
  )
}

export default ReastaurantCard
