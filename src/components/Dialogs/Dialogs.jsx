import React from 'react';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import Dialog from './Dialog/Dialog';
import s from './Dialogs.module.css';

const Messege = (props) => {
  return <div className={s.dialog}>{props.message}</div>
}

const Dialogs = (props) => {

  
  
  const newdialogs = props.dialogsPage.dialogs.map(d => ( <Dialog name={d.name} id={d.id}/>))
  const newmessages=props.dialogsPage.messages.map(m =><Messege message={m.message} id={m.id}/>)
  
  
  let pushMessage=(values)=>{
    
    props.pushMessage(values.rdxMessage)
  }
 
return (
  <div className={s.dialogs}>
    <div className={s.dialogItems}>
      {newdialogs}       
    </div>
    <div className={s.messages}>
   
      <div>{newmessages}</div>
      <DialogsReduxForm onSubmit={pushMessage}/>

    </div>

  </div> 
      )
}
let DialogsForm = (props)=>{
  return (
    <form onSubmit={props.handleSubmit}>
      <Field name='rdxMessage' component='textarea'/>
      <button>Add new message</button>
    </form>
  )
}
let DialogsReduxForm = reduxForm({form:'dialogs'})(DialogsForm)

export default Dialogs