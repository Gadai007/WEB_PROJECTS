const mongoose = require('mongoose')

const PostSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

const Posts = mongoose.model('posts', PostSchema)

module.exports = {
    mongoose,
    Posts
}
    