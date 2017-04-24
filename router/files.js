const express=require('express')
const router=express.Router()
const fs=require('fs')
const path=require('path')
const config=require('../config')
const url=require('url')

router
  .use('/',(req,res,next)=>{
    let reqpath=req.path.slice(1)
    reqpath=decodeURI(reqpath)
    let realpath=path.resolve(config.path,reqpath)
    fs.lstat(realpath,(err,stats)=>{
      if(err) return next(err)
      if(stats.isDirectory()){
        fs.readdir(realpath,(err,files)=>{
          if(err) return next(err)
          res.render('files',{files,reqpath})
        })
      }
    })
  })

module.exports=router