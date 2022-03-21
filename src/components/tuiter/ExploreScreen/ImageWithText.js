import React from "react";
import starship from "../../../images/Starship-Mk1-Day.jpg";

const ImageWithText = () => {
  return(
    <div className="mt-2 mb-2">
        <div className="card bg-black" style={{width: "100%"}}>
          <img src={starship} className="card-img-top border-solid wd-card-border-color" alt="..."/>
            <div className="card-img-overlay h-100 d-flex flex-column justify-content-end">
              <h4 className="card-title wd-text-on-image-color fs-4 fw-bold">SpaceX's Starship</h4>
            </div>
        </div>
      </div>
  );
}
export default ImageWithText;