const { Router } = require('express')

const { commentOfPost, commentOfUser, addComment} = require('../../controllers/comments')

const route = Router()

route.get('/users/:id', async( req, res) => {
  
  if(isNaN(parseInt(req.params.id))){
   return res.status(400).send({
     error : "need userId to to find the comment"
   })
  }
  const userComment = await commentOfUser(req.params.id)
  res.status(200).send(userComment)
})

route.get('/posts/:id', async(req, res) => {

  if(isNaN(parseInt(req.params.id))){
    return res.status(400).send({
      error : "need postId to to find the comment"
    })
   }
   const postComment = await commentOfPost(req.params.id)
   res.status(200).send(postComment)
})

route.post('/', async (req, res) => {

  const {userId, title, body, postId} = req.body

  if((!userId) || (!title) || (!body) || (!postId)){
    return res.status(400).send({ error : "Need userId, title, body, postId to create a comment"})
  }

  const comment = await addComment(userId, title, body, postId)
  res.status(200).send(comment)
})


module.exports = {
  commentsRoute: route
}