$('#write-btn').click(() => {
    
    let userid = JSON.parse(window.localStorage.user).id
    let ptitle = $('#p-title').val()
    let pbody = $('#p-body').val()
    $.post('/api/posts',{ 
        userId : userid, 
        title: ptitle, 
        body: pbody }, (done ) => {
       
        window.alert('Your post is added')
        $('#content').load('/components/all-posts.html')
    })
})
