const PostSummaryItem = (post) => {
  return(`
    <div class="card wd-borders-not-rounded">
        <div class="row no-gutters wd-min-height">

          <div class="col-md-9 pt-0">
            <div class="card-body pt-0">
              <div class="card-text pt-0 pb-0">
                <small class="text-muted">${post.topic}</small>
              <div class="fw-bold text-white pt-0 fa-1x">${post.userName}
              <i class="fa fa-check-circle"></i> 
              <small class="text-muted fw-light">- ${post.time}</small></div>
              </div>
              <div><small class="fw-bold p-0 m-0 text-white">
                ${post.title}
              </small></div>
            </div>
          </div>

          <div class="col-md-3 justify-content-center align-self-center">
            <img src="${post.image}"  class="wd-post-image" alt="...">
          </div>

        </div>
      </div>
  `);
}
export default PostSummaryItem;