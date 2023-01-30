import UsersModel from '../models/users'
import dbConnect from '../utils/dbConnect'
import { crypto } from '../utils/password'

export const post = async (req, res) => {
    const{
        email,
        password,
    } = req.body

    await dbConnect()

    const user = await UsersModel.findOne({ email })

    if (!user) {
        
    }

    const passIsCorrect = compare(password, user.password)

    if (passIsCorrect) {
        return res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,
        })
    }
}