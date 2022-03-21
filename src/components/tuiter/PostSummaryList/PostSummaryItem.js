import React from "react";

const PostSummaryItem = (
    {
     post = {
       "topic": "Web Development",
       "userName": "ReactJS",
       "time": "2h",
       "title": "React.js is a component based front end library that makes "
           + "it very easy to build Single Page Applications or SPAs",
       "image": "../../../public/tuiter/images/react.png.jpeg"
     }
    }) => {
  return(
    <div className="card wd-post-summary-border bg-black">
        <div className="row no-gutters wd-min-height m-0">

            <div className="card-body col-md-9 pt-0 m-0">
              <div className="card-text pt-0 pb-0">
                <small className="text-muted">{post.topic}</small>
              <div className="fw-bold text-white pt-0 fa-1x">{post.userName}
              <i className="fa fa-check-circle"/>
              <small className="text-muted fw-light"> - {post.time}</small></div>
              </div>
              
              <div><small className="fw-bold p-0 m-0 text-white">
                {post.title}
              </small></div>
            </div>
         

          <div className="col-md-3 d-flex justify-content-center align-self-center m-0">
            <img src={post.image} className="wd-post-image" alt="..."/>
          </div>

        </div>
      </div>
  );
}
export default PostSummaryItem;