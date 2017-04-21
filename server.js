const http=require('http')
const config=require('./config')
const app=require('./app')
const port=config.port || 8080
http
  .createServer(app)
  .listen(port,()=>{
    console.log(`server running ${port}`)
  })