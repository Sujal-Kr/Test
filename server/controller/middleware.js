const userModel = require('../model/user.model')
const JWT = require('jsonwebtoken');
const KEY = process.env.KEY
async function protectRoute(req, res, next) {
    try {
        if (req.cookies.login) {
            const token = req.cookies.login
            const payload = JWT.verify(token, KEY)
            if (payload) {
                const user = await userModel.findById(payload.payload)
                req.role = user.role
                req.id = user.id
                next()

            }
        }
        return res.status(200).json({
            sucsess: false,
            message: 'Invalid Login'
        })

    } catch (e) {
        return res.status(500).json({
            message: e.message
        })
    }
}

function isAuthorised(roles) {
    return function (req, res, next) {
        if (roles.includes(req.role)) {
            next()
        } else {
            res.status(401).json({
                message: "Unauthorised user!!!!"
            })
        }
    }
}


module.exports = {
    protectRoute,
    isAuthorised,
}