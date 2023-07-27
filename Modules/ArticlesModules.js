const mongoose = require('./Connection');

const BlogSchema = new mongoose.Schema({
  title: [String],
  description: [String],  
  img: [String], 
});

const Blog = mongoose.model('Blog', BlogSchema);

module.exports = Blog;
