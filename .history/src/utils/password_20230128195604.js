import bcrypt from 'bcrypt'

const async crypt = pwd => {
    const salt = await bcrypt.genSalt()

    const password = await bcrypt.hash(pwd, salt)
}