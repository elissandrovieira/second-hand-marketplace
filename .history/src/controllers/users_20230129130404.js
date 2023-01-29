import UsersModel from '../'

export const get = async (req, res) => {
    await dbConnect()
    const users = await UsersModel.find()
    res.status(200).json({ success: true, users })
}

export const post = async (req, res) => {
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