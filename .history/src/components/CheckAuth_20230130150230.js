import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/client'

const CheckAuth = () => {
    const [ session ] = useSession()

    useEffect(() => {
        if(!session) {
            
        }
    }[session])

    return (
    
    )
}