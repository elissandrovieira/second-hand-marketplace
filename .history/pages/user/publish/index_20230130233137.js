import { useFormik } from 'formik'
import { useRouter } from 'next/router'
import axios from 'axios'
import {
  Container,
  Box,
  Button,
  Select,
  Typography,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  FormControl,
  FormHelperText,
  MenuItem,
  Input
} from '@mui/material'

import TemplateDefault from '../../../src/templates/Default'
import useStyles from './styles'
import { validationSchema, initialValues } from './formValues'
import FileUpload from '../../../src/components/FileUpload'
import useToasty from '../../../src/contexts/Toasty'
import { getSession } from 'next-auth/client'

const Publish = ({ userId, image }) => {
  const { classes } = useStyles()
  const { setToasty } = useToasty()
  const router = useRouter()

  const formValues = {
    ...initialValues,
  }

  formValues.userId = userId
  formValues.image = image
  
  const handleSuccess = () => {
    setToasty({
      open: true,
      text: 'Successfull ad registration!',
      severity: 'success'
    })

    //router.push('/user/dashboard')
  }

  const handleError = () => {
    setToasty({
      open: true,
      text: 'An error has occurred, please try again.',
      severity: 'error'
    })
  }

  const formik = useFormik({
    initialValues: formValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const formData = new FormData()
  
      for( let field in values ) {
        if (field === 'files') {
          values.files.forEach(file => {
            formData.append('files', file)
          })
        } else {
          formData.append(field, values[field])
        }
      }
  
      axios.post('/api/products', formData)
      .then(handleSuccess)
      .catch(handleError)
    }
  })
  


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
        <Input type="hidden" name="userId" value={formik.values.userId} />
        <Input type="hidden" name="image" value={formik.values.image} />

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
              error={formik.touched.category && formik.errors.category}
              fullWidth
            >
              <InputLabel>category</InputLabel>
              <Select
                name="category"
                id="category"
                label="category"
                value={formik.values.category}
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
                {formik.touched.category && formik.errors.category}
              </FormHelperText>
            </FormControl>

          </Box>
        </Container>

        <Container maxWidth="md" className={classes.boxContainer}>
          <FileUpload
          setFieldValue={formik.setFieldValue}
          values={formik.values.files}
          errors={formik.errors.files}
          touched={formik.touched.files}
          />
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

Publish.requireAuth = true

export async function getServerSideProps({ req }) {
  const session = await getSession({ req })

  return {
    props: {
      userId: session.userId,
      image: session.user.image,
    }
  }
}

export default Publish