import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import styles from './UsersPage.module.css'
import {  } from '../../assets/images/user.png';
import { NavLink } from 'react-router-dom';
import * as axios from 'axios'




const useStyles = makeStyles({
  root: {
    maxWidth: 122,
    margin: 5,
    borderRadius: 11,
    marginTop:11,
    height:222
    
    
  },
  media: {
    width:122,
    height: 122 ,
    
  },
  
});




 const userPhoto = 'https://qph.fs.quoracdn.net/main-qimg-4981709faa24c748ed82b3670bf32bea'




let Users=(props)=>{
  

  const classes = useStyles();
   
    let pagesCount = Math.ceil(props.itemsCount/props.pageSize)
    let pages=[]
    for (let i=1; i<=pagesCount; i++){
      pages.push(i)
    }
    
  return <div> 
    <div>{pages.map((p)=> {
      
        return <span className={props.currentPage===p && styles.selected}
                onClick={()=>props.onPageChanged(p)}>{p}</span>
  }) }</div>
    
    
  {props.users.map(u => <div key={u.id}>


    <Card className={classes.root}>
        <CardActionArea>
        <NavLink to ={'/profile/' +u.id} ><CardMedia
            className={classes.media}
            image={u.photos.small != null ? u.photos.small : userPhoto }
            title={"Contemplative Reptile"}
          /></NavLink>
          <CardContent>
            <Typography gutterBottom variant="h6" component="h7">
            {u.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            {u.status}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
        {u.follow
        ?<Button disabled={props.followInProgress.some(id=>id===u.id)} onClick={()=>{
          
          props.toogleIsFollow(true, u.id)
          axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
          {
            withCredentials:true, 
            headers:{"API-KEY":"c0a17497-1a2e-493a-b759-d597a8494645"}
          }).then(response => {
            if (response.resultCode===0){
          props.unfollow(u.id)}
          props.toogleIsFollow(false, u.id)})
           
          }}>Unfollow</Button>
        :<Button disabled={props.followInProgress.some(id=>id===u.id)}  onClick={()=>{
          props.toogleIsFollow(true, u.id)
          
          axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, 
          {
            withCredentials:true,
            headers:{"API-KEY":"c0a17497-1a2e-493a-b759-d597a8494645"}
          }).then(response => {
            if (response.resultCode===0){
          props.follow(u.id)}
          props.toogleIsFollow(false, u.id)})
          
          }}>Follow</Button>}
        </CardActions>
      </Card>
  


   
  

  </div> 
      )}
      </div>}
   
        
  


export default Users