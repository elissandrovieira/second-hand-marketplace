import { useState } from 'react'
import { makeStyles } from 'tss-react/mui'

import {
  Container,
  Typography,
  Paper,
  InputBase,
  IconButton,
  Grid,
} from '@mui/material'

import { SearchIcon } from '../src/icons'

import TemplateDefault from '../src/templates/Default'
import Card from '../src/components/Card'

const useStyles = makeStyles()((theme) => {
  return {
    searchBox: {
      display: 'flex',
      justifyContent: 'center',
      padding: theme.spacing(2),
      marginTop: 20,
      backgroundColor: theme.palette.background.white,
    },
    searchIcon: {
      color: theme.palette.secondary.main,
      width: 20,
      marginRight: 10,
    },
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
        <Paper className={classes.searchBox} elevation="0">
          <IconButton>
            <SearchIcon className={classes.searchIcon} />
          </IconButton>
          <InputBase
            placeholder='Ex.: Iphone 13 128GB'
            fullWidth
          />
        </Paper>
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