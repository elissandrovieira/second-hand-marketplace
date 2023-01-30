import { makeStyles } from 'tss-react/mui'
import { CircularProgress, Container } from '@mui/material'

const useStyles = makeStyles()((theme) => {
  return {
    container: {
      display: 'flex',
      height: '100%',
      with: '100%',
    },
    loading: {
      margin: 'auto'
    }
  }
})

const LoadingPage = () => {
  const classes = useStyles()

  return (
    <Container className={classes.container}>
      <CircularProgress className={classes.loading} />
    </Container>
    )
}

export default LoadingPage