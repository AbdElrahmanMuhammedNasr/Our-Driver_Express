const File = require('../DBSchema/FileSchema')

exports.addNewFile = (req, res, next) => {
    const fileBody = req.body;
    const file = new File({
        name: fileBody.name,
        snapShot: fileBody.snapShot,
        fileLink: fileBody.fileLink,
        userEmail: fileBody.userEmail,
        creatAt:new Date()


    });

    file.save()
        .then(r => {
            res.status(201).json(r)
        })
        .catch(err => {
            res.status(417).json({
                message: err.message
            })
        })

}

exports.deleteFile = (req, res, next) => {
    const id = req.params.fileId;
    File.findOneAndDelete({'_id': id})
        .then(r => {
            res.status(200).json({
                message: "Delete File"
            })
        })
        .catch(err => {
            res.status(417).json({
                message: err.message
            })
        })
}

exports.getUserFiles = (req, res, next) => {
    const email =  req.params.email;
    File.find({'userEmail':email})
        .then(r=>{
            res.status(302).json({
                files:r,
                beta:{
                    number:r.length
                }
            })
        })
        .catch(err=>{
            res.status(417).json({
                message:err.message
            })
        })
}

















