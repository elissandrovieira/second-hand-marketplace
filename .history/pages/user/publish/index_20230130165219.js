import { useFormik } from 'formik'
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
  MenuItem
} from '@mui/material'

import TemplateDefault from '../../../src/templates/Default'
import useStyles from './styles'
import { validationSchema, initialValues } from './formValues'
import FileUpload from '../../../src/components/FileUpload'

const Publish = () => {
  const { classes } = useStyles()

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const formData = new formData()

      for
      
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
                endAdornment={<InputAdornment position="start">???</InputAdornment>}
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

export default Publish