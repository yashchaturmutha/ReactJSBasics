import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        // flexBasis: '33.3%',
        margin:'1rem',
        borderRadius: 10
    },
    media: {
        height: 200
    },
    text: {
          fontSize: [35, "!important"]
      }
      ,
      btn:{
        borderRadius: 20
      }
});

const MediaCard = (props) =>
{
    console.log(props.menuData);
    const classes = useStyles();
    return(
        <>
         <section className="main-card--container">
    {
        props.menuData.map((currMenuData) =>
        {
            const { id, image, name, category, price, description } = currMenuData;
            return (
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={image}
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography variant="body2" style={{fontsize:"1rem", color: "violet" }} component="p">
                                {category}
                            </Typography>
                            <Typography className={classes.text} gutterBottom variant="h5" component="h2">
                                {name}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {description}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button className={classes.btn}variant="contained" size="small" color="primary">
                            Order Now
                        </Button>
                        <Button className={classes.btn}variant="contained" size="small" color="secondary">
                            Read More
                        </Button>
                    </CardActions>
                </Card>
            );
        })
    }
    </section>
    </>
    );
}

export default MediaCard;
