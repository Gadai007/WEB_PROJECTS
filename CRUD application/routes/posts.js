const route = require('express').Router()

const { Posts } = require('../models/Posts')

//TO GET ALL POSTS
route.get('/', async (req, res) => {
    try{
        const posts = await Posts.find()
        res.json(posts)
    }
    catch(err){
        res.json({ error: err})
    }
})

//TO SUBMIT A POST
route.post('/', async (req, res) => {
    const post = new Posts({
        title: req.body.title,
        description: req.body.description
    })

    try{
        const savepost = await post.save()
        res.status(201).json(savepost)
    }
    catch(err){
        res.status(404).json({ error: err})
    }
        
})

//TO GET A SPECIFUC POST
route.get('/:id', async(req, res) => {
    try{  
        const post = await Posts.findById(req.params.id)
        res.status(201).json(post)
    }
    catch(err){
        res.json({ error: err})
    }
})

//delete post
route.delete('/:id', async (req, res) => {
    try{
        const deletePost = await Posts.remove({ _id: req.params.id}) 
        res.json(deletePost)
    }
    catch(err){
        res.json({error: err})
    }
})

//update a post 
route.patch('/:id', async (req, res) => {
    try{
        const updatedPost = await Posts.updateOne({_id: req.params.id},{ $set: { title: req.body.title}})
        res.json(updatedPost)
    }
    catch(err){
        res.json({error : err})
    }
})

module.exports = {
    postRoute : route
}