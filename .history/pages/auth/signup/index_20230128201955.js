import { useState } from 'react'
import axios from 'axios'
import {
  Card,
  Button,
  Container,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography,
  CircularProgress,
} from '@mui/material'

import { Visibility, VisibilityOff } from '@mui/icons-material'
import { useFormik } from 'formik'
import * as yup from 'yup'

import TemplateFullScreen from '../../../src/templates/FullScreen'
import { initialValues, validationSchema} from './formValues'
import useStyles from './styles'

const SignUp = () => {
  const { classes } = useStyles()

  const [showPassword, setShowPassword] = useState(false)
  const handleShowPassword = () => {
    !showPassword ? setShowPassword(true) : setShowPassword(false)
  }

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    
    onSubmit: async values => {
      const response = await axios.post('/api/users', values)

      if (response.data.success) {
        console.log('registred user')
      }
    }
  })

  return (
    <TemplateFullScreen>
      <Container maxWidth="sm" className={classes.container}>
        <Card className={classes.box} elevation={24}>
          <Typography component="h1" variant="h3" align="center" color="textPrimary">
            Create a New Account
          </Typography>
          <Typography component="h5" variant="h6" align="center" color="textPrimary" className={classes.subtitle}>
            And buy, sell and find just about anything
          </Typography>
          <form onSubmit={formik.handleSubmit}>
              <FormControl
                className={classes.formControl}
                fullWidth
                error={formik.touched.fname && formik.errors.fname}
              >
                <InputLabel>Enter your name</InputLabel>
                <OutlinedInput
                  fullWidth
                  name="fname"
                  id="fname"
                  label="Enter your name"
                  onChange={formik.handleChange}
                />
                <FormHelperText>{formik.touched.fname && formik.errors.fname}</FormHelperText>
              </FormControl>
              <FormControl
                className={classes.formControl}
                fullWidth
                error={formik.touched.email && formik.errors.email}
              >
                <InputLabel>Enter your E-mail</InputLabel>
                <OutlinedInput
                  fullWidth
                  name="email"
                  id="email"
                  label="Enter your E-mail"
                  onChange={formik.handleChange}
                />
                <FormHelperText>{formik.touched.email && formik.errors.email}</FormHelperText>
              </FormControl>
              <FormControl
                className={classes.formControl}
                fullWidth
                error={formik.touched.password && formik.errors.password}
              >
                <InputLabel>Set a password</InputLabel>
                <OutlinedInput
                  fullWidth
                  name="password"
                  id="password"
                  label="Set a password"
                  type= {showPassword ? 'text' : 'password'}
                  onChange={formik.handleChange}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                      onClick={handleShowPassword}
                      >
                        { showPassword ? <VisibilityOff /> : <Visibility /> }
                      </IconButton>
                    </InputAdornment>
                  }
                />
                <FormHelperText>{formik.touched.password && formik.errors.password}</FormHelperText>
              </FormControl>
              <FormControl
                className={classes.formControl}
                fullWidth
                error={formik.touched.confirmPass && formik.errors.confirmPass}
              >
                <InputLabel>Confirm password</InputLabel>
                <OutlinedInput
                  fullWidth
                  name="confirmPass"
                  id="confirmPass"
                  label="Confirm password"
                  type= {showPassword ? 'text' : 'password'}
                  onChange={formik.handleChange}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                      onClick={handleShowPassword}
                      >
                        { showPassword ? <VisibilityOff /> : <Visibility /> }
                      </IconButton>
                    </InputAdornment>
                  }
                />
                <FormHelperText>{formik.touched.confirmPass && formik.errors.confirmPass}</FormHelperText>
              </FormControl>
              <Button fullWidth type="submit" variant="contained" disableElevation>
                {
                  formik.isSubmitting
                  ? 
                }
              </Button>
          </form>
        </Card>
      </Container>
    </TemplateFullScreen>
  )
}

export default SignUp