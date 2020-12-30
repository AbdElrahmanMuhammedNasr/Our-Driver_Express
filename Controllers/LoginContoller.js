const bcrypt = require('bcryptjs')
const Login = require('../DBSchema/LoginSchema');

exports.loginUser = (req, res, next) => {
    const userBody = req.body;// email password
    Login.findOne({'email': userBody.email})
        .then(user => {
            if (user) {
                bcrypt.compare(userBody.password, user.password).then(doMatch => {
                    if (doMatch) {
                        res.status(200).json({
                            message: "Success"
                        })
                    } else {
                        res.status(401).json({
                            message: "Email or password not correct"
                        })
                    }
                })

            } else {
                res.status(401).json({
                    message: "Email or password not correct"
                })
            }

        }).catch(err=>console.log(err))


}
