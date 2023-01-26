import { useState } from 'react'
import { makeStyles } from 'tss-react/mui'

import {
    Container,
    Typography,
    Paper,
    InputBase,
    IconButton,
    Grid,
    Card,
    CardMedia,
    CardContent,
    CardActions,
    Button,
} from '@mui/material'

import TemplateDefault from '../src/templates/Default'
import {
    SearchIcon,
    FavoriteIcon,
    FavoriteIconFilled
} from '../src/icons'
import theme from '../src/theme'

const useStyles = makeStyles() ((theme) => {
    return{
        searchBox: {
            display: 'flex',
            justifyContent: 'center',
            padding: theme.spacing(2),
            marginTop: 20,
            backgroundColor: theme.palette.secondary.main,
        },
        searchIcon:{
            color: 'black',
            width: 20,
            marginRight: 10,
        },

        card: {
            background: theme.palette.card.default
          },
        cardMedia: {
            margin: 10,
            paddingTop: '56%',
          },
        cardAction: {
            display: 'flex',
            justifyContent: 'space-between'
        },
        price:{
            padding:'0 0 0 8px'
        },
        IconButton: {
            position: 'relative',
            width: 40,
            height: 40,
            padding: 20
        },

        favIconHide: {
            display: 'none',
            position: 'absolute',
    
        },
        favIcon: {
            position: 'absolute',
        }
        
    }
})

const Home = () => {
    const { classes } = useStyles()

    const [changeIcon, setChangeIcon] = useState({
        fav: classes.favIcon,
        fill: classes.favIconHide
    })

    const handleChangeIcon = () => {
        changeIcon.fav === classes.favIcon
        ? setChangeIcon({
            fav: classes.favIconHide,
            fill: classes.favIcon
        })
        : setChangeIcon({
            fav: classes.favIcon,
            fill: classes.favIconHide
        })
    }

    return(
        <TemplateDefault>
            <Container maxWidth="md">
                <Typography component="h1" variant="h3" align="center" color="textPrimary">
                    What are you looking for?
                </Typography>
                <Paper className={classes.searchBox} elevation="0">
                    <IconButton>
                        <SearchIcon className={classes.searchIcon} />
                    </IconButton>
                    <InputBase
                        placeholder='Ex.: Iphone 13 128GB'
                        fullWidth
                    />
                </Paper>
            </Container>
            <Container maxWidth="lg" className={classes.cardGrid}>
                <Typography component="h2" variant="h4" align="center" color="textPrimary" gutterBottom>
                    Highlight Items
                </Typography>
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6} md={3}>
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
                        <CardActions className={classes.cardAction}>
                        <Typography variant="h6" component="h5" className={classes.price}>
                            510 €
                            </Typography>
                            <IconButton className={classes.IconButton}>
                                <FavoriteIcon className={classes.favIcon} onClick={() => handleChangeIcon()} />
                                <FavoriteIconFilled
                                    className={changeIcon.fill}
                                    onClick={() => handleChangeIcon()}
                                    sx={{
                                        color: '#c92a2a'
                                    }}
                                />
                            </IconButton>
                        </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
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
                        <CardActions className={classes.cardAction}>
                        <Typography variant="h6" component="h5" className={classes.price}>
                            510 €
                            </Typography>
                            <IconButton className={classes.IconButton}>
                                <FavoriteIcon className={classes.favIcon} onClick={() => handleChangeIcon()} />
                                <FavoriteIconFilled
                                    className={changeIcon.fill}
                                    onClick={() => handleChangeIcon()}
                                    sx={{
                                        color: '#c92a2a'
                                    }}
                                />
                            </IconButton>
                        </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
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
                        <CardActions className={classes.cardAction}>
                        <Typography variant="h6" component="h5" className={classes.price}>
                            510 €
                            </Typography>
                            <IconButton className={classes.IconButton}>
                                <FavoriteIcon className={classes.favIcon} onClick={() => handleChangeIcon()} />
                                <FavoriteIconFilled
                                    className={changeIcon.fill}
                                    onClick={() => handleChangeIcon()}
                                    sx={{
                                        color: '#c92a2a'
                                    }}
                                />
                            </IconButton>
                        </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
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
                        <CardActions className={classes.cardAction}>
                        <Typography variant="h6" component="h5" className={classes.price}>
                            510 €
                            </Typography>
                            <IconButton className={classes.IconButton}>
                                <FavoriteIcon className={classes.favIcon} onClick={() => handleChangeIcon()} />
                                <FavoriteIconFilled
                                    className={changeIcon.fill}
                                    onClick={() => handleChangeIcon()}
                                    sx={{
                                        color: '#c92a2a'
                                    }}
                                />
                            </IconButton>
                        </CardActions>
                        </Card>
                    </Grid>
                </Grid>

            </Container>
        </TemplateDefault>
    )
}

export default Home