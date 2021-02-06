import React from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import s from './Dialog.module.css';
import { Field, reduxForm } from 'redux-form'
import {login} from '../../../redux/auth-reducer'
import  {required, maxLength15, Input} from './formcontrols';
import { connect } from 'react-redux';



const LoginForm=(props)=> {
  
  return(
  
    <form onSubmit={props.handleSubmit}>
      <Field name='email' placeholder='Email' component={Input} validate={required} />
      <div><Field name='password' placeholder='Password' component={Input} validate={required}/></div>
      <div><Field name='rememberMe'    type='checkbox' component='checkbox'/> remember me</div>
      <div><button>Login</button></div>
    </form>
 )
}


const Login = (props) => {

  

  let addData=(formData)=>{

  
    props.login(formData.email, formData.password, formData.rememberMe )
    console.log(formData)
  }
  if(props.isAuth){
    return <Redirect to={'/profile'}/>
  }
return (
      <div >
        LOGIN 
        <div><LoginReduxForm onSubmit={addData}/></div>
      </div>
)
}

const LoginReduxForm = reduxForm({form:'login'})(LoginForm)
let mapStateToProps =(state) =>({
  isAuth: state.auth.isAuth
})

export default  connect(mapStateToProps,  {login}) (Login)