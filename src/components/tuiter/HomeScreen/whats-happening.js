import React, {useState} from "react";
import {useDispatch} from "react-redux"

const WhatsHappening = () => {
  const dispatch = useDispatch();

  let [whatsHappening, setWhatsHappening]
      = useState('');

  const tuitClickHandler = () => {
    dispatch({type: 'create-tuit', tuit: whatsHappening});
  }

  return (
      <>
        <div className="col-1">
          <img src="https://cdn.ricochet.com/app/uploads/2021/12/ElonMusk_400x400.jpg" width="48px" height="48px" alt="" className="img-responsive rounded-circle"/>
        </div>

        <div className="col-11 fg-color-white">
          <textarea className="wd-text-area fg-color-white" placeholder="What's happening?" value={whatsHappening} onChange={(event) =>
              setWhatsHappening(event.target.value)}>
          </textarea>
          <div className="row">
            <div className="col-10">
              <i className="fa fa-image wd-margin-icon wd-blue-icon"/>
              <i className="fa fa-chart-area wd-margin-icon wd-blue-icon"/>
              <i className="fa fa-smile wd-margin-icon wd-blue-icon"/>
              <i className="fa fa-calendar wd-margin-icon wd-blue-icon"/>
            </div>

            <div className="col-2 float-right mb-2">
              <button onClick={tuitClickHandler} className="btn btn-primary rounded-pill">
                Tweet
              </button>
            </div>

          </div>
        </div>
  </>
  );
}
export default WhatsHappening;