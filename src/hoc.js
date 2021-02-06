import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

 let AuthRedirect = (Component) => {
  let RedirectComponent=(props)=> {
    
  return (!props.isAuth)?<Redirect to='/login'/>:<Component {...props}/>
}
    
let connectedRedirectComponent=connect (mapStateToProps) (RedirectComponent)
return connectedRedirectComponent
  
}

let mapStateToProps =(state)=> ({
  isAuth:state.auth.isAuth
})

export default AuthRedirect