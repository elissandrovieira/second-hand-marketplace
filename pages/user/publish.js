import { useState } from 'react'
import {
    Box,
    Button,
    IconButton,
    Select,
    TextField,
    Typography,
    FormControl,
    InputLabel,
    OutlinedInput,
    InputAdornment
} from '@mui/material'

import { Container } from '@mui/system'
import { makeStyles } from 'tss-react/mui'
import { useDropzone } from 'react-dropzone'

import { DeleteIcon } from '../../src/icons'
import TemplateDefault from '../../src/templates/Default'

const useStyles = makeStyles() ((theme) => {
    return{
        boxContainer: {
            paddingBottom: theme.spacing(3)
        },
        box: {
            backgroundColor: theme.palette.box.default,
            padding: theme.spacing(3),
        },
        thumbsConteiner: {
            backgroundColor: theme.palette.box.default,
            display: 'flex',
            flexWrap: 'wrap',
        },
        dropzone: {
            display:'flex',
            justifyContent:'center',
            alignItems: 'center',
            textAlign: 'center',
            padding: 10,
            margin: '0 20px 20px 20px',
            width: 200,
            height: 150,
            backgroundColor: theme.palette.box.softDark,
            border: '2px dashed black',
            cursor: 'pointer',
        },
        thumb: {
            position: 'relative',
            width: 200,
            height: 150,
            margin: '0 15px 15px 0',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',

            '.mainImage': {
                position:'absolute',
                bottom: 0,
                left: 0,
                backgroundColor: theme.palette.primary.main,
                borderRadius: '0 10px 0 0',
                padding: '6px 10px',

            },

            '&:hover .mask': {
                display: 'flex',
            },

            '.mask': {
                display: 'none',
                justifyContent:'center',
                alignItems: 'center',
                textAlign: 'center',
                backgroundColor: '#000000b3',
                width: '100%',
                height: '100%',
            },
        }
    }
})

const Publish = () => {
    const { classes } = useStyles()

    const [files, setFiles] = useState([])
    const { getRootProps, getInputProps }  = useDropzone({
        accept: 'image/*',
        onDrop: (acceptedFile) => {
          const newFiles = acceptedFile.map(file => {
            return Object.assign(file, {
                preview: URL.createObjectURL(file)
            })
          })

          setFiles([
            ...files,
            ...newFiles
        ])
          
        }
      })

      const handleRemoveFile = fileName => {
        const newFilestate = files.filter(file => file.name !== fileName)
        setFiles(newFilestate)
      }

    return(
        <TemplateDefault>
            <Container maxWidth="sm">
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
                <Box className={classes.thumbsConteiner}>
                    <Box className={classes.dropzone} {...getRootProps()}>
                    <input {...getInputProps()} />
                        <Typography variant="body2" color="textPrimary">
                            Click here to add a image, or drag and drop a image here.
                        </Typography>
                    </Box>
                    {files.map((file, index) => {
                        return (
                        <Box
                         key={file.name}
                         className={classes.thumb}
                         sx={{backgroundImage: `url(${file.preview})`, }}
                         >
                            {
                                index === 0 ?
                                <Box className="mainImage">
                                    <Typography variant='body2'>
                                        Main
                                    </Typography>
                                </Box>
                                :null
                            }
                             <Box className="mask">
                                 <IconButton color="primary" onClick={() => handleRemoveFile(file.name)}>
                                     <DeleteIcon />
                                 </IconButton>
                             </Box>
                         </Box>
                    )})}
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
                <Typography component="h6" variant="h6" color="textPrimary">
                    Price
                </Typography>
                <br />
                <FormControl>
                    <InputLabel>Value</InputLabel>
                    <OutlinedInput
                        onChange={() => {}}
                        startAdornment={<InputAdornment position="start">€</InputAdornment>}
                        labelWigth={40}
                    />
                </FormControl>
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