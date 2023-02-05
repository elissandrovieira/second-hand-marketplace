import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { makeStyles } from 'tss-react/mui'
import slugify from 'slugify'

import {
  Box,
  Container,
  Grid,
  IconButton,
  Typography
} from '@mui/material'


import TemplateDefault from '../../src/templates/Default'
import SearchBox from '../../src/components/SearchBox'
import Card from '../../src/components/Card'
import CardList from '../../src/components/CardList'
import { DrawerIcon, ListIcon } from '../../src/icons'
import { formatCurrency } from '../../src/utils/currency'
import theme from '../../src/theme'
import ProductsModel from '../../src/models/products'

const useStyles = makeStyles()((theme) => {
  return {
    box: {
      display: 'flex',
      padding: '20px 0',
      justifyContent: 'space-between'
    },
    productLink: {
      textDecoration: 'none !important'
    }
  }
})

const List = ({ products, query }) => {
  const { classes } = useStyles()
  const router = useRouter()

  const [search, setSearch] = useState()

  const handleSubmitSearch = () => {
    router.push({
      pathname: `/search/${search}`
    })
  }

  const today = new Date()
  
  const year = today.getFullYear()
  const month = today.getMonth()
  const day = today.getDate()

  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December']


  const [list, setList] = useState({
    listStatus: false,
    listIconColor: theme.palette.primary.main,
    gridIconColor: theme.palette.secondary.main,
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
        <SearchBox
        onChange={(e) => setSearch(e.target.value)}
        onClick={handleSubmitSearch}
        />
        <Box className={classes.box}>
          <Typography component="h6" variant="h6">
            {`Showing ${products.length} results for "${query}"`}
          </Typography>
          <Box sx={{
            display:{
              xs: "none",
              sm: "block"
            }
          }}>
            <IconButton onClick={() => handleChangeGrid()}>
              <DrawerIcon sx={{
                color: list.listIconColor
              }} />
            </IconButton>
            <IconButton onClick={() => handleChangeList()}>
              <ListIcon sx={{
                color: list.gridIconColor
              }} />
            </IconButton>
          </Box>
        </Box>
        {
          list.listStatus === true
            ? (
              <Grid container spacing={3}>
                {
                  products.map(product => {
                    const category = slugify(product.category).toLocaleLowerCase()
                    const title = slugify(product.title).toLocaleLowerCase()

                    return (
                      <Grid key={product._id} item md={12}>

                        <Link
                          href={`/${category}/${title}/${product._id}`}
                          legacyBehavior
                        >
                          <a className={classes.productLink}>

                            <CardList
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

            ) : (
              
              <Grid container spacing={3}>
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

            )
        }
      </Container>
    </TemplateDefault>
  )
}

export async function getServerSideProps({ query }) {
  const { q } = query

  const products = await ProductsModel.find({
    $or: [
      {
        title: {
          $regex: q,
          $options: 'i'
        }
      },
      {
        description: {
          $regex: q,
          $options: 'i'
        }
      }
    ]
  })

  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),

      query: q
      
    }
  }
}


export default List