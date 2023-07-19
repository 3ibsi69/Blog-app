const mongoose = require('./Connection');

const Blog=mongoose.model('Blog',{
    title:String,
    description:String,
    picture:String,
    date:{
        type:Date,
        default:Date.now()
    }
})




module.exports=Blog;