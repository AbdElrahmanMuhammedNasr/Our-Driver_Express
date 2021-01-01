const User = require('../DBSchema/UserSchema');
const Login = require('../DBSchema/LoginSchema');
const bcrypt = require('bcryptjs')

exports.createUser = (req, res, next) => {
    const userBody= req.body;

    const user = new User({
        email:userBody.email,
        name:userBody.name,
        creatAt:new Date()
    })
    user.save().then(r=>{
        bcrypt.hash(userBody.password, 10)
            .then(hashPass=>{
                const login = new Login({
                    email :userBody.email,
                    password:hashPass
                })
                login.save().then(r=>{
                    res.status(200).json({
                        message:"Create User"
                    })
                })
            })

    }).catch(err=>{
        res.status(417).json({
            message:"Error While Create user"
        })
    })

}

exports.getOneUser=(req,res,next)=>{
    const email = req.params.email;
    User.findOne({'email':email})
    .then(user=>{   
        res.status(200).json(user)
    }).catch(err =>{
        console.log(err)
    })
    
}

exports.deleteUser = (req, res, next)=>{
    const email = req.params.email;
    User.findOneAndDelete({'email':email})
        .then(r=>{
            res.status(200).json({
                message:"Delete User done"
            })
        })
        .catch(err=>{
            res.status(417).json({
                message:err.message
            })
        })
}
