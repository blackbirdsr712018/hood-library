import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import Container from '@material-ui/core/Container';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';


import { red } from '@material-ui/core/colors';
import Icon from '@material-ui/core/Icon';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  }
}));

const dewiClasses = [
    {
        id: '000',
        name:'Computer science, information and general works',
        title: 'Book0',
        image: 'bike.jpg'
    },
    {
        id: '100',
        name:'Philosophy and psychology',
        title: 'Book1',
        image: 'breakfast.jpg',
        
    },{
        id: '200',
        name:'Religion',
        title: 'Book2',
        image: 'burgers.jpg'

    },{
        id: '300',
        name:'Social sciences',
        title: 'Book3',
        image: 'camera.jpg'
    },{
        id: '400',
        name:'Language',
        title: 'Book4',
        image: 'hats.jpg'
    },{
        id: '500',
        name:' Pure Science',
        title: 'Book5',
        image: 'honey.jpg'
    },{
        id: '600',
        name:'Technology',
        title: 'Book6',
        image: 'morning.jpg'
    },{
        id: '700',
        name:'Arts and recreation',
        title: 'Book7',
        image: 'mushroom.jpg'
    },{
        id: '800',
        name:'Literature',
        title: 'Book8',
        image: 'olive.jpg'
    },{
        id: '900',
        name:'History and geography',
        title: 'Book9',
        image: 'plant.jpg'
    },
]

export default function Subject() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      

      

      <main>
      <Typography className={classes.title} variant="h6" noWrap>
      Computer science, knowledge and systems
          </Typography>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {dewiClasses.map(card => (
              <Grid item key={card.id} xs={12} sm={6} md={3}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image= {'img/' + card.image}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                  <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="subject" >

                     
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.title}
                    </Typography>
                    <Typography>
                      Say something  about {card.title} here.
                    </Typography>
                    </Link>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      Details
                    </Button>
                    
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}