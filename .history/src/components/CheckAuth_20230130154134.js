import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/client'
import LoadingPage from './LoadingPage'
import { Box, CircularProgress } from '@mui/material'

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
    <Box sx={{
      display: 'block',
      height: '500px',
      width: '500px',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'red'
    }}>
      <CircularProgress />
    </Box>
  )
}

export default CheckAuth