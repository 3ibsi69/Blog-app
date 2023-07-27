const mongoose = require('./Connection');

const BlogSchema = new mongoose.Schema({
  title: [String], // Array of titles
  description: [String], // Array of descriptions
  img: [String], // Array of images
});

const Blog = mongoose.model('Blog', BlogSchema);

module.exports = Blog;
