import { useState } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import {
  Box,
  Button,
  IconButton,
  Select,
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
      padding: 15
    },
    dropzone: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: 10,
      margin: '0 15px 15px 0',
      width: 180,
      height: 135,
      backgroundColor: theme.palette.box.softDark,
      border: '2px dashed black',
      cursor: 'pointer',
    },
    thumb: {
      position: 'relative',
      width: 180,
      height: 135,
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
        .min(6, 'Title should be of minimum 10 characters length')
        .max(70),

        categories: yup.string()
        .required('Categories is required'),
        
        description: yup.string()
        .required('Description is required')
        .min(50, 'Description should be of minimum 50 characters length'),
        
        price: yup.number()
        .required('Price is required'),
        
        name: yup.string()
        .required('Your name is required'),
        
        email: yup.string().email('Enter a valid E-mail')
        .required('E-mail is required'),
        
        phone: yup.number().typeError('Must be a number')
        .required('Phone number is required'),

        files: yup.array()
        .required('Upload image is required')
        .min(1, 'Upload at least one image')
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
      files: [],
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      console.log(values)
    },
  })
  
  const [imageKey, setImageKey] = useState(0)
  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFile) => {
      const newFiles = acceptedFile.map(file => {
        return Object.assign(file, {
          preview: URL.createObjectURL(file),
          key: imageKey
        })
      })

      setImageKey(imageKey+1)

      formik.setFieldValue('files', [
        ...formik.values.files,
        ...newFiles
      ])

    }
  })

  const handleRemoveFile = fileName => {
    const newFilestate = formik.values.files.filter(file => file.name !== fileName)
    formik.setFieldValue('files', newFilestate)
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
            error={formik.touched.title && formik.errors.title}
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
              error={formik.touched.categories && formik.errors.categories}
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
            <Typography component="h6" variant="h6" color={formik.errors.files && formik.touched.files ? 'error' : 'textPrimary'}>
              Images
            </Typography>
            <Typography component="div" variant="body2" color={formik.errors.files && formik.touched.files ? 'error' : 'textPrimary'} gutterBottom>
              The first image is the main of your ad.
            </Typography>
          </Box>
          <Box className={classes.thumbsConteiner}>
            <Box className={classes.dropzone} {...getRootProps()}>
              <input name="files" {...getInputProps()} />
              <Typography variant="body2" color={formik.errors.files && formik.touched.files ? 'error' : 'textPrimary'}>
                Click here to add a image, or drag and drop a image here.
              </Typography>
            </Box>

            {formik.values.files.map((file, index) => {
              return (
                <Box
                  key={file.key}
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
          <Box className={classes.thumbsConteiner}>
            {
              formik.errors.files && formik.touched.files
              ? <Typography variant="body2" color="error" gutterBottom>{formik.errors.files}</Typography>
              : null
            }
          </Box>
        </Container>

        <Container maxWidth="md" className={classes.boxContainer}>
          <Box className={classes.box}>
            <FormControl error={formik.touched.description && formik.errors.description} fullWidth>
              <InputLabel>Enter your ad deatils</InputLabel>
              <OutlinedInput
                fullWidth
                multiline
                name="description"
                id="description"
                label="Enter your ad details..."
                onChange={formik.handleChange}
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
            error={formik.touched.price && formik.errors.price}
            className={classes.formControl}
            >
              <InputLabel>Price</InputLabel>
              <OutlinedInput
                name="price"
                id="price"
                label="Price"
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
            <FormControl
            fullWidth
            error={formik.touched.name && Boolean(formik.errors.name)}
            className={classes.formControl}
            >
              <InputLabel>Enter your name</InputLabel>
              <OutlinedInput
                fullWidth
                name="name"
                id="name"
                label="Enter your name"
                value={formik.values.name}
                onChange={formik.handleChange}
              />
              <FormHelperText>
                {formik.touched.name && formik.errors.name}
              </FormHelperText>
            </FormControl>
            <FormControl
            fullWidth
            error={formik.touched.email && formik.errors.email}
            className={classes.formControl}
            >
              <InputLabel>Enter your e-mail</InputLabel>
              <OutlinedInput
                fullWidth
                name="email"
                id="email"
                label="Enter your e-mail"
                value={formik.values.email}
                onChange={formik.handleChange}
              />
              <FormHelperText>
                {formik.touched.email && formik.errors.email}
              </FormHelperText>
            </FormControl>
            <FormControl
            fullWidth
            error={formik.touched.phone && formik.errors.phone}
            className={classes.formControl}
            >
                <InputLabel>Enter your phone number</InputLabel>
                <OutlinedInput
                  fullWidth
                  name="phone"
                  id="phone"
                  label="Enter your phone number"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                />
                <FormHelperText>
                  {formik.touched.phone && formik.errors.phone}
                </FormHelperText>
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