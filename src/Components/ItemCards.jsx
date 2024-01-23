import React from 'react'
import DeatilsItem from './DeatilsItem';
import { addItem } from '../utils/CartSlice';
import { useDispatch } from 'react-redux';

const ItemCards = ({ items , add }) => {
  const dispatch = useDispatch();

  const handleCartclick = (item) =>{
       dispatch(addItem(item));
  }


  return (

    <div className='items' >


      {items.map(item =>
        <div key={item.card.info.id}>
          <div style={{ paddingBottom: 14 , margin:'10px'}}>
            <div className='one two'>
              <div className='cal'>
                <div style={{ marginTop: 4 }}>
                  <h3 className='hed3'> {item.card.info.name} </h3>
                </div>

                <div style={{ marginTop: 4, alignItems: 'center' }}>
                  <span className='div5'>
                    ₹{item.card.info.price / 100 || item.card.info.defaultPrice / 100}
                  </span>
                </div>
                <div className='des'>
                {item.card.info.description}
                </div>
              </div>
              <div className='styles_itemImage__3CsDL'>
              {/* https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/1acb415ef4a95a8cfaf5051771f4ddfd */}
               <button onClick={() => handleCartclick(item)}

               style={{position:'absolute', backgroundColor:'black' ,color:'white', padding:'4px', opacity:'0.8'}}>{add}</button>
              <img alt='nothing' className='styles_itemImage__3CsDL' src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/"+ item.card.info.imageId
} />
      

              </div>


              
            </div>

          </div>
          <div className="styles_divider__2JelH styles_customized__3n4RE"></div>
        </div>
      )}




    </div>
  )
}


export default ItemCards
