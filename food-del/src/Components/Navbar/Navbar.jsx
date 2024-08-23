import React, { useContext, useState } from 'react'
import './Navbar.css'
import {assets} from "../../assets/assets"
import { Link } from 'react-router-dom'
import { StoreContext } from '../../Context/StoreContext'

const Navbar = ({setshowLogin}) => {
const [menu, setmenu] = useState("")
const {getTotalCartAmount} = useContext(StoreContext)
  return (
    <div className='navbar'>
        <Link to='/'><img src={assets.logo} alt="" className='logo'/></Link>
        <ul className='nav-menu'>
         <Link to='/'> <li onClick={()=>setmenu("home")} className={menu==="home"?"active":""}>Home</li></Link>
          <Link to='/menu'> <li onClick={()=> setmenu("menu")}className={menu==="menu"?"active":""}>Menu</li></Link>
         <Link to='/app'> <li onClick={()=> setmenu("mobile-app")}className={menu==="mobile-app"?"active":""}>Mobile-app</li></Link>
          <li onClick={()=> setmenu("contact-us")}className={menu==="contact-us"?"active":""}>Contact us</li>
        </ul>
        <div className="navbar-right">
          <img src={assets.search_icon} alt="" />
          <div className="search-icon">
            <Link to='/cart'><img src={assets.basket_icon} /></Link>
            <div className={getTotalCartAmount()===0?"":"dot"}></div>
          </div>
          <button onClick={()=>setshowLogin(true)} >Sign in</button>

        </div>
      
    </div>
  )
}

export default Navbar
