import bcrypt from 'bcrypt'

const crypt = pwd => {
    const salt = await bcrypt.genSalt()

    const password = await bc
}