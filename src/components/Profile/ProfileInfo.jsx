
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { NavLink } from 'react-router-dom';



const useStyles = makeStyles({
  root: {
    maxWidth: 222,
    margin: 5,
    borderRadius: 9,
    marginTop:11,
    height:333
  },
  media: {
    height: 222 ,
    
  },
  
});

const ProfileInfo = (props) => {

    const classes = useStyles();

    let job = ()=>{
    return <div>ищу работу</div>}
    if (!props.profile){
        return <div>123</div>
    }
    return (
        <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={props.profile.photos.large}
            title={"Contemplative Reptile"}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
            {props.profile.fullName}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            {props.profile.aboutMe}
            </Typography>
          </CardContent>
        </CardActionArea>
        
      </Card>
  



       /* <div>
            <img src = {props.profile.photos.large}/>
            <div>{props.profile.aboutMe}</div>
            <div>{job}!</div>
            
            <div>
            {props.profile.lookingForAJobDescription}
            </div>
            <div>
            {props.profile.fullName}
            </div>
        </div>*/
    )
    }

export default ProfileInfo