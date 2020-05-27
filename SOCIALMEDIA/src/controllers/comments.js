const { Users, Posts, Comments} = require('../db/models')

async function addComment( userId, title, body, postId ){
    const comment = await Comments.create({
        userId,
        title,
        body,
        postId
    })
    return comment
}

async function commentOfUser( id ){

    const userComments = await Comments.findAll({
        include : [ Users , Posts],
        where : {userId : id, userId : username}
    })

    return userComments
}

async function commentOfPost( id ){
    const postComments = await Comments.findAll({
        include : [ Users, Posts],
        where : { postId : id, postId : username}
    })

    return postComments
}

module.exports = {
    addComment,
    commentOfUser,
    commentOfPost
}
