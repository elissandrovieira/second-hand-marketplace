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
  
  const useStyles = makeStyles()((theme) => {
    return {
      card: {
        display: 'flex',
        justifyContent: 'space-between',
        background: theme.palette.card.default,
        padding: 10,
        width: '100%'
      },
      cardMedia: {
        width: 200,
        height:200
      },
      boxBottom: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center'
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
  
  const CardList = ({ image, title, subtitle, price, actions, customActions }) => {
    const { classes } = useStyles()
  
    return (
      <CardMUI elevation={0} className={classes.card}>
        <Box sx={{display: 'flex'}}>
            <CardMedia
            className={classes.cardMedia}
            image={image}
            title={title}
            />
            <CardContent sx={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
            <Typography variant="h5" component="h3" sx={{
              height: "35px",
              overflow: "hidden"
            }}>
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
        </Box>
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
  
  export default CardList