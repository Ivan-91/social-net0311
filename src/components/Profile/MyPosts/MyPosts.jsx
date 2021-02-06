import React from 'react'
import { Field, reduxForm } from 'redux-form';
import { addPostActionCreator, onPostChangeActionCreator } from '../../../redux/state';
import { required, TextArea } from '../../Dialogs/Dialog/formcontrols';
import Post from './Post/Post'


const MyPosts = (props) => {
  
   let newposts = props.profilePage.posts.map(p => <div><Post message={p.message} likecount= {p.likecount}/></div> )
   let addNewPost=(values)=>{
    props.addPost(values.addPost)
  }
  
    return (
      
        <div>
          <h3>My Posts</h3>
          <div>{newposts}</div>
          <AddPostRedux onSubmit={addNewPost}/>
          
          
      
        </div>
    )
}

let AddPostForm = (props)=> {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field name='addPost' component={TextArea} validate={required} />
      <button>add new post</button>
    </form>
  )
}
let AddPostRedux = reduxForm({form:'addPostForm'})(AddPostForm)
export default MyPosts