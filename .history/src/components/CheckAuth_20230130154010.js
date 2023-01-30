import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/client'
import LoadingPage from './LoadingPage'
import { Box } from '@mui/material'

const CheckAuth = ({ Component, pageProps }) => {
  const [session] = useSession()
  const router = useRouter()

  useEffect(() => {
    if (!session) {
      router.push('/auth/signin')
    }
  }, [session])

  if (session) {
    return <Component {...pageProps} />
  } 
  
  return (
    <Box className={classes.container}>
      <CircularProgress className={classes.loading} />
    </Box>
  )
}

export default CheckAuth