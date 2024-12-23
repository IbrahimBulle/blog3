const express=require('express')
const router=express.Router()
router.get('/',(req,res)=>{
    const articles=[{
        title:'test title',
        created:new Date(),
        description:'test description'
    }]
    res.render('articles/index',{articles:articles})
    // res.send('hello world se')
})
router.get('/new',(req,res)=>{
    res.render('articles/new',{title:'new'})
})
module.exports=router