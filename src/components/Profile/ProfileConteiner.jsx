import React from 'react';
import { connect } from 'react-redux';
import * as axios from 'axios';


import { setProfile, setStatus, getStatus, putStatus } from '../../redux/profile-page-reducer';
import MyPostsConteiner from './MyPosts/MyPostsConteiner';
import Profile from './Profile';
import s from './Profile.module.css';
import { withRouter } from 'react-router-dom';
import AuthRedirect from '../../hoc';
import { compose } from 'redux';



class ProfileApiConteiner extends React.Component  {
  
componentDidMount(){
  
  
  let userId = this.props.match.params.userId
  if(!userId){userId=12788}
  axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+userId).then(response => {
    this.props.setProfile(response.data)
    
  })

  this.props.getStatus(userId)
}

  render(){
    
    
    return (
    <Profile {...this.props}  />)}
}


let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status
  
})



export default compose(connect(mapStateToProps, {setProfile, setStatus, getStatus, putStatus}), 
withRouter, 
//AuthRedirect
)(ProfileApiConteiner)