import React from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import s from './Header.module.css'


const Header = (props) => {
    
  
    return <header className={s.header}>
        <img src='https://image.shutterstock.com/z/stock-photo-cracks-on-the-surface-of-the-blue-ice-frozen-lake-in-winter-mountains-it-is-snowing-the-hills-of-655427254.jpg' />
        <div className={s.login}>
          {props.isAuth? <div>{props.login}<button onClick={props.logout}>logout</button></div> : <NavLink to='/login'>login</NavLink> }</div>
      </header> 
}

export default Header