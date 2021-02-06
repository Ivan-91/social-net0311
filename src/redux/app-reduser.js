import {addAuthData} from '../redux/auth-reducer'

let initialState = {
  initialize:false
}
let appReducer=(state=initialState, action)=>{
  
 
    switch(action.type){
      case('INITIAL-DATA'):
      return{
        initialize:true        
      }
    

      default:
        return state
    }
}


let initDone = () => ({type: 'INITIAL-DATA'})
export let initApp = ()=> (dispatch)=> {
  let promise = dispatch(addAuthData())
  promise.then(()=>{
    dispatch(initDone())
  })
}


export default appReducer



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

