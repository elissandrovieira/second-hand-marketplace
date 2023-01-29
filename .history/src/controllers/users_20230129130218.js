const get = async (req, res) => {
    await dbConnect()
    const users = await UsersModel.find()
    res.status(200).json({ success: true, users })
  }