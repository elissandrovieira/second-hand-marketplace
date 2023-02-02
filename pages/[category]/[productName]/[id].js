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


import TemplateDefault from '../../../src/templates/Default'
import dbConnect from '../../../src/utils/dbConnect'
import ProductsModel from '../../../src/models/products'
import { formatCurrency } from '../../../src/utils/currency'
import {
  FavoriteIconButton,
} from '../../../src/icons'
import theme from '../../../src/theme'

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

const Products = ({ product }) => {
  const { classes } = useStyles()

  const today = new Date()
  
  const year = today.getFullYear()
  const month = today.getMonth()
  const day = today.getDate()

  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December']

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
                {
                  product.files.map(file => (
                    <Card
                    key={file.name}
                    className={classes.card}
                    elevation={0}
                    >
                      <CardMedia
                        className={classes.cardMedia}
                        image={`/uploads/${file.name}`}
                        title={product.title}
                        sx={{
                          backgroundSize: 'contain',
                          backgroundColor: '#b5b5b5'
                        }}
                      />
                    </Card>
                  ))
                }
              </Carousel>
            </Box>
            <Box className={classes.box}>
              <Typography component="span" variant="body1" gutterBottom>
              {
                product.year === year && product.month === month && product.day === day
                ? `Today at ${product.hour}:${product.minute}`
                : `${monthNames[month]} ${day}th ${year} at ${product.hour}:${product.minute}`
              }
              </Typography>
              <Typography component="h4" variant="h4" className={classes.productName}>
                {product.title}
              </Typography>
              <Typography component="h4" variant="h4" className={classes.price}>
                {formatCurrency(product.price)}
              </Typography>
              <Chip label={product.category} />
              <FavoriteIconButton />
            </Box>
            <Box className={classes.box}>
              <Typography component="h6" variant="h6">
                Description
              </Typography>
              <Typography component="p" variant="body2">
                {product.description}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Card className={classes.box} elevation={0}>
              <CardHeader avatar={
                <Avatar src={product.user.image}>
                  {product.user.image || product.user.name[0]}
                </Avatar>
              }
              title={product.user.name}
              subheader={product.user.email}
              />
              <CardMedia
                image={product.user.image}
                title={product.user.name}
              />
            </Card>

            <Box className={classes.box}>
              <Typography component="h6" variant="h6">
                {product.city} - {product.district}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </TemplateDefault>
  )
}

export async function getServerSideProps({ query }){
  const { id } = query

  await dbConnect()

  const product = await ProductsModel.findOne({ _id: id })

  return {
    props: {
      product: JSON.parse(JSON.stringify(product))
    }
  }
}

export default Products