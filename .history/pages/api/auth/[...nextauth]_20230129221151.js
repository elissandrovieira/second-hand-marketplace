import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

export default NextAuth({
  providers: [
    Providers.Credentials({
        name: 'Credentials',
        async autor

    })
  ],
 
  database: process.env.MONGO_URI,
})