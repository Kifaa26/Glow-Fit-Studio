import 'dotenv/config'
import jwt from 'jsonwebtoken'
const { sign, verify } = jwt

function createToken(users){
    return sign({
        email: users.email,
        pwd: users.pwd,
    },
    process.env.SECRET_KEY,
    {
        expiresIn: '1hr'
    })
}

function verifyAToken(req, res, next) {
    const token = req?.headers["authorization"]
    if (token) {
        if (verify(token, process.env.SECRET_KEY)){
            next()
        } else {
            res?.json({
                status: res.statusCode,
                msg: "Invalid user credentials. Please provide the correct credentials."
            })
        }
    } else {
        res?.json({
            status: res.statusCode,
            msg: "Please login"
        })
    }
}

export {
    createToken, 
    verifyAToken 
}


