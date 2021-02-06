import { Button } from '@material-ui/core';
import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';

const Navbar = () => {
    return <nav className ={s.nav}>
    <div className= {s.item}>
      <Button>
      <NavLink to ='/profile' activeClassName={s.activeLink}>Profile</NavLink>
      </Button>
    </div>
    <div className={s.item}>
    <Button>
      <NavLink to = '/dialogs' activeClassName={s.activeLink}>Messages</NavLink>

      </Button>
    </div>
    <div className={s.item}>
    
      <NavLink to = '/users' activeClassName={s.activeLink}><Button>Users</Button></NavLink>
      
    </div>
    <div>
      <a>My News</a>
    </div>
    <div>
      <a>Music</a>
    </div>
    <div>
      <a>Settings</a>
    </div>
    <div>
      <h3>Friends</h3>
    </div>
  </nav>
}

export default Navbar