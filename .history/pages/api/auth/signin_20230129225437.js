import nextConnect from 'next-connect'
import { post } from '../../../src/'

const route = nextConnect()

route.post(post)

export default route