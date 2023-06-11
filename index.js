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

// update data
article.title = "The Most Awesomest Post!!";
await article.save();
console.log(article);


// find data - start
const findedArticle  = await Blog.findById("6485a6703be71a98f8e67887").exec(); 
console.log(findedArticle);

// find data with needed fields
const findFields  = await Blog.findById("6485a6703be71a98f8e67887", "title slug content").exec();
console.log(findFields);

// mongo standard find method
const blogFind = await Blog.findOne({ author: "Jesse Hall" });

// own style of mongoose where() method 
const blogWhere = await Blog.where("author").equals("Jesse Hall");
console.log(blogWhere)

const blog = await Blog.where("author").equals("Jesse Hall").select("title author")
console.log(blog)

// find data - end

// deleting data
const deleteOneRecord = await Blog.deleteOne({ author: "Jesse Hall" })
console.log(deleteOneRecord)

const deleteManyRecords = await Blog.deleteMany({ content: "This is the best post ever" })
console.log(deleteManyRecords)