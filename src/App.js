import React, { useContext } from 'react'
import logo from './logo.svg';
import './App.css';
import Container from '@material-ui/core/Container';
import { Button, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import SwitchUI from '@material-ui/core/Switch'
import { CustomThemeContext } from './themes/CustomThemeProvider'
import Header from './components/Header';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
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
  const isDark = Boolean(currentTheme === 'dark')

  const handleThemeChange = (event) => {
    const { checked } = event.target
    if (checked) {
      setTheme('dark')
    } else {
      setTheme('normal')
    }
  }

  return (
    <div className={classes.root}>
    <Container maxWidth="sm" className="App">
      <Header />
      <Paper variant="outlined">
        <img src={logo} className="App-logo" alt="logo" />
        <Button variant="contained" color="primary">
          Primary Button
        </Button>
        <Button variant="contained" color="secondary">
          Secondary Button
        </Button>
        <FormGroup>
          <FormControlLabel 
            control={<SwitchUI checked={isDark} onChange={handleThemeChange} />} 
            label="Theme" 
          />
        </FormGroup>
      </Paper>
    </Container>
    </div>
  );
}
export default App;