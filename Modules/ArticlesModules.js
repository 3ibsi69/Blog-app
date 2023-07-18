const mongoose = require('./Connection');

const Blog=mongoose.model('Blog',{
    title:String,
    description:String,
    pic:String,
    date:date.now(),
})




module.exports=Blog;