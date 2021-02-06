import { apiUsers } from "../api"

let initialState = {
  data:{
    id:null,
    email:null,
    login:null,
    isAuth:false
  }
}
let authReducer=(state=initialState, action)=>{
  
 
    switch(action.type){
      case('ADD-AUTH-DATA'):
      return{...state,
        ...action.payload,
        
      }
    

      default:
        return state
    }
}

export let addAuthCreator = (id, email, login, isAuth) => ({type: 'ADD-AUTH-DATA', payload:{id,email,login, isAuth}})
export let addAuthData= ()=> dispatch=>{
  return  apiUsers.getAuth().then(response=>{
    let {id, email, login } = response.data.data  
    if (response.data.resultCode===0){
      dispatch(addAuthCreator(id, email, login, true))
    }
  })
}

export let login = (email, password, rememberMe) => dispatch => {
  apiUsers.login(email, password, rememberMe).then(response=> {
    if (response.data.resultCode===0){
      dispatch(addAuthData())
    }
  })
}
export let logout = ()=> dispatch=> {
  apiUsers.logout().then(response=>{
    if (response.data.resultCode===0){
      dispatch(addAuthCreator(null, null, null, false))
    }
  })
}
export default authReducer



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

