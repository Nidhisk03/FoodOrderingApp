import React, { useState } from 'react'
import ItemCards from './ItemCards';

const ResCategory = ({data , show ,setshoweindex}) => {

  

  console.log(data);
const handleClick = () =>{
   setshoweindex();
}



  return (
    <div className='acc' >
        <div className='acc-title' onClick={handleClick} >
            <div className='acc-one'>
           <span style={{ fontWeight:800, color: '#3e4152',fontSize:'1.3rem', display:'inline-block'}}>{data.title} ({data.itemCards.length})</span>
           <span style={{marginRight: 20}}>⬇️</span>
           </div>
        </div>



       {show && <ItemCards items={data.itemCards} add="Add+" /> }
    </div>
  )
}

export default ResCategory;
