import { makeStyles } from 'tss-react'
import { Container } from '@mui/material'

const useStyles = makeStyles()((theme) => {
  return {
    container: {
      display
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