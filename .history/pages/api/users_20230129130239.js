import nextConnect from 'next-connect'
import dbConnect from '../../src/utils/dbConnect'
import { crypto } from '../../src/utils/password'
import UsersModel from '../../src/models/users'

const route = nextConnect()

route.get()

route.post()

export default route