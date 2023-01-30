import { useEffect } from 'react'
import { use}
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