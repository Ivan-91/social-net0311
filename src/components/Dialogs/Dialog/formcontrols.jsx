import React from 'react';
import styles from './formcontrols.module.css'

export const required = value => value ? undefined : 'Field is reuired'
 const maxLengthCreator = maxLength => value => value && value.length > maxLength ? `max length must be less then ${maxLength}` : undefined
export const maxLength15 = maxLengthCreator(15)

 const RenderField = ({input, meta, type, ...props})=> {
   
  const hasError = meta.touched&&meta.error
  return(
    <div className={hasError&&styles.error} >
      {props.children}
      {hasError&&<span>{meta.error} </span>}
    </div>
  )
}

export const Input = (props)=>{
  const {input, meta, ...restProps}=props
  return <RenderField {...props} ><input {...input} {...restProps} /></RenderField> 
  
}

export const TextArea = (props)=>{
  const {input, meta, ...restProps} = props
  return <RenderField {...props}><textarea {...input} {...restProps}/> </RenderField>
}