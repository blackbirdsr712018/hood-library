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

import  Footer  from '../common/Footer';




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



//https://codesandbox.io/s/react-hooks-usestate-and-useeffect-m3x6c

export default function Landing() {
  const [tiles, setTiles] = useState([]);
  const [count, setCount] = useState([]);
  const classes = useStyles();

  const onMouseMove = (e) => {
    console.log(e);
  }
 

  useEffect(   () => {
    console.log("hi");
    // fetch("http://localhost:8080/api/floors")
    //   .then(response => response.json())
    //   .then(data => {
    //     const x = [1,3];
    //     setTiles(data); // set users in state
    //     console.log(data);
    //     console.log(tilesx);
    //   });
async function fetchData() {
  //const response = await fetch("http://localhost:8080/materials");
    const response = await fetch("http://40.76.208.116:8080/materials");
    const data =  await response.json();
    setTiles(data);
    //debugger;
    //console.log(tiles);
}
fetchData();
    document.title = `clicked ${tiles} times`
      
  }, []);


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
           
            value="d"
            onClick={()=>{setCount(count + 1)}}
            startIcon={<ClassIcon />}
          >
            Categories
          </Button>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            
            value="r"
            onClick={()=>{}}
            startIcon={<LocationCityIcon />}
          >
            Floors
          </Button>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            
            {tiles.map(card => (
              <Grid item key={card.id} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={'img/' + card.image}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Link style={{ color: 'inherit', textDecoration: 'inherit' }} to={ card.key} >


                      <Typography gutterBottom variant="h5" component="h2">
                        {card.title}
                      </Typography>
                      <Typography>
                        Say something  about {card.title} here.
                    </Typography>
                    </Link>
                  </CardContent>
                  
                </Card>
              </Grid>
            ))} 
          </Grid>
         
        </Container>
      </main>

      
      <Footer/>


      {/* Footer 
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </footer>
      End footer */}
    </React.Fragment>
  );
}