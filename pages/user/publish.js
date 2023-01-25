import { Box, Button, Select, TextField, Typography } from '@mui/material'
import { Container } from '@mui/system'
import { makeStyles } from 'tss-react/mui'

import TemplateDefault from '../../src/templates/Default'
import theme from '../../src/theme'

const useStyles = makeStyles() ((theme) => {
    return{
        container: {
            padding: theme.spacing(8, 0, 6),
        },
        boxContainer: {
            paddingBottom: theme.spacing(3)
        },
        box: {
            backgroundColor: theme.palette.box.default,
            padding: theme.spacing(3),
        },
    }
})
const Publish = () => {
    const { classes } = useStyles()

    return(
        <TemplateDefault>
            <Container maxWidth="sm" className={classes.container}>
                <Typography component="h1" variant="h3" align="center" color="textPrimary">
                    Post ad
                </Typography>
                <Typography component="h5" variant="h6" align="center" color="textPrimary">
                    The more detailed your ads, the better!
                </Typography>
            </Container>

            <Container maxWidth="md" className={classes.boxContainer}>
                <Box className={classes.box}>
                    <Typography component="h6" variant="h6" color="textPrimary">
                      Title
                    </Typography>
                    <TextField
                        label="ex.: Playstation 4 worn rarely"
                        size="small"
                        fullWidth
                    />
                    <br /><br />
                    <Typography component="h6" variant="h6" color="textPrimary">
                        Categories
                    </Typography>
                    <Select
                        native
                        value=""
                        fullWidth
                        onChange={() => {}}
                        inputProps={{
                            name: 'age',
                        }}
                    >
                        <option value="">Select</option>
                        <option value={1}>Baby & kids</option>
                        <option value={2}>Home & Garden</option>
                        <option value={3}>Clothing & Accessories</option>
                        <option value={4}>Vehicles</option>
                        <option value={5}>Deals</option>
                        <option value={6}>Entertainment</option>
                        <option value={7}>Pets</option>
                        <option value={8}>Furniture</option>
                        <option value={9}>Tools & Home Improvement</option>
                        <option value={10}>Smartphones & Tablets</option>
                        <option value={12}>Sports</option>
                        <option value={11}>Technology</option>
                        <option value={13}>Services</option>
                        <option value={14}>Other</option>
                    </Select>
                </Box>
            </Container>

            <Container maxWidth="md" className={classes.boxContainer}>
                <Box className={classes.box}>
                <Typography component="h6" variant="h6" color="textPrimary">
                    Images
                </Typography>
                <Typography component="div" variant="body2" color="textPrimary" gutterBottom>
                    The first image is the main of your ad.
                </Typography>
                </Box>
            </Container>
            
            <Container maxWidth="md" className={classes.boxContainer}>
                <Box className={classes.box}>
                <Typography component="h6" variant="h6" color="textPrimary">
                    Description
                </Typography>
                <Typography component="div" variant="body2" color="textPrimary" gutterBottom>
                    Type your ad details.
                </Typography>
                <TextField
                    multiline
                    rows={6}
                    variant="outlined"
                    fullWidth
                />
                </Box>
            </Container>

            <Container maxWidth="md" className={classes.boxContainer}>
                <Box className={classes.box}>
                <Typography component="h6" variant="h6" color="textPrimary" gutterBottom>
                    Contact Details
                </Typography>
                <TextField
                    label="Name"
                    variant="outlined"
                    size="small"
                    fullWidth
                />
                <br /><br />
                <TextField
                    label="E-mail"
                    variant="outlined"
                    size="small"
                    fullWidth
                />
                <br /><br />
                <TextField
                    label="Phone Number"
                    variant="outlined"
                    size="small"
                    fullWidth
                />
                </Box>
            </Container>

            <Container maxWidth="md" className={classes.boxContainer}>
                <Box textAlign="right">
                    <Button variant="contained" disableElevation>Publish</Button>
                </Box>
            </Container>
        </TemplateDefault>
    )
}

export default Publish