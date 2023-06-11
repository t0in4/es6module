import mongoose from 'mongoose';
import Blog from './model/Blog.js';

mongoose.connect("mongodb://localhost:27017/startbase");

const article = new Blog({
    title: 'Awsome Post!',
    slug: 'awsome-post',
    published: true,
    content: 'This is the best post ever',
    tags: ['featured', 'announcement'],

});

await article.save();
const firstArticle = await Blog.findOne({});
console.log(firstArticle);