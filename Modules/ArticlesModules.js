const mongoose = require('./Connection');

const Blog=mongoose.model('Blog',{
    title:String,
    description:String,
    pic:String,
    date:{
        type:Date,
        default:Date.now()
    }
})




module.exports=Blog;