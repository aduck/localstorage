const express=require('express')
const router=express.Router()
const config=require('../config')
const multer=require('multer')
const storage=multer.diskStorage({
  destination(req,file,cb){
    cb(null,config.path)
  },
  filename(req,file,cb){
    cb(null,file.originalname)
  }
})
const upload=multer({
  storage
}).fields([{'name':'localCloud'}])

router
  .get('/',(req,res)=>{
    res.render('upload')
  })
  .post('/',(req,res,next)=>{
    upload(req,res,e=>{
      if(e) return next(e)
      res.json(req.files)
    })
  })

module.exports=router