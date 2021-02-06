import getUsers from "../api"

let initialState = {
  users: [],
  currentPage:1,
  pageSize:5,
  itemsCount:0,
  isFetching: false,
  followInProgress: []
}
let usersPageReducer=(state=initialState, action)=>{
  
 
    switch(action.type){

      case('IS-FETCHING'):
      return{
        ...state,
        isFetching: action.isFetching
      }
      case('IS-FOLLOW'):
      return{
        ...state,
        followInProgress: action.isFetching===true?[...state.followInProgress, action.userId] : state.followInProgress.filter(id=>id!=action.userId)
      }
      
      case('FOLLOW'):
      return{...state,
      users:state.users.map(u=>{
       if (u.id===action.userId) return {...u, follow:true}
      else return u})}

      case('UNFOLLOW'):
     return {...state,
      users:state.users.map(u=>{
        if (u.id===action.userId) return {...u, follow:false}
        else return u})}
      
      case('SET_USERS'):
        return {...state, users:[...action.users]}
      
      case('SET_PAGE'):
        return {...state, currentPage:action.currentPage}

      case('SET_TOTAL_COUNT'):
        return {...state, itemsCount: action.totalCount}



      default:
        return state
    }
}

export let follow = (userId) => ({type: 'FOLLOW', userId})
export let unfollow = (userId) => ({type: 'UNFOLLOW', userId})
export let setUsers = (users) => ({type: 'SET_USERS', users})
export let setCurrentPage = (currentPage) => ({type: 'SET_PAGE', currentPage})
export let setTotalCount = (totalCount) => ({type: 'SET_TOTAL_COUNT', totalCount})
export let toogleIsFetching = (isFetching)=> ({type:'IS-FETCHING', isFetching})
export let toogleIsFollow = (isFetching, userId)=> ({type:'IS-FOLLOW', isFetching, userId})

export const getUsersThunk = (currentPage, pageSize)=> {
  return (dispatch)=>{
  getUsers(currentPage, pageSize).then(response => {
    dispatch(toogleIsFetching(false))
    dispatch(setUsers(response.data.items))
    dispatch(setTotalCount(response.data.totalCount))
  })
}}
export default usersPageReducer; 



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

