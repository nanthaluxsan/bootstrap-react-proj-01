import React from "react";
import { placeInfo } from "../data";
import styled from "styled-components";
import Review from "../Review";

const Detail1 = () => {
  return (
    <>
      {placeInfo.map((place) => (
        <div key={place.id}>
          <HeaderDetails
            className="container-fluid align-items-center"
            id={place.id}
          >
            <h1 className="display-1 font-weight-bold">{place.headerTitle}</h1>
            <h4 className="display-5">{place.headerSubTitle}</h4>
            <p>{place.headerText}</p>
            {/* icons */}
            <div className="container mt-5">
              <div className="row justify-content-center">
                <div className="col-2">
                  <i className="fab fa-facebook-f" />
                </div>
                <div className="col-2">
                  <i className="fab fa-twitter" />
                </div>
                <div className="col-2">
                  <i className="fab fa-google-plus" />
                </div>
                <div className="col-2">
                  <i className="fab fa-facebook-messenger" />
                </div>
                <div className="col-2">
                  <i className="fab fa-whatsapp" />
                </div>
              </div>
            </div>
          </HeaderDetails>
          {/* below */}
          <div className="container">
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  href="#aboutplace"
                  role="tab"
                  data-bs-toggle="tab"
                >
                  about
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#review"
                  role="tab"
                  data-bs-toggle="tab"
                >
                  review
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#map"
                  role="tab"
                  data-bs-toggle="tab"
                >
                  map
                </a>
              </li>
            </ul>
          </div>
          {/* tabcontent */}
          <div className="tab-content mb-5">
            <div
              id="aboutplace"
              className="tab-pane active text-center mt-5"
              role="tabpanel"
            >
              <h2 className="mb-3">{place.title}</h2>
              <p>{place.description}</p>
              <img src={place.img} alt={place.title} className="img-fluid" />
            </div>
            {/* review */}
            <div
              id="review"
              className="tab-pane text-center mt-5"
              role="tabpanel"
            >
              <Review />
            </div>
            {/* map */}
            <div id="map" className="tab-pane text-center mt-5" role="tabpanel">
              <iframe
                src={place.maps}
                title="Map"
                style={{ border: "0", height: "28.125rem", width: "100%" }}
              ></iframe>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Detail1;

const HeaderDetails = styled.header`
  background: linear-gradient(rgba(109, 109, 109), rgba(255, 255, 255));
  height: 100vh;
  text-transform: uppercase;
  color: var(--mainWhite);
  text-align: center;
  h1 {
    padding-top: 10%;
    color: var(--mainDark);
  }
  h4 {
    color: var(--mainDark);
  }
  p {
    padding-left: 10%;
    padding-right: 10%;
    margin-bottom: 10%;
    color: var(--mainDark);
  }
  i {
    font-size: 1.875rem;
    color: var(--mainDark);
  }
  i:hover {
    color: var(--mainBlue);
    cursor: pointer;
  }
  .nav-item {
    height: 18.75rem;
  }
  @media (max-width: 768px) {
    h1,
    h4 {
      color: var(--mainWhite);
    }
  }
`;
