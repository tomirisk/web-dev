const PostItem = (post) => {
  return(`
    <li class="list-group-item wd-follow bg-black">
      <div class="row">
      
      <!--Avatar Image-->
        <div class="col-2 bg-black">
          <img src="${post.avatarIcon}" class="img-responsive rounded-circle" 
            width="48px" height="48px"/>
        </div>  
        
        <!--Main Middle Column--> 
        <div class ="col-10 ps-0 bg-black">
        <!--Name and Title--> 
          <div class="pb-3 bg-black">
            ${post.userName}<i class="fa fa-check-circle"></i>
              <small class="text-muted">${post.handle} · ${post.time} </small>
          <br>
            ${post.heading}
          </div>
        <!--Post with image-->
          <div class="card wd-border bg-black">
            <img src="${post.cardImage}" class="card-img wd-border" alt="...">
            <div class="card-body ${post.cardHeading===''&&post.cardText===''&& post.cardLink==='' ? 'wd-display-none' : ''}">
              <h6 class="card-title ${post.cardHeading==='' ? 'wd-display-none' : ''}" >${post.cardHeading}</h6>
              <p class="card-text text-muted ${post.cardText==='' ? 'wd-display-none' : ''}">${post.cardText}
                <br><span ${post.cardLink==='' ? 'wd-display-none' : ''}><i class="fas fa-link"></i>${post.cardLink} </span>
              </p>
            </div>
          </div>
        <!--Reply, retuit, like, share icons-->
          <div class="d-flex flex-row text-muted mt-2">
            <div class="col-3">
              <i class="far fa-comment"></i>
              <span class="wd-margin-icon">${post.repliesNumber}</span>
            </div>
            <div class="col-3">
              <i class="fa fa-retweet"></i>
              <span class="wd-margin-icon">${post.shareNumber}</span>
            </div>
            <div class="col-3">
              <i class="far fa-heart"></i>
              <span class="wd-margin-icon">${post.repliesNumber}</span>
            </div>
            <div class="col-3">
              <i class="far fa-share-square"></i>
            </div>
          </div>
          
        </div>
        
      </div>
    </li>
 `);
}
export default PostItem;