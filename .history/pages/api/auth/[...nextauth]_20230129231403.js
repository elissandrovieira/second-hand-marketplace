import axios from 'axios'
import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

export default NextAuth({
  providers: [
    Providers.Credentials({
        name: 'Credentials',
        async authorize(credentials) {
            const res = axios.post('http://localhost:3000', credentials)

            const user = res.data

            if (user) {
                return user
            } else {
                throw '/auth/signin?i=1'
            }
        }

    })
  ],

  session: {
    jwt: true,
  },

  jwt:{
    secret: process.env.JWT_TOKEN,
  },
 
  database: process.env.MONGO_URI,
})