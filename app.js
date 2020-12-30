const express = require('express');
const app = express();
const mongoose = require('mongoose')

const bodyParser = require("body-parser");
app.use(bodyParser.json());

// app.use(express.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, 'public')));

const authRoutes = require('./Routes/LoginRoutes');
const userRoutes = require('./Routes/UserRoutes');
const fileRoutes = require('/Routes/FileRoutes')

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
})


app.use('auth',authRoutes);
app.use('user',userRoutes);
app.use('file',fileRoutes);

mongoose.connect('mongodb://127.0.0.1:27017/ourStore',{ useFindAndModify: false })
    .then(result => {
        console.log("ok")
        app.listen(3000)
    }).catch(err => {
    console.log(err)
})
