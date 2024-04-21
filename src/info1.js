import React from "react";
import { placeInfo } from "./data";
import { Link } from "react-router-dom";
// import Details from "./pages/Details";
import { InfoProvider } from "./context";
function Info1({ value }) {
  return (
    <InfoProvider>
      <div className="col-10 col-lg-4 mx-auto mb-5">
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={placeInfo[value].img} // Image source
            alt={placeInfo[value].headerTitle} // Alt text for accessibility
            className="card-img-top" // CSS class for styling the image within the card
          />
          <div className="card-body">
            <h3 className="card-title text-uppercase">
              {placeInfo[value].headerTitle} {/* Title */}
            </h3>
            <h5 className="card-title">
              {placeInfo[value].headerSubTitle} {/* Subtitle */}
            </h5>
            <p className="card-text">
              {placeInfo[value].headerText} {/* Text content */}
            </p>
            <Link
              to="/Details"
              className="btn btn-outline-primary text-uppercase"
            >
              more
            </Link>
          </div>
        </div>
      </div>
    </InfoProvider>
  );
}

export default Info1;
