import React from "react";

const WhoToFollowListItem = (
    {
        who = {
          avatarIcon: './images/nasa.png',
          userName: 'NASA',
          handle: 'NASA'
        }
    }) => {
  return(
      <>
        <li className="list-group-item wd-follow bg-black">
          <div className="d-flex flex-row">
            <div>
              <img src={who.avatarIcon} className="img-responsive rounded-circle"
                   width="48px" height="48px" alt="..."/>
            </div>
            <div className="ps-2">
              <b>{who.userName}<i className="fa fa-check-circle"/></b>
              <br />@{who.handle}
            </div>
          </div>
          <button type="submit" className="btn btn-primary pt-1 pb-1 rounded-pill">
            Follow
          </button>
        </li>
      </>
  );
}
export default WhoToFollowListItem;