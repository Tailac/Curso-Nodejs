const mongoose = require('mongoose')

const Post = require('./database/models/Post')

mongoose.connect('mongodb://localhost/node-js-test-blog')


/*
Post.create({
    title: 'My second blog post',
    description: 'Second Blog post description',
    content: 'Second Lorem ipsum content'
}, (error, post)=> {
    console.log(error, post) 
})*/

/*
Post.find({
    title: 'My first'
},(error, posts) =>{
    console.log(error, posts)
})*/

/*

Post.findById('5b7b13d15c9a653edc12c524', (error, post)=>{
    console.log(error, post)
})*/

/*
Post.findByIdAndUpdate("5b7b13d15c9a653edc12c524", {
    title: 'My first blog post title lorem ipsum'
}, (error, post)=>{
    console.log(error,post)
})*/

Post.find({},(error, post)=>{
    console.log(error,post)
})