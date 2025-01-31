const mongoose = require('mongoose')

const connect =()=>{
    mongoose.connect('mongodb://127.0.0.1:27017/event')
    .then(()=>{console.log("database has been connected")})
    .catch((err)=>{console.log(err)})
}

module.exports = connect