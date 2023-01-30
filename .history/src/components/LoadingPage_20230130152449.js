import { makeStyles } from 'tss-react'
import { CircularProgress, Container } from '@mui/material'

const useStyles = makeStyles()((theme) => {
  return {
    container: {
      display: 'block',
      height: '100%',
      with: '100%',
    },
    loading: {
      margin: '10'
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