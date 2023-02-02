import { useState } from 'react'
import {
  Button,
  Container,
  Grid,
  Typography
} from '@mui/material'

import { makeStyles } from 'tss-react/mui'
import { getSession } from 'next-auth/client'
import axios from 'axios'

import TemplateDefault from '../../src/templates/Default'
import ProductsModel from '../../src/models/products'
import dbConnect from '../../src/utils/dbConnect'
import Card from '../../src/components/Card'
import AlertModal from '../../src/components/AlertModal'
import Link from 'next/link'
import { formatCurrency } from '../../src/utils/currency'
import useToasty from '../../src/contexts/Toasty'

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
  const { setToasty } = useToasty()

  const [open, setOpen] = useState(false)
  const [productId, setProductId] = useState()
  const [removedProducts, setRemovedProducts] = useState([])

  const today = new Date()
  
  const year = today.getFullYear()
  const month = today.getMonth()
  const day = today.getDate()

  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December']

  const handleOpenModal = (productId) => {
    setProductId(productId)
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleRemove = () => {
    axios.delete('/api/products/delete', {
      data: {
        id: productId
      }
    })
    .then(handleSuccess)
    .catch(handleError)
  }

  const handleSuccess = () => {
    setOpen(false)
    setRemovedProducts([...removedProducts, productId])

    setToasty({
      open: true,
      text: 'Successfull ad deleted',
      severity: 'success'
    })
  }

  const handleError = () => {
    setToasty({
      open: true,
      text: 'An error has occurred, please try again.',
      severity: 'error'
    })
  }
  return (
    <TemplateDefault>
      <Container maxWidth="sm">
        <AlertModal
          title="Do you want to delete this ad?"
          details="If you delete, you can't recover this ad."
          handleClose={handleClose}
          handleRemove={handleRemove}
          open={open}
        />
        <Typography component="h1" variant="h3" align='center'>
          My Ads
        </Typography>
        <Link href={'/user/publish'} legacyBehavior>
          <Button variant='contained' disableElevation className={classes.buttonAdd}>Post new ad</Button>
        </Link>
      </Container>
      <Container maxWidth="md" >
        
        <Grid container spacing={4}>
          {
            products.map(product => {
              if (removedProducts.includes(product._id)) return null
                return (
                  <Grid key={product.id} item xs={12} sm={6} md={4}>
                    <Card
                      image={`/uploads/${product.files[0].name}`}
                      title={product.title}
                      subtitle={
                        product.year === year && product.month === month && product.day === day
                        ? `${product.city} - Today at ${product.hour}:${product.minute}`
                        : `${product.city} - ${monthNames[month]} ${day}th ${year}`
                      }
                      price={formatCurrency(product.price)}
                      actions='editRemove'
                      handleOpenModal={() => handleOpenModal(product._id)}
                    />
                  </Grid>
                )
              }
            )
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