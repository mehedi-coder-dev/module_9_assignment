const mongoose = require('mongoose')
const app = require('./app')
const dotenv = require('dotenv')
dotenv.config({path:"./config.env"})

const port = process.env.RUNNING_PORT || 5000
const dbCanectionString = process.env.DATA_BASE

mongoose.connect(dbCanectionString).then(()=>{
    console.log('DB canected')
    app.listen(port,()=>{
        console.log(`server is running port ${port}`)
    })
}).catch((error)=>{
    console.log(error)
})


