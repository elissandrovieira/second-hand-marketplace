import nextConnect from 'next-connect'
import { post } from '../../../src/controllers/auth/'

const route = nextConnect()

route.post(post)

export default route