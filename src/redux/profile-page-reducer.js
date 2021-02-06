import {getUserStatus, putUserStatus} from '../api'

let initialState = {
  profile: null,
  posts: [
    {message:'hi', likecount:1},
    {message:'hey', likecount:2},
    {message:'lalalay', likecount:3}],
  
  status:'hi'
  
}
let profilePageReducer=(state=initialState, action)=>{
  
 
    switch(action.type){
      case('ADD-POST'):
      return{...state,
      posts:[...state.posts,
        {message: action.post, likecount:0} ]
        }

      case('UPDATE-TEXT'):
     return {...state,
      textPost:action.newSymbol}

      case('SET-PROFILE'):
      return {...state, profile: action.profile}

      case('SET-STATUS'):
      return {...state, status: action.status}

      default:
        return state
    }
}

export let addPostActionCreator = (post) => ({type: 'ADD-POST', post})
export let setProfile = (profile) => ({type: 'SET-PROFILE', profile})

export let setStatus= (status)=> ({type:'SET-STATUS', status})
export let getStatus= (userId)=> (dispatch)=>{
    getUserStatus(userId).then(response=>{
      dispatch(setStatus(response.data))
    })
  }

export let putStatus= (status)=> (dispatch)=>{
    putUserStatus(status).then(response=>{
      if (response.data.resultCode===0){
      dispatch(setStatus(status))}
    })
  }

export default profilePageReducer; 



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

