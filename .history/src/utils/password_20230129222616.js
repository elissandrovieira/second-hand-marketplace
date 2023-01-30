import bcrypt from 'bcrypt'

export const crypto = async pwd => {
    const salt = await bcrypt.genSalt()

    const password = await bcrypt.hash(pwd, salt)

    return password
}

export const compare = async (pwd, hash) {
    bcrypt.compare(pwd, has)
}