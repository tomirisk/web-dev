import React, {useState} from "react";
import {useDispatch} from "react-redux"
import {createTuit} from "../actions/tuits-actions";

const WhatsHappening = () => {
  const dispatch = useDispatch();

  const [newTuit, setNewTuit] =
  useState({tuit: 'New tuit'});

  return (
      <>
        <div className="col-1">
          <img src="https://cdn.ricochet.com/app/uploads/2021/12/ElonMusk_400x400.jpg" width="48px" height="48px" alt="" className="img-responsive rounded-circle"/>
        </div>

        <div className="col-11 fg-color-white">

          <textarea className="form-control w-75"
            onChange={(e) =>
                setNewTuit({...newTuit, tuit: e.target.value, likes: 0, dislikes: 0, logo_image: "https://cdn.ricochet.com/app/uploads/2021/12/ElonMusk_400x400.jpg"})
            }/>

          <div className="row">
            <div className="col-10">
              <i className="fa fa-image wd-margin-icon wd-blue-icon"/>
              <i className="fa fa-chart-area wd-margin-icon wd-blue-icon"/>
              <i className="fa fa-smile wd-margin-icon wd-blue-icon"/>
              <i className="fa fa-calendar wd-margin-icon wd-blue-icon"/>
            </div>

            <div className="col-2 float-right mb-2">
              <button onClick={() =>
                  createTuit(dispatch, newTuit)}
                      className="btn btn-primary float-end">
                Tuit
              </button>
            </div>

          </div>
        </div>
  </>
  );
}
export default WhatsHappening;