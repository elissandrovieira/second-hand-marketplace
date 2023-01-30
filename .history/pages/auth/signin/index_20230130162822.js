import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { signIn, useSession } from 'next-auth/client'

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
  Alert,
  Box,
} from '@mui/material'

import { Visibility, VisibilityOff } from '@mui/icons-material'
import { useFormik } from 'formik'

import TemplateFullScreen from '../../../src/templates/FullScreen'
import { initialValues, validationSchema} from './formValues'
import theme from '../../../src/theme'
import useToasty from '../../../src/contexts/Toasty'
import useStyles from './styles'

const SignIn = ({ APP_URL }) => {
  const { classes } = useStyles()
  const router = useRouter()
  const { setToasty } = useToasty()
  const [session] = useSession()



  console.log(session)

  const [showPassword, setShowPassword] = useState(false)
  const handleShowPassword = () => {
    !showPassword ? setShowPassword(true) : setShowPassword(false)
  }

  const handleGoogleLogin = () => {
    signIn('google',{
      callbackUrl: `${APP_URL}/user/dashboard`
    })
  }

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    
    onSubmit: async values => {
      signIn('credentials', {
        email: values.email,
        password: values.password,
        callbackUrl: `${APP_URL}/user/dashboard`
      })
    }
  })

  return (
    <TemplateFullScreen>
      <Container maxWidth="sm" className={classes.container}>
        <Card className={classes.box} elevation={24}>
        <Link href="/" passHref legacyBehavior>
              <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                width: '100%',
                margin: 2
              }}>
                <Box sx={{
                display: 'block',
                alignItems: 'center',
                cursor: 'pointer',
              }}>
                <Image
                  src="/icon.svg"
                  alt="icon"
                  width={46}
                  height={30}
                  style={{
                    marginRight: 10
                  }}
                />
                <Box sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative'
                }}>
                  <Typography component="body2" variant="h5"
                    sx={{
                      fontWeight: 'bold',
                      padding: 0,
                      margin: 0,
                      color: theme.palette.secondary.main
                    }}>
                    Second-Hand
                  </Typography>
                  <Typography component="body2" variant="body2" sx={{
                    padding: 0,
                    marginTop: '-8px',
                    letterSpacing: 5.3
                  }}>
                    MARKETPLACE
                  </Typography>
                </Box>
                </Box>
              </Box>
            </Link>
          <Typography component="h1" variant="h3" align="center" color="textPrimary">
           Hello
          </Typography>
          <Typography component="h5" variant="body1" align="center" color="textPrimary" className={classes.subtitle}>
          {'Sign in to Second-Hand or '}
          <Link
              href={'/auth/signup'}
              className={classes.link}
            >
              create an account
            </Link>
          </Typography>
          <form onSubmit={formik.handleSubmit}>
            {
              router.query.i === '1'
              ? (
                <Alert
                  severity="error"
                  className={classes.errorMessage}
                >
                  Invalid user or password
                </Alert>
              )
              : null
            }
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
          <Box className={classes.separationLine}>
          <div className={classes.line} />
          <Typography
          component="h5"
          variant="body2"
          align="center"
          color="textPrimary"
          className={classes.lineText}
          >
            OR
          </Typography>
          <div className={classes.line} />
          </Box>
          <Box>
            <Button
            fullWidth
            variant="outlined"
            color="secondary"
            elevation={0}
            startIcon={
              <Image
              src="/images/logo_google.svg"
              width={20}
              height={20}
              alt="Google login"
              />
            }
            onClick={handleGoogleLogin}
            >
              Continue with Google
            </Button>
          </Box>
        </Card>
      </Container>
    </TemplateFullScreen>
  )
}

export async function getServerSideProps() {
  const APP_URL = process.env.APP_URL
  return {
    props: { APP_URL }
  }
}

export default SignIn