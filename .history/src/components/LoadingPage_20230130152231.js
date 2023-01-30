import { makeStyles } from 'tss-react'
import { Container } from '@mui/material'

const useStyles = makeStyles()((theme) => {
  return {
    container: {
      display: 'block',
      height: '100%'
      height: '100%'
    }
  }
})

const LoadingPage = () => {
  const classes = useStyles()

  return (
    <Container className={classes.container}>

    </Container>
    )
}