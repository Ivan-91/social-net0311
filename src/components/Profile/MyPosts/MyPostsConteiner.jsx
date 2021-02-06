import React from 'react'
import { connect } from 'react-redux';
import { addPostActionCreator, onPostChangeActionCreator } from '../../../redux/profile-page-reducer';
import MyPosts from './MyPosts';




let mapStateToProps = (state) => {
  return {profilePage: state.profilePage}
}
let mapDispatchToProps = (dispatch) => {
  return {
    addPost: (post) => {
                    
      let action = addPostActionCreator(post)
      dispatch(action);
    }
  }
}
const MyPostsConteiner = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export default MyPostsConteiner
