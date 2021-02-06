import dialogsPageReducer from "./dialogs-page-reducer"
import profilePageReducer from "./profile-page-reducer"

let store = {
  _subscriber() {
    console.log('no subscriber(observers)')
  },
  _state: {
  profilePage:{
    posts: [
      {message:'hi', likecount:1},
      {message:'hey', likecount:2},
      {message:'lalalay', likecount:3}],
    textPost: ''
  },
  
    dialogsPage: {
      dialogs: [
        { id: 1, name: 'Neo' },
        { id: 2, name: 'Trinity' }
      ],

      messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'Hey!' },
        { id: 3, message: 'How are you?' }],
      newMessageBody:''
    }
  },
  getState() {
    return this._state
  },
  subscribe(observer) {
    this._subscriber = observer
  },
  setFirstName(value) {
    this._state.dialogsPage.messages.message=value
    this._subscriber()
  },
  
  dispatch(action){
    debugger
    profilePageReducer(action, this._state.profilePage);
    dialogsPageReducer(action, this._state.dialogsPage)
    this._subscriber(this._state)
  }
}


export default store; 



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

