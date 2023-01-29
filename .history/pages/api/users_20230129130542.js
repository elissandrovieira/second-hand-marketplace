import nextConnect from 'next-connect'
import { get, post } from '../../src/controllers/users'
const route = nextConnect()

route.get()

route.post()

export default route