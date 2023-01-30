import nextConnect from 'next-connect'
import { post } from '../'

const route = nextConnect()

route.post(post)

export default route