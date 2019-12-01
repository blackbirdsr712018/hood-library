import React,  { useState, useEffect  } from 'react';
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
import DeleteIcon from '@material-ui/icons/Delete';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import ClassIcon from '@material-ui/icons/Class';

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
  },
  button: {
    margin: theme.spacing(1),
  }
}));

const dewiClasses = [
  {
    id: '000',
    name: 'Computer science, information and general works',
    title: 'Computer science',
    image: 'cs.jpg'
  },
  {
    id: '100',
    name: 'Philosophy and psychology',
    title: 'Philosophy',
    image: 'ps.jpg',
    sections: [
      { id: '000', title: 'Computer science' },
      { id: '010', title: 'Bibliographies' },
      { id: '020', title: 'Library & information sciences' },
      { id: '030', title: 'Encyclopedias & books of facts' },
    ]
  }, {
    id: '200',
    name: 'Religion',
    title: 'Religion',
    image: 're.jpg'

  }, {
    id: '300',
    name: 'Social sciences',
    title: 'Social sciences',
    image: 'sc.jpg'
  }, {
    id: '400',
    name: 'Language',
    title: 'Language',
    image: 'ln.jpg'
  }, {
    id: '500',
    name: ' Pure Science',
    title: ' Science',
    image: 'sp.jpg'
  }, {
    id: '600',
    name: 'Technology',
    title: 'Technology',
    image: 'tc.jpg'
  }, {
    id: '700',
    name: 'Arts and recreation',
    title: 'Arts and recreation',
    image: 'ar.jpg'
  }, {
    id: '800',
    name: 'Literature',
    title: 'Literature',
    image: 'li.jpg'
  }, {
    id: '900',
    name: 'History and geography',
    title: 'History and geography',
    image: 'hi.jpg'
  },
]

const floors = [
  {
    id: '1000',
    name: 'Floor1',
    title: 'multimdia',
    image: 'cs.jpg'
  },
  {
    id: '2000',
    name: 'Floor2',
    title: 'Sience and Technology',
    image: 'cs.jpg'
  },
  {
    id: '3000',
    name: 'Floor3',
    title: 'Arts and Fiction',
    image: 'cs.jpg'
  },

]

let displayData = dewiClasses;


export default function Classes() {
  const classes = useStyles();
  function changeDisplay(e) {
    debugger;
    console.log(e);

  };

  return (
    <React.Fragment>
      <CssBaseline />


      <AppBar position="static">
        <Toolbar>

          <Typography className={classes.title} variant="h6" noWrap>
            Beneficial-Hodson Library
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        </Toolbar>
      </AppBar>

      <main>

        <div>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            dataBtnName="cat"
            value="d"
            onClick={()=>{displayData = dewiClasses}}
            startIcon={<ClassIcon />}
          >
            Categories
          </Button>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            dataBtnName="floor"
            value="r"
            onClick={()=>{displayData = floors}}
            startIcon={<LocationCityIcon />}
          >
            Floors
          </Button>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {displayData.map(card => (
              <Grid item key={card.id} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={'img/' + card.image}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Link style={{ color: 'inherit', textDecoration: 'inherit' }} to={"subject/" + card.id} >


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
                      View Subjects
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