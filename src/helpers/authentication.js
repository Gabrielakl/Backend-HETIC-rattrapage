import bcrypt from "bcrypt";

const hashPassword = async (password) => {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds)
    return hashedPassword;
}

const verifyPassword = (inputPassword, storedPassword) => {
    const res = bcrypt.compare(inputPassword, storedPassword, (err, result) => {
        if (err) {
            return false;
        }
        return result;
    });
    return res;
};

export {
    hashPassword,
    verifyPassword
}