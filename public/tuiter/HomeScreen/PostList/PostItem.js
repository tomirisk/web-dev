const PostItem = (post) => {
  return(`
    <li class="list-group-item wd-follow">
      <div class="row">
      
      <!--Avatar Image-->
        <div class="col-2">
          <img src="${post.avatarIcon}" class="img-responsive rounded-circle" 
            width="48px" height="48px"/>
        </div>  
        
        <!--Main Middle Column--> 
        <div class ="col-10 ps-0">
        <!--Name and Title--> 
          <div class="pb-3">
            ${post.userName}<i class="fa fa-check-circle"></i>
              <small class="text-muted">${post.handle} · ${post.time} </small>
          <br>
            ${post.heading}
          </div>
        <!--Post with image-->
          <div class="card">
            <img src="${post.cardImage}" class="card-img-top" alt="...">
            <div class="card-body">
              <h6 class="card-title">${post.cardHeading}</h6>
              <p class="card-text text-muted">${post.cardText}
                <span><i class="fas fa-link"></i>${post.cardLink} </span>
              </p>
            </div>
          </div>
        <!--Reply, retuit, like, share icons-->  
          <div class="d-flex justify-content-between text-muted mt-2">
            <div>
              <i class="far fa-comment"></i>
              <span>${post.repliesNumber}</span>
            </div>
            <div>
              <i class="far fa-comment"></i>
              <span>${post.repliesNumber}</span>
            </div>
            <div>
              <i class="far fa-comment"></i>
              <span>${post.repliesNumber}</span>
            </div>
            <div>
              <i class="far fa-comment"></i>
              <span>${post.repliesNumber}</span>
            </div>
          </div>
          
        </div>
        
      </div>
    </li>
 `);
}
export default PostItem;