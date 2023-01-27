import { makeStyles } from 'tss-react/mui'

import {
  Container,
  Typography,
  Grid,
  Box,
} from '@mui/material'

import TemplateDefault from '../src/templates/Default'
import Card from '../src/components/Card'
import SearchBox from '../src/components/SearchBox'
import CardList from '../src/components/CardList'

const useStyles = makeStyles()((theme) => {
  return {
    highlight: {
      padding: '20px 0 10px 0'
    }
  }
})

const Home = () => {
  const { classes } = useStyles()

  return (
    <TemplateDefault>
      <Container maxWidth="md">
        <Typography component="h1" variant="h3" align="center" color="textPrimary">
          What are you looking for?
        </Typography>
        <SearchBox />
      </Container>
      <Container maxWidth="lg" className={classes.cardGrid}>
        <Typography component="h2" variant="h4" align="center" color="textPrimary" className={classes.highlight}>
          Highlight Items
        </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={3}>
              <Card
                image={'https://source.unsplash.com/random'}
                title='Produto x'
                subtitle="Matosinhos - Jan 22"
                price='500'
                actions='favButton'
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card
                image={'https://source.unsplash.com/random'}
                title='Produto x'
                subtitle="Matosinhos - Jan 22"
                price='500'
                actions='favButton'
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card
                image={'https://source.unsplash.com/random'}
                title='Produto x'
                subtitle="Matosinhos - Jan 22"
                price='500'
                actions='favButton'
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card
                image={'https://source.unsplash.com/random'}
                title='Produto x'
                subtitle="Matosinhos - Jan 22"
                price='500'
                actions='favButton'
              />
            </Grid>
          </Grid>
      </Container>
    </TemplateDefault>
  )
}

export default Home