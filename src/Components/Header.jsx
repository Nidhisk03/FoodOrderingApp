import React,{useState} from 'react'
import image from './images/download.png'
import { Link } from 'react-router-dom';
import useOnline from '../utils/useOnline';
import { useSelector } from 'react-redux';

import "./../index.css";

const Header = () => {
  const [btnName,setbtnName] = useState("Login");
  const online = useOnline();
  const cartItems = useSelector((store)=> store.cart.items);
  console.log(cartItems);


  return (
    <div className='header '>
      
      <div className='logo-container'>

        <img className='logo'alt='nnj' src={image} />

      </div>

     <div className='nav-items'>
        <ul >
        <li>{online ? "🟢" : "🔴"}</li>
          <li>
          <Link style={{paddingLeft: 13, textDecoration: 'none'}} to="/">Home</Link>        
          </li>

          <li> <Link style={{paddingLeft: 13, textDecoration: 'none'}} to="/about"> About Us</Link></li>

          <li><Link style={{paddingLeft: 13, textDecoration: 'none'}} to="/contact">Contact Us</Link></li>

          <li><Link style={{paddingLeft: 13, textDecoration: 'none'}} to="/cart">Cart ({cartItems.length})</Link></li>

          <button className='login' onClick={()=>{
           
           btnName==="Login" ? setbtnName("Logout"): setbtnName("Login");
          }}>
            {btnName}
          </button>
        </ul>

      </div> 
      
    </div>
  )
}

export default Header
