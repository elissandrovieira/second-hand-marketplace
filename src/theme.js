import { Anek_Bangla } from '@next/font/google'
import { createTheme } from '@mui/material/styles'
import { capitalize } from '@mui/material';

export const defaultFont = Anek_Bangla({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
    fallback: ['Helvetica', 'Arial', 'sans-serif'],
  });

const theme = createTheme({
    palette: {
        primary: {
            main: '#fac251',
        },
        secondary: {
            main: '#ffffff'
        },
        background:{
            default:'#f3f3f3',
        },
        textPrimary: 'black',
        textSecondary: 'white',
        box: {
            default: '#ffffff',
            dark: '#F7F7F7',
            softDark: '#e6e6e6',
        },
        card: {
            default: '#ffffff',
        },
        favIcon: {
            fill: '#ff0000'
        }
    },

    typography: {
        fontFamily: defaultFont,
        
        h3:{
            fontWeight: 500,
            textTransform: capitalize,
        },
        button: {
            fontFamily: defaultFont,
            fontWeight: 700,
            textTransform: capitalize,
        }
    },


})

export default theme