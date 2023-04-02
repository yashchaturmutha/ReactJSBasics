import React from 'react';
import { createMuiTheme ,ThemeProvider} from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { yellow, orange } from '@material-ui/core/colors';
const theme = createMuiTheme({
  palette: {
    primary:orange
  }
});
const useStyles=makeStyles({

  typographystyle:{
      fontSize:'1rem',
      fontFamily:'Roboto'
      // default fontsize=6em

      // color:'primary', {doesnt works}
      // color:'green',{works}
    },
    gutterBottom:{
      marginBottom:'5rem'
    }
  });

const App = () => {
    const classes=useStyles();

  return (
    <>
    <ThemeProvider theme={theme}>
      <Typography 
      color='primary'
      
      gutterBottom

      classes={{
        gutterBottom:classes.gutterBottom
      }}//overiding gutterbottom default styles
      
      variant="h1"
      noWrap
      // {if the text doesnt fits in screen then it will put '...' for the remaining text}
      
      className={classes.typographystyle}>
        Hello
        {/* Hello
        Hello
        Hello
        Hello
        Hello
        Hello
        Hello
        Hello
        Hello
        Hello
        Hello
        Hello
        Hello
        Hello
        Hello
        Hello
        Hello */}
      </Typography>
      </ThemeProvider>
      <hr />
    </>
  );
}

export default App
