import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/client'
import 

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
  
  return <LoadingPage />
}

export default CheckAuth