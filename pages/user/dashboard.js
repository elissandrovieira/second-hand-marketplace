import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography
} from '@mui/material'
import { margin } from '@mui/system'

import { makeStyles } from 'tss-react/mui'

import TemplateDefault from '../../src/templates/Default'

const useStyles = makeStyles() ((theme) => {
  return{
    container: {
      padding: theme.spacing(8, 0, 6),
    },
    buttonAdd: {
      margin: '30px auto',
      display: 'block'
    },
    card: {
      background: '#f3f3f3'
    },
    cardMedia: {
      paddingTop: '56%',
    }
  }

})

export default function Home() {
  const { classes } = useStyles()
  
  return (
    <TemplateDefault>
      <Container className={classes.container}>
        <Typography component="h1" variant="h3" align='center'>
        My Stuff For Sell
        </Typography>
        <Button variant='contained' disableElevation className={classes.buttonAdd}>Post Something Stuff</Button>
      </Container>
      <Container maxWidth="md" >
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Card elevation={0} className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image={'https://source.unsplash.com/random'}
                title="Título"
              />
              <CardContent>
                <Typography variant="h5" component="h2">
                  Produto X
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">
                  Edit
                </Button>
                <Button size="small">
                  Remove
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card elevation={0} className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image={'https://source.unsplash.com/random'}
                title="Título"
              />
              <CardContent>
                <Typography variant="h5" component="h2">
                  Produto X
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">
                  Edit
                </Button>
                <Button size="small">
                  Remove
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card elevation={0} className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image={'https://source.unsplash.com/random'}
                title="Título"
              />
              <CardContent>
                <Typography variant="h5" component="h2">
                  Produto X
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">
                  Edit
                </Button>
                <Button size="small">
                  Remove
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card elevation={0} className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image={'https://source.unsplash.com/random'}
                title="Título"
              />
              <CardContent>
                <Typography variant="h5" component="h2">
                  Produto X
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">
                  Edit
                </Button>
                <Button size="small">
                  Remove
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </TemplateDefault>
  )
}
