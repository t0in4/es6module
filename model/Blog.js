import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const blogSchema = new Schema({
    title: String,
    slug: String,
    published: Boolean,
    author: String,
    content: String,
    tags: [String],
    createdAt: Date,
    updatedAt: Date,
    comments: [{
        user: String,
        content: String,
        votes: Number
    }]
});
// if we need validate some field
/* title:  {
    type: String,
    required: true,
  }, 
  slug:  {
    type: String,
    required: true,
    lowercase: true, // input data must be lowercase
  },
  createdAt: {
    type: Date,
    default: () => Date.now(), // arrow function to set default date
    immutable: true, // impossible to change later
  },
  */

const Blog = model('Blog', blogSchema);
export default Blog;