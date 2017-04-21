module.exports=function(app){
  app.get('/',(req,res)=>{
    res.redirect('/upload')
  })
  app.use('/upload',require('./upload'))
  app.use('/files',require('./files'))
  app.use((req,res,next)=>{
    let e=new Error('Not Found')
    e.status=404
    return next(e)
  })
  app.use((err,req,res,next)=>{
    res.send(err.message)
  })
}