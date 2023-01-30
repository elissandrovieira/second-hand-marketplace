import {
  Button,
  Container,
  Grid,
  Typography
} from '@mui/material'

import { makeStyles } from 'tss-react/mui'

import TemplateDefault from '../../src/templates/Default'
import Card from '../../src/components/Card'

const useStyles = makeStyles()((theme) => {
  return {
    buttonAdd: {
      margin: '30px auto',
      display: 'block'
    }
  }

})

 function Home() {
  const { classes } = useStyles()

  return (
    <TemplateDefault>
      <Container maxWidth="sm">
        <Typography component="h1" variant="h3" align='center'>
          My Ads
        </Typography>
        <Button variant='contained' disableElevation className={classes.buttonAdd}>Post new ad</Button>
      </Container>
      <Container maxWidth="md" >
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Card
              image={'https://source.unsplash.com/random'}
              title='Produto x'
              subtitle="Matosinhos - Jan 22"
              price='500'
              actions='editRemove'
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card
              image={'https://source.unsplash.com/random'}
              title='Produto x'
              subtitle="Matosinhos - Jan 22"
              price='500'
              actions='editRemove'
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card
              image={'https://source.unsplash.com/random'}
              title='Produto x'
              subtitle="Matosinhos - Jan 22"
              price='500'
              actions='editRemove'
            />
          </Grid>
        </Grid>
      </Container>
    </TemplateDefault>
  )
}
