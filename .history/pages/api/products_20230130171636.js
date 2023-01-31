import nextConnect from 'next-connect'
import { get, post } from '../../src/controllers/users'

const route = nextConnect()

route.post(post)

export default route