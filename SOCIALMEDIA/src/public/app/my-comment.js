function loadMyComments() {
    const userId = JSON.parse(window.localStorage.user).id
  
    $.get(`/api/comments/users?userId=${userId}`, (posts) => {
      for (let p of posts) {
        console.log('working fine')
        $('#posts-container').append(
          $(`
          <div class="col-4">
            <div class="card m-2">
              <div class="card-body">
                <h5 class="card-title">${p.title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${p.user.username}</h6>
                <p class="card-text">
                  ${p.body.substr(0, 200)}
                  <a href="#">...read more</a>
                </p>
                <a href="#" class="card-link">Comment</a>
                
              </div>
            </div>
          </div>
          
          `)
        )
      }
    })
}
  