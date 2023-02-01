import {
  Button,
  Container,
  Grid,
  Typography
} from '@mui/material'

import { makeStyles } from 'tss-react/mui'
import { getSession } from 'next-auth/client'

import TemplateDefault from '../../src/templates/Default'
import ProductsModel from '../../src/models/products'
import dbConnect from '../../src/utils/dbConnect'
import Card from '../../src/components/Card'
import Link from 'next/link'

const useStyles = makeStyles()((theme) => {
  return {
    buttonAdd: {
      margin: '30px auto',
      display: 'block'
    }
  }

})

 const Home = ({ products }) => {
  const { classes } = useStyles()

  console.log(products)

  return (
    <TemplateDefault>
      <Container maxWidth="sm">
        <Typography component="h1" variant="h3" align='center'>
          My Ads
        </Typography>
        <Link href={'/user/publish'} legacyBehavior >
          <Button variant='contained' disableElevation className={classes.buttonAdd}>Post new ad</Button>
        </Link>
      </Container>
      <Container maxWidth="md" >
        <Grid container spacing={4}>
          {
            products.map(product => (
              <Grid key={product.id} item xs={12} sm={6} md={4}>
                <Card
                  image={`/uploads/${product.files[0].name}`}
                  title={product.title}
                  subtitle={`${product.city} - ${product.district}`}
                  price={product.price}
                  actions='editRemove'
                />
              </Grid>
            ))
          }
        </Grid>
      </Container>
    </TemplateDefault>
  )
}

Home.requireAuth = true

export async function getServerSideProps({ req }) {
  const session = await getSession({ req })
  await dbConnect()

  const products = await ProductsModel.find({'user.id': session.userId})

  return {
    props: {
      products: JSON.parse(JSON.stringify(products))
    }
  }
}

export default Home