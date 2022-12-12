import React, { useContext } from 'react'
import logo from './logo.svg';
import './App.css';
import Container from '@material-ui/core/Container';
import { Box } from '@mui/material';
import Typography from '@material-ui/core/Typography';
import { Button, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import { CustomThemeContext } from './themes/CustomThemeProvider'
import IconButton from '@mui/material/IconButton';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import NightlightOutlinedIcon from '@mui/icons-material/NightlightOutlined';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  myborderlessworld: {
    border: "none", 
    boxShadow: "none",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  title: {
    flexGrow: 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}))

function App() {

  const classes = useStyles()
  const { currentTheme, setTheme } = useContext(CustomThemeContext)
  let dark = Boolean(currentTheme === 'dark')

  const changeTheme = () => {
    dark = !dark;
    if (dark) {
      setTheme('dark')
    } else {
      setTheme('normal')
    }
  }

  return (
    <div className={classes.root}>
    <Container maxWidth="lg" className="App">
    <Box component="div" p={1}></Box>  
      <div className="Right">
        <IconButton 
          color="inherit" 
          aria-label="light" 
          size="small" 
          onClick={() => {
            changeTheme();
          }}>
          {dark ? <LightModeOutlinedIcon fontSize="inherit"/> : <NightlightOutlinedIcon fontSize="inherit"/>}  
         </IconButton>
      </div>
      <Paper className={classes.myborderlessworld}>
        <img src={logo} className="App-logo" alt="logo" />
        <Typography variant="h4" component="h1" gutterBottom>
          Material-UI
        </Typography>
        <Button variant="contained" color="primary">
          Primary Button
        </Button>
        <Button variant="contained" color="secondary">
          Secondary Button
        </Button>
      </Paper>
    </Container>
    </div>
  );
}
export default App;