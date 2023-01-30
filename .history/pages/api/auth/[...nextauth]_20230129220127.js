import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

export default NextAuth({
  providers: [
  ],
 
  database: process.env.MONGO_URI,
})