import dbConnect from '../../src/utils/dbConnect'
import { crypto } from '../../src/utils/password'
import UsersModel from '../../src/models/users'

const users = async (req, res) => {
  const { method } = req

  switch (method) {
    case 'GET':
      await dbConnect()
      res.status(200).json({ success: true })
      break

    case 'POST':
      //get the req data
      //connect with database
      //encrypt password
      //response success
      const {
        name,
        email,
        password,
      } = req.body

      await dbConnect()

      const passwordCrypto = crypto(password)

      const user = new UsersModel({
        name,
        email,
        password,
      })

      user.save()

      res.status(201).json({ success: true })
  }
}

export default users