import dbConnect from '../../src/utils/dbConnect'

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
  }
}

export default users