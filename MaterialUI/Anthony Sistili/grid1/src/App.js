import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    // backgroundColor:'red'
    // border:'2px solid red'
  },
  root2:{
    alignItems:'center',
    justifyContent:'space-around',
    // width:'100%',
    // margin:'auto',
    border:'2px solid red'
  }
}));

export default function App() {
  const classes = useStyles();

  return (
    <>
    <div className={classes.root}>
      {/* container is grid , usme items honge */}
      <Grid container direction='column' spacing={3}>
        {/* 0-600 px => 12 cols , 600-960px => 6 cols */}
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>xs=12</Paper>
        </Grid>

         {/* container is grid , usme items honge */}
        <Grid  item xs={12} container spacing={4}>
          {/* <Paper className={classes.paper}>xs=6</Paper> */}
          <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={9}>
          <Paper className={classes.paper}>xs=9 OOKKK</Paper>
        </Grid>
        </Grid>

        <Grid item xs={12}>
        <Divider style={{backgroundColor:'red'}}/>
        </Grid>

        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
      </Grid>

      <Grid className={classes.root2}spacing={2} container>
     <Grid  item xs={4}>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad odit culpa illum esse, inventore dolorem repudiandae perferendis ipsum sapiente deleniti quae repellat dignissimos exercitationem fugit amet ab modi. Nostrum fuga eaque porro excepturi veniam consequuntur cupiditate sit veritatis molestiae delectus praesentium aliquam, accusamus tenetur atque quasi totam perspiciatis dicta modi neque maiores! Voluptatum error nostrum soluta dolores rem ut suscipit voluptas dolor reprehenderit sequi quasi, vitae harum voluptatibus, perferendis eos nulla doloribus, obcaecati laborum incidunt? Aperiam neque eos adipisci deleniti nihil eaque nobis, ad placeat maiores tempora cumque eum fuga optio? Rerum voluptatibus recusandae culpa commodi modi minima doloribus ullam iste eos explicabo minus nesciunt, ipsum obcaecati nostrum! Possimus atque amet, ratione nulla error accusamus eum. Architecto repellendus labore, placeat eius eveniet, cumque voluptatum ipsa perspiciatis nostrum iusto rerum numquam nesciunt autem maiores beatae veniam laudantium dignissimos tempora veritatis nemo libero ab, rem vitae optio. Tempore porro modi explicabo aliquam, dolor quibusdam laudantium facere provident. Dolorum, perferendis nemo earum nobis minus sapiente saepe veritatis eveniet officiis et sint laudantium! Aperiam eligendi impedit incidunt debitis autem, provident sequi harum obcaecati deleniti! Possimus dolorum omnis hic numquam blanditiis est doloribus minima culpa optio impedit? Harum veniam accusantium, voluptates ullam nam animi qui.
     </Grid>
     <Grid item xs={4}>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, blanditiis accusamus, fugit asperiores ipsa, ducimus rem hic iusto nam doloremque animi ea incidunt magni obcaecati at corporis possimus consequatur! Deleniti dolor iste beatae reprehenderit illum repudiandae vero, magnam tenetur perspiciatis quas. Tenetur itaque eaque eius tempore? Voluptatibus incidunt cumque dolor minus optio expedita accusantium at. Inventore, voluptatem. Corrupti esse iste et. Ea distinctio unde ab! Fugit ipsum distinctio vitae sequi explicabo possimus iure voluptatem dolor itaque! Eligendi autem placeat deserunt veniam dolore modi numquam omnis et provident ullam, pariatur sapiente quisquam consequuntur excepturi iste neque officiis aperiam accusamus inventore quos blanditiis unde? Quidem aperiam distinctio at magni, nostrum atque, corrupti architecto aspernatur totam deleniti facere, debitis similique provident quis. Nobis voluptates excepturi impedit dolorem, dolorum nesciunt autem porro voluptatem voluptas at, ducimus, ipsa numquam id eveniet neque? Numquam porro, incidunt nihil esse aspernatur modi magnam, quae eligendi impedit minus culpa ea soluta quia commodi repudiandae veritatis? Fugit libero quo perferendis neque ipsa expedita, aliquam delectus tempora odio minus sed, quam laudantium a quasi porro. Tenetur nostrum quis ullam laborum, neque fugit nihil fuga praesentium sequi a eum est, quisquam accusamus quos similique itaque distinctio amet quo nulla? Natus, fuga neque.
     </Grid>
     </Grid>

    </div>
     
     </>
  );
}

