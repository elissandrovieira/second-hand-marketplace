import dbConnect from '../../src/utils/dbConnect'
import usersModel from '../../src/models/users'

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

      const user = new UsersModel(
        name,
        email,
        password
      )

      user.save()

      res.status(201).json
  }
}

export default users