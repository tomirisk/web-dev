import React from "react";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

const ProfileScreen = () => {
  const profile = useSelector(state => state.profile);

  return(
      <>
        <div className="d-flex align-items-center mt-2">
          <div>
            <h5 className="wd-font-bold"><i className="fa fas fa-arrow-left"/> {profile.firstName} {profile.lastName}</h5>
            <h6 className="text-secondary ms-4">{profile.tuitNumber} Tuits</h6>
          </div>
        </div>

        <div className="mt-2"><img src={profile.bannerPicture} alt="" className="img-fluid"/></div>

        <div className="d-flex justify-content-between">
          <img src={profile.profilePicture} alt="" className="img-fluid wd-avatar-image wd-profile-pic"/>
          <Link to="/tuiter/edit/profile" className="btn btn-outline-dark text-white rounded-pill h-25 m-2">Edit Profile</Link>
        </div>

        <h5 className="fw-bold m-0">{profile.firstName} {profile.lastName}</h5>
        <h6 className="mt-0 text-secondary">@{profile.handle}</h6>
        <h6 className="mt-3 text-white">{profile.bio}</h6>

        <div className="d-flex text-secondary">
          <span className="me-3"><i className="fas fa-map-marker-alt"/> {profile.location}</span>
          <span className="me-3">
          <i className="fas fa-gift"/> Born {profile.dateOfBirth}
        </span>
          <span className="me-3">
          <i className="far fa-calendar-alt"/> Joined {profile.dateJoined}
        </span>
        </div>

        <div className="d-flex mt-2">
          <div className="me-3 text-white fw-bold">{profile.followingCount} <span className="text-secondary"> Following</span></div>
          <div className="me-3 text-white fw-bold">{profile.followersCount} <span className="text-secondary"> Followers</span></div>
        </div>

      </>
  );
};

export default ProfileScreen;
