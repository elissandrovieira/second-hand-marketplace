import { useState } from 'react'
import { makeStyles } from 'tss-react/mui'
import { Box, Container, Grid, IconButton, Typography } from '@mui/material'


import TemplateDefault from '../../src/templates/Default'
import SearchBox from '../../src/components/SearchBox'
import Card from '../../src/components/Card'
import CardList from '../../src/components/CardList'
import {DrawerIcon, ListIcon } from '../../src/icons'
import theme from '../../src/theme'

const useStyles = makeStyles() ((theme) => {
  return{
    box:{
      display:'flex',
      padding: '20px 0',
      justifyContent: 'space-between'
    }
  }
})

const List = () => {
  const { classes } = useStyles()

  const [list, setList] = useState({
    listStatus: true,
    listIconColor: theme.palette.secondary.main,
    gridIconColor: theme.palette.primary.main,
  })

  const handleChangeGrid = () => {
    setList({
      listStatus: false,
      listIconColor: theme.palette.primary.main,
      gridIconColor: theme.palette.secondary.main,
    })
  }
  const handleChangeList = () => {
    setList({
      listStatus: true,
      listIconColor: theme.palette.secondary.main,
      gridIconColor: theme.palette.primary.main,
    })
  }

  return (
    <TemplateDefault>
      <Container maxWidth="md" className={classes.container}>
        <SearchBox />
        <Box className={classes.box}>
          <Typography component="h6" variant="h6">
            {'Showing 250 results for "playstation 4"'}
          </Typography>
          <Box>
            <IconButton onClick={() => handleChangeGrid()}>
              <DrawerIcon sx={{
                color: list.listIconColor
              }}/>
            </IconButton>
            <IconButton onClick={() => handleChangeList()}>
              <ListIcon sx={{
                color: list.gridIconColor
              }}/>
            </IconButton>
          </Box>
        </Box>
          {
            list.listStatus === true
            ? <Grid container spacing={3}>
                <Grid item md={12}>
                  <CardList
                    image={'https://source.unsplash.com/random'}
                    title='Produto x'
                    subtitle="Matosinhos - Jan 22"
                    price='500'
                    actions='favButton'
                  />
                </Grid>
                <Grid item md={12}>
                  <CardList
                    image={'https://source.unsplash.com/random'}
                    title='Produto x'
                    subtitle="Matosinhos - Jan 22"
                    price='500'
                    actions='favButton'
                  />
                </Grid>
                <Grid item md={12}>
                  <CardList
                    image={'https://source.unsplash.com/random'}
                    title='Produto x'
                    subtitle="Matosinhos - Jan 22"
                    price='500'
                    actions='favButton'
                  />
                </Grid>
                <Grid item md={12}>
                  <CardList
                    image={'https://source.unsplash.com/random'}
                    title='Produto x'
                    subtitle="Matosinhos - Jan 22"
                    price='500'
                    actions='favButton'
                  />
                </Grid>
              </Grid>
        
            : <Grid container spacing={3}>
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
          }
      </Container>
    </TemplateDefault>
  )
}

export default List