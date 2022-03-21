import React from "react";

const Tabs = () => {
  return(
      <>
        <li className="nav-item">
          <a className="nav-link active" href="#">For You</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Trending</a> </li>
        <li className="nav-item">
          <a className="nav-link" href="#">News</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Sports</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Entertainment</a>
        </li>
      </>
  );
}
export default Tabs;