import React from 'react'
import { useSelector } from 'react-redux';
import ItemCards from './ItemCards';
import { useDispatch } from 'react-redux';
import {  clearCart,removeItem } from '../utils/CartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const handleCartclick = (item) =>{
    dispatch(clearCart());
}

const handleRemove = (item) =>{
  dispatch(removeItem());
}


  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className='cart'>
      <div style={{display:'flex' , justifyContent:'space-between'}}>
        <h1 style={{ margin: '10px' }}>Cart</h1>
        <button className='input-btn' onClick={handleCartclick}>Clear Cart</button>
      </div>
      <div >
        {cartItems.length === 0 ?
          <h4 style={{ margin: '10px' }}>Your Cart is Empty</h4> :
          <ItemCards items={cartItems} add="Remove-" bnbbbbbbbb />}
      </div>

    </div>
  )
}

export default Cart
