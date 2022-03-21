import React from "react";
import {Link} from "react-router-dom";

const Tabs = () => {
  return(
      <>
        <li className="nav-item">
          <Link to="/" className="nav-link active">For You</Link>
        </li>
        <li className="nav-item">
          <Link to="/" className="nav-link">Trending</Link> </li>
        <li className="nav-item">
          <Link to="/" className="nav-link">News</Link>
        </li>
        <li className="nav-item">
          <Link to="/" className="nav-link" >Sports</Link>
        </li>
        <li className="nav-item">
          <Link to="/" className="nav-link wd-entertainment-tab">Entertainment</Link>
        </li>
      </>
  );
}
export default Tabs;