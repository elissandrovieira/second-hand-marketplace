import {
  Button,
  Container,
  Grid,
  Typography
} from '@mui/material'

import { makeStyles } from 'tss-react/mui'
import { getSession } from 'next-auth/client'
import Link from 'next/link'

import TemplateDefault from '../../src/templates/Default'
import Card from '../../src/components/Card'
import dbConnect from '../../src/utils/dbConnect'
import ProductsModel from '../../src/models/products'

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

Home.requireAuth = true

export async function getServerSiePropos({ req }) {
  const session = await getSession({ req })
  await dbConnect()

  const products = ProductsModel.find({'user.id': session.userId})

  return {
    props: {
      products: await JSON.parse(JSON.stringify(products)),
    }
  }
}

export default Home