const express = require('express')
const articleRoute=require('./routes/articles')
const app=express()
app.set('view engine','ejs')
app.use('/articles',articleRoute)
app.use('/',articleRoute)

app.listen(5000,()=>{
    console.log('server starting')
})
