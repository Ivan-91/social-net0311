import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Login from './components/Dialogs/Dialog/Login';
import DialogsConteiner from './components/Dialogs/DialogsConteiner';
import Header from './components/Header/Header';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import ProfileConteiner from './components/Profile/ProfileConteiner';
import UsersPage from './components/UsersPage/UsersPage';
import UsersContein from './components/UsersPage/UsersPageConteiner';
import {initApp} from './redux/app-reduser'
import Preloader from './components/UsersPage/UsersPageConteiner'



class App extends React.Component  {
  
  componentDidMount(){
    this.props.initApp()
  }

 render(){
   if (!this.props.initialize){
     return <Preloader/>
   }
  return (
    
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path='/profile/:userId?' render={()=>
            <ProfileConteiner/>} />
          <Route path='/dialogs' render={()=>
            <DialogsConteiner/>} />
          <Route path='/users' render={()=>
            <UsersContein/>} />
          <Route path='/login' render={()=>
            <Login/>}/> 
        </div>
      </div>
    
  )};
}


let mapStateToProps = (state)=> ({
  initialize:state.app.initialize
})

export default connect(mapStateToProps, {initApp} )(App);
