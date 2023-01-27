import { useState } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import {
  Box,
  Button,
  IconButton,
  Select,
  TextField,
  Typography,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  FormControl,
  FormHelperText,
} from '@mui/material'
import MenuItem from '@mui/material/MenuItem'

import { Container } from '@mui/system'
import { makeStyles } from 'tss-react/mui'
import { useDropzone } from 'react-dropzone'

import { DeleteIcon } from '../../src/icons'
import TemplateDefault from '../../src/templates/Default'

const useStyles = makeStyles()((theme) => {
  return {
    formControl:{
      marginBottom: 20
    },
    title:{
      marginBottom: 20
    },
    boxContainer: {
      paddingBottom: theme.spacing(3),
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
      display: 'flex',
      justifyContent: 'center',
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
        position: 'absolute',
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
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: '#000000b3',
        width: '100%',
        height: '100%',
      },
    }
  }
})

const validationSchema = yup.object({
  title: yup.string()
        .required('Title is required')
        .min(10, 'Title should be of minimum 10 characters length')
        .max(70),

        categories: yup.string()
        .required('Categories is required'),
        
        description: yup.string()
        .required('Description is required')
        .min(50, 'Description should be of minimum 50 characters length'),
        
        price: yup.number()
        .required('Price is required')
      });

const Publish = () => {
  const { classes } = useStyles()

  const formik = useFormik({
    initialValues: {
      title: '',
      categories: '',
      images: '',
      description: '',
      price: '',
      name: '',
      email: '',
      phone: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  })

  const [files, setFiles] = useState([])

  const { getRootProps, getInputProps } = useDropzone({
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

  return (
    <TemplateDefault>
      
      <Container maxWidth="sm" className={classes.title}>
        <Typography component="h1" variant="h3" align="center" color="textPrimary">
          Post ad
        </Typography>
        <Typography component="h5" variant="h6" align="center" color="textPrimary">
          The more detailed your ads, the better!
        </Typography>
      </Container>

      <form onSubmit={formik.handleSubmit}> 
        <Container maxWidth="md" className={classes.boxContainer}>
          <Box className={classes.box}>
            
            <FormControl
            fullWidth
            error={formik.touched.title && Boolean(formik.errors.title)}
            className={classes.formControl}
            >
              <InputLabel>Title </InputLabel>
              <OutlinedInput
                fullWidth
                name="title"
                id="title"
                label="Title "
                value={formik.values.title}
                onChange={formik.handleChange}
              />
              <FormHelperText>
                {formik.touched.title && formik.errors.title}
              </FormHelperText>
            </FormControl>

            <FormControl
              error={formik.touched.categories && Boolean(formik.errors.categories)}
              fullWidth
            >
              <InputLabel>Categories</InputLabel>
              <Select
                name="categories"
                id="categories"
                label="Categories"
                value={formik.values.categories}
                onChange={formik.handleChange}
                fullWidth
              >
                <MenuItem value="Baby & kids">Baby & kids</MenuItem>
                <MenuItem value="Home & Garden">Home & Garden</MenuItem>
                <MenuItem value="Clothing & Accessories">Clothing & Accessories</MenuItem>
                <MenuItem value="Vehicles">Vehicles</MenuItem>
                <MenuItem value="Deals">Deals</MenuItem>
                <MenuItem value="Entertainment">Entertainment</MenuItem>
                <MenuItem value="Pets">Pets</MenuItem>
                <MenuItem value="Furniture">Furniture</MenuItem>
                <MenuItem value="Tools & Home Improvement">Tools & Home Improvement</MenuItem>
                <MenuItem value="Smartphones & Tablets">Smartphones & Tablets</MenuItem>
                <MenuItem value="Sports">Sports</MenuItem>
                <MenuItem value="Technology">Technology</MenuItem>
                <MenuItem value="Services">Services</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
              </Select>
              <FormHelperText>
                {formik.touched.categories && formik.errors.categories}
              </FormHelperText>
            </FormControl>

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
                  sx={{ backgroundImage: `url(${file.preview})`, }}
                >
                  {
                    index === 0 ?
                      <Box className="mainImage">
                        <Typography variant='body2'>
                          Main
                        </Typography>
                      </Box>
                      : null
                  }
                  <Box className="mask">
                    <IconButton color="primary" onClick={() => handleRemoveFile(file.name)}>
                      <DeleteIcon />
                    </IconButton>
                  </Box>
                </Box>
              )
            })}
          </Box>
        </Container>

        <Container maxWidth="md" className={classes.boxContainer}>
          <Box className={classes.box}>
            <FormControl error={formik.touched.description && Boolean(formik.errors.description)} fullWidth>
              <InputLabel>Enter your ad deatils</InputLabel>
              <OutlinedInput
                fullWidth
                multiline
                name="description"
                id="description"
                label="Enter your ad details"
                rows={6}
              />
              <FormHelperText>
                {formik.touched.description && formik.errors.description}
              </FormHelperText>
            </FormControl>
          </Box>
        </Container>

        <Container maxWidth="md" className={classes.boxContainer}>
          <Box className={classes.box}>
            <FormControl
            error={formik.touched.price && Boolean(formik.errors.price)}
            className={classes.formControl}
            >
              <InputLabel>Price</InputLabel>
              <OutlinedInput
                name="price"
                id="price"
                label="Price"
                value={formik.values.price}
                onChange={formik.handleChange}
                endAdornment={<InputAdornment position="start">€</InputAdornment>}
                labelWigth={40}
              />
              <FormHelperText>
                {formik.touched.price && formik.errors.price}
              </FormHelperText>
            </FormControl>
          </Box>
        </Container>

        <Container maxWidth="md" className={classes.boxContainer}>
          <Box className={classes.box}>
            <Typography component="h6" variant="h6" color="textPrimary" gutterBottom>
              Contact Details
            </Typography>
            <FormControl
            fullWidth
            error={formik.touched.title && Boolean(formik.errors.title)}
            className={classes.formControl}
            >
              <OutlinedInput
                label="Name"
                variant="outlined"
                size="small"
                fullWidth
                className={classes.TextField}
              />
            </FormControl>

          </Box>
        </Container>

        <Container maxWidth="md" className={classes.boxContainer}>
          <Box textAlign="right">
            <Button type="submit" variant="contained" disableElevation>Publish</Button>
          </Box>
        </Container>
      </form>
    </TemplateDefault>
  )
}

export default Publish