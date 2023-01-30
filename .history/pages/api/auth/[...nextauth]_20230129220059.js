import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

export default NextAuth({
  providers: [
  ],
  // SQL or MongoDB database (or leave empty)
  database: process.env.DATABASE_URL
})