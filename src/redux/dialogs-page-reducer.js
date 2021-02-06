let initialState = {
  dialogs: [
    { id: 1, name: 'Neo' },
    { id: 2, name: 'Trinity' }
  ],

  messages: [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'Hey!' },
    { id: 3, message: 'How are you?' }]
  
}

let dialogsPageReducer=(state=initialState, action)=>{
  
    switch(action.type)
    {case('PUSH-MESSAGE'): 
      
      return {...state,
      messages: [...state.messages, {id:6, message: action.messageBody}],
     }  
      default: return state
    }
  }


export let pushMessageCreator= (messageBody) => ({type: 'PUSH-MESSAGE', messageBody})

export default dialogsPageReducer; 



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

