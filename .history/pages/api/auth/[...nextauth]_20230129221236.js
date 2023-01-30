import axios from 'axios'
import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

export default NextAuth({
  providers: [
    Providers.Credentials({
        name: 'Credentials',
        async authorize(credentials) {
            axios.post('/api/auth/sign')
        }

    })
  ],
 
  database: process.env.MONGO_URI,
})