import { red } from '@material-ui/core/colors';
// import { createMuiTheme } from '@material-ui/core/styles';
import { createTheme } from '@material-ui/core/styles'; 

// A custom theme for this app
const theme_dark = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#61dafb',
      light: '#61dafb',
      dark: '#21a1c4',
    },
    secondary: {
      main: '#b5ecfb',
      light: '#61dafb',
      dark: '#21a1c4',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#000',
    },
  },
  overrides: {
    MuiPaper: {
      root: {
        padding: '20px 10px',
        margin: '10px',
        backgroundColor: '#000', // 5d737e
      },
    },
    MuiButton: {
      root: {
        margin: '5px',
      },
    },
  },
});
export default theme_dark;
