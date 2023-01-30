import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/client'

const CheckAuth = () => {
    const [ session ] = useSession()
    const router = use

    useEffect(() => {
        if(!session) {
            
        }
    }[session])

    return (
    
    )
}