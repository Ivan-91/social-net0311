import React from 'react';
import MyPostsConteiner from './MyPosts/MyPostsConteiner';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo';
import ProfileStatus from './ProfileStatus';



const Profile = (props) => {
  
  
    return <div className={s.content}>
    
    <div><ProfileInfo profile = {props.profile}/></div>
    <div><ProfileStatus {...props} /></div>
    <div><MyPostsConteiner/></div>
    
   
  </div>
}

export default Profile