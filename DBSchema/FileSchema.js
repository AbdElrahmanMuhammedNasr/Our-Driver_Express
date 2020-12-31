const  mongoose  = require('mongoose')
const Schema = mongoose.Schema
const FileSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    snapShot:{
        type: String,
        required: true
    },
    fileLink: {
        type: String,
        required: true
    },
    userEmail: {
        type: String,
        required: true
    }, creatAt: {
        type: Date,
        required: true
    }

})
module.exports = mongoose.model('File',FileSchema)
