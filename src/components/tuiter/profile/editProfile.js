import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";

const EditProfile = () => {
  const profile = useSelector(state => state.profile);
  let [firstName, setFirstName] = useState(profile.firstName);
  let [lastName, setLastName] = useState(profile.lastName);
  let [bio, setBio] = useState(profile.bio);
  let [location, setLocation] = useState(profile.location);
  let [website, setWebsite] = useState(profile.website);
  let [dateOfBirth, setDateOfBirth] = useState(new Date(profile.dateOfBirth).toLocaleDateString("en-CA"));
  const dispatch = useDispatch();
  const saveClickHandler = () => {
    const updatedProfile = {
      firstName, lastName, bio, location, website, dateOfBirth
    }
    dispatch({type: 'save-profile', profile: updatedProfile});
  }

  return(
      <div>

        <div className="d-flex justify-content-between">
          <div className="d-flex">
            <Link to="/tuiter/profile"><i className="fas fa-remove text-white"/></Link>
            <h5 className="fw-bold">Edit Profile</h5>
          </div>
          <Link to="/tuiter/profile" className="btn btn-dark bg-white rounded-pill" onClick={saveClickHandler}>Save</Link>
        </div>

        <div><img src={profile.bannerPicture} alt="" className="img-fluid"/></div>

        <div className="d-flex justify-content-between">
          <img src={profile.profilePicture} alt="" className="img-fluid wd-avatar-image wd-profile-pic"/>
        </div>

        <div className="form-floating mt-3">
          <input value={firstName} placeholder="First Name"
                 className="form-control bg-body border-1 border-dark text-white"
                 onChange={(event) => setFirstName(event.target.value)}/>
                  <label>First Name</label>
        </div>

        <div className="form-floating mt-3">
          <input value={lastName} placeholder="Last Name"
                 className="form-control bg-body border-1 border-dark text-white"
                 onChange={(event) => setLastName(event.target.value)}/>
                  <label>Last Name</label>
        </div>

        <div className="form-floating mt-3">
        <textarea value={bio} placeholder="Bio"
                  className="form-control bg-body border-1 border-dark text-white"
                  onChange={(event) => setBio(event.target.value)}/>
                    <label>Bio</label>
        </div>

        <div className="form-floating mt-3">
          <input value={location} placeholder="Location"
                 className="form-control bg-body border-1 border-dark text-white"
                 onChange={(event) => setLocation(event.target.value)}/>
                  <label>Location</label>
        </div>

        <div className="form-floating mt-3">
          <input value={dateOfBirth} placeholder="Date of Birth"
                 className="form-control bg-body border-1 border-dark text-white" type="date"
                 onChange={(event) => setDateOfBirth(event.target.value)}/>
                  <label>Date of Birth</label>
        </div>

      </div>
  );
};

export default EditProfile;
