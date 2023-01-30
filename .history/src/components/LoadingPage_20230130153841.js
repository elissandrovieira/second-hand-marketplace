import { makeStyles } from 'tss-react/mui'
import { Box, CircularProgress, Container } from '@mui/material'

const useStyles = makeStyles()((theme) => {
  return {
    container: {
      display: 'flex',
      height: '500px',
      width: '500px',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.
    },
    loading: {
    }
  }
})

const LoadingPage = () => {
  const classes = useStyles()

  return (
    <Box className={classes.container}>
      <CircularProgress className={classes.loading} />
    </Box>
    )
}

export default LoadingPage