import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#e6ddc5',
    },
    secondary: {
      main: '#6b4737',
    },
  },
  typography: {
    fontFamily: `'IBM Plex Sans', 'Arial', sans-serif`,
  },
  components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    fontWeight: 'bold', // Rend tous les boutons en gras
                    textTransform: 'none', // Désactive la transformation en majuscules (optionnel)
                },
            },
        },
    },
});

export default theme;
