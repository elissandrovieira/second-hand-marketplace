import { Box } from '@mui/material'
import theme from '../theme'

const FullScreen = ({ children }) => {

  return (
    <Box sx={{
    justify-
    background: 'linear-gradient(-45deg, rgba(212,118,12,1) 0%, rgba(250,194,81,1) 36%, rgba(255,171,0,1) 63%, rgba(255,238,176,1) 100%)',
    backgroundSize: '200% 200%',
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    animation: 'gradient 15s ease infinite',

    '@keyframes gradient': {
      '0%': {
          backgroundPosition: '0% 50%',
      },
      '50%': {
          backgroundPosition: '100% 50%',
      },
      '100%': {
          backgroundPosition: '0% 50%',
      }
    }
    }}>
    {children}
    </Box>
  )
}

export default FullScreen