import Link from 'next/link'
import { makeStyles } from 'tss-react/mui'
import slugify from 'slugify'

import {
  Container,
  Typography,
  Grid,
} from '@mui/material'

import TemplateDefault from '../src/templates/Default'
import Card from '../src/components/Card'
import SearchBox from '../src/components/SearchBox'
import dbConnect from '../src/utils/dbConnect'
import ProductsModel from '../src/models/products'
import { formatCurrency } from '../src/utils/currency'

const useStyles = makeStyles()((theme) => {
  return {
    highlight: {
      padding: '20px 0 10px 0'
    },
    productLink: {
      textDecoration: 'none !important'
    }
  }
})

const Home = ({ products }) => {
  const { classes } = useStyles()

  const today = new Date()
  
  const year = today.getFullYear()
  const month = today.getMonth()
  const day = today.getDate()

  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December']

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
            {
              products.map(product => {
                const category = slugify(product.category).toLocaleLowerCase()
                const title = slugify(product.title).toLocaleLowerCase()

                return (
                <Grid key={product._id} item xs={12} sm={6} md={3}>
                  <Link 
                  href={`/${category}/${title}/${product._id}`}
                  legacyBehavior
                  >
                    <a className={classes.productLink}>
                      <Card
                      image={`/uploads/${product.files[0].name}`}
                      title={product.title}
                      subtitle={
                        product.year === year && product.month === month && product.day === day
                        ? `${product.city} - Today at ${product.hour}:${product.minute}`
                        : `${product.city} - ${monthNames[month]} ${day}th ${year}`
                      }
                      price={formatCurrency(product.price)}
                      actions='favButton'
                      />
                    </a>
                  </Link>
                </Grid>

                )
              })
            }
          </Grid>
      </Container>
    </TemplateDefault>
  )
}

export async function getServerSideProps() {
  await dbConnect()

  const products = await ProductsModel.aggregate([{
    $sample: { size:6 }
  }])

  return {
    props: {
      products: JSON.parse(JSON.stringify(products))
    }
  }
}

export default Home