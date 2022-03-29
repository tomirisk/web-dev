import React from "react";
import {Link, useLocation} from "react-router-dom";

const NavigationSidebar = () => {
  const path = useLocation().pathname;
return(
    <>
    <div className="list-group">
      <Link to="/"
      className="list-group-item">
      <i className="fab fa-twitter"/>
      </Link>

      <Link to="/tuiter/home"
       className={`list-group-item ${(path.includes('home') || path.endsWith('tuiter')) ? 'active' : ''}`}>
        <i className="fa fa-home"/>
          <span className="navigation-label wd-left-tab">
            Home
          </span>
      </Link>

      <Link to="/tuiter/explore"
       className={`list-group-item ${path.includes('explore') ? 'active' : ''}`}>
        <i className="fa fa-hashtag"/>
          <span className="navigation-label wd-left-tab">
            Explore
          </span>
      </Link>

       <Link to="/"
             className="list-group-item">
        <i className="fas fa-bell"/>
          <span className="navigation-label wd-left-tab">
            Notifications
          </span>
       </Link>

       <Link to="/"
             className="list-group-item">
        <i className="fas fa-envelope"/>
          <span className="navigation-label wd-left-tab">
            Messages
          </span>
       </Link>

       <Link to="/"
             className="list-group-item">
        <i className="fas fa-bookmark"/>
          <span className="navigation-label wd-left-tab">
            Bookmarks
          </span>
       </Link>

       <Link to="/"
             className="list-group-item">
        <i className="fa fa-list"/>
          <span className="navigation-label wd-left-tab">
            Lists
          </span>
       </Link>

       <Link to="/tuiter/profile"
             className={`list-group-item ${path.includes('profile') ? 'active' : ''}`}>
        <i className="fa fa-user"/>
          <span className="navigation-label wd-left-tab">
            Profile
          </span>
       </Link>

       <Link to="/"
             className="list-group-item">
        <i className="fas fa-circle"/>
          <span className="navigation-label wd-left-tab">
            More
          </span>
       </Link>

    </div>

    <div className="d-grid mt-2">
      <Link to="tweet.html"
        className="btn btn-primary btn-block rounded-pill">
        Tweet
      </Link>
    </div>
    </>
  );
}
export default NavigationSidebar;