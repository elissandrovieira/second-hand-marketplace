import nextConnect from 'next-connect'
import dbConnect from '../../src/utils/dbConnect'
import { crypto } from '../../src/utils/password'
import UsersModel from '../../src/models/users'

const route = nextConnect()

route.get(async (req, res) => {
  await dbConnect()
  const users = await UsersModel.find()
  res.status(200).json({ success: true, users })
})

const users = async (req, res) => {
  const { method } = req

  switch (method) {
    case 'GET':
      await dbConnect()
      res.status(200).json({ success: true })
      break

    case 'POST':
      const {
        name,
        email,
        password,
      } = req.body

      await dbConnect()

      const passwordCrypto = await crypto(password)

      const user = new UsersModel({
        name,
        email,
        password: passwordCrypto,
      })

      user.save()

      res.status(201).json({ success: true })
  }
}

export default users