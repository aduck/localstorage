const express=require('express')
const app=express()
const path=require('path')
const router=require('./router')
const config=require('./config')

app.locals.pretty=' '

app.use('/files',express.static(config.path))

app.set('views',path.resolve(__dirname,'views'))
app.set('view engine','pug')

router(app)

module.exports=app