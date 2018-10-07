const mongoose = require('mongoose')


//Estrutura do documento da collection

const PostSchema = new mongoose.Schema({
    title: String,
    subtitle: String,
    content: String,
    username: String,
    image: String,
    createdAt: {
        type: Date,
        default: new Date()
    }
})


//Model representa uma collect na database (a collection é como se fosse um entidade)
const Post  = mongoose.model('Post', PostSchema)

module.exports = Post