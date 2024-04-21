import React, { Component } from "react";
import { InfoConsumer } from "./context";

class Info extends Component {
  render() {
    //const { id, headerTitle, headerSubTitle, headerText, img } =
    //this.props.item;

    return (
      <InfoConsumer>
        {(value) => {
          return (
            <div className="col-10 col-lg-4 mx-auto mb-5" id={value.id}>
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src={value.img}
                  alt={value.headerTitle}
                  className="card-img-top"
                />
                <div className="card-body">
                  <h3 className="card-title text-uppercase">
                    {value.headerTitle}
                  </h3>
                  <h5 className="card-title">{value.headerSubTitle}</h5>
                  <p className="card-text">{value.headerText}</p>
                </div>
              </div>
            </div>
          );
        }}
      </InfoConsumer>
    );
  }
}

export default Info;
