import nextConnect from 'next-connect'
import { post } from '../../../src/controllers/auth/sig'

const route = nextConnect()

route.post(post)

export default route