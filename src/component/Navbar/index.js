/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState}  from 'react'
import {NavLink} from 'react-router-dom'
import './style.css'
import searchImage from '../../assets/icons/glass.png'
/**
* @author
* @function Navbar
**/

const Navbar = (props) => {

   const[search, setSearch] = useState(false);

   const submitSearch = (e) => {
      e.preventDefault();
      alert('Searched');
   }

   const openSearch = () => {
      setSearch(true);
   }

   const searchClass = search ?'searchInput:active':'searchInput';

  return(
    <div className='navbar'>
       <ul className='navbarMenu'>
           <li><NavLink to="/">Home</NavLink></li>
           <li><NavLink to="/about">About Us</NavLink></li>
           <li><NavLink to="/post">Posts</NavLink></li>
           <li><NavLink to="/contact-us">Contact Us</NavLink></li>
        </ul>
      <form onSubmit={submitSearch}>
         <div className='search'>
           <input type="text" className={ searchClass } placeholder="Search"/>
           <img className='searchIcon' onClick={openSearch} src={ searchImage } alt='Search'/>
        </div>
      </form>
    </div>
   )
 }

export default Navbar