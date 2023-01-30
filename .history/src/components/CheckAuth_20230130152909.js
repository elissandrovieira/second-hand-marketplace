import { useEffect } from 'react'
import { use}
import { useSession } from 'next-auth/client'

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
  
  return 'Carregando...'
}

export default CheckAuth