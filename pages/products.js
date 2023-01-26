import {
  Avatar,
  Box,
  Card,
  CardHeader,
  CardMedia,
  Chip,
  Container,
  Grid,
  Typography
} from '@mui/material'
import { makeStyles } from 'tss-react/mui'
import Carousel from 'react-material-ui-carousel'


import TemplateDefault from '../src/templates/Default'
import {
  FavoriteIconButton,
  LocationIconFilled
} from '../src/icons'
import theme from '../src/theme'

const useStyles = makeStyles()((theme) => {
  return {
    box: {
      backgroundColor: theme.palette.background.white,
      padding: theme.spacing(3),
      marginBottom: theme.spacing(3),
    },
    card: {
      height: '100%'
    },
    cardMedia: {
      paddingTop: '56%'
    },
    ductName: {
      margin: '15px 0',
    },
    price: {
      fontWeight: 'bold',
      marginBottom: 15,
    }
  }

})

const Products = () => {
  const { classes } = useStyles()

  return (
    <TemplateDefault>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={8}>
            <Box className={classes.box}>
              <Carousel
                autoPlay={false}
                animation="slide"
                navButtonsAlwaysVisible
                navButtonsProps={{          
                  style: {
                    backgroundColor: theme.palette.fourth.main,
                    color: theme.palette.secondary.main,
                    borderRadius: 2,
                  }
                }}
                IndicatorIcon={<Box sx={{
                  width: 10, height: 10
                }}/>}
                indicatorIconButtonProps={{
                  style: {
                      margin: '-80px 5px 0 5px',
                      color: 'blue',
                      border: `3px solid ${theme.palette.fourth.main}`,
                      zIndex: 1
                  }
                }}
                activeIndicatorIconButtonProps={{
                  style: {
                    backgroundColor: theme.palette.fourth.main,
                  }
                }}
              >
                <Card
                className={classes.card}
                elevation={0}
                >
                  <CardMedia
                    className={classes.cardMedia}
                    image='https://source.unsplash.com/random?a=1'
                    title="Image title"
                  />
                </Card>
                <Card
                className={classes.card}
                elevation={0}
                >
                  <CardMedia
                    className={classes.cardMedia}
                    image='https://source.unsplash.com/random?a=2'
                    title="Image title"
                  />
                </Card>
              </Carousel>
            </Box>
            <Box className={classes.box}>
              <Typography component="span" variant="caption">
                Posted January 22th, 2023
              </Typography>
              <Typography component="h4" variant="h4" className={classes.productName}>
                Playstation 4 pro 1TB 4K excellent condition
              </Typography>
              <Typography component="h4" variant="h4" className={classes.price}>
                180 €
              </Typography>
              <Chip label="Category" />
              <FavoriteIconButton />
            </Box>
            <Box className={classes.box}>
              <Typography component="h6" variant="h6">
                Description
              </Typography>
              <Typography component="p" variant="body2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu neque tempus orci luctus sagittis a et justo. Donec ac augue vitae lacus eleifend porttitor condimentum ornare quam. Morbi tristique erat sit amet erat posuere maximus. Nunc at convallis turpis, eu suscipit erat. Integer vitae turpis efficitur, imperdiet orci id, pretium risus. Mauris nulla leo, consectetur dictum orci nec, semper accumsan quam. Aliquam tempus varius ligula in ultricies. Sed at diam tempus, laoreet quam sit amet, auctor metus. Maecenas quis diam at magna efficitur euismod et eget sem. Donec a nibh tortor. Aliquam lobortis eget ex sit amet aliquam. Phasellus turpis odio, luctus at enim in, interdum ullamcorper odio. Nam ante tortor, pharetra eu fringilla eget, fermentum sed augue. Morbi tempor tortor a erat vehicula, sed convallis quam pellentesque.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Card className={classes.box} elevation={0}>
              <CardHeader avatar={
                <Avatar>F</Avatar>
              }
              title="Fulano de Tal"
              subheader="fulanodetal@gmail.com"
              />
              <CardMedia
                image="https://source.unsplash.com/random"
                title="Fulano de Tal"
              />
            </Card>

            <Box className={classes.box}>
              <Typography component="h6" variant="h6">
                Location
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </TemplateDefault>
  )
}

export default Products