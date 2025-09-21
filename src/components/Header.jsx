import '../styles/Header.css';
import React, { useState } from 'react';
import { IoIosMenu } from "react-icons/io";
import { Link } from 'react-router-dom';
import { MdOutlineRestaurantMenu } from "react-icons/md";



export default function Header() {
   
    const [isopen, setIsopen] = useState(false);
    const toggleMenu = () => {
      setIsopen(!isopen)
    };

  return (
    <header className='header'>
      <Link to='/'>
      <h1 className='nav_title'>
        IVOIR SECU
      </h1>
      </Link>

      <nav className='nav_box'>

            <Link to='/' className='nav_link'>Accueil</Link>
            <Link to='/Skills' className='nav_link'>Services</Link>
            <Link to='/About' className='nav_link'>A propos</Link>
            <Link to='/Info' className='nav_link'>Infos</Link>
        </nav>
        
        <div className='head_box'>
          <button className={ `head_bt ${isopen ?  'open' : ''} `} onClick={toggleMenu}>
       {isopen ? 
        <MdOutlineRestaurantMenu className='nav_bt' /> :
         <IoIosMenu className='nav_bt' /> 
       }
      </button>


      
            {isopen && (
          <nav className={ `nav_head ${isopen ? 'nav-open' : 'nav-closed'} `} >

            <Link to='/' className='nav_link'>Accueil</Link>
            <Link to='/Skills' className='nav_link'>Services</Link>
            <Link to='/About' className='nav_link'>A propos</Link>
            <Link to='/Info' className='nav_link'>Infos</Link>
        </nav>
        )}
        </div>
    </header>
  );
}



            