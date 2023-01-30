import axios from 'axios'
import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

export default NextAuth({
  providers: [
    Providers.Credentials({
        name: 'Credentials',
        async authorize(credentials) {
            const res = axios.post('/api/auth/signin', credentials)

            const user = res.data

            if (user) {
                return user
            } else {
                return null
            }
        }

    })
  ],

  session: {
    jwt: true,
  },

  jwt
 
  database: process.env.MONGO_URI,
})