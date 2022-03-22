import React from "react";

const PostItem = ( {
    post = {
      "avatarIcon": "../images/ElonMusk.jpg",
      "userName": "Elon Musk",
      "time": "23h",
      "handle": "@elonmusk",
      "heading": "Amazing show about @Inspiration4x mission!",
      "cardImage": "../images/post1image.jpg",
      "cardHeading": "Countdown: Inspiration4 Mission to Space | Netflix Official Site",
      "cardText": "From training to launch to landing, this all-access docuseries "
          + "rides along with the Inspiration4 crew on the first all-civilian orbital space ...",
      "cardLink": "netflix.com",
      "repliesNumber": "4.2K",
      "shareNumber": "3.5K",
      "likesNumber": "37.5K"
    }
}) => {

  return(
      <>
        <li className="list-group-item wd-follow bg-black">
          <div className="row">

            <div className="col-2 bg-black">
              <img src={post.avatarIcon} className="img-responsive rounded-circle"
                width="48px" height="48px" alt="..."/>
            </div>

            <div className ="col-10 ps-0 bg-black">

              <div className="pb-3 bg-black">
                {post.userName}<i className="fa fa-check-circle"/>
                  <small className="text-muted">{post.handle} · {post.time} </small>
              <br/>
                <div dangerouslySetInnerHTML={{__html: post.heading}}/>
              </div>

              <div className="card wd-border bg-black">
                <img src={post.cardImage} className="card-img wd-border" alt="..."/>
                <div className={`card-body ${post.cardHeading===''&&post.cardText===''&& post.cardLink==='' ? 'wd-display-none' : ''}`}>
                  <h6 className={`card-title ${post.cardHeading==='' ? 'wd-display-none' : ''}`}>{post.cardHeading}</h6>
                  <p className={`card-text text-muted ${post.cardText==='' ? 'wd-display-none' : ''}`}>{post.cardText}
                    <br/><span className={`${post.cardLink==='' ? 'wd-display-none' : ''}`}><i className="fas fa-link"/>{post.cardLink} </span>
                  </p>
                </div>
              </div>

              <div className="d-flex flex-row text-muted mt-2">
                <div className="col-3">
                  <i className="far fa-comment"/>
                  <span className="wd-margin-icon">{post.repliesNumber}</span>
                </div>
                <div className="col-3">
                  <i className="fa fa-retweet"/>
                  <span className="wd-margin-icon">{post.shareNumber}</span>
                </div>
                <div className="col-3">
                  <i className="far fa-heart"/>
                  <span className="wd-margin-icon">{post.repliesNumber}</span>
                </div>
                <div className="col-3">
                  <i className="far fa-share-square"/>
                </div>
              </div>

            </div>

          </div>
        </li>
      </>
 );
}
export default PostItem;