const mongoose = require('./Connection');

const Blog=mongoose.model('Blog',{
    title:String,
    description:String,
    img:String,
})




module.exports=Blog;