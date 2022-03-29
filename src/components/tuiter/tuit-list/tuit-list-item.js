import {useDispatch} from "react-redux";
import TuitStats from "./tuit-stats";
import React from "react";

const TuitListItem = ({
  tuit = {
    _id: "123",
    topic: "Web Development",
    postedBy: {
      username: "ReactJS"
    },
    liked: true,
    verified: false,
    handle: "ReactJS",
    time: "2h",
    title: "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
    tuit: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    attachments: {
      video: "unKvMC3Y1kI"
    },
    logo_image: "../../../images/react-blue.png",
    avatar_image: "../../../images/react-blue.png",
    stats: {
      comments: 123,
      retuits: 234,
      likes: 345
    },
  }
}) => {
  const dispatch = useDispatch();
  const deleteTuit = (tuit) => {
    dispatch({type: 'delete-tuit', tuit})
  };
  return (
      <>
        <li className="list-group-item">
          <div className="row">

            <div className="col-2">
              <img src={tuit.logo_image} className="img-responsive rounded-circle"
                   width="48px" height="48px" alt="..."/>
            </div>

            <div className="col-9 ps-0">
              <p>
                <strong>{tuit.postedBy.username} <i className="fa fa-check-circle"/></strong>
                <strong className="text-muted"> @{tuit.handle}</strong>
                <br></br>
                {tuit.tuit}
              </p>

                {tuit.attachments ?
                    <div className="card wd-border mt-2">
                      {tuit.attachments.image ?
                      <img src={tuit.attachments.image} className="card-img wd-border mt-2" alt="..."/>
                          : ""}
                      {tuit.attachments.video ?
                          <iframe id="testframe" title="video1257" className="wd-border" height="350em"  src={'https://www.youtube.com/embed/' + tuit.attachments.video}/>
                          : ""}
                    </div>
                : ""}

              <div className="row mt-3 mb-2">
                <TuitStats tuit={tuit}/>
              </div>

            </div>

            <div className="col-1 mt-1">
              <i onClick= {() => deleteTuit(tuit)} className="fa fa-times"/>
            </div>

          </div>

        </li>
      </>
  );
}

export default TuitListItem;