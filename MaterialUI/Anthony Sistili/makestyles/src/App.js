import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme=>({
  root: {
    color: 'brown',
    [theme.breakpoints.up('sm')]: {//MEDIA QUERIES
      color: 'yellow'
    }
  },
  text:{
    fontSize:'2rem',
    color:'green'
  },
  // conditional:{
  //   color:props=>(props.condn?'blue':'orange')
  // },
  conditional:props=>{
    return{
    color:props.condn?'blue':'orange'}
  },
  conditional2:{
    fontSize:'4rem',
    fontWeight:'bold'
  }
}));

export default function App(props) {
  const classes = useStyles(props);
  console.log(classes);
  return( 
  <>
  <Button className={classes.root}>Small</Button>
  <Button className={classes.conditional,classes.conditional2}>conditional</Button>
  <h1 className={classes.text}>Text</h1>
  </>);
}
