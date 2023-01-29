import { useState } from 'react'
import Link from 'next/link'
import axios from 'axios'
import { useRouter } from 'next/router'

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

import TemplateFullScreen from '../../../src/templates/FullScreen'
import Logo from '../../../src/components/Logo'
import { initialValues, validationSchema} from './formValues'
import useToasty from '../../../src/contexts/Toasty'
import useStyles from './styles'

const SignIn = () => {
  const { classes } = useStyles()
  const router = useRouter()
  const { setToasty } = useToasty()

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
        setToasty({
          open: true,
          text: 'Registration was carried out successfully!',
          severity: 'success',
        })

        router.push('signin')
      }
    }
  })

  return (
    <TemplateFullScreen>
      <Container maxWidth="sm" className={classes.container}>
        <Card className={classes.box} elevation={24}>
          <Typography component="h1" variant="h3" align="center" color="textPrimary">
           Hello
          </Typography>
          <Typography component="h5" variant="h6" align="center" color="textPrimary" className={classes.subtitle}>
          {'Sign in to Second-Hand or '}
           create an account
          </Typography>
          <form onSubmit={formik.handleSubmit}>
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
                  value={formik.values.email}
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
                  value={formik.values.password}
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
              {
                  formik.isSubmitting
                  ? ( 
                    <CircularProgress className={classes.loading} />
                  ) : (
                    <Button fullWidth type="submit" variant="contained" disableElevation>Sign In</Button>
                  )
                }
          </form>
        </Card>
      </Container>
    </TemplateFullScreen>
  )
}

export default SignIn