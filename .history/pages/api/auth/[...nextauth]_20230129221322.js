import axios from 'axios'
import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

export default NextAuth({
  providers: [
    Providers.Credentials({
        name: 'Credentials',
        async authorize(credentials) {
            constaxios.post('/api/auth/signin', credentials)
        }

    })
  ],
 
  database: process.env.MONGO_URI,
})