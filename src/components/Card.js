import {
  Card as CardMUI,
  CardMedia,
  CardContent,
  CardActions,
  Box,
  Button,
  Typography
} from '@mui/material'

import {
  FavoriteIconButton,
  LocationIconFilled
} from '../icons'

import { makeStyles } from 'tss-react/mui'
import theme from '../theme'
import { transform } from 'typescript'
import { Scale } from '@mui/icons-material'

const useStyles = makeStyles()((theme) => {
  return {
    card: {
      background: theme.palette.card.default,
      cursor: 'pointer',
    },
    cardMedia: {
      margin: 10,
      paddingTop: '56%',
    },
    boxBottom: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    title:{
      ':hover': {
        color: theme.palette.primary.main
      }
    },
    subtitle: {
      display: 'flex',
      alignItems: 'center'
    },
    price: {
      margin: '0 0 0 15px'
    },
  }
})

const Card = ({ image, title, subtitle, price, actions, customActions }) => {
  const { classes } = useStyles()

  return (
    <CardMUI elevation={0} className={classes.card}>
      <CardMedia
        className={classes.cardMedia}
        image={image}
        title={title}
      />
      <CardContent>
        <Typography variant="h5" component="h3" className={classes.title}>
          {title}
        </Typography>
        <Box className={classes.subtitle}>
          <LocationIconFilled sx={{
            color: theme.palette.primary.main,
            width: 15,
            margin: '0 5px 0 0'
          }} />
          <Typography variant="body2" component="h4">
            {subtitle}
          </Typography>
        </Box>
      </CardContent>
      <Box className={classes.boxBottom}>
        <Typography variant="h6" component="h5" className={classes.price}>
          {price} €
        </Typography>
        <CardActions>
          {
            actions === 'favButton'
              ? <FavoriteIconButton />
              : actions === 'editRemove'
                ? <>
                  <Button size="small" variant='outlined' sx={{
                    color: theme.palette.secondary.main,
                    borderColor: theme.palette.secondary.main,
                    ':hover': {
                      color: theme.palette.fourth.main,
                      backgroundColor: theme.palette.secondary.main,
                      borderColor: theme.palette.secondary.main,
                    }
                  }}>
                    Edit
                  </Button>
                  <Button size="small" variant='outlined' sx={{
                    color: theme.palette.tertiary.main,
                    borderColor: theme.palette.tertiary.main,
                    ':hover': {
                      color: 'white',
                      backgroundColor: theme.palette.tertiary.main,
                      borderColor: theme.palette.tertiary.main,
                    }
                  }}>
                    Remove
                  </Button>
                </>
                : null
          }
          {
            customActions
              ? customActions
              : null
          }
        </CardActions>
      </Box>

    </CardMUI>
  )
}

export default Card